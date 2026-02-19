
import React, { useState, useEffect, useMemo } from 'react';
import { ALL_PHYSICS_DATA, SIMULATIONS, GAMES } from './constants';
import { DIGITAL_GAMES } from './gameContent';
import { PhysicsTerm, CategoryName, DigitalGame } from './types';
import { askLibriFizikes } from './geminiService';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isWarping, setIsWarping] = useState(false);
  const [activePage, setActivePage] = useState<'home' | 'category' | 'details' | 'lab' | 'games'>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<PhysicsTerm | null>(null);
  const [selectedDigitalGame, setSelectedDigitalGame] = useState<DigitalGame | null>(null);
  const [gameFilter, setGameFilter] = useState<'home' | 'school' | 'digital'>('digital');
  const [searchTerm, setSearchTerm] = useState("");
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatLoading, setChatLoading] = useState(false);
  const [chatResponse, setChatResponse] = useState("");

  const handleStart = () => {
    setIsWarping(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 900);
  };

  const navigate = (page: any, data?: any) => {
    if (page === 'category') setSelectedCategory(data);
    if (page === 'details') {
        setSelectedTerm(data);
        setChatResponse(""); 
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAskLibri = async () => {
    if (!selectedTerm) return;
    setIsChatOpen(true);
    setChatLoading(true);
    const response = await askLibriFizikes(selectedTerm.name, selectedTerm.desc);
    setChatResponse(response || "");
    setChatLoading(false);
  };

  // Logic to filter all terms based on search
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return null;
    const results: (PhysicsTerm & { category: string })[] = [];
    Object.entries(ALL_PHYSICS_DATA).forEach(([cat, terms]) => {
      terms.forEach(term => {
        if (term.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push({ ...term, category: cat });
        }
      });
    });
    return results;
  }, [searchTerm]);

  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'Kinematika': return { icon: 'fa-person-running', color: 'bg-[#bde0fe]', text: 'text-[#5fa8d3]' };
      case 'Dinamika': return { icon: 'fa-hand-fist', color: 'bg-[#ffc8dd]', text: 'text-[#ff758f]' };
      case 'Energjia': return { icon: 'fa-fire-flame-curved', color: 'bg-[#ffafcc]', text: 'text-[#fb6f92]' };
      case 'Elektriciteti': return { icon: 'fa-bolt-lightning', color: 'bg-[#cdb4db]', text: 'text-[#8e7dbe]' };
      case 'Magnetizmi': return { icon: 'fa-magnet', color: 'bg-[#a2d2ff]', text: 'text-[#4895ef]' };
      default: return { icon: 'fa-atom', color: 'bg-slate-100', text: 'text-slate-400' };
    }
  };

  if (showSplash) {
    return (
      <div className={`fixed inset-0 galactic-aurora z-[100] flex flex-col items-center justify-center overflow-hidden ${isWarping ? 'warp-out' : ''}`}>
        <div className="relative z-50 flex flex-col items-center">
          {/* ATOM ANIMATION */}
          <div className="atom-wrap mb-16 animate__animated animate__zoomIn">
            <div className="nucleus-cluster">
              <div className="particle proton" style={{ top: '10px', left: '10px' }}></div>
              <div className="particle neutron" style={{ top: '10px', right: '10px' }}></div>
              <div className="particle proton" style={{ bottom: '10px', left: '15px' }}></div>
              <div className="particle neutron" style={{ bottom: '15px', right: '10px' }}></div>
              <div className="particle proton" style={{ top: '20px', left: '20px', width: '25px', height: '25px', zIndex: 5 }}></div>
            </div>
            <div className="orbit orbit-1">
              <div className="electron" style={{ '--duration': '3s' } as any}></div>
            </div>
            <div className="orbit orbit-2">
              <div className="electron" style={{ '--duration': '4.5s' } as any}></div>
            </div>
            <div className="orbit orbit-3">
              <div className="electron" style={{ '--duration': '2.2s' } as any}></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-[#4a4e69] tracking-tighter mb-12 animate__animated animate__fadeInUp">
            Fizika<span className="text-[#ffafcc]">Interaktive</span>
          </h1>
          
          <button 
            onClick={handleStart}
            className="btn-vazhdo px-16 py-7 rounded-3xl font-black text-xl uppercase tracking-widest shadow-2xl animate__animated animate__fadeInUp animate__delay-1s"
          >
            Vazhdo më tej!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcf9ff] text-[#4a4e69] font-['Plus_Jakarta_Sans']">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 px-8 py-6 bg-white/60 backdrop-blur-3xl border-b border-white/40 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate('home')}>
            <div className="w-14 h-14 bg-gradient-to-br from-[#bde0fe] via-[#ffafcc] to-[#cdb4db] rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-[360deg] transition-transform duration-1000">
              <i className="fas fa-atom text-xl"></i>
            </div>
            <h1 className="text-2xl font-black tracking-tight">Fizika<span className="text-[#ffafcc]">Interaktive</span></h1>
          </div>
          <div className="flex items-center gap-6 md:gap-12">
            <button onClick={() => navigate('home')} className="hidden md:block text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-[#ffafcc] transition-colors">Fillimi</button>
            <button onClick={() => navigate('lab')} className="hidden md:block text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-[#ffafcc] transition-colors">Laboratori</button>
            <button 
              onClick={() => navigate('games')} 
              className="bg-[#4a4e69] text-white px-8 md:px-10 py-4 rounded-[1.8rem] text-[10px] font-black shadow-xl hover:scale-110 active:scale-95 transition-all uppercase tracking-[0.2em] flex items-center gap-3"
            >
              <i className="fas fa-gamepad"></i> LOJËRAT
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Home: Categories & Search */}
        {activePage === 'home' && (
          <div className="animate__animated animate__fadeIn">
            <div className="max-w-4xl mb-16">
              <h2 className="text-7xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] text-slate-800">
                Lënda e <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffafcc] to-[#bde0fe]">Mendjeve të Ndritura</span>
              </h2>
            </div>

            {/* SEARCH BAR */}
            <div className="search-container">
              <i className="fas fa-search search-icon"></i>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Kërko madhësinë fizike..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Search Results or Categories */}
            {searchResults ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {searchResults.map((term, i) => (
                  <div 
                    key={i}
                    onClick={() => navigate('details', term)}
                    className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-transparent hover:border-[#ffafcc]/20 flex flex-col justify-between h-72 card-fusha"
                  >
                    <div>
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-2">{term.category}</span>
                      <h4 className="text-3xl font-black leading-tight tracking-tighter">{term.name}</h4>
                    </div>
                    <div className="text-[10px] font-black text-[#ffafcc] uppercase tracking-widest">Shih Detajet</div>
                  </div>
                ))}
                {searchResults.length === 0 && (
                  <div className="col-span-full py-20 text-center">
                    <p className="text-2xl font-bold text-slate-300">Nuk u gjet asnjë rezultat për "{searchTerm}"</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {(Object.keys(ALL_PHYSICS_DATA) as CategoryName[]).map((cat, i) => {
                  const theme = getCategoryTheme(cat);
                  return (
                    <div 
                      key={i} 
                      onClick={() => navigate('category', cat)}
                      className="group relative bg-white rounded-[4rem] p-12 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700 h-[420px] flex flex-col justify-between card-fusha overflow-hidden"
                    >
                      <div className={`absolute -right-20 -top-20 w-64 h-64 ${theme.color} opacity-10 rounded-full group-hover:scale-[3.5] transition-transform duration-1000`}></div>
                      <div className={`w-32 h-32 ${theme.color} rounded-[2.5rem] flex items-center justify-center ${theme.text} text-7xl shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-all relative z-10`}>
                        <i className={`fas ${theme.icon}`}></i>
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-5xl font-black mb-4 tracking-tighter">{cat}</h3>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Eksploro Terma</p>
                      </div>
                    </div>
                  );
                })}
                <div 
                  onClick={() => navigate('lab')}
                  className="group relative bg-[#4a4e69] rounded-[4rem] p-12 cursor-pointer shadow-2xl h-[420px] flex flex-col justify-between text-white overflow-hidden border-4 border-transparent hover:border-white/10 card-fusha"
                >
                  <div className="w-32 h-32 bg-white/10 rounded-[2.5rem] flex items-center justify-center text-7xl shadow-xl group-hover:scale-110 transition-all">
                    <i className="fas fa-microscope"></i>
                  </div>
                  <h3 className="text-5xl font-black tracking-tighter">Laboratori Virtual</h3>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Category Page */}
        {activePage === 'category' && selectedCategory && (
          <div className="animate__animated animate__fadeIn">
            <button onClick={() => navigate('home')} className="mb-12 flex items-center gap-4 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ffafcc] transition-colors">
              <i className="fas fa-arrow-left"></i> Kthehu te Fushat
            </button>
            <div className="flex items-center gap-12 mb-20">
              <div className={`w-28 h-28 ${getCategoryTheme(selectedCategory).color} rounded-[2.5rem] flex items-center justify-center ${getCategoryTheme(selectedCategory).text} text-6xl shadow-xl`}>
                <i className={`fas ${getCategoryTheme(selectedCategory).icon}`}></i>
              </div>
              <h2 className="text-7xl font-black tracking-tighter text-slate-800">{selectedCategory}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ALL_PHYSICS_DATA[selectedCategory].map((term, i) => (
                <div 
                  key={i}
                  onClick={() => navigate('details', term)}
                  className="bg-white p-12 rounded-[4rem] shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-transparent hover:border-[#ffafcc]/20 group flex flex-col h-80 justify-between card-fusha"
                >
                  <div className="text-[11px] font-black text-[#ffafcc] uppercase tracking-[0.5em]">{term.sym}</div>
                  <h4 className="text-4xl font-black group-hover:text-[#ffafcc] transition-colors leading-none tracking-tighter">{term.name}</h4>
                  <div className="flex items-center gap-3 text-slate-300 font-black uppercase text-[10px] tracking-[0.3em] group-hover:text-slate-800 transition-colors">
                    HAP DETAJET <i className="fas fa-arrow-right text-[8px] ml-1"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Details Page */}
        {activePage === 'details' && selectedTerm && (
          <div className="animate__animated animate__fadeIn max-w-5xl mx-auto">
            <button onClick={() => navigate('home')} className="mb-12 flex items-center gap-4 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ffafcc] transition-colors">
              <i className="fas fa-arrow-left"></i> Kthehu te Lista
            </button>
            <div className="bg-white rounded-[6rem] shadow-2xl p-16 md:p-24 border-[10px] border-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="mb-24">
                        <span className="px-8 py-3 bg-[#f8fafc] text-slate-400 rounded-full text-[11px] font-black uppercase tracking-[0.6em] mb-12 inline-block border border-slate-50">Kuptimi Shkencor</span>
                        <h2 className="text-8xl font-black tracking-tighter leading-[0.8] text-slate-800">{selectedTerm.name}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div className="bg-[#fcfcff] p-16 rounded-[4.5rem] border border-slate-50 flex flex-col items-center justify-center text-center shadow-inner">
                            <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.6em] mb-8">Simboli</p>
                            <p className="text-9xl font-mono font-black text-[#ffafcc]">{selectedTerm.sym}</p>
                        </div>
                        <div className="bg-[#fcfcff] p-16 rounded-[4.5rem] border border-slate-50 flex flex-col items-center justify-center text-center shadow-inner">
                            <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.6em] mb-8">Njësia SI</p>
                            <p className="text-8xl font-black text-slate-800">{selectedTerm.unit}</p>
                        </div>
                    </div>
                    <div className="bg-[#4a4e69] text-white p-24 rounded-[4.5rem] mb-24 text-center shadow-2xl relative">
                        <p className="text-[11px] font-black text-white/30 uppercase tracking-[0.8em] mb-10">Formula Kryesore</p>
                        <code className="text-6xl md:text-9xl font-mono font-black text-[#ffc8dd]">{selectedTerm.form}</code>
                    </div>
                    <div className="mb-32">
                        <h4 className="text-base font-black text-[#ffafcc] uppercase tracking-[0.6em] mb-10">Përshkrimi</h4>
                        <p className="text-5xl text-slate-600/90 leading-tight font-medium tracking-tight">{selectedTerm.desc}</p>
                    </div>
                    <div className="pt-20 border-t border-slate-100 text-center">
                        <button 
                            onClick={handleAskLibri}
                            className="group w-full py-14 bg-gradient-to-r from-[#bde0fe] via-[#ffafcc] to-[#cdb4db] text-white rounded-[5rem] font-black text-4xl shadow-2xl hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-10 relative overflow-hidden"
                        >
                            <i className="fas fa-book-open"></i>
                            <span className="relative z-10 uppercase tracking-widest">LIBRI I FIZIKËS (AI)</span>
                        </button>
                    </div>
                </div>
            </div>
          </div>
        )}

        {/* Labs View */}
        {activePage === 'lab' && (
          <div className="animate__animated animate__fadeIn">
             <button onClick={() => navigate('home')} className="mb-12 flex items-center gap-4 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ffafcc] transition-colors">
              <i className="fas fa-arrow-left"></i> Kthehu mbrapa
            </button>
            <div className="mb-24">
                <h2 className="text-9xl font-black tracking-tighter text-slate-800 leading-none">Laboratori<br/><span className="text-[#ffafcc]">Virtual</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                {SIMULATIONS.map((sim, i) => (
                    <div key={i} className="bg-white p-14 rounded-[5rem] shadow-sm hover:shadow-2xl transition-all border-4 border-transparent hover:border-[#bde0fe]/30 group flex flex-col justify-between h-[520px] card-fusha">
                        <div>
                            <div className="w-28 h-28 bg-[#f8fafc] text-slate-300 rounded-[2.5rem] flex items-center justify-center text-5xl mb-14 group-hover:bg-[#4a4e69] group-hover:text-white transition-all shadow-inner">
                                <i className={`fas ${sim.icon}`}></i>
                            </div>
                            <h4 className="text-4xl font-black mb-6 tracking-tighter leading-tight">{sim.title}</h4>
                            <span className="px-6 py-2 bg-[#fcfcff] text-[#ffafcc] rounded-2xl text-[10px] font-black uppercase tracking-widest border border-slate-50">{sim.category}</span>
                        </div>
                        <a href={sim.url} target="_blank" rel="noopener noreferrer" className="mt-14 w-full py-8 bg-[#f8fafc] border border-slate-100 rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.4em] flex items-center justify-center gap-5 hover:bg-[#ffafcc] hover:text-white transition-all">
                            NIS SIMULIMIN <i className="fas fa-flask"></i>
                        </a>
                    </div>
                ))}
            </div>
          </div>
        )}

        {/* Games View */}
        {activePage === 'games' && (
           <div className="animate__animated animate__fadeIn">
             <button onClick={() => navigate('home')} className="mb-12 flex items-center gap-4 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ffafcc] transition-colors">
              <i className="fas fa-arrow-left"></i> Kthehu mbrapa
            </button>
            <div className="text-center mb-24">
                <h2 className="text-9xl font-black mb-12 tracking-tighter text-slate-800 leading-none">Sfida & Lojëra</h2>
                <div className="flex justify-center p-4 bg-white/60 backdrop-blur-2xl rounded-[4.5rem] w-fit mx-auto border-4 border-white shadow-2xl">
                    <button onClick={() => {setGameFilter('digital'); setSelectedDigitalGame(null);}} className={`px-14 py-7 rounded-[3.5rem] font-black text-[11px] tracking-[0.4em] transition-all ${gameFilter === 'digital' ? 'bg-[#4a4e69] text-white shadow-2xl' : 'text-slate-400 hover:text-[#4a4e69]'}`}>DIGJITALE</button>
                    <button onClick={() => {setGameFilter('home'); setSelectedDigitalGame(null);}} className={`px-14 py-7 rounded-[3.5rem] font-black text-[11px] tracking-[0.4em] transition-all ${gameFilter === 'home' ? 'bg-[#4a4e69] text-white shadow-2xl' : 'text-slate-400 hover:text-[#4a4e69]'}`}>EKSPERIMENTE</button>
                    <button onClick={() => {setGameFilter('school'); setSelectedDigitalGame(null);}} className={`px-14 py-7 rounded-[3.5rem] font-black text-[11px] tracking-[0.4em] transition-all ${gameFilter === 'school' ? 'bg-[#4a4e69] text-white shadow-2xl' : 'text-slate-400 hover:text-[#4a4e69]'}`}>SHKOLLË</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                {selectedDigitalGame ? (
                    <div className="col-span-full bg-white rounded-[6rem] p-20 shadow-2xl border-[15px] border-white">
                         <div className="flex items-center justify-between mb-20 px-10">
                            <h3 className="text-6xl font-black tracking-tighter leading-none">{selectedDigitalGame.title}</h3>
                            <button onClick={() => setSelectedDigitalGame(null)} className="px-16 py-6 bg-[#4a4e69] text-white rounded-[2.5rem] font-black text-[12px] tracking-[0.3em] hover:bg-black transition-all shadow-xl">MBYLL LOJËN</button>
                        </div>
                        <div className="w-full aspect-video rounded-[5rem] overflow-hidden border-[15px] border-[#f8fafc] bg-black shadow-inner">
                             <iframe className="w-full h-full border-none" srcDoc={selectedDigitalGame.html} title={selectedDigitalGame.title} allowFullScreen />
                        </div>
                    </div>
                ) : (
                    gameFilter === 'digital' ? DIGITAL_GAMES.filter(g => g.type !== 'school').map((game, i) => (
                        <div key={i} onClick={() => setSelectedDigitalGame(game)} className="bg-white p-16 rounded-[5rem] shadow-sm hover:shadow-2xl transition-all cursor-pointer border-4 border-transparent hover:border-[#bde0fe]/40 group h-[480px] flex flex-col justify-between card-fusha">
                            <div className="flex items-center gap-12">
                                <div className="w-32 h-32 bg-[#bde0fe]/20 text-slate-800 rounded-[3rem] flex items-center justify-center text-5xl group-hover:bg-[#4a4e69] group-hover:text-white transition-all shadow-inner">
                                    <i className="fas fa-gamepad"></i>
                                </div>
                                <h4 className="text-5xl font-black tracking-tighter leading-tight">{game.title}</h4>
                            </div>
                            <button className="w-full py-9 bg-[#f8fafc] rounded-[3rem] font-black text-[11px] uppercase tracking-[0.5em] group-hover:bg-[#ffafcc] group-hover:text-white transition-all">LUAJ TANI</button>
                        </div>
                    )) : gameFilter === 'school' ? DIGITAL_GAMES.filter(g => g.type === 'school').map((game, i) => (
                        <div key={i} onClick={() => setSelectedDigitalGame(game)} className="bg-white p-16 rounded-[5rem] shadow-sm hover:shadow-2xl transition-all cursor-pointer border-4 border-transparent hover:border-[#ffc8dd]/40 group h-[480px] flex flex-col justify-between card-fusha">
                            <div className="flex items-center gap-12">
                                <div className="w-32 h-32 bg-[#ffc8dd]/20 text-slate-800 rounded-[3rem] flex items-center justify-center text-5xl group-hover:bg-[#4a4e69] group-hover:text-white transition-all shadow-inner">
                                    <i className="fas fa-chalkboard-user"></i>
                                </div>
                                <h4 className="text-5xl font-black tracking-tighter leading-tight">{game.title}</h4>
                            </div>
                            <button className="w-full py-9 bg-[#f8fafc] rounded-[3rem] font-black text-[11px] uppercase tracking-[0.5em] group-hover:bg-[#ff758f] group-hover:text-white transition-all">NIS SFIDËN</button>
                        </div>
                    )) : GAMES.filter(g => g.type === 'home').map((game, i) => (
                        <div key={i} className="bg-white p-20 rounded-[6rem] shadow-sm border-4 border-white hover:shadow-2xl transition-all card-fusha">
                             <div className="flex items-center gap-12 mb-16">
                                <div className="w-32 h-32 bg-[#fdf2f8] text-[#ffafcc] rounded-[3rem] flex items-center justify-center text-6xl shadow-inner border border-white">
                                    <i className="fas fa-vial-circle-check"></i>
                                </div>
                                <h4 className="text-5xl font-black tracking-tighter leading-tight">{game.title}</h4>
                            </div>
                            <p className="text-slate-400 mb-16 text-3xl leading-relaxed font-medium italic">"{game.description}"</p>
                            <div className="space-y-10">
                                {game.steps.map((s, idx) => (
                                    <div key={idx} className="flex gap-10 items-start">
                                        <span className="w-12 h-12 bg-[#ffafcc] text-white rounded-[1.2rem] flex items-center justify-center text-base font-black shadow-2xl shrink-0">{idx+1}</span>
                                        <p className="text-2xl font-bold text-slate-600/90 leading-tight">{s}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
          </div>
        )}
      </main>

      <footer className="mt-80 py-40 bg-white border-t border-slate-100 text-center">
        <div className="flex flex-col items-center gap-14 opacity-20">
            <div className="relative">
              <i className="fas fa-atom text-6xl animate-spin-slow"></i>
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-[1.2em] translate-y-20 text-slate-800">Fizika</div>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[1.5em] mt-10">Edukimi Interaktiv 2026</p>
        </div>
      </footer>

      {/* Chatbot Modal */}
      {isChatOpen && (
          <div className="fixed inset-0 bg-[#0f172a]/70 backdrop-blur-3xl z-[100] flex items-center justify-center p-8 animate__animated animate__fadeIn">
            <div className="bg-white w-full max-w-4xl rounded-[6rem] shadow-2xl overflow-hidden animate__animated animate__zoomIn">
              <div className="p-14 bg-gradient-to-r from-[#bde0fe] via-[#ffafcc] to-[#ffc8dd] flex items-center justify-between text-white">
                <div className="flex items-center gap-10">
                  <div className="w-24 h-24 bg-white/20 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-lg border border-white/40">
                    <i className="fas fa-robot animate-pulse"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-4xl tracking-tighter leading-none mb-2">Libri i Fizikës</h3>
                    <p className="text-[12px] font-black uppercase tracking-[0.4em] opacity-60">Mësuesi yt Inteligjent</p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="w-16 h-16 hover:bg-black/10 rounded-full transition-all flex items-center justify-center">
                  <i className="fas fa-times text-3xl"></i>
                </button>
              </div>
              <div className="p-24 max-h-[60vh] overflow-y-auto bg-[#fcf9ff]">
                {chatLoading ? (
                  <div className="flex flex-col items-center justify-center py-24 gap-10">
                    <div className="w-20 h-20 border-8 border-[#ffafcc] border-t-transparent rounded-full animate-spin"></div>
                    <p className="font-black text-slate-300 uppercase tracking-[0.6em] text-[12px]">Duke kërkuar në arkiva...</p>
                  </div>
                ) : (
                  <div className="prose prose-slate max-w-none text-slate-600 text-3xl leading-relaxed font-medium">
                    {chatResponse.split('\n').map((p, i) => <p key={i} className="mb-10">{p}</p>)}
                  </div>
                )}
              </div>
              <div className="p-12 border-t border-slate-50 flex justify-center bg-white">
                <button onClick={() => setIsChatOpen(false)} className="px-20 py-6 bg-[#4a4e69] text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.4em] hover:bg-black transition-all shadow-2xl">MBYLL BISEDËN</button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default App;
