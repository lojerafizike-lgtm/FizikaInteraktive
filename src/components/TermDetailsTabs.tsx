import React, { useState } from 'react';
import { PhysicsTerm } from '../types';
import { instrumentsData, buildSim } from '../instrumentsData';
import '../instruments.css';

interface TermDetailsTabsProps {
  term: PhysicsTerm;
}

const TermDetailsTabs: React.FC<TermDetailsTabsProps> = ({ term }) => {
  const [activeTab, setActiveTab] = useState<'mjet' | 'video' | 'foto' | 'ushtrime' | 'loje'>('mjet');
  const [showSolutionPanel, setShowSolutionPanel] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  
  // Track the current term to reset state when it changes without using useEffect
  const [currentTermName, setCurrentTermName] = useState(term.name);

  if (term.name !== currentTermName) {
    setCurrentTermName(term.name);
    setActiveTab('mjet');
    setShowSolutionPanel(false);
    setShowSteps(false);
  }

  return (
    <div className="mt-8 relative">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-10 relative z-10">
        {[
          { id: 'mjet', icon: '📏', label: 'Mjet Matës', color: 'bg-[#ffc8dd] text-slate-800' },
          { id: 'video', icon: '🎥', label: 'Video', color: 'bg-[#ffafcc] text-white' },
          { id: 'foto', icon: '🖼️', label: 'Foto', color: 'bg-[#cdb4db] text-white' },
          { id: 'ushtrime', icon: '🧠', label: 'Ushtrime', color: 'bg-[#a2d2ff] text-slate-800' },
          { id: 'loje', icon: '🎮', label: 'Lojë', color: 'bg-[#4a4e69] text-white' }
        ].map((tab) => (
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
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div 
                      className="w-full max-w-[300px]"
                      dangerouslySetInnerHTML={{ __html: buildSim(matchedInstrument.simType) }}
                    />
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
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-6 bg-slate-100">
                  <iframe 
                    src={term.vid} 
                    title={`Video për ${term.name}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="text-2xl font-black text-slate-400 mb-2">Video Shpjeguese</h4>
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
                <img src={term.img} alt={term.name} className="w-full h-auto rounded-2xl shadow-lg border-4 border-white mb-6" referrerPolicy="no-referrer" />
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
            <i className="fas fa-gamepad text-6xl text-slate-300 mb-6"></i>
            <h4 className="text-2xl font-black text-slate-400 mb-2">Lojë Interaktive</h4>
            <p className="text-slate-400">Këtu do të vendoset loja për këtë term.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default TermDetailsTabs;
