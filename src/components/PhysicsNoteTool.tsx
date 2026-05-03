/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Search, Orbit, FileText, ChevronLeft, ChevronRight, 
  Trash2, Share2, Download, Minimize2, 
  Zap, PencilLine, History,
  Bold, Italic, Heading1, List,
  Palette, Mic, MicOff
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { 
  collection, query, where, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import { useFirebase } from '../contexts/FirebaseContext';
import { AuthButton } from './AuthButton';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PhysicsCanvas } from './PhysicsCanvas';

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- TYPES ---
interface Note {
  id: string;
  userId: string;
  title: string;
  content: string;
  planet: string;
  createdAt: any;
  updatedAt: any;
  collaborators: string[];
}

const PLANETS = [
  { id: 'Kinematika', name: 'Kinematika', color: 'from-blue-400 to-indigo-600', icon: '🚀' },
  { id: 'Dinamika', name: 'Dinamika', color: 'from-yellow-400 to-orange-500', icon: '⚖️' },
  { id: 'Energjia', name: 'Energjia', color: 'from-purple-400 to-pink-500', icon: '🔥' },
  { id: 'Elektriciteti', name: 'Elektriciteti', color: 'from-red-400 to-rose-600', icon: '⚡' },
  { id: 'Magnetizmi', name: 'Magnetizmi', color: 'from-teal-400 to-emerald-600', icon: '🧲' },
  { id: 'Fizika Kuantike', name: 'F. Kuantike', color: 'from-violet-400 to-purple-600', icon: '⚛️' },
  { id: 'general', name: 'Të tjera', color: 'from-gray-400 to-slate-600', icon: '📝' },
];

