import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, User, Heart, MessageCircle, Ghost, ShieldCheck,
  Star, Brain, FlaskConical, History, X, Camera, CameraOff, Zap, Sparkles
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import confetti from 'canvas-confetti';
import { SCIENTISTS_DATA, Scientist } from '../data/scientists';

// ─── Floating AR Object ───────────────────────────────────────────────────────
const FloatingARObject: React.FC<{
  icon: string;
  x: number; y: number;
  size: number;
  delay: number;
  duration: number;
  rotateX: number;
  rotateY: number;
}> = ({ icon, x, y, size, delay, duration, rotateX, rotateY }) => (
  <motion.div
    className="absolute pointer-events-none select-none"
    style={{ left: `${x}%`, top: `${y}%`, fontSize: size, zIndex: 10 }}
    initial={{ opacity: 0, scale: 0, y: 40 }}
    animate={{
      opacity: [0, 1, 1, 0.8, 1],
      scale: [0, 1.2, 1, 1.05, 1],
      y: [40, 0, -10, 5, -8],
      rotateX: [0, rotateX, -rotateX * 0.5, rotateX * 0.3],
      rotateY: [0, rotateY, -rotateY * 0.5, rotateY * 0.3],
    }}
    transition={{ duration, delay, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
  >
    {/* Shadow/ground effect */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-black/20 rounded-full blur-sm" style={{ transform: 'translateX(-50%) scaleY(0.3) translateY(8px)' }} />
    {/* Glow ring */}
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{ background: 'radial-gradient(circle, rgba(255,175,204,0.4) 0%, transparent 70%)' }}
      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.1, 0.4] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
    />
    <span style={{ filter: 'drop-shadow(0 8px 20px rgba(255,175,204,0.8)) drop-shadow(0 0 40px rgba(200,150,255,0.6))' }}>
      {icon}
    </span>
  </motion.div>
);

// ─── AR Camera Modal ──────────────────────────────────────────────────────────
const ARCameraModal: React.FC<{ scientist: Scientist; onClose: () => void }> = ({ scientist, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [camActive, setCamActive] = useState(false);
  const [camError, setCamError] = useState(false);
  const [arReady, setArReady] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const streamRef = useRef<MediaStream | null>(null);

  // Multiple floating instances of the invention
  const arObjects = [
    { icon: scientist.summonItem.icon, x: 45, y: 25, size: 72, delay: 0,   duration: 4,   rotateX: 15, rotateY: 20  },
    { icon: scientist.summonItem.icon, x: 15, y: 50, size: 42, delay: 0.8, duration: 5.5, rotateX: -10, rotateY: 15 },
    { icon: scientist.summonItem.icon, x: 70, y: 55, size: 36, delay: 1.5, duration: 4.8, rotateX: 12, rotateY: -18 },
    { icon: scientist.summonItem.icon, x: 60, y: 15, size: 28, delay: 2,   duration: 6,   rotateX: -8, rotateY: 22  },
    { icon: scientist.summonItem.icon, x: 25, y: 20, size: 24, delay: 0.4, duration: 3.5, rotateX: 20, rotateY: -12 },
  ];

  // Particle sparkles
  const particles = Array.from({ length: 18 }, (_, i) => ({
    x: Math.random() * 90 + 5,
    y: Math.random() * 80 + 5,
    delay: i * 0.3,
    size: Math.random() * 6 + 4,
  }));

  useEffect(() => {
    let cancelled = false;
    navigator.mediaDevices?.getUserMedia({ video: { facingMode: 'environment' }, audio: false })
      .then(stream => {
        if (cancelled) { stream.getTracks().forEach(t => t.stop()); return; }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setCamActive(true);
          setTimeout(() => { if (!cancelled) setArReady(true); }, 1200);
        }
      })
      .catch(() => {
        if (!cancelled) { setCamError(true); setTimeout(() => setArReady(true), 800); }
      });
    return () => { cancelled = true; streamRef.current?.getTracks().forEach(t => t.stop()); };
  }, []);

  const handleClose = useCallback(() => {
    streamRef.current?.getTracks().forEach(t => t.stop());
    onClose();
  }, [onClose]);

  const handleTap = () => {
    setTapCount(c => c + 1);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.5 }, colors: ['#ffafcc','#cdb4db','#bde0fe'] });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10001] overflow-hidden bg-black"
      style={{ perspective: '800px' }}
    >
      {/* Camera feed */}
      <video ref={videoRef} playsInline muted autoPlay
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: camActive ? 0.92 : 0 }}
      />

      {/* Fallback: gradient world when no camera */}
      {(camError || !camActive) && (
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #16213e 40%, #0f3460 70%, #1a1a2e 100%)' }}>
          {/* Fake floor grid perspective */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{
            backgroundImage: `linear-gradient(rgba(255,175,204,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,175,204,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(300px) rotateX(60deg)',
            transformOrigin: 'bottom center',
          }}/>
          {/* Stars */}
          {particles.map((p, i) => (
            <motion.div key={i} className="absolute rounded-full bg-white"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size/2, height: p.size/2 }}
              animate={{ opacity: [0.1, 0.9, 0.1], scale: [1, 1.5, 1] }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>
      )}

      {/* Holographic scan lines overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,175,204,0.015) 3px, rgba(255,175,204,0.015) 4px)',
        zIndex: 2,
      }}/>

      {/* ── AR OBJECTS ── */}
      <AnimatePresence>
        {arReady && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ zIndex: 5, transformStyle: 'preserve-3d' }}
            onClick={handleTap}
          >
            {arObjects.map((obj, i) => (
              <FloatingARObject key={i} {...obj} />
            ))}

            {/* Sparkle particles */}
            {particles.map((p, i) => (
              <motion.div key={`spark-${i}`}
                className="absolute pointer-events-none"
                style={{ left: `${p.x}%`, top: `${p.y}%`, zIndex: 6 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 180] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: p.delay * 0.8, repeatDelay: 1 + Math.random() * 2 }}
              >
                <div style={{ width: p.size, height: p.size, background: i % 3 === 0 ? '#ffafcc' : i % 3 === 1 ? '#cdb4db' : '#bde0fe', borderRadius: '50%', filter: 'blur(1px)' }}/>
              </motion.div>
            ))}

            {/* Ground shadow plane */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full blur-2xl"
              style={{ background: 'radial-gradient(ellipse, rgba(255,175,204,0.3) 0%, transparent 70%)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HUD OVERLAY ── */}
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 p-4 flex items-start justify-between">
        <div className="flex flex-col gap-1">
          {/* Status */}
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur rounded-full px-3 py-1.5">
            {camActive
              ? <><motion.div className="w-2 h-2 rounded-full bg-[#ffafcc]" animate={{ opacity:[1,0,1] }} transition={{ duration:1, repeat:Infinity }}/><span className="text-[#ffafcc] text-[10px] font-black uppercase tracking-widest">AR Aktiv</span></>
              : <><div className="w-2 h-2 rounded-full bg-purple-400"/><span className="text-purple-300 text-[10px] font-black uppercase tracking-widest">Modalitet 3D</span></>
            }
          </div>
          <div className="text-[9px] text-white/30 uppercase tracking-widest ml-1">
            {scientist.name} · {scientist.summonItem.name}
          </div>
        </div>

        <button onClick={handleClose}
          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all">
          <X className="w-4 h-4"/>
        </button>
      </div>

      {/* Corner brackets (AR frame) */}
      <div className="absolute inset-8 z-10 pointer-events-none">
        {['top-0 left-0 border-t-2 border-l-2','top-0 right-0 border-t-2 border-r-2','bottom-0 left-0 border-b-2 border-l-2','bottom-0 right-0 border-b-2 border-r-2'].map((cls, i) => (
          <div key={i} className={`absolute w-8 h-8 border-[#ffafcc]/70 ${cls}`}/>
        ))}
      </div>

      {/* Bottom info panel */}
      <AnimatePresence>
        {arReady && (
          <motion.div
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
            className="absolute bottom-0 left-0 right-0 z-20 p-4"
          >
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-5 flex items-center gap-4">
              <div className="text-4xl shrink-0">{scientist.summonItem.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-black text-sm truncate">{scientist.summonItem.name}</p>
                <p className="text-white/50 text-xs mt-0.5 line-clamp-2 leading-relaxed">{scientist.summonItem.description}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[#ffafcc] font-black text-xs uppercase tracking-widest">Shpikësi</p>
                <p className="text-white/70 text-xs">{scientist.name}</p>
              </div>
            </div>

            {/* Tap hint */}
            <motion.p
              className="text-center text-white/40 text-[10px] uppercase tracking-widest mt-3 font-black"
              animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2, repeat: Infinity }}
            >
              {tapCount === 0 ? '✦ Trokit ekranin për efekte ✦' : `✦ ${tapCount} efekte aktivizuar ✦`}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading state */}
      <AnimatePresence>
        {!arReady && (
          <motion.div exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/80 backdrop-blur">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 rounded-full border-2 border-[#ffafcc]/20 border-t-[#ffafcc] mb-6"/>
            <p className="text-white font-black text-sm uppercase tracking-widest">Duke ngarkuar AR...</p>
            <p className="text-white/30 text-xs mt-2 uppercase tracking-widest">{camActive ? 'Kamera aktive' : 'Duke inicializuar...'}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const ScientistsSection: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedScientist, setSelectedScientist] = useState<Scientist | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAR, setShowAR] = useState(false);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; document.documentElement.style.overflow = 'unset'; };
  }, []);

  const filteredScientists = useMemo(() => {
    return SCIENTISTS_DATA.filter(s =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleOpenAR = () => {
    setIsLoading(true);
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 }, colors: ['#ffafcc','#bde0fe','#cdb4db','#ffc8dd'] });
    setTimeout(() => { setIsLoading(false); setShowAR(true); }, 1400);
  };

  return (
    <div className="h-full flex flex-col bg-[#fcf9ff] text-[#4a4e69] relative overflow-hidden">
      <div className="p-4 md:p-8 flex items-center justify-between shrink-0 relative z-[1000] bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <button onClick={selectedScientist ? () => setSelectedScientist(null) : onBack}
          className="flex items-center gap-4 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ffafcc] transition-colors">
          <i className="fas fa-arrow-left"></i> {selectedScientist ? 'Kthehu te Lista' : 'Kthehu mbrapa'}
        </button>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-xl bg-[#ffafcc] flex items-center justify-center text-white shadow-lg">
            <i className="fas fa-user-tie text-xs"></i>
          </div>
          <h2 className="text-xl font-black tracking-tighter">Arkiva e Shkencëtarëve</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-10 pt-4 custom-scrollbar">
        <AnimatePresence mode="wait">
          {!selectedScientist ? (
            <motion.div key="list" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }} className="max-w-6xl mx-auto py-8">
              <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-slate-800">Mendjet Brilante</h2>
                <p className="text-slate-400 font-medium max-w-2xl mx-auto uppercase tracking-widest text-xs">
                  Eksploro botën e zbulimeve përmes profileve interaktive të fizikantëve më të mëdhenj
                </p>
              </div>
              <div className="relative max-w-xl mx-auto mb-16">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5"/>
                <input type="text" placeholder="Kërko shkencëtarin me emër ose zbulim..."
                  className="w-full pl-16 pr-6 py-5 bg-white rounded-3xl shadow-sm border border-slate-100 focus:ring-4 focus:ring-[#ffafcc]/10 focus:border-[#ffafcc] transition-all font-medium text-lg"
                  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredScientists.map((s) => (
                  <motion.div key={s.id} layoutId={`scientist-${s.id}`} onClick={() => setSelectedScientist(s)}
                    whileHover={{ y:-8 }}
                    className="group bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-slate-50 relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#ffafcc]/10 to-transparent group-hover:h-full transition-all duration-700"/>
                    <div className="relative z-10">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 bg-slate-100">
                        <img src={s.image || undefined} alt={s.name} className="w-full h-full object-cover" referrerPolicy="no-referrer"
                          onError={(e) => { e.currentTarget.onerror=null; e.currentTarget.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=ffafcc&color=fff&size=200`; }}
                        />
                      </div>
                      <span className="px-4 py-1.5 bg-[#f8fafc] text-[#ffafcc] rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">{s.tag}</span>
                      <h3 className="text-3xl font-black text-slate-800 tracking-tighter mb-4">{s.name}</h3>
                      <p className="text-slate-400 text-sm font-medium line-clamp-2 italic px-4">"{s.vibe}"</p>
                    </div>
                    <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-[#ffafcc] group-hover:text-white transition-all">
                      <User className="w-5 h-5"/>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="profile" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="max-w-6xl mx-auto py-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                {/* LEFT */}
                <div className="lg:col-span-5 bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 flex flex-col items-center text-center relative overflow-hidden shrink-0 h-fit lg:sticky lg:top-8">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ffafcc]/10 rounded-full blur-3xl"/>
                  <div className="w-48 h-48 rounded-[3rem] border-8 border-white shadow-2xl overflow-hidden mb-8 bg-slate-100">
                    <img src={selectedScientist.image || undefined} alt={selectedScientist.name} className="w-full h-full object-cover" referrerPolicy="no-referrer"
                      onError={(e) => { e.currentTarget.onerror=null; e.currentTarget.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(selectedScientist.name)}&background=cdb4db&color=fff&size=200`; }}
                    />
                  </div>
                  <h2 className="text-4xl font-black text-slate-800 tracking-tighter mb-2">{selectedScientist.name}</h2>
                  <div className="flex items-center gap-2 text-[#ffafcc] font-bold text-sm uppercase tracking-widest mb-8">
                    <Star className="w-4 h-4 fill-current"/> HERO I FIZIKËS
                  </div>
                  <div className="w-full bg-[#f8fafc] p-6 rounded-3xl border border-slate-100 mb-8 relative">
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-white border border-slate-100 rounded-full text-[8px] font-black uppercase tracking-widest text-slate-400">Statusi Aktual</div>
                    <p className="text-slate-600 font-medium italic">"{selectedScientist.vibe}"</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full mb-6">
                    <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center gap-2">
                      <Brain className="w-5 h-5 text-indigo-400"/>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Niveli IQ</span>
                      <span className="font-black text-xl">Brilant+</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center gap-2">
                      <FlaskConical className="w-5 h-5 text-emerald-400"/>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tipi</span>
                      <span className="font-black text-xl text-slate-800">{selectedScientist.tag}</span>
                    </div>
                  </div>

                  {/* AR preview teaser */}
                  <div className="w-full rounded-2xl overflow-hidden mb-4 relative cursor-pointer group" onClick={handleOpenAR}
                    style={{ background: 'linear-gradient(135deg, #1a0a2e, #0f3460)' }}>
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage:`linear-gradient(rgba(255,175,204,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,175,204,0.4) 1px,transparent 1px)`,
                      backgroundSize:'20px 20px'
                    }}/>
                    <div className="relative p-5 flex items-center gap-4">
                      <motion.div animate={{ y:[0,-6,0], rotate:[-5,5,-5] }} transition={{ duration:3, repeat:Infinity }}
                        className="text-5xl shrink-0 filter drop-shadow-[0_0_20px_rgba(255,175,204,0.9)]">
                        {selectedScientist.summonItem.icon}
                      </motion.div>
                      <div className="text-left">
                        <p className="text-[9px] text-[#ffafcc]/60 uppercase tracking-widest">Pamje paraprake</p>
                        <p className="text-white font-black text-sm">{selectedScientist.summonItem.name}</p>
                        <p className="text-slate-400 text-xs mt-0.5 line-clamp-1">{selectedScientist.summonItem.description}</p>
                      </div>
                      {/* Sparkle corners */}
                      {['top-2 right-2','top-2 left-2','bottom-2 right-2'].map((pos,i) => (
                        <motion.div key={i} className={`absolute ${pos} w-1.5 h-1.5 rounded-full bg-[#ffafcc]`}
                          animate={{ opacity:[0,1,0], scale:[0,1,0] }}
                          transition={{ duration:1.5, repeat:Infinity, delay:i*0.4 }}/>
                      ))}
                    </div>
                  </div>

                  {/* THE AR BUTTON */}
                  <button onClick={handleOpenAR}
                    className="w-full py-5 bg-gradient-to-r from-[#cdb4db] to-[#ffafcc] text-white rounded-2xl font-black text-sm uppercase tracking-[0.15em] shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 relative overflow-hidden group">
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform"/>
                    Shiko në Botën Reale
                    <Camera className="w-4 h-4 opacity-70"/>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"/>
                  </button>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-7 space-y-8 flex flex-col">
                  <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-2xl font-black tracking-tight text-slate-800">Analiza e Aftësive</h3>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Performanca Shkencore 📊</p>
                      </div>
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300">
                        <History className="w-5 h-5"/>
                      </div>
                    </div>
                    <div className="min-h-[400px] flex-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={selectedScientist.stats}>
                          <PolarGrid stroke="#f1f5f9"/>
                          <PolarAngleAxis dataKey="subject" tick={{ fill:'#94a3b8', fontSize:10, fontWeight:800 }}/>
                          <PolarRadiusAxis angle={30} domain={[0,100]} tick={false}/>
                          <Radar name={selectedScientist.name} dataKey="A" stroke="#ffafcc" fill="#ffafcc" fillOpacity={0.5}/>
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="pt-8 border-t border-slate-100 mt-auto">
                      <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Biografia Shkencore</h4>
                      <div className="text-slate-500 text-lg leading-relaxed font-semibold pr-4">{selectedScientist.bio}</div>
                    </div>
                  </div>
                </div>
              </div>

              {selectedScientist.posts.length > 0 && (
                <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 mb-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-400">
                      <History className="w-7 h-7"/>
                    </div>
                    <div>
                      <h3 className="text-3xl font-black tracking-tighter">Muri i Zbulimeve</h3>
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">LAJMET E FUNDIT NGA E KALUARA</p>
                    </div>
                  </div>
                  <div className="space-y-8">
                    {selectedScientist.posts.map((post) => (
                      <div key={post.id} className="bg-[#fcf9ff] p-8 rounded-[2.5rem] border border-slate-100">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                            <img src={post.authorImage || undefined} alt={post.author} className="w-full h-full object-cover"/>
                          </div>
                          <div>
                            <h4 className="font-black text-slate-800 text-sm">{post.author} <ShieldCheck className="w-3 h-3 text-blue-400 inline mb-1"/></h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase">{post.date}</p>
                          </div>
                        </div>
                        <p className="text-slate-700 text-lg font-medium leading-relaxed mb-6">{post.content}</p>
                        <div className="flex items-center gap-8 pt-6 border-t border-slate-100">
                          <div className="flex items-center gap-2 text-slate-400 font-black text-xs"><Heart className="w-5 h-5"/> {post.likes}</div>
                          <div className="flex items-center gap-2 text-slate-400 font-black text-xs"><MessageCircle className="w-5 h-5"/> {post.comments.length}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Loading */}
      <AnimatePresence>
        {isLoading && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8">
            <motion.div animate={{ rotate:360 }} transition={{ duration:1.2, repeat:Infinity, ease:'linear' }}
              className="w-20 h-20 rounded-full border-4 border-white/10 border-t-[#ffafcc] mb-8"/>
            <h3 className="text-3xl font-black text-white mb-3 tracking-tighter">Duke hapur kamerën...</h3>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-black animate-pulse">Lejo kamerën për AR të plotë</p>
            <div className="mt-10 w-56 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div initial={{ width:0 }} animate={{ width:'100%' }} transition={{ duration:1.2 }} className="h-full bg-[#ffafcc]"/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AR Modal */}
      <AnimatePresence>
        {showAR && selectedScientist && (
          <ARCameraModal scientist={selectedScientist} onClose={() => setShowAR(false)}/>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        .recharts-polar-grid-concentric-circle { stroke: #f1f5f9 !important; }
        .recharts-polar-grid-angle-line { stroke: #f1f5f9 !important; }
      `}}/>
    </div>
  );
};

export default ScientistsSection;
