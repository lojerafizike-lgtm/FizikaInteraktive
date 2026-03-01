
import React, { useState, useMemo } from 'react';
import { ALL_PHYSICS_DATA, GAMES } from './constants';
import { DIGITAL_GAMES } from './gameContent';
import { PhysicsTerm, CategoryName, DigitalGame } from './types';
import ClickSpark from './components/ClickSpark';
import TermDetailsTabs from './components/TermDetailsTabs';
import BlurText from './components/BlurText';
import BubbleMenu from './components/BubbleMenu';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isWarping, setIsWarping] = useState(false);
  const [activePage, setActivePage] = useState<'home' | 'category' | 'details' | 'games' | 'all-terms'>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<PhysicsTerm | null>(null);
  const [gameFilter, setGameFilter] = useState<'home' | 'school' | 'digital'>('digital');
  const [searchTerm, setSearchTerm] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const handleStart = () => {
    setIsWarping(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 800);
  };

  const navigate = (page: 'home' | 'category' | 'details' | 'games' | 'all-terms', data?: CategoryName | PhysicsTerm | null) => {
    if (page === 'category') setSelectedCategory(data as CategoryName);
    if (page === 'details') {
        setSelectedTerm(data as PhysicsTerm);
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlayGame = (game: DigitalGame) => {
    if (game.url) {
      window.open(game.url, '_blank');
    } else if (game.html) {
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(game.html);
        newWindow.document.close();
      }
    }
  };

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

  const allTerms = useMemo(() => {
    const terms: (PhysicsTerm & { category: string })[] = [];
    Object.entries(ALL_PHYSICS_DATA).forEach(([cat, catTerms]) => {
      catTerms.forEach(term => {
        terms.push({ ...term, category: cat });
      });
    });
    return terms.sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'Kinematika': return { icon: 'fa-person-running', color: 'bg-[#bde0fe]', text: 'text-[#5fa8d3]' };
      case 'Dinamika': return { icon: 'fa-hand-fist', color: 'bg-[#ffc8dd]', text: 'text-[#ff758f]' };
      case 'Energjia': return { icon: 'fa-fire-flame-curved', color: 'bg-[#ffafcc]', text: 'text-[#fb6f92]' };
      case 'Elektriciteti': return { icon: 'fa-bolt-lightning', color: 'bg-[#cdb4db]', text: 'text-[#8e7dbe]' };
      case 'Magnetizmi': return { icon: 'fa-magnet', color: 'bg-[#a2d2ff]', text: 'text-[#4895ef]' };
      case 'Libri Interaktiv': return { icon: 'fa-book-open', color: 'bg-[#ffc8dd]', text: 'text-[#ff758f]' };
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
              <div className="electron" style={{ '--duration': '3s' } as React.CSSProperties}></div>
            </div>
            <div className="orbit orbit-2">
              <div className="electron" style={{ '--duration': '4.5s' } as React.CSSProperties}></div>
            </div>
            <div className="orbit orbit-3">
              <div className="electron" style={{ '--duration': '2.2s' } as React.CSSProperties}></div>
            </div>
          </div>

          <div className="flex items-center justify-center text-4xl md:text-8xl font-black tracking-tighter mb-12 font-orbitron">
            <BlurText text="Fizika" delay={50} animateBy="letters" direction="top" className="text-[#4a4e69]" />
            <BlurText text="Interaktive" delay={50} animateBy="letters" direction="bottom" className="text-[#ffafcc]" />
          </div>
          
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

  const mobileMenuItems = [
    {
      label: 'Fillimi',
      href: '#',
      onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('home'); },
      rotation: -8,
      hoverStyles: { bgColor: '#4a4e69', textColor: '#ffffff' }
    },
    {
      label: 'Lojërat',
      href: '#',
      onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('games'); },
      rotation: 8,
      hoverStyles: { bgColor: '#ffafcc', textColor: '#ffffff' }
    }
  ];

  return (
    <ClickSpark sparkColor='#ffafcc' sparkSize={12} sparkRadius={20} sparkCount={10} duration={600}>
      <div className="min-h-screen bg-[#fcf9ff] text-[#4a4e69] font-sans">
        {/* Mobile Bubble Menu */}
        <div className="md:hidden">
          <BubbleMenu
            logo={
              <button 
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsChatOpen(true); }}
                className="w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-[#ffc8dd] to-[#ffafcc] text-white"
                style={{ width: '100%', height: '100%' }}
              >
                <i className="fas fa-comment-dots text-xl drop-shadow-md"></i>
              </button>
            }
            items={mobileMenuItems}
            menuAriaLabel="Toggle navigation"
            menuBg="#ffffff"
            menuContentColor="#4a4e69"
            useFixedPosition={true}
            animationEase="back.out(1.5)"
            animationDuration={0.5}
            staggerDelay={0.12}
          />
        </div>

        {/* Navbar */}
      <nav className="hidden md:flex sticky top-0 z-40 px-8 py-6 bg-white/60 backdrop-blur-3xl border-b border-white/40 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate('home')}>
            <div className="w-14 h-14 bg-gradient-to-br from-[#bde0fe] via-[#ffafcc] to-[#cdb4db] rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-[360deg] transition-transform duration-1000 shrink-0">
              <i className="fas fa-atom text-xl"></i>
            </div>
            <h1 className="text-xl lg:text-2xl font-black tracking-tight">Fizika<span className="text-[#ffafcc]">Interaktive</span></h1>
          </div>
          <div className="flex items-center gap-4 lg:gap-10">
            <button onClick={() => navigate('home')} className="hidden md:block text-xs lg:text-sm font-black uppercase tracking-widest text-slate-500 hover:text-[#ffafcc] transition-colors">Fillimi</button>
            <button onClick={() => navigate('all-terms')} className="hidden md:block text-xs lg:text-sm font-black uppercase tracking-widest text-slate-500 hover:text-[#ffafcc] transition-colors">Të gjitha Termat</button>
            <button 
              onClick={() => navigate('games')} 
              className="bg-[#4a4e69] text-white px-6 lg:px-10 py-3 lg:py-4 rounded-[1.8rem] text-xs lg:text-sm font-black shadow-xl hover:scale-110 active:scale-95 transition-all uppercase tracking-widest flex items-center gap-3 shrink-0"
            >
              <i className="fas fa-gamepad"></i> LOJËRAT
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-16">
        {/* Home: Categories & Search */}
        {activePage === 'home' && (
          <div className="animate__animated animate__fadeIn">
            <div className="max-w-4xl mb-16">
              <h2 className="text-4xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bde0fe] to-[#cdb4db]">"Burimi i vetëm</span> <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cdb4db] to-[#ffafcc]">i dijes është</span> <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffafcc] to-[#bde0fe]">përvoja"</span>
                <br/>
                <span className="text-xl md:text-3xl font-medium italic text-slate-400 block mt-10 tracking-[0.6em] uppercase opacity-50">~ Albert Einstein</span>
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
                      className="group relative bg-white rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-12 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700 h-[260px] md:h-[420px] flex flex-col justify-between card-fusha overflow-hidden"
                    >
                      <div className={`absolute -right-20 -top-20 w-64 h-64 ${theme.color} opacity-10 rounded-full group-hover:scale-[3.5] transition-transform duration-1000`}></div>
                      <div className={`w-16 h-16 md:w-32 md:h-32 ${theme.color} rounded-2xl md:rounded-[2.5rem] flex items-center justify-center ${theme.text} text-3xl md:text-7xl shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-all relative z-10`}>
                        <i className={`fas ${theme.icon}`}></i>
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-2xl md:text-5xl font-black mb-2 md:mb-4 tracking-tighter">{cat}</h3>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Eksploro Terma</p>
                      </div>
                    </div>
                  );
                })}
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
            <div className="flex items-center gap-4 md:gap-12 mb-8 md:mb-20">
              <div className={`w-16 h-16 md:w-28 md:h-28 ${getCategoryTheme(selectedCategory).color} rounded-2xl md:rounded-[2.5rem] flex items-center justify-center ${getCategoryTheme(selectedCategory).text} text-3xl md:text-6xl shadow-xl`}>
                <i className={`fas ${getCategoryTheme(selectedCategory).icon}`}></i>
              </div>
              <h2 className="text-3xl md:text-7xl font-black tracking-tighter text-slate-800">{selectedCategory}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
              {ALL_PHYSICS_DATA[selectedCategory].map((term, i) => (
                <div 
                  key={i}
                  onClick={() => navigate('details', term)}
                  className="bg-white p-4 md:p-8 rounded-2xl md:rounded-[3rem] shadow-sm hover:shadow-xl transition-all cursor-pointer border border-transparent hover:border-[#ffafcc]/20 group flex flex-col h-32 md:h-60 justify-between card-fusha"
                >
                  <div className="text-[7px] md:text-[10px] font-black text-[#ffafcc] uppercase tracking-[0.2em] md:tracking-[0.4em] truncate">{term.sym}</div>
                  <h4 className="text-sm md:text-3xl font-black group-hover:text-[#ffafcc] transition-colors leading-tight tracking-tighter line-clamp-2">{term.name}</h4>
                  <div className="flex items-center gap-1 md:gap-2 text-slate-300 font-black uppercase text-[7px] md:text-[9px] tracking-[0.1em] md:tracking-[0.2em] group-hover:text-slate-800 transition-colors mt-2">
                    DETAJET <i className="fas fa-arrow-right text-[6px] md:text-[7px] ml-1"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Details Page */}
        {activePage === 'details' && selectedTerm && (
          <div className="animate__animated animate__fadeIn max-w-4xl mx-auto">
            <button onClick={() => navigate('category', selectedCategory)} className="mb-8 flex items-center gap-4 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ffafcc] transition-colors">
              <i className="fas fa-arrow-left"></i> Kthehu te Lista
            </button>
            <div className="bg-white rounded-[2rem] md:rounded-[4rem] shadow-2xl p-6 md:p-16 border-[4px] md:border-[8px] border-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="mb-8 md:mb-12">
                        <span className="px-4 py-1.5 md:px-6 md:py-2 bg-[#f8fafc] text-slate-400 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4 md:mb-8 inline-block border border-slate-50">Kuptimi Shkencor</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] md:leading-[0.8] text-slate-800">{selectedTerm.name}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                        <div className="bg-[#fcfcff] p-6 md:p-8 rounded-3xl md:rounded-[3rem] border border-slate-50 flex flex-col items-center justify-center text-center shadow-inner">
                            <p className="text-[8px] md:text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-2 md:mb-4">Simboli</p>
                            <p className="text-4xl md:text-6xl font-mono font-black text-[#ffafcc]">{selectedTerm.sym}</p>
                        </div>
                        <div className="bg-[#fcfcff] p-6 md:p-8 rounded-3xl md:rounded-[3rem] border border-slate-50 flex flex-col items-center justify-center text-center shadow-inner">
                            <p className="text-[8px] md:text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-2 md:mb-4">Njësia SI</p>
                            <p className="text-3xl md:text-5xl font-black text-slate-800">{selectedTerm.unit}</p>
                        </div>
                        <div className="bg-[#fcfcff] p-6 md:p-8 rounded-3xl md:rounded-[3rem] border border-slate-50 flex flex-col items-center justify-center text-center shadow-inner">
                            <p className="text-[8px] md:text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-2 md:mb-4">Natyra</p>
                            <p className="text-2xl md:text-4xl font-black text-[#4a4e69]">{selectedTerm.nature}</p>
                        </div>
                    </div>
                    
                    {selectedTerm.otherUnits && (
                      <div className="mb-8 md:mb-12 bg-[#f8fafc] p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-slate-50">
                        <p className="text-[8px] md:text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-2 md:mb-3 ml-2 md:ml-6">Njësi të tjera</p>
                        <p className="text-lg md:text-2xl font-bold text-slate-600 ml-2 md:ml-6">{selectedTerm.otherUnits}</p>
                      </div>
                    )}

                    <div className="bg-[#4a4e69] text-white p-8 md:p-16 rounded-3xl md:rounded-[3.5rem] mb-10 md:mb-16 text-center shadow-2xl relative">
                        <p className="text-[8px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.3em] md:tracking-[0.6em] mb-4 md:mb-6">Formula Kryesore</p>
                        <code className="text-3xl md:text-7xl font-mono font-black text-[#ffc8dd] break-all">{selectedTerm.form}</code>
                    </div>
                    <div className="mb-12 md:mb-20">
                        <h4 className="text-xs md:text-sm font-black text-[#ffafcc] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4 md:mb-6">Kuptimi fizik</h4>
                        <p className="text-xl md:text-3xl text-slate-600/90 leading-tight font-medium tracking-tight">{selectedTerm.desc}</p>
                    </div>

                    {/* Interactive Game Row */}
                    {selectedTerm.phetUrl && (
                      <div className="pt-8 md:pt-12 border-t border-slate-100 mb-8 md:mb-12">
                          <div className="bg-[#f8fafc] p-6 md:p-8 rounded-3xl md:rounded-[3rem] border border-slate-50 flex flex-col md:flex-row items-center justify-between shadow-inner gap-6 md:gap-0">
                              <div className="flex items-center gap-4 md:gap-6 md:ml-6 w-full md:w-auto">
                                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#4a4e69] text-white rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-lg shrink-0">
                                      <i className="fas fa-gamepad"></i>
                                  </div>
                                  <div>
                                      <h4 className="text-xl md:text-2xl font-black tracking-tight">Loja Interaktive</h4>
                                      <p className="text-[7px] md:text-[9px] font-bold text-slate-300 uppercase tracking-widest">EKSPERIMENTO DUKE LUAJTUR</p>
                                  </div>
                              </div>
                              <a 
                                  href={selectedTerm.phetUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="w-full md:w-auto md:mr-6 px-8 md:px-12 py-3 md:py-4 bg-[#ffafcc] text-white rounded-2xl md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-[#ff8fab] transition-all shadow-xl flex items-center justify-center gap-3"
                              >
                                  LUAJ LOJEN <i className="fas fa-play text-[8px]"></i>
                              </a>
                          </div>
                      </div>
                    )}

                    {/* Të tjera Section with Tabs */}
                    <div className="pt-12 border-t border-slate-100 mb-12">
                        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 bg-[#cdb4db] text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                                    <i className="fas fa-info-circle"></i>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black tracking-tight">Të tjera</h4>
                                    <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">INFORMACION SHTESË DHE MJETE</p>
                                </div>
                            </div>
                            
                            {selectedTerm.teTjera && (
                              <div className="bg-[#fcfdfe] p-8 rounded-[2rem] border border-slate-50 shadow-inner mb-8">
                                  <p className="text-2xl font-bold text-slate-600 leading-relaxed">
                                      {selectedTerm.teTjera}
                                  </p>
                              </div>
                            )}

                            <TermDetailsTabs term={selectedTerm} />
                        </div>
                    </div>

                    {/* Interactive Book Row */}
                    {selectedTerm.html && (
                      <div className="pt-8 md:pt-12 border-t border-slate-100">
                          <div className="bg-[#f8fafc] p-6 md:p-8 rounded-3xl md:rounded-[3rem] border border-slate-50 flex flex-col md:flex-row items-center justify-between shadow-inner gap-6 md:gap-0">
                              <div className="flex items-center gap-4 md:gap-6 md:ml-6 w-full md:w-auto">
                                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#ff758f] text-white rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-lg shrink-0">
                                      <i className="fas fa-book-open"></i>
                                  </div>
                                  <div>
                                      <h4 className="text-xl md:text-2xl font-black tracking-tight">Libri Interaktiv</h4>
                                      <p className="text-[7px] md:text-[9px] font-bold text-slate-300 uppercase tracking-widest">EKSPLORO LIBRIN E PLOTË</p>
                                  </div>
                              </div>
                              <button 
                                  onClick={() => {
                                      const newWindow = window.open('', '_blank');
                                      if (newWindow) {
                                        newWindow.document.write(selectedTerm.html!);
                                        newWindow.document.close();
                                      }
                                  }}
                                  className="w-full md:w-auto md:mr-6 px-8 md:px-12 py-3 md:py-4 bg-[#ff758f] text-white rounded-2xl md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-[#ff4d6d] transition-all shadow-xl flex items-center justify-center gap-3"
                              >
                                  HAP LIBRIN <i className="fas fa-external-link-alt text-[8px]"></i>
                              </button>
                          </div>
                      </div>
                    )}

                    {/* AI Chat Button Replacement */}
                    <div className="mt-20 pt-12 border-t border-slate-100">
                      <div className="bg-[#4a4e69] rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ffafcc]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10">
                          <div className="w-24 h-24 bg-[#ffafcc] text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:rotate-12 transition-transform overflow-hidden border-4 border-[#ffafcc]">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg" alt="Albert Einstein" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <h4 className="text-4xl font-black text-white mb-6 tracking-tighter">Pyet Einstein</h4>
                          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto font-medium">
                            Dëshiron të mësosh më shumë? Bisedo rreth të gjitha madhësive fizike në faqen tonë.
                          </p>
                          <button 
                            onClick={() => window.location.href = '/help'}
                            className="px-16 py-6 bg-[#ffafcc] text-white rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4 mx-auto"
                          >
                            VAZHDO <i className="fas fa-arrow-right text-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        )}

        {/* Games View */}
        {activePage === 'games' && (
           <div className="animate__animated animate__fadeIn">
             <button onClick={() => navigate('home')} className="mb-8 md:mb-12 flex items-center gap-4 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ffafcc] transition-colors">
              <i className="fas fa-arrow-left"></i> Kthehu mbrapa
            </button>
            <div className="text-center mb-12 md:mb-24">
                <h2 className="text-5xl md:text-9xl font-black mb-8 md:mb-12 tracking-tighter text-slate-800 leading-none">Sfida & Lojëra</h2>
                <div className="flex flex-row flex-wrap justify-center p-2 md:p-4 bg-white/60 backdrop-blur-2xl rounded-3xl md:rounded-[4.5rem] w-full md:w-fit mx-auto border-4 border-white shadow-2xl gap-2 md:gap-0">
                    <button onClick={() => setGameFilter('digital')} className={`flex-1 md:flex-none px-4 py-3 md:px-14 md:py-7 rounded-2xl md:rounded-[3.5rem] font-black text-[9px] md:text-[11px] tracking-[0.2em] md:tracking-[0.4em] transition-all ${gameFilter === 'digital' ? 'bg-[#4a4e69] text-white shadow-2xl' : 'text-slate-400 hover:text-[#4a4e69]'}`}>DIGJITALE</button>
                    <button onClick={() => setGameFilter('home')} className={`flex-1 md:flex-none px-4 py-3 md:px-14 md:py-7 rounded-2xl md:rounded-[3.5rem] font-black text-[9px] md:text-[11px] tracking-[0.2em] md:tracking-[0.4em] transition-all ${gameFilter === 'home' ? 'bg-[#4a4e69] text-white shadow-2xl' : 'text-slate-400 hover:text-[#4a4e69]'}`}>EKSPERIMENTE</button>
                    <button onClick={() => setGameFilter('school')} className={`flex-1 md:flex-none px-4 py-3 md:px-14 md:py-7 rounded-2xl md:rounded-[3.5rem] font-black text-[9px] md:text-[11px] tracking-[0.2em] md:tracking-[0.4em] transition-all ${gameFilter === 'school' ? 'bg-[#4a4e69] text-white shadow-2xl' : 'text-slate-400 hover:text-[#4a4e69]'}`}>SHKOLLË</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14">
                {gameFilter === 'digital' ? DIGITAL_GAMES.filter(g => g.type !== 'school').map((game, i) => (
                    <div key={i} onClick={() => handlePlayGame(game)} className="bg-white p-6 md:p-16 rounded-3xl md:rounded-[5rem] shadow-sm hover:shadow-2xl transition-all cursor-pointer border-4 border-transparent hover:border-[#bde0fe]/40 group h-auto md:h-[480px] flex flex-col justify-between card-fusha">
                        <div className="flex items-center gap-4 md:gap-12 mb-6 md:mb-0">
                            <div className="w-16 h-16 md:w-32 md:h-32 bg-[#bde0fe]/20 text-slate-800 rounded-2xl md:rounded-[3rem] flex items-center justify-center text-2xl md:text-5xl group-hover:bg-[#4a4e69] group-hover:text-white transition-all shadow-inner shrink-0">
                                <i className="fas fa-gamepad"></i>
                            </div>
                            <h4 className="text-2xl md:text-5xl font-black tracking-tighter leading-tight">{game.title}</h4>
                        </div>
                        <button className="w-full py-4 md:py-9 bg-[#f8fafc] rounded-xl md:rounded-[3rem] font-black text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] group-hover:bg-[#ffafcc] group-hover:text-white transition-all">LUAJ TANI</button>
                    </div>
                )) : gameFilter === 'school' ? DIGITAL_GAMES.filter(g => g.type === 'school').map((game, i) => (
                    <div key={i} onClick={() => handlePlayGame(game)} className="bg-white p-6 md:p-16 rounded-3xl md:rounded-[5rem] shadow-sm hover:shadow-2xl transition-all cursor-pointer border-4 border-transparent hover:border-[#ffc8dd]/40 group h-auto md:h-[480px] flex flex-col justify-between card-fusha">
                        <div className="flex items-center gap-4 md:gap-12 mb-6 md:mb-0">
                            <div className="w-16 h-16 md:w-32 md:h-32 bg-[#ffc8dd]/20 text-slate-800 rounded-2xl md:rounded-[3rem] flex items-center justify-center text-2xl md:text-5xl group-hover:bg-[#4a4e69] group-hover:text-white transition-all shadow-inner shrink-0">
                                <i className="fas fa-chalkboard-user"></i>
                            </div>
                            <h4 className="text-2xl md:text-5xl font-black tracking-tighter leading-tight">{game.title}</h4>
                        </div>
                        <button className="w-full py-4 md:py-9 bg-[#f8fafc] rounded-xl md:rounded-[3rem] font-black text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] group-hover:bg-[#ff758f] group-hover:text-white transition-all">NIS SFIDËN</button>
                    </div>
                )) : GAMES.filter(g => g.type === 'home').map((game, i) => (
                    <div key={i} className="bg-white p-6 md:p-20 rounded-3xl md:rounded-[6rem] shadow-sm border-4 border-white hover:shadow-2xl transition-all card-fusha">
                         <div className="flex items-center gap-4 md:gap-12 mb-6 md:mb-16">
                            <div className="w-16 h-16 md:w-32 md:h-32 bg-[#fdf2f8] text-[#ffafcc] rounded-2xl md:rounded-[3rem] flex items-center justify-center text-2xl md:text-6xl shadow-inner border border-white shrink-0">
                                <i className="fas fa-vial-circle-check"></i>
                            </div>
                            <h4 className="text-2xl md:text-5xl font-black tracking-tighter leading-tight">{game.title}</h4>
                        </div>
                        <p className="text-slate-400 mb-8 md:mb-12 text-lg md:text-3xl leading-relaxed font-medium italic">"{game.description}"</p>
                        
                        <div className="mb-8 md:mb-12">
                            <h5 className="text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-4 md:mb-6">Materialet:</h5>
                            <div className="flex flex-wrap gap-2 md:gap-4">
                                {game.materials.map((m, idx) => (
                                    <span key={idx} className="px-3 py-1.5 md:px-6 md:py-2 bg-[#f8fafc] text-slate-600 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold border border-slate-50">{m}</span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 md:space-y-8">
                            <h5 className="text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-4 md:mb-6">Hapat:</h5>
                            {game.steps.map((s, idx) => (
                                <div key={idx} className="flex gap-4 md:gap-8 items-start">
                                    <span className="w-6 h-6 md:w-10 md:h-10 bg-[#ffafcc] text-white rounded-lg md:rounded-[1rem] flex items-center justify-center text-xs md:text-sm font-black shadow-lg shrink-0">{idx+1}</span>
                                    <p className="text-sm md:text-xl font-bold text-slate-600/90 leading-tight">{s}</p>
                                </div>
                            ))}
                        </div>
                        {game.url && (
                            <div className="mt-8 md:mt-12">
                                <div className="relative w-full h-[400px] rounded-2xl md:rounded-[2rem] overflow-hidden border-4 border-slate-100 mb-4 shadow-inner">
                                    <iframe src={game.url} className="w-full h-full border-none" title={game.title}></iframe>
                                </div>
                                <button 
                                    onClick={() => window.open(game.url, '_blank')}
                                    className="w-full py-4 md:py-6 bg-[#ffafcc] text-white rounded-xl md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-[#ff758f] transition-all shadow-xl flex items-center justify-center gap-3"
                                >
                                    HAP FULL SCREEN <i className="fas fa-expand"></i>
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
          </div>
        )}
        {activePage === 'all-terms' && (
          <div className="animate__animated animate__fadeIn">
            <button onClick={() => navigate('home')} className="mb-12 flex items-center gap-4 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ffafcc] transition-colors">
              <i className="fas fa-arrow-left"></i> Kthehu mbrapa
            </button>
            
            <div className="w-full max-w-4xl mx-auto">
              {/* Terms List */}
              <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-xl border border-slate-50 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 tracking-tighter">Të gjitha Termat</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allTerms.map((term, i) => (
                    <div 
                      key={i}
                      onClick={() => navigate('details', term)}
                      className="p-4 md:p-6 rounded-xl md:rounded-2xl hover:bg-[#f8fafc] cursor-pointer transition-all group border border-slate-100"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest block mb-1">{term.category}</span>
                          <h5 className="text-base md:text-xl font-bold group-hover:text-[#ffafcc] transition-colors">{term.name}</h5>
                        </div>
                        <i className="fas fa-chevron-right text-[10px] text-slate-200 group-hover:text-[#ffafcc] transition-all"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

      {/* Floating Chat Widget */}
      {isChatOpen && (
        <div className="fixed inset-0 z-[100] bg-[#eef2f7] animate__animated animate__fadeIn animate__faster flex flex-col">
          <div className="bg-white p-3 flex justify-start md:justify-end shadow-sm relative z-10">
            <button onClick={() => setIsChatOpen(false)} className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <iframe src="/chat.html" className="w-full flex-1 border-none" title="Chat Forum"></iframe>
        </div>
      )}
      
      {!isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50 hidden md:block">
          <button 
            onClick={() => setIsChatOpen(true)}
            className="w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center bg-gradient-to-br from-[#ffc8dd] to-[#ffafcc] border-4 border-white relative group"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
            <i className="fas fa-comment-dots text-3xl text-white drop-shadow-md"></i>
          </button>
        </div>
      )}

      </div>
    </ClickSpark>
  );
};

export default App;
