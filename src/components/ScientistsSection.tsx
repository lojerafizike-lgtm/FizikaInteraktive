import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, User, Heart, MessageCircle, Ghost, ShieldCheck,
  Star, Brain, FlaskConical, History, X, Camera, CameraOff, Scan, Zap
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import confetti from 'canvas-confetti';
import { SCIENTISTS_DATA, Scientist } from '../data/scientists';

// ─── AR Modal ────────────────────────────────────────────────────────────────
const ARModal: React.FC<{ scientist: Scientist; onClose: () => void }> = ({ scientist, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [camActive, setCamActive] = useState(false);
  const [camError, setCamError] = useState(false);
  const [scanPhase, setScanPhase] = useState<'scanning' | 'locked' | 'speaking'>('scanning');
  const [speechLine, setSpeechLine] = useState(0);
  const streamRef = useRef<MediaStream | null>(null);

  const speechLines = [
    `Përshëndetje! Unë jam ${scientist.name}.`,
    `Shikoni shpikjen time: ${scientist.summonItem.name}!`,
    scientist.summonItem.description,
    `Përdoreni fizikën për të ndryshuar botën!`,
  ];

  useEffect(() => {
    let cancelled = false;
    navigator.mediaDevices?.getUserMedia({ video: { facingMode: 'environment' } })
      .then(stream => {
        if (cancelled) { stream.getTracks().forEach(t => t.stop()); return; }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setCamActive(true);
        }
      })
      .catch(() => { if (!cancelled) setCamError(true); });
    return () => { cancelled = true; streamRef.current?.getTracks().forEach(t => t.stop()); };
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setScanPhase('locked'), 2200);
    const t2 = setTimeout(() => setScanPhase('speaking'), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (scanPhase !== 'speaking') return;
    const iv = setInterval(() => setSpeechLine(l => (l + 1) % speechLines.length), 3000);
    return () => clearInterval(iv);
  }, [scanPhase]);

  const handleClose = useCallback(() => {
    streamRef.current?.getTracks().forEach(t => t.stop());
    onClose();
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10001] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.97)' }}
    >
      <video ref={videoRef} playsInline muted
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        style={{ display: camActive ? 'block' : 'none' }}
      />

      {(camError || !camActive) && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 90 }).map((_, i) => (
            <motion.div key={i} className="absolute rounded-full bg-white"
              style={{ width: Math.random()*2+1, height: Math.random()*2+1, left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, opacity: Math.random()*0.5+0.1 }}
              animate={{ opacity: [0.1, 0.8, 0.1] }}
              transition={{ duration: 2+Math.random()*3, repeat: Infinity, delay: Math.random()*3 }}
            />
          ))}
        </div>
      )}

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,175,204,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,175,204,0.04) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Corner brackets */}
      {['top-6 left-6 border-t-2 border-l-2','top-6 right-6 border-t-2 border-r-2','bottom-6 left-6 border-b-2 border-l-2','bottom-6 right-6 border-b-2 border-r-2'].map((cls, i) => (
        <div key={i} className={`absolute w-10 h-10 border-[#ffafcc]/60 ${cls}`} />
      ))}

      {/* HUD top */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
        {camActive
          ? <><Camera className="w-3 h-3 text-[#ffafcc]"/><span className="text-[#ffafcc]">Kamera Aktive</span></>
          : <><CameraOff className="w-3 h-3 text-slate-500"/><span className="text-slate-500">Modalitet Holografik</span></>}
      </div>
      <div className="absolute top-6 right-16 z-20 text-right text-[9px] font-black text-[#ffafcc]/40 uppercase tracking-widest leading-relaxed pointer-events-none">
        <div>SCI//AR v2.4</div>
        <div className="flex items-center gap-1 justify-end">
          <motion.div animate={{ opacity:[1,0,1] }} transition={{ duration:1, repeat:Infinity }} className="w-1.5 h-1.5 rounded-full bg-[#ffafcc]"/>
          LIVE
        </div>
      </div>

      <button onClick={handleClose} className="absolute top-6 right-6 z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all">
        <X className="w-4 h-4"/>
      </button>

      {/* CENTER */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-6 text-center">

        <AnimatePresence>
          {scanPhase === 'scanning' && (
            <motion.div key="scan" initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:1.1 }} className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-8">
                {[0,1,2].map(i => (
                  <motion.div key={i} className="absolute rounded-full border border-[#ffafcc]/30"
                    style={{ inset: i*16 }}
                    animate={{ rotate: i%2===0 ? 360 : -360 }}
                    transition={{ duration: 3+i, repeat:Infinity, ease:'linear' }}
                  />
                ))}
                <motion.div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ffafcc] to-transparent"
                  animate={{ top:['10%','90%','10%'] }} transition={{ duration:1.8, repeat:Infinity, ease:'easeInOut' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Scan className="w-10 h-10 text-[#ffafcc]"/>
                </div>
              </div>
              <p className="text-white font-black text-lg uppercase tracking-[0.2em]">Duke Skanuar...</p>
              <p className="text-[#ffafcc]/60 text-xs uppercase tracking-widest mt-2">Identifikim i shpikjes</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {scanPhase === 'locked' && (
            <motion.div key="locked" initial={{ opacity:0, scale:0.6 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }} transition={{ type:'spring', stiffness:300, damping:20 }} className="flex flex-col items-center">
              <motion.div animate={{ boxShadow:['0 0 0px #ffafcc','0 0 60px #ffafcc88','0 0 0px #ffafcc'] }} transition={{ duration:0.8, repeat:2 }} className="text-8xl mb-6">
                {scientist.summonItem.icon}
              </motion.div>
              <motion.div initial={{ width:0 }} animate={{ width:'100%' }} className="h-0.5 bg-[#ffafcc] mb-4 max-w-xs"/>
              <p className="text-[#ffafcc] font-black text-xl uppercase tracking-[0.3em]">IDENTIFIKUAR!</p>
              <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">{scientist.summonItem.name}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {scanPhase === 'speaking' && (
            <motion.div key="speaking" initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} className="flex flex-col items-center w-full">
              <div className="relative mb-6">
                <motion.div animate={{ y:[0,-14,0], rotate:[0,3,-3,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
                  className="text-[7rem] leading-none filter drop-shadow-[0_0_30px_rgba(255,175,204,0.8)]">
                  {scientist.summonItem.icon}
                </motion.div>
                {[80,110,140].map((size, i) => (
                  <motion.div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ffafcc]/20"
                    style={{ width:size, height:size }}
                    animate={{ scale:[1,1.15,1], opacity:[0.3,0.05,0.3] }}
                    transition={{ duration:2+i*0.5, repeat:Infinity, delay:i*0.3 }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#ffafcc]/50 shrink-0">
                  <img src={scientist.image} alt={scientist.name} className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(scientist.name)}&background=ffafcc&color=fff&size=80`; }}
                  />
                </div>
                <div className="text-left">
                  <p className="text-white font-black text-sm">{scientist.name}</p>
                  <p className="text-[#ffafcc]/60 text-[10px] uppercase tracking-widest">{scientist.tag}</p>
                </div>
                <Zap className="w-4 h-4 text-[#ffafcc] ml-1"/>
              </div>

              <motion.div key={speechLine} initial={{ opacity:0, y:8, scale:0.97 }} animate={{ opacity:1, y:0, scale:1 }} exit={{ opacity:0 }}
                className="bg-white/10 backdrop-blur border border-[#ffafcc]/30 rounded-2xl px-6 py-4 max-w-sm w-full mb-6">
                <p className="text-white font-medium text-sm leading-relaxed italic">"{speechLines[speechLine]}"</p>
                <div className="flex gap-1.5 mt-3 justify-center">
                  {speechLines.map((_,i) => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i===speechLine ? 'bg-[#ffafcc] scale-125' : 'bg-white/20'}`}/>
                  ))}
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-3 w-full max-w-xs mb-6">
                <div className="bg-white/5 border border-[#ffafcc]/20 rounded-xl p-3 text-center">
                  <p className="text-[9px] text-[#ffafcc]/50 uppercase tracking-widest mb-1">Shpikja</p>
                  <p className="text-white font-black text-xs">{scientist.summonItem.name}</p>
                </div>
                <div className="bg-white/5 border border-[#ffafcc]/20 rounded-xl p-3 text-center">
                  <p className="text-[9px] text-[#ffafcc]/50 uppercase tracking-widest mb-1">Fusha</p>
                  <p className="text-white font-black text-xs">{scientist.tag}</p>
                </div>
              </div>

              <button onClick={handleClose} className="px-8 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all backdrop-blur">
                Mbyll AR
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-0 right-0 px-8 flex items-center justify-between text-[9px] font-black text-white/20 uppercase tracking-widest pointer-events-none">
        <span>AR//FIZIKA INTERAKTIVE</span>
        <span>{scientist.name.toUpperCase()}</span>
        <span>SHPIKJET</span>
      </div>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const ScientistsSection: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedScientist, setSelectedScientist] = useState<Scientist | null>(null);
  const [isSummoning, setIsSummoning] = useState(false);
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

  const handleSummon = () => {
    setIsSummoning(true);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#ffafcc','#bde0fe','#cdb4db','#ffc8dd'] });
    setTimeout(() => { setIsSummoning(false); setShowAR(true); }, 2000);
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

                  {/* AR Preview teaser */}
                  <div className="w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 mb-4 border border-slate-700 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage:`linear-gradient(rgba(255,175,204,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,175,204,0.3) 1px,transparent 1px)`,
                      backgroundSize:'20px 20px'
                    }}/>
                    <div className="relative flex items-center gap-4">
                      <motion.div animate={{ y:[0,-5,0] }} transition={{ duration:2, repeat:Infinity }} className="text-4xl">
                        {selectedScientist.summonItem.icon}
                      </motion.div>
                      <div className="text-left">
                        <p className="text-[9px] text-[#ffafcc]/60 uppercase tracking-widest">Shpikja AR</p>
                        <p className="text-white font-black text-sm">{selectedScientist.summonItem.name}</p>
                        <p className="text-slate-400 text-xs mt-0.5 line-clamp-1">{selectedScientist.summonItem.description}</p>
                      </div>
                    </div>
                  </div>

                  <button onClick={handleSummon}
                    className="w-full mt-2 py-5 bg-gradient-to-r from-[#cdb4db] to-[#ffafcc] text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 relative overflow-hidden group">
                    <Ghost className="w-5 h-5 group-hover:animate-bounce"/> THIRR FANTAZMËN (AR)
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"/>
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

      {/* Loading overlay */}
      <AnimatePresence>
        {isSummoning && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8">
            <motion.div animate={{ scale:[1,1.2,1], rotate:[0,10,-10,0], filter:["drop-shadow(0 0 0px #ffafcc)","drop-shadow(0 0 40px #ffafcc)","drop-shadow(0 0 0px #ffafcc)"] }}
              transition={{ repeat:Infinity, duration:1 }} className="text-8xl mb-8">🌌</motion.div>
            <h3 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase">Duke aktivizuar AR...</h3>
            <p className="text-slate-400 text-lg uppercase tracking-widest font-black animate-pulse">Duke u lidhur me dimensionin e shkencës...</p>
            <div className="mt-12 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div initial={{ width:0 }} animate={{ width:'100%' }} transition={{ duration:1.8 }} className="h-full bg-[#ffafcc]"/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AR Modal */}
      <AnimatePresence>
        {showAR && selectedScientist && (
          <ARModal scientist={selectedScientist} onClose={() => setShowAR(false)}/>
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
