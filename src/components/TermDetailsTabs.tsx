import React, { useState } from 'react';
import { PhysicsTerm } from '../types';
import { instrumentsData, buildSim } from '../instrumentsData';
import '../instruments.css';
import DinamikaGameContainer from './DinamikaGameContainer';
import KinematikaGameContainer from './KinematikaGameContainer';
import GameWrapper from './GameWrapper';

interface TermDetailsTabsProps {
  term: PhysicsTerm;
}

const TermDetailsTabs: React.FC<TermDetailsTabsProps> = ({ term }) => {
  const [activeTab, setActiveTab] = useState<'mjet' | 'video' | 'foto' | 'ushtrime' | 'loje'>('mjet');
  const [showSolutionPanel, setShowSolutionPanel] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  
  // Track the current term to reset state when it changes without using useEffect
  const [currentTermName, setCurrentTermName] = useState(term.name);

  const matchedInstrument = instrumentsData.find(inst => 
    term.name.toLowerCase().includes(inst.name.toLowerCase())
  );

  const availableTabs = [
    ...(matchedInstrument ? [{ id: 'mjet', icon: '📏', label: 'Mjet Matës', color: 'bg-[#ffc8dd] text-slate-800' }] : []),
    { id: 'video', icon: '🎥', label: 'Video', color: 'bg-[#ffafcc] text-white' },
    { id: 'foto', icon: '🖼️', label: 'Foto', color: 'bg-[#cdb4db] text-white' },
    { id: 'ushtrime', icon: '🧠', label: 'Ushtrime', color: 'bg-[#a2d2ff] text-slate-800' },
    { id: 'loje', icon: '🎮', label: 'Lojë', color: 'bg-[#4a4e69] text-white' }
  ];

  if (term.name !== currentTermName) {
    setCurrentTermName(term.name);
    setActiveTab(matchedInstrument ? 'mjet' : 'video');
    setShowSolutionPanel(false);
    setShowSteps(false);
  }

  // Ensure activeTab is valid if matchedInstrument changes (e.g., on first load)
  if (activeTab === 'mjet' && !matchedInstrument) {
    setActiveTab('video');
  }

  return (
    <div className="mt-8 relative">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-10 relative z-10">
        {availableTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'mjet' | 'video' | 'foto' | 'ushtrime' | 'loje')}
            className={`px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-2 ${
              activeTab === tab.id ? `${tab.color} shadow-lg scale-105` : 'bg-slate-50 text-slate-400 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <span className="text-lg">{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative z-10 min-h-[300px] bg-slate-50/50 rounded-[2rem] p-6 md:p-8 border-2 border-slate-100 overflow-hidden">
        
        {/* 1. MJET MATËS */}
        {activeTab === 'mjet' && (() => {
          const matchedInstrument = instrumentsData.find(inst => 
            term.name.toLowerCase().includes(inst.name.toLowerCase())
          );

          if (matchedInstrument) {
            return (
              <div className="animate__animated animate__fadeInUp">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
                    <div 
                      className="w-full max-w-[300px] bg-white p-4 rounded-2xl shadow-inner border-2 border-slate-100"
                      dangerouslySetInnerHTML={{ __html: buildSim(matchedInstrument.simType) }}
                    />
                    <button 
                      onClick={() => {
                        const modal = document.createElement('div');
                        modal.className = 'fixed inset-0 z-[10000] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate__animated animate__fadeIn';
                        modal.innerHTML = `
                          <div class="bg-white w-full max-w-6xl rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col h-full max-h-[90vh] animate__animated animate__zoomIn">
                            <div class="p-8 md:p-10 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
                              <div class="flex items-center gap-6">
                                <div class="w-16 h-16 bg-[#ffc8dd] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                                  <i class="fas fa-microscope text-white"></i>
                                </div>
                                <div>
                                  <h2 class="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter leading-none">${matchedInstrument.instrument}</h2>
                                  <p class="text-slate-400 font-bold mt-2 uppercase tracking-widest text-xs">Eksperiment Virtual</p>
                                </div>
                              </div>
                              <button class="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all group" onclick="this.closest('.fixed').remove()">
                                <i class="fas fa-times text-2xl group-hover:rotate-90 transition-transform"></i>
                              </button>
                            </div>
                            <div class="flex-1 flex items-center justify-center p-4 md:p-20 bg-slate-50/50 overflow-auto">
                              <div class="w-full max-w-4xl transform scale-[1.5] sm:scale-[1.8] md:scale-[2] lg:scale-[2.5] origin-center flex items-center justify-center">
                                ${buildSim(matchedInstrument.simType)}
                              </div>
                            </div>
                            <div class="p-8 bg-white border-t border-slate-100 text-center">
                              <p class="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">Fizika Interaktive 2026 • Mjetet Matëse</p>
                            </div>
                          </div>
                        `;
                        document.body.appendChild(modal);
                      }}
                      className="px-6 py-3 bg-[#ffc8dd] text-slate-800 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#ffafcc] hover:text-white transition-all shadow-md flex items-center gap-2"
                    >
                      HAP FULL SCREEN <i className="fas fa-expand"></i>
                    </button>
                  </div>
                  <div className="w-full md:w-1/2 text-left">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-md" style={{ background: 'linear-gradient(135deg, #ffc8dd, #ffafcc)', color: 'white' }}>
                        {matchedInstrument.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-slate-700">{matchedInstrument.instrument}</h4>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mjeti Matës</p>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed font-medium mb-6">
                      {matchedInstrument.desc}
                    </p>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm inline-block">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Kategoria</p>
                      <p className="font-bold text-[#ffafcc]">{matchedInstrument.cat}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div className="animate__animated animate__fadeInUp text-center py-12">
              <i className="fas fa-ruler-combined text-6xl text-slate-300 mb-6"></i>
              <h4 className="text-2xl font-black text-slate-400 mb-2">Mjet Matës</h4>
              <p className="text-slate-400">Nuk u gjet asnjë mjet matës specifik për këtë term.</p>
            </div>
          );
        })()}

        {/* 2. VIDEO */}
        {activeTab === 'video' && (
          <div className="animate__animated animate__fadeInUp text-center py-12">
            {term.vid ? (
              <div className="max-w-2xl mx-auto">
                <a 
                  href={term.vid!.replace('/embed/', '/watch?v=')} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block relative group aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-6 bg-slate-100 cursor-pointer"
                >
                  <img 
                    src={`https://img.youtube.com/vi/${term.vid!.split('/embed/')[1]}/hqdefault.jpg`} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('0.jpg')) {
                        target.src = `https://img.youtube.com/vi/${term.vid!.split('/embed/')[1]}/0.jpg`;
                      }
                    }}
                    alt={`Video për ${term.name}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                      <i className="fas fa-play text-white text-3xl ml-2"></i>
                    </div>
                  </div>
                </a>
                <h4 className="text-2xl font-black text-slate-400 mb-2">Video Shpjeguese</h4>
                <p className="text-slate-400 text-sm">Kliko për ta parë videon në YouTube</p>
              </div>
            ) : (
              <>
                <i className="fas fa-video text-6xl text-slate-300 mb-6"></i>
                <h4 className="text-2xl font-black text-slate-400 mb-2">Video Shpjeguese</h4>
                <p className="text-slate-400">Këtu do të vendoset videoja për këtë term.</p>
              </>
            )}
          </div>
        )}

        {/* FOTO */}
        {activeTab === 'foto' && (
          <div className="animate__animated animate__fadeInUp text-center py-12">
            {term.img ? (
              <div className="max-w-2xl mx-auto">
                <div 
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-6"
                  onClick={() => {
                    const modal = document.createElement('div');
                    modal.className = 'fixed inset-0 z-[9999] bg-slate-900/95 flex items-center justify-center p-4 backdrop-blur-sm animate__animated animate__fadeIn animate__faster';
                    modal.onclick = () => {
                      modal.classList.replace('animate__fadeIn', 'animate__fadeOut');
                      setTimeout(() => modal.remove(), 300);
                    };
                    modal.innerHTML = `
                      <div class="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
                        <button class="absolute -top-12 right-0 text-white hover:text-[#ffafcc] transition-colors text-4xl">
                          <i class="fas fa-times"></i>
                        </button>
                        <img src="${term.img}" alt="${term.name}" class="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
                      </div>
                    `;
                    document.body.appendChild(modal);
                  }}
                >
                  <img src={term.img} alt={term.name} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 text-slate-800 px-6 py-3 rounded-full font-black text-sm tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
                      <i className="fas fa-expand"></i> ZMADHO FOTON
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-black text-slate-400 mb-2">Foto Ilustruese</h4>
              </div>
            ) : (
              <>
                <i className="fas fa-image text-6xl text-slate-300 mb-6"></i>
                <h4 className="text-2xl font-black text-slate-400 mb-2">Foto Ilustruese</h4>
                <p className="text-slate-400">Këtu do të vendoset fotoja për këtë term.</p>
              </>
            )}
          </div>
        )}

        {/* 3. USHTRIME */}
        {activeTab === 'ushtrime' && (
          <div className="animate__animated animate__fadeInUp">
            <div className="text-center py-8 mb-8 border-b border-slate-200">
              <i className="fas fa-dumbbell text-5xl text-slate-300 mb-4"></i>
              <h4 className="text-2xl font-black text-slate-400 mb-2">Ushtrime Praktike</h4>
              <p className="text-slate-400">Këtu do të vendosen ushtrimet.</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => setShowSolutionPanel(!showSolutionPanel)}
                className="px-8 py-4 bg-[#a2d2ff] text-slate-800 rounded-full font-black text-sm uppercase tracking-widest shadow-md hover:bg-[#8ec5fc] transition-colors flex items-center gap-3"
              >
                <i className="fas fa-keyboard"></i> Zgjidh ushtrimin
              </button>
              <button 
                onClick={() => setShowSteps(!showSteps)}
                className="px-8 py-4 bg-white text-slate-600 rounded-full font-black text-sm uppercase tracking-widest shadow-sm hover:bg-slate-50 border border-slate-200 transition-colors flex items-center gap-3"
              >
                <i className="fas fa-list-ol"></i> Hap pas hapi
              </button>
            </div>

            {/* Solution Panel (Keyboard placeholder) */}
            {showSolutionPanel && (
              <div className="mt-8 bg-white p-8 rounded-[2rem] shadow-inner border-2 border-slate-100 animate__animated animate__fadeIn">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Shkruaj Përgjigjen (Physics Keyboard)</p>
                <div className="w-full h-32 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 mb-6">
                  <i className="fas fa-square-root-alt text-3xl mr-3"></i> Hapësira për të shkruar formulën/përgjigjen
                </div>
                <button className="px-10 py-4 bg-[#4a4e69] text-white rounded-xl font-black uppercase tracking-widest shadow-md hover:bg-[#2b2d42] transition-colors w-full md:w-auto">
                  Kontrollo
                </button>
              </div>
            )}

            {/* Step by step solution */}
            {showSteps && (
              <div className="mt-8 space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between animate__animated animate__slideInLeft">
                  <span className="font-bold text-slate-500">Hapi 1: Zgjidh formulën</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between animate__animated animate__slideInLeft" style={{ animationDelay: '0.1s' }}>
                  <span className="font-bold text-slate-500">Hapi 2: Zëvendëso vlerat</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between animate__animated animate__slideInLeft" style={{ animationDelay: '0.2s' }}>
                  <span className="font-bold text-slate-500">Hapi 3: Llogarit</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4. LOJË */}
        {activeTab === 'loje' && (
          <div className="animate__animated animate__fadeInUp text-center py-12">
            {term.catName === 'Dinamika' && term.id !== undefined && term.id >= 1 && term.id <= 15 ? (
              <DinamikaGameContainer termId={term.id} termName={term.name} formula={term.form} />
            ) : term.catName === 'Kinematika' && term.id !== undefined && [9, 10, 11, 12, 13, 14, 15, 16].includes(term.id) ? (
              <KinematikaGameContainer termId={term.id} termName={term.name} />
            ) : term.gameUrl ? (
                <GameWrapper>
                    <div className="relative w-full h-full min-h-[400px] sm:min-h-[600px] flex items-center justify-center">
                        <iframe src={term.gameUrl} className="w-full h-full min-h-[400px] sm:min-h-[600px] border-none rounded-2xl shadow-lg" title={`Lojë për ${term.name}`} allowFullScreen></iframe>
                    </div>
                </GameWrapper>
            ) : (
                <>
                    <i className="fas fa-gamepad text-6xl text-slate-300 mb-6"></i>
                    <h4 className="text-2xl font-black text-slate-400 mb-2">Lojë Interaktive</h4>
                    <p className="text-slate-400">Këtu do të vendoset loja për këtë term.</p>
                </>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default TermDetailsTabs;
