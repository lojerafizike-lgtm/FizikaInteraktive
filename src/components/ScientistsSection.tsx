import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, User, Heart, MessageCircle, ShieldCheck,
  Star, Brain, FlaskConical, History
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SCIENTISTS_DATA, Scientist } from '../data/scientists';

// ─── Main Component ───────────────────────────────────────────────────────────
const ScientistsSection: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedScientist, setSelectedScientist] = useState<Scientist | null>(null);
  const [chartMounted, setChartMounted] = useState(false);

  useEffect(() => {
    if (selectedScientist) {
      const timer = setTimeout(() => setChartMounted(true), 150);
      return () => {
        clearTimeout(timer);
        setChartMounted(false);
      };
    }
  }, [selectedScientist]);

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
                    <div className="relative w-full h-[320px] md:h-[400px] min-w-0">
                      {chartMounted && (
                        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={selectedScientist.stats}>
                            <PolarGrid stroke="#f1f5f9"/>
                            <PolarAngleAxis dataKey="subject" tick={{ fill:'#94a3b8', fontSize:10, fontWeight:800 }}/>
                            <PolarRadiusAxis angle={30} domain={[0,100]} tick={false}/>
                            <Radar name={selectedScientist.name} dataKey="A" stroke="#ffafcc" fill="#ffafcc" fillOpacity={0.5}/>
                          </RadarChart>
                        </ResponsiveContainer>
                      )}
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
