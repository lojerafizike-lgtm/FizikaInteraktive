import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  User, 
  Heart, 
  MessageCircle, 
  Ghost,
  ShieldCheck,
  Star,
  Brain,
  FlaskConical,
  History,
  X
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';
import confetti from 'canvas-confetti';
import { SCIENTISTS_DATA, Scientist } from '../data/scientists';

const ScientistsSection: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedScientist, setSelectedScientist] = useState<Scientist | null>(null);
  const [isSummoning, setIsSummoning] = useState(false);
  const [showSummonDetail, setShowSummonDetail] = useState(false);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, []);

  const filteredScientists = useMemo(() => {
    return SCIENTISTS_DATA.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      s.tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSummon = () => {
    setIsSummoning(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffafcc', '#bde0fe', '#cdb4db', '#ffc8dd']
    });

    setTimeout(() => {
      setIsSummoning(false);
      setShowSummonDetail(true);
    }, 2000);
  };

  return (
    <div className="h-full flex flex-col bg-[#fcf9ff] text-[#4a4e69] relative overflow-hidden">
      {/* Header with Navigation */}
      <div className="p-4 md:p-8 flex items-center justify-between shrink-0 relative z-[1000] bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <button 
          onClick={selectedScientist ? () => setSelectedScientist(null) : onBack}
          className="flex items-center gap-4 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ffafcc] transition-colors"
        >
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
            <motion.div 
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto py-8"
            >
              <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-slate-800">Mendjet Brilante</h2>
                <p className="text-slate-400 font-medium max-w-2xl mx-auto uppercase tracking-widest text-xs">
                  Eksploro botën e zbulimeve përmes profileve interaktive të fizikantëve më të mëdhenj
                </p>
              </div>

              <div className="relative max-w-xl mx-auto mb-16">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Kërko shkencëtarin me emër ose zbulim..."
                  className="w-full pl-16 pr-6 py-5 bg-white rounded-3xl shadow-sm border border-slate-100 focus:ring-4 focus:ring-[#ffafcc]/10 focus:border-[#ffafcc] transition-all font-medium text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredScientists.map((s) => (
                  <motion.div 
                    key={s.id}
                    layoutId={`scientist-${s.id}`}
                    onClick={() => setSelectedScientist(s)}
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-slate-50 relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center"
                  >
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#ffafcc]/10 to-transparent group-hover:h-full transition-all duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 bg-slate-100 flex items-center justify-center">
                        <img 
                          src={s.image || undefined} 
                          alt={s.name} 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer" 
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=ffafcc&color=fff&size=200`;
                          }}
                        />
                      </div>
                      <span className="px-4 py-1.5 bg-[#f8fafc] text-[#ffafcc] rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">{s.tag}</span>
                      <h3 className="text-3xl font-black text-slate-800 tracking-tighter mb-4">{s.name}</h3>
                      <p className="text-slate-400 text-sm font-medium line-clamp-2 italic px-4">"{s.vibe}"</p>
                    </div>

                    <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-[#ffafcc] group-hover:text-white transition-all">
                      <User className="w-5 h-5" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-6xl mx-auto py-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                {/* LEFT: Character Card */}
                <div className="lg:col-span-5 bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 flex flex-col items-center text-center relative overflow-hidden shrink-0 h-fit lg:sticky lg:top-8">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ffafcc]/10 rounded-full blur-3xl"></div>
                  
                  <div className="w-48 h-48 rounded-[3rem] border-8 border-white shadow-2xl overflow-hidden mb-8 relative group bg-slate-100 flex items-center justify-center">
                     <img 
                       src={selectedScientist.image || undefined} 
                       alt={selectedScientist.name} 
                       className="w-full h-full object-cover" 
                       referrerPolicy="no-referrer" 
                       onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedScientist.name)}&background=cdb4db&color=fff&size=200`;
                        }}
                     />
                  </div>

                  <h2 className="text-4xl font-black text-slate-800 tracking-tighter mb-2">{selectedScientist.name}</h2>
                  <div className="flex items-center gap-2 text-[#ffafcc] font-bold text-sm uppercase tracking-widest mb-8">
                    <Star className="w-4 h-4 fill-current" /> HERO I FIZIKËS
                  </div>

                  {/* VIBE STATUS */}
                  <div className="w-full bg-[#f8fafc] p-6 rounded-3xl border border-slate-100 mb-10 relative">
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-white border border-slate-100 rounded-full text-[8px] font-black uppercase tracking-widest text-slate-400">Statusi Aktual</div>
                    <p className="text-slate-600 font-medium italic">"{selectedScientist.vibe}"</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center gap-2">
                       <Brain className="w-5 h-5 text-indigo-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Niveli IQ</span>
                       <span className="font-black text-xl">Brilant+</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center gap-2">
                       <FlaskConical className="w-5 h-5 text-emerald-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tipi</span>
                       <span className="font-black text-xl text-slate-800">{selectedScientist.tag}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleSummon()}
                    className="w-full mt-10 py-5 bg-gradient-to-r from-[#cdb4db] to-[#ffafcc] text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
                  >
                    <Ghost className="w-5 h-5 group-hover:animate-bounce" /> THIRR FANTAZMËN (AR)
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </button>
                </div>

                {/* RIGHT: Stats & Analysis */}
                <div className="lg:col-span-7 space-y-8 flex flex-col">
                  <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-2xl font-black tracking-tight text-slate-800">Analiza e Aftësive</h3>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Performanca Shkencore 📊</p>
                      </div>
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300">
                        <History className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="min-h-[400px] flex-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={selectedScientist.stats}>
                          <PolarGrid stroke="#f1f5f9" />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }} />
                          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                          <Radar
                            name={selectedScientist.name}
                            dataKey="A"
                            stroke="#ffafcc"
                            fill="#ffafcc"
                            fillOpacity={0.5}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="pt-8 border-t border-slate-100 mt-auto">
                       <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Biografia Shkencore</h4>
                       <div className="text-slate-500 text-lg leading-relaxed font-semibold pr-4">
                         {selectedScientist.bio}
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* THE FEED */}
              {selectedScientist.posts.length > 0 && (
                <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 mb-10">
                   <div className="flex items-center gap-4 mb-10">
                     <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-400">
                        <History className="w-7 h-7" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-black tracking-tighter">Muri i Zbulimeve</h3>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">LAJMET E FUNDIT NGA E KALUARA</p>
                     </div>
                   </div>

                   <div className="space-y-8">
                     {selectedScientist.posts.map((post) => (
                       <div key={post.id} className="bg-[#fcf9ff] p-8 rounded-[2.5rem] border border-slate-100">
                         <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                                  <img src={post.authorImage || undefined} alt={post.author} className="w-full h-full object-cover" />
                               </div>
                               <div>
                                  <h4 className="font-black text-slate-800 text-sm">{post.author} <ShieldCheck className="w-3 h-3 text-blue-400 inline mb-1" /></h4>
                                  <p className="text-[10px] font-bold text-slate-400 uppercase">{post.date}</p>
                               </div>
                            </div>
                         </div>
                         <p className="text-slate-700 text-lg font-medium leading-relaxed mb-6">
                            {post.content}
                         </p>
                         <div className="flex items-center gap-8 pt-6 border-t border-slate-100">
                            <div className="flex items-center gap-2 text-slate-400 font-black text-xs">
                               <Heart className="w-5 h-5" /> {post.likes}
                            </div>
                            <div className="flex items-center gap-2 text-slate-400 font-black text-xs">
                               <MessageCircle className="w-5 h-5" /> {post.comments.length}
                            </div>
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

      {/* SUMMON OVERLAY */}
      <AnimatePresence>
        {isSummoning && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
                filter: ["drop-shadow(0 0 0px #ffafcc)", "drop-shadow(0 0 40px #ffafcc)", "drop-shadow(0 0 0px #ffafcc)"]
              }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-8xl mb-8"
            >
              🌌
            </motion.div>
            <h3 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase">Duke thirrur "Pocket Ghost"</h3>
            <p className="text-slate-400 text-lg uppercase tracking-widest font-black animate-pulse">Duke u lidhur me dimensionin e shkencës...</p>
            
            <div className="mt-12 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '100%' }}
                 transition={{ duration: 1.8 }}
                 className="h-full bg-[#ffafcc]"
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUMMON DETAIL MODAL */}
      <AnimatePresence>
        {showSummonDetail && selectedScientist && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] bg-black/60 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setShowSummonDetail(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[3rem] p-10 max-w-md w-full shadow-2xl relative overflow-hidden text-center border-t-8 border-[#ffafcc]"
            >
              <button 
                onClick={() => setShowSummonDetail(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`w-32 h-32 bg-gradient-to-br ${selectedScientist.summonItem.color} rounded-[2.5rem] flex items-center justify-center text-6xl mx-auto mb-8 shadow-2xl animate-float`}>
                {selectedScientist.summonItem.icon}
              </div>

              <h3 className="text-3xl font-black text-slate-800 mb-4 tracking-tighter">{selectedScientist.summonItem.name}</h3>
              <p className="text-slate-500 font-medium mb-8">
                {selectedScientist.summonItem.description}
              </p>

              <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-200">
                <p className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-4 uppercase flex items-center justify-center gap-2">
                  <Ghost className="w-3 h-3" /> Mesazh i Regjistruar (AR)
                </p>
                <p className="text-slate-700 italic font-medium leading-relaxed">
                  "Përshëndetje nxënës! Unë jam {selectedScientist.name}. Kjo pajisje që shihni është një nga kontributet e mia më të rëndësishme. Përdoreni për të eksploruar misteret e universit!"
                </p>
              </div>

              <button 
                onClick={() => setShowSummonDetail(false)}
                className="w-full mt-10 py-4 bg-slate-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest"
              >
                MBYLL PROJEKSIONIN
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .recharts-polar-grid-concentric-circle {
          stroke: #f1f5f9 !important;
        }
        .recharts-polar-grid-angle-line {
          stroke: #f1f5f9 !important;
        }
        .animate-float {
            animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
      `}} />
    </div>
  );
};

export default ScientistsSection;
