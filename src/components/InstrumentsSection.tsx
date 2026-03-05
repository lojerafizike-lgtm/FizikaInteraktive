import React, { useState, useMemo } from 'react';
import { instrumentsData, buildSim } from '../instrumentsData';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Search, Filter } from 'lucide-react';

interface InstrumentsSectionProps {
  onBack: () => void;
}

const InstrumentsSection: React.FC<InstrumentsSectionProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Të Gjitha');
  const [fullscreenSim, setFullscreenSim] = useState<{ type: string; name: string } | null>(null);

  React.useEffect(() => {
    if (fullscreenSim) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [fullscreenSim]);

  const categories = useMemo(() => {
    const cats = new Set(instrumentsData.map(inst => inst.cat));
    return ['Të Gjitha', ...Array.from(cats)];
  }, []);

  const filteredInstruments = useMemo(() => {
    return instrumentsData.filter(inst => {
      const matchesSearch = inst.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           inst.instrument.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Të Gjitha' || inst.cat === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleFullscreen = (type: string, name: string) => {
    setFullscreenSim({ type, name });
  };

  const closeFullscreen = () => {
    setFullscreenSim(null);
  };

  return (
    <div className="animate__animated animate__fadeIn">
      {/* Header & Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <button 
            onClick={onBack}
            className="mb-6 flex items-center gap-3 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ffafcc] transition-colors group"
          >
            <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> Kthehu te Fushat
          </button>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-800 leading-none">
            Mjetet <span className="text-[#ffafcc]">Matëse</span>
          </h2>
          <p className="text-slate-400 font-bold mt-4 uppercase tracking-[0.2em] text-xs">Eksploro instrumentet shkencore të fizikës</p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative group flex-1 sm:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-[#ffafcc] transition-colors" />
            <input 
              type="text"
              placeholder="Kërko mjetin..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border-2 border-slate-100 focus:border-[#ffafcc] outline-none font-bold text-slate-600 transition-all shadow-sm"
            />
          </div>
          <div className="relative group">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 pointer-events-none" />
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-12 pr-10 py-4 bg-white rounded-2xl border-2 border-slate-100 focus:border-[#ffafcc] outline-none font-bold text-slate-600 transition-all shadow-sm cursor-pointer w-full"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Instruments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInstruments.map((inst, idx) => (
          <motion.div 
            key={`${inst.name}-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white rounded-[2.5rem] p-8 shadow-xl border-2 border-slate-50 flex flex-col group hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:rotate-12 transition-transform duration-500" style={{ background: `linear-gradient(135deg, ${inst.color}, #ffffff)`, color: '#4a4e69' }}>
                  {inst.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">{inst.name}</h3>
                  <span className="text-[10px] font-black text-[#ffafcc] uppercase tracking-widest">{inst.cat}</span>
                </div>
              </div>
            </div>

            {/* Simulation Preview */}
            <div className="relative mb-8 aspect-video bg-slate-50 rounded-3xl border-2 border-slate-100 overflow-hidden flex items-center justify-center p-4 group-hover:border-[#ffafcc]/30 transition-colors">
              <div 
                className="w-full h-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-700"
                dangerouslySetInnerHTML={{ __html: buildSim(inst.simType) }}
              />
              <button 
                onClick={() => toggleFullscreen(inst.simType, inst.instrument)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-[#ffafcc] hover:scale-110 transition-all shadow-md opacity-0 group-hover:opacity-100"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                  <i className="fas fa-tools text-[#ffafcc]"></i>
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Mjeti Matës</p>
                  <p className="font-bold text-slate-700 text-sm">{inst.instrument}</p>
                </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                {inst.desc}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="bg-[#f8fafc] p-3 rounded-xl border border-slate-50">
                  <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Simboli</p>
                  <p className="font-black text-slate-700 font-mono">{inst.sym}</p>
                </div>
                <div className="bg-[#f8fafc] p-3 rounded-xl border border-slate-50">
                  <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Njësia SI</p>
                  <p className="font-black text-slate-700">{inst.unit}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredInstruments.length === 0 && (
        <div className="py-32 text-center">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-slate-300" />
          </div>
          <h3 className="text-2xl font-black text-slate-400">Nuk u gjet asnjë mjet</h3>
          <p className="text-slate-300 font-bold mt-2">Provo një kërkim tjetër ose ndrysho kategorinë</p>
        </div>
      )}

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreenSim && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-6xl rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col h-full max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-8 md:p-10 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#ffc8dd] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    <i className="fas fa-microscope text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter leading-none">{fullscreenSim.name}</h2>
                    <p className="text-slate-400 font-bold mt-2 uppercase tracking-widest text-xs">Eksperiment Virtual</p>
                  </div>
                </div>
                <button 
                  onClick={closeFullscreen}
                  className="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all group"
                >
                  <X className="w-8 h-8 group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              {/* Modal Content - Simulation */}
              <div className="flex-1 flex items-center justify-center p-4 md:p-20 bg-slate-50/50 overflow-auto">
                <div 
                  className="w-full max-w-4xl transform scale-[1.5] sm:scale-[1.8] md:scale-[2] lg:scale-[2.5] origin-center flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: buildSim(fullscreenSim.type) }}
                />
              </div>

              {/* Modal Footer */}
              <div className="p-8 bg-white border-t border-slate-100 text-center">
                <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">Fizika Interaktive 2026 • Mjetet Matëse</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InstrumentsSection;
