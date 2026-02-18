
import React, { useState, useMemo, useEffect } from 'react';
import { ALL_PHYSICS_DATA, MEDIA_MAPPING, SIMULATIONS, GAMES } from './constants';
import { DIGITAL_GAMES } from './gameContent';
import { PhysicsTerm, CategoryName, Simulation, PhysicsGame, DigitalGame } from './types';
import { TermCard } from './components/TermCard';

const BackgroundFormulas = () => {
  const formulas = ['E=mc²', 'F=ma', 'v=d/t', 'a=Δv/Δt', 'P=F/A', 'W=Fd', 'Ek=½mv²', 'Ep=mgh', 'λ=v/f', 'F=G(m₁m₂)/r²', 'τ=rFsinθ', 'p=mv', 'Q=mcΔT', 'V=IR', 'P=VI'];
  const [elements, setElements] = useState<{id: number, text: string, left: string, size: string, duration: string, delay: string}[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      text: formulas[Math.floor(Math.random() * formulas.length)],
      left: `${Math.random() * 100}%`,
      size: `${1.2 + Math.random() * 1.5}rem`,
      duration: `${20 + Math.random() * 20}s`,
      delay: `${Math.random() * -20}s`
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map(el => (
        <div 
          key={el.id}
          className="formula-float absolute"
          style={{
            left: el.left,
            fontSize: el.size,
            animationDuration: el.duration,
            animationDelay: el.delay,
            top: '100%'
          }}
        >
          {el.text}
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'home' | 'category' | 'details' | 'lab' | 'games'>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<PhysicsTerm | null>(null);
  const [selectedDigitalGame, setSelectedDigitalGame] = useState<DigitalGame | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [history, setHistory] = useState<string[]>(['home']);
  const [gameFilter, setGameFilter] = useState<'home' | 'school' | 'digital'>('digital');

  const categories = Object.keys(ALL_PHYSICS_DATA) as CategoryName[];

  const filteredResults = useMemo(() => {
    if (!searchQuery) return [];
    let all: PhysicsTerm[] = [];
    categories.forEach(cat => {
      all = [...all, ...ALL_PHYSICS_DATA[cat].map(t => ({ ...t, catName: cat }))];
    });
    return all.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, categories]);

  const navigate = (page: any, data?: any) => {
    if (page === 'category') setSelectedCategory(data);
    if (page === 'details') setSelectedTerm(data);
    setActivePage(page);
    setHistory(prev => [...prev, page]);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    if (history.length <= 1) return;
    const newHistory = [...history];
    newHistory.pop();
    const lastPage = newHistory[newHistory.length - 1];
    setHistory(newHistory);
    setActivePage(lastPage as any);
  };

  const getMedia = (term: PhysicsTerm) => {
    const cat = term.catName || selectedCategory;
    const fallbackMedia = cat ? MEDIA_MAPPING[cat] : { img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800', vid: '' };
    return {
      img: term.img || fallbackMedia.img,
      vid: term.vid || fallbackMedia.vid
    };
  };

  return (
    <div className="relative min-h-screen pb-20 selection:bg-indigo-100 bg-[#f8fafc]">
      <BackgroundFormulas />
      
      {/* Navbar */}
      <nav className="glass sticky top-0 z-50 px-6 py-4 mb-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
            <div className="w-10 h-10 physics-gradient rounded-xl flex items-center justify-center text-white shadow-lg">
              <i className="fas fa-atom text-xl"></i>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-dark-purple">
              Fizika<span className="text-[#ffafcc]">Interaktive</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('home')} className={`text-sm font-bold transition-all ${activePage === 'home' ? 'text-dark-purple border-b-2 border-[#ffafcc]' : 'text-slate-600 hover:text-dark-purple'}`}>Fillimi</button>
            <button onClick={() => navigate('lab')} className={`text-sm font-bold transition-all ${activePage === 'lab' ? 'text-dark-purple border-b-2 border-[#ffafcc]' : 'text-slate-600 hover:text-dark-purple'}`}>Laboratori</button>
            <button onClick={() => navigate('games')} className="px-6 py-2.5 btn-purple text-white rounded-full text-sm font-black shadow-lg hover:-translate-y-0.5 transition-all">
              <i className="fas fa-gamepad mr-2"></i> Eksperimente & Lojëra
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {activePage === 'home' && (
          <div className="animate__animated animate__fadeIn">
            <div className="text-center mb-16 py-12">
              <h2 className="text-6xl md:text-8xl font-black text-dark-purple mb-12 leading-tight drop-shadow-sm">
                Fizika interaktive
              </h2>
              <div className="max-w-3xl mx-auto relative group">
                <i className="fas fa-search absolute left-8 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-dark-purple text-xl transition-colors"></i>
                <input 
                  type="text"
                  placeholder="kërko një madhësi fizike..."
                  className="w-full pl-16 pr-8 py-6 rounded-[2.5rem] border-4 border-white focus:ring-4 focus:ring-[#ffc8dd]/30 shadow-2xl outline-none text-xl transition-all bg-white/95 text-dark-purple"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {searchQuery ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate__animated animate__fadeIn">
                {filteredResults.map((term, i) => (
                  <TermCard key={i} term={term} category={term.catName} onClick={(t) => navigate('details', t)} />
                ))}
              </div>
            ) : (
              <div className="space-y-24">
                <section>
                  <div className="flex items-center justify-between mb-12">
                    <h3 className="text-4xl font-black text-dark-purple tracking-tight">Fushat Kryesore</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {categories.map((cat, i) => (
                      <div 
                        key={i} 
                        onClick={() => navigate('category', cat)}
                        className="group relative h-80 rounded-[3rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all border-8 border-white bg-white"
                      >
                        <img src={MEDIA_MAPPING[cat].img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90" alt={cat} />
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <div className="glass rounded-[2.5rem] p-8 group-hover:bg-white/90 transition-all duration-500 shadow-lg">
                            <h3 className="text-3xl font-black text-dark-purple mb-2">{cat}</h3>
                            <div className="flex items-center justify-between">
                              <p className="text-[#ffafcc] text-[10px] font-black uppercase tracking-[0.2em]">{ALL_PHYSICS_DATA[cat].length} TERMA</p>
                              <span className="w-10 h-10 btn-purple text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                  <i className="fas fa-arrow-right text-xs"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div 
                        onClick={() => navigate('lab')}
                        className="group relative h-80 rounded-[3rem] overflow-hidden cursor-pointer shadow-xl bg-white flex flex-col items-center justify-center p-6 border-8 border-white hover:shadow-2xl transition-all"
                      >
                        <div className="w-full h-full physics-gradient rounded-[2.5rem] flex flex-col items-center justify-center text-white p-8">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-[2rem] flex items-center justify-center text-4xl mb-4 group-hover:rotate-12 transition-transform">
                                <i className="fas fa-microscope"></i>
                            </div>
                            <h3 className="text-3xl font-black mb-1">Virtual Lab</h3>
                            <p className="text-white/70 text-sm font-black uppercase tracking-widest">Eksperimente</p>
                        </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        )}

        {activePage === 'category' && selectedCategory && (
          <div className="animate__animated animate__fadeIn">
            <button onClick={goBack} className="group flex items-center gap-4 text-dark-purple font-bold mb-12 hover:opacity-70 transition-all">
              <span className="w-12 h-12 rounded-full border-2 border-white bg-white/50 flex items-center justify-center shadow-sm"><i className="fas fa-arrow-left"></i></span> Kthehu mbrapa
            </button>
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10 border-b-4 border-white pb-12">
              <div className="flex-1">
                <div className="flex items-center gap-8 mb-8">
                    <div className="w-20 h-20 btn-purple rounded-3xl flex items-center justify-center text-white text-4xl shadow-xl">
                        <i className={`fas ${selectedCategory === 'Kinematika' ? 'fa-running' : 'fa-bolt'}`}></i>
                    </div>
                    <h2 className="text-7xl font-black text-dark-purple tracking-tighter">{selectedCategory}</h2>
                </div>
                <p className="text-dark-purple/70 text-2xl max-w-2xl font-medium leading-relaxed">Fjalori i saktë shkencor, formulat dhe njësitë SI për kapitullin e {selectedCategory}.</p>
              </div>
              <div className="w-full md:w-96 h-60 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white flex items-center justify-center p-4">
                <img src={MEDIA_MAPPING[selectedCategory].img} className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {ALL_PHYSICS_DATA[selectedCategory].map((term, i) => (
                <TermCard key={i} term={term} onClick={(t) => navigate('details', t)} />
              ))}
            </div>
          </div>
        )}

        {activePage === 'details' && selectedTerm && (
          <div className="animate__animated animate__fadeIn max-w-6xl mx-auto">
            <button onClick={goBack} className="group flex items-center gap-4 text-dark-purple font-bold mb-12 hover:opacity-70 transition-all">
              <span className="w-12 h-12 rounded-full border-2 border-white bg-white/50 flex items-center justify-center shadow-sm"><i className="fas fa-arrow-left"></i></span> Kthehu mbrapa
            </button>
            
            <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border-8 border-white">
              <div className="p-8 md:p-16">
                <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
                  <div className="flex-[1.4] space-y-12">
                    <div className="space-y-6">
                      <span className="px-8 py-2.5 bg-baby-blue/30 text-dark-purple rounded-2xl text-[10px] font-black uppercase tracking-[0.4em]">Analiza e Termit</span>
                      <h2 className="text-5xl md:text-7xl font-black text-dark-purple leading-tight tracking-tighter">{selectedTerm.name}</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="bg-[#fffffc] p-10 rounded-[3rem] border-4 border-slate-50 shadow-sm">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block">Simboli Shkencor</label>
                        <span className="text-5xl font-mono font-black text-dark-purple italic">{selectedTerm.sym}</span>
                      </div>
                      <div className="bg-[#fffffc] p-10 rounded-[3rem] border-4 border-slate-50 shadow-sm">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block">Njësia (SI)</label>
                        <span className="text-5xl font-black text-dark-purple">{selectedTerm.unit}</span>
                      </div>
                    </div>

                    <div className="btn-purple p-12 md:p-16 rounded-[4rem] relative overflow-hidden group shadow-lg">
                        <label className="block text-[10px] font-black text-white/50 uppercase tracking-[0.5em] mb-8">Formula Matematike</label>
                        <div className="flex items-center justify-center py-6">
                            <code className="text-4xl md:text-6xl text-[#ffafcc] font-mono font-black tracking-widest">
                                {selectedTerm.form}
                            </code>
                        </div>
                        <i className="fas fa-atom absolute -right-12 -bottom-12 text-[15rem] text-white/5 rotate-12"></i>
                    </div>

                    <div className="space-y-8">
                      <h4 className="text-2xl font-black text-dark-purple flex items-center gap-4">
                          <span className="w-2 h-10 bg-[#ffafcc] rounded-full"></span> Shpjegimi Shkencor
                      </h4>
                      <p className="text-dark-purple/80 text-2xl leading-relaxed font-medium">{selectedTerm.desc}</p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-12">
                    <div className="space-y-6">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block">Ilustrim</label>
                        <div className="rounded-[3rem] overflow-hidden shadow-xl border-8 border-white aspect-square relative group bg-white flex items-center justify-center p-6">
                            <img src={getMedia(selectedTerm).img} className="max-w-full max-h-full object-contain" alt={selectedTerm.name} />
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] block">Video Shpjegim</label>
                        <div className="rounded-[3rem] overflow-hidden shadow-xl bg-black aspect-video border-8 border-white relative">
                            {getMedia(selectedTerm).vid ? (
                                <iframe 
                                    className="w-full h-full"
                                    src={getMedia(selectedTerm).vid} 
                                    title="Physics Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center text-white/40 font-bold p-8 text-center">
                                    <i className="fas fa-video-slash text-4xl mb-3"></i>
                                    <p>Videoja nuk është e disponueshme</p>
                                </div>
                            )}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === 'lab' && (
          <div className="animate__animated animate__fadeIn space-y-20">
            <button onClick={goBack} className="group flex items-center gap-4 text-dark-purple font-bold mb-10 hover:opacity-70 transition-all">
              <span className="w-12 h-12 rounded-full border-2 border-white bg-white/50 flex items-center justify-center shadow-sm"><i className="fas fa-arrow-left"></i></span> Mbrapa
            </button>
            <section className="text-center max-w-5xl mx-auto space-y-8">
                <h2 className="text-7xl font-black text-dark-purple tracking-tighter">Laboratori Virtual</h2>
                <p className="text-dark-purple/70 text-2xl font-medium">Eksperimento me simulimet zyrtare të PhET Colorado.</p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {SIMULATIONS.map((sim, i) => (
                    <div key={i} className="bg-white p-12 rounded-[4rem] shadow-xl border-4 border-white flex flex-col justify-between group hover:-translate-y-4 transition-all">
                        <div>
                            <div className="w-20 h-20 bg-baby-blue text-dark-purple rounded-3xl flex items-center justify-center text-3xl mb-8 group-hover:bg-dark-purple group-hover:text-white transition-all">
                                <i className={`fas ${sim.icon}`}></i>
                            </div>
                            <h4 className="text-2xl font-black text-dark-purple mb-3">{sim.title}</h4>
                            <span className="text-[10px] font-black text-[#ffafcc] uppercase tracking-widest">{sim.category}</span>
                        </div>
                        <a href={sim.url} target="_blank" rel="noopener noreferrer" className="mt-10 w-full py-5 btn-purple text-white rounded-[2rem] font-black flex items-center justify-center gap-4 shadow-lg">
                            HAPE <i className="fas fa-external-link-alt text-xs"></i>
                        </a>
                    </div>
                ))}
            </section>
          </div>
        )}

        {activePage === 'games' && (
          <div className="animate__animated animate__fadeIn">
            <button onClick={goBack} className="group flex items-center gap-4 text-dark-purple font-bold mb-10 hover:opacity-70 transition-all">
              <span className="w-12 h-12 rounded-full border-2 border-white bg-white/50 flex items-center justify-center shadow-sm"><i className="fas fa-arrow-left"></i></span> Mbrapa
            </button>
            
            <section className="text-center max-w-5xl mx-auto space-y-8 mb-24">
                <h2 className="text-7xl font-black text-dark-purple tracking-tighter">Lojërat Shkencore</h2>
                <p className="text-dark-purple/70 text-2xl font-medium">Sfidat digjitale dhe eksperimente praktike.</p>
                <div className="flex justify-center p-3 bg-white/50 rounded-[2.5rem] w-fit mx-auto shadow-inner border-4 border-white">
                    <button onClick={() => {setGameFilter('digital'); setSelectedDigitalGame(null);}} className={`px-10 py-5 rounded-[2rem] font-black text-sm transition-all ${gameFilter === 'digital' ? 'bg-white text-dark-purple shadow-xl' : 'text-slate-500 hover:text-dark-purple'}`}>LOJËRA DIGJITALE</button>
                    <button onClick={() => {setGameFilter('home'); setSelectedDigitalGame(null);}} className={`px-10 py-5 rounded-[2rem] font-black text-sm transition-all ${gameFilter === 'home' ? 'bg-white text-dark-purple shadow-xl' : 'text-slate-500 hover:text-dark-purple'}`}>NË SHTËPI</button>
                    <button onClick={() => {setGameFilter('school'); setSelectedDigitalGame(null);}} className={`px-10 py-5 rounded-[2rem] font-black text-sm transition-all ${gameFilter === 'school' ? 'bg-white text-dark-purple shadow-xl' : 'text-slate-500 hover:text-dark-purple'}`}>NË SHKOLLË</button>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {gameFilter === 'home' ? GAMES.filter(g => g.type === 'home').map((game, i) => (
                    <div key={i} className="bg-white rounded-[4rem] p-12 shadow-2xl border-4 border-white animate__animated animate__zoomIn">
                        <div className="flex items-center gap-6 mb-10">
                            <div className="w-20 h-20 bg-[#ffc8dd]/40 text-dark-purple rounded-[2rem] flex items-center justify-center text-3xl">
                                <i className="fas fa-home"></i>
                            </div>
                            <h3 className="text-3xl font-black text-dark-purple">{game.title}</h3>
                        </div>
                        <p className="text-slate-600 text-xl mb-10 leading-relaxed font-medium italic">"{game.description}"</p>
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Materialet</h4>
                                <div className="flex flex-wrap gap-3">
                                    {game.materials.map((m, idx) => (
                                        <span key={idx} className="px-6 py-3 bg-[#bde0fe]/20 border border-white rounded-xl text-sm font-black text-dark-purple">{m}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Hapat</h4>
                                {game.steps.map((step, idx) => (
                                    <div key={idx} className="flex items-start gap-6">
                                        <div className="w-10 h-10 rounded-xl btn-purple text-white flex items-center justify-center text-sm font-black shrink-0">{idx+1}</div>
                                        <p className="text-dark-purple font-bold text-lg leading-snug pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )) : (
                    selectedDigitalGame ? (
                      <div className="col-span-full animate__animated animate__zoomIn">
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-4xl font-black text-dark-purple">{selectedDigitalGame.title}</h3>
                          <button onClick={() => setSelectedDigitalGame(null)} className="px-8 py-3 bg-white shadow-md rounded-[2rem] font-black text-dark-purple hover:bg-[#ffafcc] hover:text-white transition-all">Mbyll Lojën</button>
                        </div>
                        <div className="w-full aspect-[16/9] md:h-[700px] bg-black rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                          <iframe className="w-full h-full border-none" src={selectedDigitalGame.url || undefined} srcDoc={selectedDigitalGame.html || undefined} title={selectedDigitalGame.title} allowFullScreen />
                        </div>
                      </div>
                    ) : DIGITAL_GAMES.filter(g => (gameFilter === 'school' ? g.type === 'school' : (g.type === 'digital' || g.type === undefined))).map((game, i) => (
                        <div key={i} onClick={() => setSelectedDigitalGame(game)} className="bg-white p-12 rounded-[4rem] shadow-xl border-4 border-white group cursor-pointer hover:-translate-y-3 transition-all">
                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-20 h-20 bg-[#bde0fe]/40 text-dark-purple rounded-3xl flex items-center justify-center text-3xl group-hover:bg-dark-purple group-hover:text-white transition-all">
                                    <i className={`fas ${gameFilter === 'school' ? 'fa-chalkboard-teacher' : 'fa-gamepad'}`}></i>
                                </div>
                                <h4 className="text-3xl font-black text-dark-purple leading-tight">{game.title}</h4>
                            </div>
                            <p className="text-slate-500 text-lg mb-10 font-medium">Kategoria: {game.category}</p>
                            <button className="w-full py-5 btn-purple text-white rounded-[2rem] font-black hover:opacity-90 transition-all shadow-md">NIS LOJËN</button>
                        </div>
                    ))
                )}
            </div>
          </div>
        )}
      </main>

      <footer className="mt-48 py-16 border-t-4 border-white text-center bg-white/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 physics-gradient rounded-2xl flex items-center justify-center text-white shadow-xl">
                    <i className="fas fa-atom text-xl"></i>
                </div>
                <h1 className="text-2xl font-black text-dark-purple">
                    Fizika<span className="text-[#ffafcc]">Interaktive</span>
                </h1>
            </div>
            <p className="text-dark-purple/40 text-[10px] font-black tracking-[0.4em] uppercase">
                Platformë Edukative Shkencore &bull; 2026
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