const SlashCommands = ({ onSelect }: { onSelect: (cmd: string) => void }) => {
  const commands = [
    { id: 'formula', name: 'Formulë', icon: 'f(x)', desc: 'Shto formulë LaTeX' },
    { id: 'sim', name: 'Simulim', icon: '🧪', desc: 'Shto simulim PhET' },
    { id: 'draw', name: 'Skicë', icon: '🎨', desc: 'Hap hapësirën e skicimit' },
    { id: 'graph', name: 'Grafik', icon: '📈', desc: 'Gjenero grafik fizik' },
  ];

  return (
    <div className="absolute z-50 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-2 w-64 top-full mt-2 animate-in fade-in zoom-in slide-in-from-top-2 duration-200">
      <div className="text-[10px] font-bold text-slate-400 px-3 py-2 uppercase tracking-widest">Komandat e Fizikës</div>
      {commands.map(cmd => (
        <button
          key={cmd.id}
          onClick={() => onSelect(cmd.id)}
          className="w-full flex items-center gap-3 px-3 py-2 hover:bg-slate-50 rounded-xl transition-all group"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-500 group-hover:bg-[#ffafcc] group-hover:text-white transition-colors">
            {cmd.icon}
          </div>
          <div className="text-left">
            <div className="text-sm font-bold text-slate-700">{cmd.name}</div>
            <div className="text-[10px] text-slate-400">{cmd.desc}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

import { ALL_PHYSICS_DATA } from '../constants';

export const PhysicsNoteTool: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { user, profile } = useFirebase();
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [activePlanet, setActivePlanet] = useState<string>('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isStudyMode, setIsStudyMode] = useState(false);
  const [studySubject, setStudySubject] = useState<string>('Kinematika');
  const [showSlash, setShowSlash] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [isDictating, setIsDictating] = useState(false);
  const [selection, setSelection] = useState('');
  const editorRef = useRef<HTMLTextAreaElement>(null);

  // Handle selection for Study Mode
  useEffect(() => {
    const handleSelection = () => {
      const selectedText = window.getSelection()?.toString() || '';
      setSelection(selectedText);
    };
    document.addEventListener('selectionchange', handleSelection);
    return () => document.removeEventListener('selectionchange', handleSelection);
  }, []);

  // Load Notes
  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, 'notes'),
      where('userId', '==', user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Note[];
      setNotes(notesData.sort((a, b) => (b.updatedAt?.seconds || 0) - (a.updatedAt?.seconds || 0)));
    }, (error) => {
      console.error("Firestore Error: ", error);
    });

    return () => unsubscribe();
  }, [user]);

  const handleCreateNote = async () => {
    if (!user) return;
    const newNote = {
      userId: user.uid,
      title: 'Shënim i ri',
      content: '',
      planet: activePlanet === 'all' ? 'general' : activePlanet,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      collaborators: []
    };
    const docRef = await addDoc(collection(db, 'notes'), newNote);
    setActiveNote({ id: docRef.id, ...newNote } as Note);
  };

  const handleUpdateNote = async (id: string, updates: Partial<Note>) => {
    await updateDoc(doc(db, 'notes', id), {
      ...updates,
      updatedAt: serverTimestamp()
    });
  };

  const handleDeleteNote = async (id: string) => {
    if (!confirm('A jeni të sigurt?')) return;
    await deleteDoc(doc(db, 'notes', id));
    if (activeNote?.id === id) setActiveNote(null);
  };

  const handleSlashCommand = (cmd: string) => {
    if (!activeNote || !editorRef.current) return;
    const start = editorRef.current.selectionStart;
    const end = editorRef.current.selectionEnd;
    const text = activeNote.content;
    
    let insertion = '';
    if (cmd === 'formula') insertion = '\n$E=mc^2$\n';
    if (cmd === 'sim') insertion = `\n[Simulimi PhET](https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_sq.html)\n`;
    if (cmd === 'draw') {
      setShowSlash(false);
      setShowCanvas(true);
      return;
    }
    if (cmd === 'graph') insertion = '\n[Grafiku: x=0, y=0]\n';

    const newContent = text.substring(0, start).replace(/\/\w*$/, '') + insertion + text.substring(end);
    handleUpdateNote(activeNote.id, { content: newContent });
    setActiveNote({ ...activeNote, content: newContent });
    setShowSlash(false);
  };

  const exportToPDF = async () => {
    if (!activeNote) return;
    const element = document.getElementById('note-preview');
    if (!element) return;
    
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${activeNote.title}.pdf`);
  };

  const toggleDictation = () => {
    if (isDictating) {
      setIsDictating(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Shfletuesi juaj nuk e mbështet diktimin me zë.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'sq-AL';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    setIsDictating(true);
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      if (activeNote && editorRef.current) {
        const start = editorRef.current.selectionStart;
        const text = activeNote.content;
        const newContent = text.substring(0, start) + transcript + ' ' + text.substring(start);
        handleUpdateNote(activeNote.id, { content: newContent });
        setActiveNote({ ...activeNote, content: newContent });
      }
      setIsDictating(false);
    };
    
    recognition.onerror = () => {
      setIsDictating(false);
    };
    
    recognition.onend = () => {
      setIsDictating(false);
    };
    
    recognition.start();
  };

  return (
    <div className="fixed inset-0 z-[200] bg-white text-slate-800 flex flex-col font-sans overflow-hidden">
      {/* HEADER */}
      <header className="h-16 border-b border-slate-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all text-slate-400 hover:text-slate-600">
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#ffafcc] flex items-center justify-center text-white shadow-sm">
              <PencilLine size={18} />
            </div>
            <h1 className="text-xl font-black tracking-tighter uppercase italic">Shënimet e Fizikës</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsStudyMode(!isStudyMode)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2",
              isStudyMode ? "bg-[#ffafcc] text-white" : "bg-slate-100 text-slate-400 hover:bg-slate-200"
            )}
          >
            <History size={16} /> Mënyra e Studimit
          </button>
          <div className="w-px h-6 bg-slate-100 mx-2" />
          <AuthButton />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* SIDEBAR */}
        <AnimatePresence initial={false}>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 300, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="border-r border-slate-100 flex flex-col bg-slate-50/50"
            >
              <div className="p-4 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Kërko tituj ose formula..."
                    className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#ffafcc] transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setActivePlanet('all')}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all",
                      activePlanet === 'all' ? "bg-[#ffafcc] text-white shadow-lg" : "bg-white border border-slate-100 text-slate-400 hover:bg-slate-50"
                    )}
                  >
                    <Orbit size={14} /> Fushat
                  </button>
                  <button 
                    onClick={handleCreateNote}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold bg-[#4a4e69] text-white shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    <Plus size={14} /> Shënim i Ri
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-4 pb-4 no-scrollbar">
                {/* PLANETS SCROLLBAR-FREE LIST */}
                <div className="space-y-6">
                  {PLANETS.map(planet => (
                    <div key={planet.id}>
                      <div 
                        className={cn(
                          "flex items-center justify-between mb-2 px-2 cursor-pointer group",
                          activePlanet === planet.id ? "text-slate-800" : "text-slate-400"
                        )}
                        onClick={() => setActivePlanet(activePlanet === planet.id ? 'all' : planet.id)}
                      >
                        <div className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest">
                          <span className={cn("inline-block w-2 h-2 rounded-full", activePlanet === planet.id ? "bg-[#ffafcc]" : "bg-slate-200")} />
                          {planet.name}
                        </div>
                        <span className="text-[10px] font-bold bg-slate-200/50 px-2 py-0.5 rounded-full">
                          {notes.filter(n => n.planet === planet.id).length}
                        </span>
                      </div>
                      
                      {activePlanet === planet.id && (
                        <div className="space-y-1 pl-2">
                          {notes.filter(n => n.planet === planet.id).map(note => (
                            <button
                              key={note.id}
                              onClick={() => setActiveNote(note)}
                              className={cn(
                                "w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 group",
                                activeNote?.id === note.id ? "bg-white shadow-md text-slate-800 border-l-4 border-[#ffafcc]" : "text-slate-500 hover:bg-white"
                              )}
                            >
                              <FileText size={14} className={cn(activeNote?.id === note.id ? "text-[#ffafcc]" : "text-slate-300")} />
                              <span className="truncate font-medium">{note.title || 'Pa titull'}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* EDITOR AREA */}
        <main className="flex-1 flex flex-col relative overflow-hidden bg-white">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-6 h-12 bg-white border border-slate-100 rounded-r-lg shadow-md flex items-center justify-center text-slate-300 hover:text-[#ffafcc] transition-all"
          >
            {sidebarOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
          </button>

          {activeNote ? (
            <div className="flex-1 flex flex-col p-8 lg:p-12 max-w-5xl mx-auto w-full">
              {/* NOTE HEADER */}
              <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <input 
                  type="text"
                  value={activeNote.title}
                  onChange={(e) => {
                    const newTitle = e.target.value;
                    setActiveNote({ ...activeNote, title: newTitle });
                    handleUpdateNote(activeNote.id, { title: newTitle });
                  }}
                  placeholder="Shëno titullin..."
                  className="text-4xl lg:text-6xl font-black tracking-tighter outline-none text-slate-800 bg-transparent placeholder:text-slate-100 placeholder:italic flex-1"
                />
                
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 mr-4">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-black">{profile?.username?.charAt(0) || 'U'}</div>
                    {activeNote.collaborators.length > 0 && (
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-[#a2d2ff] flex items-center justify-center text-[10px] font-black text-white">+{activeNote.collaborators.length}</div>
                    )}
                  </div>
                  <button onClick={exportToPDF} className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-[#a2d2ff] hover:text-white transition-all flex items-center justify-center border border-slate-100">
                    <Download size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-[#ffafcc] hover:text-white transition-all flex items-center justify-center border border-slate-100">
                    <Share2 size={18} />
                  </button>
                  <button onClick={() => handleDeleteNote(activeNote.id)} className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center border border-slate-100">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {/* EDITOR GRID */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden">
                {/* WRITER */}
                <div className="relative flex flex-col h-full bg-[#fcf9ff] rounded-[2.5rem] border border-slate-100/50 p-6 shadow-inner">
                  <div className="flex items-center gap-4 mb-4 border-b border-white pb-4">
                    <button 
                      onClick={() => {
                        if (!activeNote || !editorRef.current) return;
                        const start = editorRef.current.selectionStart;
                        const end = editorRef.current.selectionEnd;
                        const text = activeNote.content;
                        const newContent = text.substring(0, start) + '**' + text.substring(start, end) + '**' + text.substring(end);
                        handleUpdateNote(activeNote.id, { content: newContent });
                        setActiveNote({ ...activeNote, content: newContent });
                      }}
                      className="p-1 hover:bg-white rounded text-slate-400"
                    >
                      <Bold size={14}/>
                    </button>
                    <button 
                      onClick={() => {
                        if (!activeNote || !editorRef.current) return;
                        const start = editorRef.current.selectionStart;
                        const end = editorRef.current.selectionEnd;
                        const text = activeNote.content;
                        const newContent = text.substring(0, start) + '*' + text.substring(start, end) + '*' + text.substring(end);
                        handleUpdateNote(activeNote.id, { content: newContent });
                        setActiveNote({ ...activeNote, content: newContent });
                      }}
                      className="p-1 hover:bg-white rounded text-slate-400"
                    >
                      <Italic size={14}/>
                    </button>
                    <button 
                      onClick={() => {
                        if (!activeNote || !editorRef.current) return;
                        const start = editorRef.current.selectionStart;
                        const text = activeNote.content;
                        const newContent = text.substring(0, start) + '\n# ' + text.substring(start);
                        handleUpdateNote(activeNote.id, { content: newContent });
                        setActiveNote({ ...activeNote, content: newContent });
                      }}
                      className="p-1 hover:bg-white rounded text-slate-400"
                    >
                      <Heading1 size={14}/>
                    </button>
                    <button 
                      onClick={() => {
                        if (!activeNote || !editorRef.current) return;
                        const start = editorRef.current.selectionStart;
                        const text = activeNote.content;
                        const newContent = text.substring(0, start) + '\n- ' + text.substring(start);
                        handleUpdateNote(activeNote.id, { content: newContent });
                        setActiveNote({ ...activeNote, content: newContent });
                      }}
                      className="p-1 hover:bg-white rounded text-slate-400"
                    >
                      <List size={14}/>
                    </button>
                    <button 
                      onClick={() => {
                        setShowSlash(false);
                        setShowCanvas(true);
                      }}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[#ffafcc]/10 text-[#ffafcc] hover:bg-[#ffafcc]/20 rounded-lg transition-colors ml-auto font-bold text-xs"
                      title="Vendos gjeometri interaktive ose vizatim"
                    >
                      <Palette size={14}/>
                      Vizato
                    </button>
                    <button 
                      onClick={toggleDictation}
                      className={cn("flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors font-bold text-xs", isDictating ? "bg-red-500 text-white animate-pulse" : "bg-[#a2d2ff]/10 text-[#a2d2ff] hover:bg-[#a2d2ff]/20")}
                      title="Kthe zërin në tekst (Shqip)"
                    >
                      {isDictating ? <MicOff size={14} /> : <Mic size={14} />}
                      {isDictating ? 'Duke dëgjuar...' : 'Dikto'}
                    </button>
                  </div>
                  <textarea 
                    ref={editorRef}
                    value={activeNote.content}
                    onChange={(e) => {
                      const newContent = e.target.value;
                      setActiveNote({ ...activeNote, content: newContent });
                      handleUpdateNote(activeNote.id, { content: newContent });
                      
                      // Slash logic
                      const textarea = e.target;
                      const lastChar = newContent.slice(0, textarea.selectionStart).split('').pop();
                      if (lastChar === '/') {
                        setShowSlash(true);
                      } else {
                        setShowSlash(false);
                      }
                    }}
                    placeholder="Shtypni / për komanda të shpejta..."
                    className="flex-1 bg-transparent resize-none outline-none font-mono text-lg text-slate-600 leading-relaxed placeholder:text-slate-200"
                  />
                  {showSlash && <SlashCommands onSelect={handleSlashCommand} />}
                </div>

                {/* PREVIEW */}
                <div id="note-preview" className="bg-white rounded-[2.5rem] border border-slate-100 p-10 overflow-y-auto prose prose-slate prose-lg max-w-none shadow-sm no-scrollbar">
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ffafcc] mb-8 border-b border-[#ffafcc]/10 pb-4 flex items-center justify-between">
                    <span>Pamja Paraprake (Live)</span>
                    <span className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Pulsar Fizik Aktiv
                    </span>
                  </div>
                  <ReactMarkdown>{activeNote.content || '*Shkruani diçka për të parë magjinë...*'}</ReactMarkdown>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-slate-50/20">
              <div className="w-32 h-32 bg-white rounded-[2.5rem] shadow-xl flex items-center justify-center text-slate-100 mb-8 relative">
                 <div className="absolute inset-0 border-4 border-dashed border-slate-100 rounded-[2.5rem] animate-[spin_20s_linear_infinite]" />
                 <Orbit size={48} className="text-[#ffafcc]" />
              </div>
              <h2 className="text-3xl font-black tracking-tighter text-slate-800 mb-4">Fusha e Shënimeve</h2>
              <p className="text-slate-400 max-w-md mx-auto font-medium leading-relaxed mb-8">
                Zgjidhni një fushë majtas ose krijoni një shënim të ri për të filluar arkivimin e dijes tuaj fizike.
              </p>
              <button 
                onClick={handleCreateNote}
                className="px-10 py-5 bg-[#ffafcc] text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4"
              >
                FILLONI TANI <Plus size={24} />
              </button>
            </div>
          )}
        </main>

        {/* SIDE STUDY MODE */}
        {isStudyMode && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="w-[450px] border-l border-slate-100 bg-white flex flex-col shadow-2xl relative z-50"
          >
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#a2d2ff] flex items-center justify-center text-white">
                    <History size={16} />
                  </div>
                  <span className="text-sm font-black uppercase tracking-wider">Biblioteka e Fizikës</span>
               </div>
               <button onClick={() => setIsStudyMode(false)} className="w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center">
                 <Minimize2 size={16} />
               </button>
            </div>

            {/* SUBJECT SELECTOR */}
            <div className="p-4 border-b border-slate-100 bg-white">
               <select 
                 value={studySubject}
                 onChange={(e) => setStudySubject(e.target.value)}
                 className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-widest outline-none focus:border-[#a2d2ff] transition-all"
               >
                 {Object.keys(ALL_PHYSICS_DATA).map(sub => (
                   <option key={sub} value={sub}>{sub}</option>
                 ))}
               </select>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8 select-text no-scrollbar bg-white">
               {(ALL_PHYSICS_DATA as Record<string, {name: string; nature?: string; sym?: string; form?: string; unit?: string; otherUnits?: string; teTjera?: string; desc: string; ushtrime?: string; ushtrimInteraktiv?: { pyetja: string; zgjidhja: string; hapi1: string; hapi2: string; hapi3: string; }}[]>)[studySubject]?.map((item) => (
                 <div key={item.name} className="space-y-4 pb-8 border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-all rounded-3xl p-4 -mx-4 group">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-black tracking-tight text-slate-800">{item.name}</h4>
                      <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-400 uppercase">{item.nature}</span>
                    </div>
                    
                    <div className="bg-[#fcf9ff] p-6 rounded-3xl border border-slate-100 group-hover:border-[#a2d2ff]/30 transition-all shadow-sm">
                       <code 
                         className="text-xl font-mono font-black text-[#ffafcc] block mb-2"
                         dangerouslySetInnerHTML={{ __html: item.form || '' }}
                       />
                       <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Ekuacioni Kryesor</div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100/50">
                         <div className="text-[10px] font-black text-blue-600 uppercase tracking-wider mb-1">Njësia SI</div>
                         <div className="font-bold text-slate-700">{item.unit}</div>
                       </div>
                       <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100/50">
                         <div className="text-[10px] font-black text-purple-600 uppercase tracking-wider mb-1">Simboli</div>
                         <div className="font-bold text-slate-700" dangerouslySetInnerHTML={{ __html: item.sym || '' }} />
                       </div>
                    </div>

                    {/* USHTRIMI */}
                    {item.ushtrimInteraktiv && (
                      <div className="bg-slate-50 rounded-2xl p-4 border border-dashed border-slate-200">
                        <div className="flex items-center gap-2 mb-2 text-[#4a4e69]">
                           <Zap size={14} className="text-[#ffafcc]" />
                           <span className="text-[10px] font-black uppercase tracking-widest">Sfidë e Shpejtë</span>
                        </div>
                        <p className="text-xs font-medium text-slate-600 mb-3">{item.ushtrimInteraktiv.pyetja}</p>
                        <details className="cursor-pointer group/details">
                          <summary className="text-[10px] font-black text-[#ffafcc] uppercase tracking-widest list-none flex items-center justify-between">
                            <span>Shih Zgjidhjen</span>
                            <ChevronRight size={12} className="group-open/details:rotate-90 transition-transform" />
                          </summary>
                          <div className="mt-3 text-xs bg-white p-3 rounded-xl border border-slate-100 animate-in fade-in slide-in-from-top-2">
                             <div className="space-y-1 text-slate-500 italic">
                                <div>1. {item.ushtrimInteraktiv.hapi1}</div>
                                <div>2. {item.ushtrimInteraktiv.hapi2}</div>
                                <div>3. {item.ushtrimInteraktiv.hapi3}</div>
                             </div>
                             <div className="mt-2 pt-2 border-t border-slate-50 font-black text-[#ffafcc]">
                               Përfundimi: {item.ushtrimInteraktiv.zgjidhja} {item.unit}
                             </div>
                          </div>
                        </details>
                      </div>
                    )}
                 </div>
               ))}
            </div>
            
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-[10px] font-bold text-slate-400 text-center uppercase tracking-widest">
              Nënvizoni tekstin për ta dërguar te shënimet 🚀
            </div>

            {/* SELECTION POPUP */}
            <AnimatePresence>
              {selection && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => {
                    if (selection && activeNote) {
                      const newContent = activeNote.content + `\n\n> **${selection}**\n\n[Burimi: ${studySubject}]`;
                      handleUpdateNote(activeNote.id, { content: newContent });
                      setActiveNote({ ...activeNote, content: newContent });
                      window.getSelection()?.removeAllRanges();
                      setSelection('');
                    } else if (!activeNote) {
                      alert('Ju lutem hapni një shënim së pari!');
                    }
                  }}
                  className="fixed bottom-10 right-[470px] z-[100] px-6 py-4 bg-[#4a4e69] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all"
                >
                  Dërgo te Shënimet <Plus size={16} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {showCanvas && (
        <PhysicsCanvas 
          onClose={() => setShowCanvas(false)} 
          onInsert={(imageData) => {
            if (!activeNote || !editorRef.current) return;
            const start = editorRef.current.selectionStart;
            const text = activeNote.content;
            const insertion = `\n![Skicë Fizike](${imageData})\n`;
            const newContent = text.substring(0, start).replace(/\/\w*$/, '') + insertion + text.substring(start);
            handleUpdateNote(activeNote.id, { content: newContent });
            setActiveNote({ ...activeNote, content: newContent });
          }} 
        />
      )}
    </div>
  );
};
