import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { instrumentsData, buildSim, type Instrument } from '../instrumentsData';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Search, Atom } from 'lucide-react';

interface InstrumentsSectionProps {
  onBack: () => void;
}

const InstrumentsSection: React.FC<InstrumentsSectionProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Të Gjitha');
  const [fullscreenSim, setFullscreenSim] = useState<Instrument | null>(null);

  // Lock body scroll + close on Escape while modal is open
  useEffect(() => {
    if (fullscreenSim) {
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setFullscreenSim(null);
      };
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', onKey);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [fullscreenSim]);

  const categories = useMemo(() => {
    const cats = new Set(instrumentsData.map(inst => inst.cat));
    return ['Të Gjitha', ...Array.from(cats)];
  }, []);

  const filteredInstruments = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    return instrumentsData.filter(inst => {
      const matchesSearch =
        inst.name.toLowerCase().includes(q) ||
        inst.instrument.toLowerCase().includes(q) ||
        inst.sym.toLowerCase().includes(q);
      const matchesCategory = selectedCategory === 'Të Gjitha' || inst.cat === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const closeFullscreen = useCallback(() => setFullscreenSim(null), []);

  // Highlight matched text in search results
  const highlight = (text: string) => {
    const q = searchTerm.trim();
    if (!q) return text;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span className="text-[#ff4d8d]">{text.slice(idx, idx + q.length)}</span>
        {text.slice(idx + q.length)}
      </>
    );
  };

  return (
    <div
      className="animate__animated animate__fadeIn font-body"
      style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
    >
      {/* Header & Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-3 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ff4d8d] transition-colors group"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
            Kthehu te Fushat
          </button>

          <h2
            className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-slate-800"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Mjetet{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d8d] via-[#c084fc] to-[#38bdf8]">
              Matëse
            </span>
          </h2>

          <p
            className="text-slate-400 font-bold mt-4 uppercase tracking-[0.25em] text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {filteredInstruments.length} instrumente shkencore · Fizikë
          </p>
        </div>

        {/* Search */}
        <div className="relative group w-full md:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-[#ff4d8d] transition-colors" />
          <input
            type="text"
            placeholder="Kërko mjetin, simbolin…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border-2 border-slate-100 focus:border-[#ffafcc] outline-none font-bold text-slate-600 transition-all shadow-sm focus:shadow-lg focus:shadow-pink-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {categories.map(cat => {
          const active = selectedCategory === cat;
          const count = cat === 'Të Gjitha'
            ? instrumentsData.length
            : instrumentsData.filter(i => i.cat === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 border-2 ${
                active
                  ? 'border-transparent text-white shadow-lg shadow-pink-200'
                  : 'border-slate-100 bg-white text-slate-400 hover:border-[#ffc8dd] hover:text-[#ff4d8d]'
              }`}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: active
                  ? 'linear-gradient(135deg, #ff4d8d, #c084fc)'
                  : undefined,
              }}
            >
              {cat}
              <span className={`ml-2 font-mono text-[9px] ${active ? 'text-white/80' : 'text-slate-300'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Instruments Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredInstruments.map((inst, idx) => (
            <motion.div
              key={inst.name}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ delay: Math.min(idx * 0.04, 0.4), type: 'spring', stiffness: 260, damping: 24 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-xl border-2 border-slate-50 flex flex-col group hover:shadow-2xl hover:shadow-pink-100/60 hover:border-[#ffc8dd]/60 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500"
                    style={{ background: `linear-gradient(135deg, ${inst.color}, #ffffff)`, color: '#4a4e69' }}
                  >
                    {inst.icon}
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-black text-slate-800 tracking-tight"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {highlight(inst.name)}
                    </h3>
                    <span className="text-[10px] font-black text-[#ff4d8d] uppercase tracking-widest">
                      {inst.cat}
                    </span>
                  </div>
                </div>
              </div>

              {/* Simulation Preview */}
              <div className="relative mb-8 aspect-video bg-slate-50 rounded-3xl border-2 border-slate-100 overflow-hidden flex items-center justify-center p-4 group-hover:border-[#ffafcc]/40 transition-colors duration-500">
                <div
                  className="w-full h-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-700"
                  dangerouslySetInnerHTML={{ __html: buildSim(inst.simType) }}
                />
                <button
                  onClick={() => setFullscreenSim(inst)}
                  aria-label="Zmadho simulimin"
                  className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-[#ff4d8d] hover:scale-110 transition-all shadow-md opacity-0 group-hover:opacity-100"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-pink-50/50 group-hover:border-pink-100 transition-colors duration-500">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                    <i className="fas fa-tools text-[#ff4d8d]"></i>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Mjeti Matës</p>
                    <p className="font-bold text-slate-700 text-sm">{highlight(inst.instrument)}</p>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {inst.desc}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="bg-[#f8fafc] p-3 rounded-xl border border-slate-50 group-hover:border-pink-100 transition-colors">
                    <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Simboli</p>
                    <p className="font-black text-slate-700" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {inst.sym}
                    </p>
                  </div>
                  <div className="bg-[#f8fafc] p-3 rounded-xl border border-slate-50 group-hover:border-pink-100 transition-colors">
                    <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Njësia SI</p>
                    <p className="font-black text-slate-700" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {inst.unit}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No Results */}
      {filteredInstruments.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-32 text-center"
        >
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-slate-300" />
          </div>
          <h3 className="text-2xl font-black text-slate-400" style={{ fontFamily: "'Sora', sans-serif" }}>
            Nuk u gjet asnjë mjet
          </h3>
          <p className="text-slate-300 font-bold mt-2">Provo një kërkim tjetër ose ndrysho kategorinë</p>
        </motion.div>
      )}

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreenSim && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFullscreen}
            className="fixed inset-0 z-[10000] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-6xl rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col h-full max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-8 md:p-10 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <div className="flex items-center gap-6">
                  <motion.div
                    animate={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${fullscreenSim.color}, #ffffff)` }}
                  >
                    {fullscreenSim.icon}
                  </motion.div>
                  <div>
                    <h2
                      className="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter leading-none"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {fullscreenSim.instrument}
                    </h2>
                    <p
                      className="text-slate-400 font-bold mt-2 uppercase tracking-widest text-xs"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {fullscreenSim.name} · {fullscreenSim.unit}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeFullscreen}
                  aria-label="Mbyll"
                  className="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all group"
                >
                  <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Modal Content — Simulation */}
              <div className="flex-1 flex items-center justify-center p-4 md:p-20 bg-slate-50/50 overflow-auto">
                <div
                  className="w-full max-w-4xl transform scale-[1.5] sm:scale-[1.8] md:scale-[2] lg:scale-[2.5] origin-center flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: buildSim(fullscreenSim.simType) }}
                />
              </div>

              {/* Modal Footer */}
              <div className="p-8 bg-white border-t border-slate-100 flex items-center justify-center gap-3">
                <Atom className="w-4 h-4 text-[#c084fc]" />
                <p
                  className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Fizika Interaktive 2026 · Mjetet Matëse
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InstrumentsSection;
