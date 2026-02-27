
import React, { useState, useMemo } from 'react';
import { ALL_PHYSICS_DATA, GAMES } from './constants';
import { DIGITAL_GAMES } from './gameContent';
import { PhysicsTerm, CategoryName, DigitalGame } from './types';
import { askAlbertEinstein } from './aiService';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isWarping, setIsWarping] = useState(false);
  const [activePage, setActivePage] = useState<'home' | 'category' | 'details' | 'games'>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<PhysicsTerm | null>(null);
  const [gameFilter, setGameFilter] = useState<'home' | 'school' | 'digital'>('digital');
  const [searchTerm, setSearchTerm] = useState("");
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  
  const handleSendMessage = async () => {
    if (!chatInput.trim() || !selectedTerm || isChatLoading) return;

    const userMsg = chatInput.trim();
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput("");
    setIsChatLoading(true);

    try {
      const response = await askAlbertEinstein(
        selectedTerm.name,
        selectedTerm.desc,
        userMsg
      );
      setChatMessages(prev => [...prev, { role: 'ai', text: response }]);
    } catch {
      setChatMessages(prev => [...prev, { role: 'ai', text: "Më vjen keq, diçka shkoi gabim. Provojeni përsëri!" }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleStart = () => {
    setIsWarping(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 800);
  };

  const navigate = (page: 'home' | 'category' | 'details' | 'games', data?: CategoryName | PhysicsTerm | null) => {
    if (page === 'category') setSelectedCategory(data as CategoryName);
    if (page === 'details') {
        setSelectedTerm(data as PhysicsTerm);
        setChatMessages([]);
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

          <h1 className="text-6xl md:text-8xl font-black text-[#4a4e69] tracking-tighter mb-12 animate__animated animate__fadeInUp font-orbitron">
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
    <div className="min-h-screen bg-[#fcf9ff] text-[#4a4e69] font-sans">
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
            <button 
              onClick={() => navigate('games')} 
              className="bg-[#4a4e69] text-white px-8 md:px-10 py-4 rounded-[1.8rem] text-[10px] font-black shadow-xl hover:scale-110 active:scale-95 transition-all uppercase tracking-[0.2em] flex items-center gap-3"
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {ALL_PHYSICS_DATA[selectedCategory].map((term, i) => (
                <div 
                  key={i}
                  onClick={() => navigate('details', term)}
                  className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-sm hover:shadow-xl transition-all cursor-pointer border border-transparent hover:border-[#ffafcc]/20 group flex flex-col h-48 md:h-60 justify-between card-fusha"
                >
                  <div className="text-[8px] md:text-[10px] font-black text-[#ffafcc] uppercase tracking-[0.4em]">{term.sym}</div>
                  <h4 className="text-lg md:text-3xl font-black group-hover:text-[#ffafcc] transition-colors leading-none tracking-tighter">{term.name}</h4>
                  <div className="flex items-center gap-2 text-slate-300 font-black uppercase text-[9px] tracking-[0.2em] group-hover:text-slate-800 transition-colors">
                    DETAJET <i className="fas fa-arrow-right text-[7px] ml-1"></i>
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
            <div className="bg-white rounded-[4rem] shadow-2xl p-12 md:p-16 border-[8px] border-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="mb-12">
                        <span className="px-6 py-2 bg-[#f8fafc] text-slate-400 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-8 inline-block border border-slate-50">Kuptimi Shkencor</span>
                        <h2 className="text-6xl font-black tracking-tighter leading-[0.8] text-slate-800">{selectedTerm.name}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-[#fcfcff] p-8 rounded-[3rem] border border-slate-50 flex flex-col items-center justify-center text-center shadow-inner">
                            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Simboli</p>
                            <p className="text-6xl font-mono font-black text-[#ffafcc]">{selectedTerm.sym}</p>
                        </div>
                        <div className="bg-[#fcfcff] p-8 rounded-[3rem] border border-slate-50 flex flex-col items-center justify-center text-center shadow-inner">
                            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Njësia SI</p>
                            <p className="text-5xl font-black text-slate-800">{selectedTerm.unit}</p>
                        </div>
                        <div className="bg-[#fcfcff] p-8 rounded-[3rem] border border-slate-50 flex flex-col items-center justify-center text-center shadow-inner">
                            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Natyra</p>
                            <p className="text-4xl font-black text-[#4a4e69]">{selectedTerm.nature}</p>
                        </div>
                    </div>
                    
                    {selectedTerm.otherUnits && (
                      <div className="mb-12 bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-50">
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mb-3 ml-6">Njësi të tjera</p>
                        <p className="text-2xl font-bold text-slate-600 ml-6">{selectedTerm.otherUnits}</p>
                      </div>
                    )}

                    {selectedTerm.teTjera && (
                      <div className="mb-12 bg-[#f8fafc] p-8 rounded-[2.5rem] border border-slate-50">
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mb-3 ml-6">Të tjera</p>
                        <p className="text-2xl font-bold text-slate-600 ml-6">{selectedTerm.teTjera}</p>
                      </div>
                    )}

                    <div className="bg-[#4a4e69] text-white p-16 rounded-[3.5rem] mb-16 text-center shadow-2xl relative">
                        <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.6em] mb-6">Formula Kryesore</p>
                        <code className="text-5xl md:text-7xl font-mono font-black text-[#ffc8dd]">{selectedTerm.form}</code>
                    </div>
                    <div className="mb-20">
                        <h4 className="text-sm font-black text-[#ffafcc] uppercase tracking-[0.5em] mb-6">Kuptimi fizik</h4>
                        <p className="text-3xl text-slate-600/90 leading-tight font-medium tracking-tight">{selectedTerm.desc}</p>
                    </div>

                    {/* Interactive Game Row */}
                    {selectedTerm.phetUrl && (
                      <div className="pt-12 border-t border-slate-100">
                          <div className="bg-[#f8fafc] p-8 rounded-[3rem] border border-slate-50 flex items-center justify-between shadow-inner">
                              <div className="flex items-center gap-6 ml-6">
                                  <div className="w-16 h-16 bg-[#4a4e69] text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                                      <i className="fas fa-gamepad"></i>
                                  </div>
                                  <div>
                                      <h4 className="text-2xl font-black tracking-tight">Loja Interaktive</h4>
                                      <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">EKSPERIMENTO DUKE LUAJTUR</p>
                                  </div>
                              </div>
                              <a 
                                  href={selectedTerm.phetUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="mr-6 px-12 py-4 bg-[#ffafcc] text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-[#ff8fab] transition-all shadow-xl flex items-center gap-3"
                              >
                                  LUAJ LOJEN <i className="fas fa-play text-[8px]"></i>
                              </a>
                          </div>
                      </div>
                    )}

                    {/* Interactive Book Row */}
                    {selectedTerm.html && (
                      <div className="pt-12 border-t border-slate-100">
                          <div className="bg-[#f8fafc] p-8 rounded-[3rem] border border-slate-50 flex items-center justify-between shadow-inner">
                              <div className="flex items-center gap-6 ml-6">
                                  <div className="w-16 h-16 bg-[#ff758f] text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                                      <i className="fas fa-book-open"></i>
                                  </div>
                                  <div>
                                      <h4 className="text-2xl font-black tracking-tight">Libri Interaktiv</h4>
                                      <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">EKSPLORO LIBRIN E PLOTË</p>
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
                                  className="mr-6 px-12 py-4 bg-[#ff758f] text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-[#ff4d6d] transition-all shadow-xl flex items-center gap-3"
                              >
                                  HAP LIBRIN <i className="fas fa-external-link-alt text-[8px]"></i>
                              </button>
                          </div>
                      </div>
                    )}

                    {/* AI Chat Section */}
                    <div className="mt-20 pt-12 border-t border-slate-100">
                      <div className="flex items-center gap-6 mb-10">
                        <div className="w-16 h-16 bg-[#ffafcc] text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                          <i className="fas fa-user-tie"></i>
                        </div>
                        <div>
                          <h4 className="text-2xl font-black tracking-tight">Pyet Albert Einstein</h4>
                          <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">AI CHATBOT INTERAKTIV</p>
                        </div>
                      </div>

                      <div className="bg-[#f8fafc] rounded-[3rem] p-8 border border-slate-50 shadow-inner">
                        <div className="max-h-[400px] overflow-y-auto mb-8 space-y-6 px-4">
                          {chatMessages.length === 0 && (
                            <div className="text-center py-10">
                              <p className="text-slate-400 italic text-xl">"Imagjinata është më e rëndësishme se dija."</p>
                              <p className="text-slate-300 text-sm mt-2">- Albert Einstein</p>
                            </div>
                          )}
                          {chatMessages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-[80%] p-6 rounded-[2rem] text-xl font-medium leading-tight shadow-sm ${
                                msg.role === 'user' 
                                  ? 'bg-[#4a4e69] text-white rounded-tr-none' 
                                  : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                              }`}>
                                {msg.text}
                              </div>
                            </div>
                          ))}
                          {isChatLoading && (
                            <div className="flex justify-start">
                              <div className="bg-white text-slate-400 p-6 rounded-[2rem] rounded-tl-none border border-slate-100 italic animate-pulse">
                                Albert po mendon...
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="relative">
                          <input 
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Pyet diçka rreth këtij termi..."
                            className="w-full bg-white border-4 border-white shadow-xl rounded-[2.5rem] px-10 py-6 text-xl focus:outline-none focus:border-[#ffafcc]/30 transition-all pr-24"
                          />
                          <button 
                            onClick={handleSendMessage}
                            disabled={isChatLoading || !chatInput.trim()}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#ffafcc] text-white rounded-full flex items-center justify-center hover:bg-[#ff8fab] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                          >
                            <i className="fas fa-paper-plane"></i>
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
             <button onClick={() => navigate('home')} className="mb-12 flex items-center gap-4 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ffafcc] transition-colors">
              <i className="fas fa-arrow-left"></i> Kthehu mbrapa
            </button>
            <div className="text-center mb-24">
                <h2 className="text-9xl font-black mb-12 tracking-tighter text-slate-800 leading-none">Sfida & Lojëra</h2>
                <div className="flex justify-center p-4 bg-white/60 backdrop-blur-2xl rounded-[4.5rem] w-fit mx-auto border-4 border-white shadow-2xl">
                    <button onClick={() => setGameFilter('digital')} className={`px-14 py-7 rounded-[3.5rem] font-black text-[11px] tracking-[0.4em] transition-all ${gameFilter === 'digital' ? 'bg-[#4a4e69] text-white shadow-2xl' : 'text-slate-400 hover:text-[#4a4e69]'}`}>DIGJITALE</button>
                    <button onClick={() => setGameFilter('home')} className={`px-14 py-7 rounded-[3.5rem] font-black text-[11px] tracking-[0.4em] transition-all ${gameFilter === 'home' ? 'bg-[#4a4e69] text-white shadow-2xl' : 'text-slate-400 hover:text-[#4a4e69]'}`}>EKSPERIMENTE</button>
                    <button onClick={() => setGameFilter('school')} className={`px-14 py-7 rounded-[3.5rem] font-black text-[11px] tracking-[0.4em] transition-all ${gameFilter === 'school' ? 'bg-[#4a4e69] text-white shadow-2xl' : 'text-slate-400 hover:text-[#4a4e69]'}`}>SHKOLLË</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                {gameFilter === 'digital' ? DIGITAL_GAMES.filter(g => g.type !== 'school').map((game, i) => (
                    <div key={i} onClick={() => handlePlayGame(game)} className="bg-white p-16 rounded-[5rem] shadow-sm hover:shadow-2xl transition-all cursor-pointer border-4 border-transparent hover:border-[#bde0fe]/40 group h-[480px] flex flex-col justify-between card-fusha">
                        <div className="flex items-center gap-12">
                            <div className="w-32 h-32 bg-[#bde0fe]/20 text-slate-800 rounded-[3rem] flex items-center justify-center text-5xl group-hover:bg-[#4a4e69] group-hover:text-white transition-all shadow-inner">
                                <i className="fas fa-gamepad"></i>
                            </div>
                            <h4 className="text-5xl font-black tracking-tighter leading-tight">{game.title}</h4>
                        </div>
                        <button className="w-full py-9 bg-[#f8fafc] rounded-[3rem] font-black text-[11px] uppercase tracking-[0.5em] group-hover:bg-[#ffafcc] group-hover:text-white transition-all">LUAJ TANI</button>
                    </div>
                )) : gameFilter === 'school' ? DIGITAL_GAMES.filter(g => g.type === 'school').map((game, i) => (
                    <div key={i} onClick={() => handlePlayGame(game)} className="bg-white p-16 rounded-[5rem] shadow-sm hover:shadow-2xl transition-all cursor-pointer border-4 border-transparent hover:border-[#ffc8dd]/40 group h-[480px] flex flex-col justify-between card-fusha">
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
                        <p className="text-slate-400 mb-12 text-3xl leading-relaxed font-medium italic">"{game.description}"</p>
                        
                        <div className="mb-12">
                            <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-6">Materialet:</h5>
                            <div className="flex flex-wrap gap-4">
                                {game.materials.map((m, idx) => (
                                    <span key={idx} className="px-6 py-2 bg-[#f8fafc] text-slate-600 rounded-2xl text-sm font-bold border border-slate-50">{m}</span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-6">Hapat:</h5>
                            {game.steps.map((s, idx) => (
                                <div key={idx} className="flex gap-8 items-start">
                                    <span className="w-10 h-10 bg-[#ffafcc] text-white rounded-[1rem] flex items-center justify-center text-sm font-black shadow-lg shrink-0">{idx+1}</span>
                                    <p className="text-xl font-bold text-slate-600/90 leading-tight">{s}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
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

    </div>
  );
};

export default App;
