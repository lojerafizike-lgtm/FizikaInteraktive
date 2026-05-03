/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { PhysicsTerm, DigitalGame } from '../types';
import { instrumentsData, buildSim } from '../instrumentsData';
import '../instruments.css';
import { DIGITAL_GAMES } from '../gameContent';
import DinamikaGameContainer from './DinamikaGameContainer';
import KinematikaGameContainer from './KinematikaGameContainer';
import GameWrapper from './GameWrapper';
import KuicTab from './KuicTab';
import { generateInterestExplanation, extractLessonFromImage } from '../aiService';
import { TERMS_DATA } from '../data/termsData';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { Gamepad2, Trophy, Headphones, ChefHat, ArrowRight, Zap, Brain, Rocket, Atom, Flame, Target, Infinity as InfinityIcon, Activity, Anchor, Compass, Sun, Moon, Star, Droplet, Lightbulb, Magnet, Camera } from 'lucide-react';

const IconMap: Record<string, any> = {
  Zap, Brain, Rocket, Atom, Flame, Target, Infinity: InfinityIcon, Activity, Anchor, Compass, Sun, Moon, Star, Droplet, Lightbulb, Magnet
};
import { ReactFlow, Background, Controls, Handle, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from 'dagre';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes: any[], edges: any[], direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction, ranksep: 200, nodesep: 250 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: 300, height: 200 });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const newNode = {
      ...node,
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',
      position: {
        x: nodeWithPosition.x - 90,
        y: nodeWithPosition.y - 60,
      },
    };
    return newNode;
  });

  return { nodes: newNodes, edges };
};

const GlassNode = ({ data }: any) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const isEmoji = data.icon && data.icon.length <= 4 && !IconMap[data.icon];
  const IconComponent = IconMap[data.icon] || Lightbulb;

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 px-10 rounded-[2rem] backdrop-blur-xl bg-white/70 border-2 transition-all duration-300 cursor-pointer min-w-[200px] flex flex-col items-center justify-center gap-3"
      style={{ 
        borderColor: data.color_theme || '#cbd5e1', 
        boxShadow: isHovered 
          ? `0 0 25px ${data.color_theme || '#cbd5e1'}`
          : `0 10px 15px -3px ${data.color_theme ? data.color_theme + '40' : 'rgba(0,0,0,0.1)'}`,
        transform: isHovered ? 'translateY(-5px) scale(1.05)' : 'none',
      }}
    >
      <Handle type="target" position={Position.Top} className="w-4 h-4 bg-slate-300 border-2 border-white transition-colors" style={{ backgroundColor: data.color_theme }} />
      
      {isEmoji ? (
        <div className="text-4xl filter drop-shadow-md transform transition-transform group-hover:scale-110">{data.icon}</div>
      ) : (
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl text-white shadow-lg mb-2 transform transition-transform group-hover:scale-110" style={{ backgroundColor: data.color_theme || '#4a4e69' }}>
          {React.createElement(IconComponent, { size: 32, strokeWidth: 2.5 })}
        </div>
      )}

      <div className="font-black text-center text-slate-800 leading-tight text-lg">{data.label}</div>
      {data.type && <div className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/80 rounded-full shadow-sm" style={{ color: data.color_theme }}>{data.type}</div>}
      <Handle type="source" position={Position.Bottom} className="w-4 h-4 bg-slate-300 border-2 border-white transition-colors" style={{ backgroundColor: data.color_theme }} />
    </div>
  );
};

const nodeTypes = { glass: GlassNode };

const MindMapRenderer = ({ json }: { json: any }) => {
  const [selectedNode, setSelectedNode] = React.useState<any>(null);

  const initialNodes = json.nodes?.map((n: any) => ({
    id: n.id,
    type: 'glass',
    data: n.data || n,
    position: { x: 0, y: 0 }
  })) || [];
  
  const initialEdges = json.edges?.map((e: any) => ({
    id: e.id,
    source: e.source,
    target: e.target,
    type: e.type || 'smoothstep',
    animated: true,
    label: e.label,
    labelStyle: { fill: '#1e293b', fontWeight: 900, fontSize: 18, textTransform: 'uppercase' as const, letterSpacing: '0.05em' },
    labelBgStyle: { fill: '#ffffff', stroke: '#94a3b8', strokeWidth: 3, rx: 12, ry: 12 },
    labelBgPadding: [16, 12],
    style: { 
      stroke: e.strength === 'primary' ? '#4a4e69' : '#94a3b8', 
      strokeWidth: e.strength === 'primary' ? 4 : 2,
      strokeDasharray: e.strength === 'secondary' ? '5,5' : 'none',
    }
  })) || [];

  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialNodes, initialEdges);

  return (
    <div className="w-full h-[700px] border border-slate-100 rounded-3xl overflow-hidden bg-gradient-to-br from-[#f8fafc] to-white shadow-inner my-8 relative flex">
      <div className="flex-1 relative group">
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm text-xs font-bold text-slate-500 border border-slate-100 transition-opacity">
          <i className="fas fa-mouse-pointer text-[#a2d2ff]"></i>
          <span>Kliko mbi kartat për detaje</span>
        </div>

        <ReactFlow 
          nodes={layoutedNodes} 
          edges={layoutedEdges} 
          nodeTypes={nodeTypes}
          onNodeClick={(e, node) => setSelectedNode(node)}
          onPaneClick={() => setSelectedNode(null)}
          fitView
          attributionPosition="bottom-right"
        >
          <Background gap={24} size={2} color="#cbd5e1" className="opacity-40" />
          <Controls className="bg-white border-2 border-slate-100 rounded-xl overflow-hidden shadow-lg mx-6 my-6" />
        </ReactFlow>
      </div>

      <AnimatePresence>
        {selectedNode && selectedNode.data?.onHover && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute top-0 right-0 w-80 md:w-96 h-full bg-slate-900/95 backdrop-blur-3xl border-l border-slate-700 shadow-2xl z-50 flex flex-col"
          >
            <div className="p-6 border-b border-slate-700/50 flex justify-between items-center">
              <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: selectedNode.data.color_theme + '30', color: selectedNode.data.color_theme || '#a2d2ff' }}>
                {selectedNode.data.label}
              </span>
              <button 
                onClick={() => setSelectedNode(null)} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                ✖
              </button>
            </div>
            <div className="p-8 flex-1 overflow-y-auto">
                <div className="font-black mb-6 text-[#ffafcc] tracking-widest uppercase text-xs flex items-center gap-3">
                  <Lightbulb size={24} className="text-yellow-400" /> FAKT FIZIK
                </div>
                <div className="text-slate-100 text-base leading-loose font-medium">
                  {selectedNode.data.onHover}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface TermDetailsTabsProps {
  term: PhysicsTerm;
  onPlayDigitalGame?: (game: DigitalGame) => void;
}

const INTERESTS = [
  { id: 'Gaming', icon: <Gamepad2 size={32} strokeWidth={2.5} className="text-[#a2d2ff] filter drop-shadow-md" />, label: 'Gaming' },
  { id: 'Football', icon: <Trophy size={32} strokeWidth={2.5} className="text-[#ffd166] filter drop-shadow-md" />, label: 'Futboll' },
  { id: 'Music', icon: <Headphones size={32} strokeWidth={2.5} className="text-[#cdb4db] filter drop-shadow-md" />, label: 'Muzikë' },
  { id: 'Cooking', icon: <ChefHat size={32} strokeWidth={2.5} className="text-[#ffafcc] filter drop-shadow-md" />, label: 'Gatim' },
];

const TermDetailsTabs: React.FC<TermDetailsTabsProps> = ({ term, onPlayDigitalGame }) => {
  const [activeTab, setActiveTab] = useState<'mjet' | 'video' | 'foto' | 'ushtrime' | 'loje' | 'kuic'>('mjet');
  const [showSolutionPanel, setShowSolutionPanel] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  // Learn Your Way State
  const [activeInterest, setActiveInterest] = useState<{ id: string, label: string, icon: React.ReactNode } | null>(null);
  const [interestContent, setInterestContent] = useState<string | null>(null);
  const [isGeneratingInterest, setIsGeneratingInterest] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<{ base64: string, mimeType: string, url: string } | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeInterest) {
      if (!file.type.startsWith('image/')) {
        alert("Ju lutem ngarkoni vetëm imazhe (JPEG, PNG, etj).");
        return;
      }
      setIsGeneratingInterest(true); 
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        const base64Data = base64String.split(',')[1];
        setUploadedImage({
          base64: base64Data,
          mimeType: file.type,
          url: base64String
        });
        
        const result = await extractLessonFromImage(base64Data, file.type, activeInterest.id);
        setInterestContent(result);
        setIsGeneratingInterest(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const getStaticInterestExplanation = (termName: string, interestLabel: string) => {
    let categoryKey = 'gaming';
    if (interestLabel === 'Muzikë') categoryKey = 'muzike';
    else if (interestLabel === 'Gatim') categoryKey = 'gatim';
    else if (interestLabel === 'Sport' || interestLabel === 'Futboll') categoryKey = 'futboll';
    else if (interestLabel === 'Gaming') categoryKey = 'gaming';

    const termData = TERMS_DATA.find(t => t.emri === termName || termName.includes(t.emri));

    if (termData && (termData as any)[categoryKey]) {
      const data = (termData as any)[categoryKey];
      const nodes = data.mindmap.split('|').map((s: string) => s.trim());
      
      const mindmapJson = {
        nodes: [
          { id: "1", data: { label: termData.emri.split('. ')[1] || termData.emri, type: "KONCEPT", color_theme: "#a2d2ff", icon: "Brain", onHover: "Koncepti bazë i fizikës" } },
          ...nodes.map((node: string, idx: number) => ({
            id: `node-${idx + 2}`, data: { label: node, type: "LIDHJE", color_theme: "#ffafcc", icon: "Target" }
          }))
        ],
        edges: nodes.map((_: any, idx: number) => ({
          id: `e1-node-${idx + 2}`, source: "1", target: `node-${idx + 2}`, type: "smoothstep"
        }))
      };

      return `> ### Ngjashmëria Kuptimore
> ${data.ngjashmeri}

> ### Sfida e Mendimit
${data.sfida.map((sfida: string, idx: number) => `> **${idx + 1}.** ${sfida}`).join('\n')}

\`\`\`json mindmap
${JSON.stringify(mindmapJson, null, 2)}
\`\`\`

> ### Pyetja e Mirëfilltë
> **Pyetja:** ${data.pyetja}
> 
> **Përgjigja:** ${data.pergjigja}
`;
    }

    return `> ### Ngjashmëria Kuptimore
> Koncepti i **${termName}** lidhet ngushtë me atë çfarë ndodh në **${interestLabel}**. Imagjino sikur gjithçka që bën është e programuar nga rregullat e fizikës! Në thelb, është njësoj si skemat që përdor përditë, thjesht e shpjeguar me gjuhën e shkencës.

> ### Sfida e Mendimit
> Çfarë do të ndodhte nëse rregullat e **${termName}** do të "fikeshin" për një moment gjatë momentit tënd të preferuar në ${interestLabel}? Skenari do të ishte totalisht i paparashikueshëm!

\`\`\`json mindmap
{
  "nodes": [
    { "id": "1", "data": { "label": "${termName}", "type": "KONCEPT", "color_theme": "#a2d2ff", "icon": "Brain", "onHover": "Koncepti bazë i fizikës" } },
    { "id": "2", "data": { "label": "${interestLabel}", "type": "ZBATIM", "color_theme": "#ffafcc", "icon": "Target", "onHover": "Lidhja me interesin tënd" } }
  ],
  "edges": [
    { "id": "e1-2", "source": "1", "target": "2", "label": "lidhet drejtpërdrejt me", "type": "smoothstep", "strength": "primary" }
  ]
}
\`\`\`

> ### Pyetja e Mirëfilltë
> Nëse je kaq i zoti në ${interestLabel}, a mendon se duke kuptuar ligjet thelbësore të **${termName}** mund t'i japësh vetes një avantazh - gati si një 'cheat code' në jetën reale? Si do ta përdorje këtë njohuri?
`;
  };

  const triggerFileInput = () => {
    document.getElementById('lesson-image-upload')?.click();
  };
  
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
    ...(term.kuic ? [{ id: 'kuic', icon: '📝', label: 'Kuice', color: 'bg-[#ffb703] text-white' }] : []),
    ...(term.catName === 'Dinamika' || term.catName === 'Kinematika' || term.gameUrl || term.digitalGameId ? [{ id: 'loje', icon: '🎮', label: 'Lojë', color: 'bg-[#4a4e69] text-white' }] : [])
  ];

  if (term.name !== currentTermName) {
    setCurrentTermName(term.name);
    setActiveTab(matchedInstrument ? 'mjet' : 'video');
    setShowSolutionPanel(false);
    setShowSteps(false);
    setUserAnswer('');
    setIsCorrect(null);
    setActiveInterest(null);
    setInterestContent(null);
  }

  // Ensure activeTab is valid if matchedInstrument changes (e.g., on first load)
  if (activeTab === 'mjet' && !matchedInstrument) {
    setActiveTab('video');
  }

  const handleInterestClick = (interest: { id: string, label: string, icon: React.ReactNode }) => {
    setActiveInterest(interest);
    setUploadedImage(null);
    setInterestContent(getStaticInterestExplanation(term.name, interest.label));
  };

  return (
    <div className="mt-8 relative">
      {/* Mëso Ndryshe - Floating Icons Desktop 
      <div className="hidden md:block">
        {INTERESTS.map((inst, index) => {
          // Define positions to spread them over the white spaces
          const positions = [
            { top: '20%', right: '3%' },
            { top: '45%', left: '3%' },
            { bottom: '15%', right: '5%' },
            { bottom: '25%', left: '4%' },
          ];
          const pos = positions[index % positions.length];
          
          return (
            <motion.button 
              key={inst.id}
              onClick={() => handleInterestClick(inst)}
              initial={{ y: 0 }}
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4 + index,
                ease: "easeInOut" 
              }}
              className="fixed z-40 group flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-white hover:scale-110 hover:border-[#ffafcc] transition-transform"
              style={pos}
            >
              <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">{inst.icon}</div>
              <span className="absolute -bottom-8 bg-white px-3 py-1 rounded-xl shadow-lg border border-slate-100 text-[10px] font-black uppercase text-[#4a4e69] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Fizika & {inst.label}
              </span>
            </motion.button>
          );
        })}
      </div>
      */}
      
      {/* Mëso Ndryshe Sidebar Mobile 
      <div className="md:hidden flex overflow-x-auto gap-4 py-4 mb-6 bg-white/50 px-4 rounded-3xl items-center justify-start hide-scrollbar">
        <div className="flex flex-col mr-2">
          <span className="text-[10px] font-black text-[#ffafcc] uppercase tracking-widest leading-none">Mëso</span>
          <span className="text-xs font-black text-slate-500 uppercase tracking-widest leading-none">Ndryshe</span>
        </div>
        {INTERESTS.map((inst, index) => (
          <motion.button 
            key={inst.id}
            onClick={() => handleInterestClick(inst)}
            animate={{ 
              y: [0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3 + index * 0.5,
              ease: "easeInOut" 
            }}
            className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-sm border-2 border-white hover:border-[#ffafcc] transition-colors"
          >
            <div className="text-2xl">{inst.icon}</div>
          </motion.button>
        ))}
      </div>
      */}

      {/* Modal Slide-Over */}
      <AnimatePresence>
        {activeInterest && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-stretch justify-center md:justify-end bg-slate-900/40 backdrop-blur-sm p-4 md:p-0"
          >
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setActiveInterest(null)}></div>
            
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-white h-full md:h-full rounded-3xl md:rounded-none shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-[#f8fafc] to-white flex justify-between items-center z-10 sticky top-0">
                <div className="flex items-center gap-4">
                  <motion.div 
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl border-2 border-[#ffafcc]/20"
                  >
                    {activeInterest.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-black text-[#4a4e69] leading-tight">Fizika & {activeInterest.label}</h3>
                    <p className="text-[10px] font-bold text-[#bde0fe] uppercase tracking-widest">Këndi Yt i Zbulimit</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveInterest(null)}
                  className="w-10 h-10 bg-slate-50 hover:bg-[#ffafcc] hover:text-white rounded-full flex items-center justify-center text-slate-400 transition-all shadow-sm"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                {isGeneratingInterest ? (
                  <div className="flex flex-col items-center justify-center h-full gap-8 text-slate-400">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="w-20 h-20 border-4 border-slate-50 border-t-[#ffafcc] border-r-[#a2d2ff] rounded-full"
                    />
                    <motion.p 
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="font-black uppercase tracking-widest text-sm text-center"
                    >
                      <span className="text-[#a2d2ff] text-lg">{term.name}</span> <span className="text-slate-300 mx-2">✖</span> <span className="text-[#ffafcc] text-lg">{activeInterest.label}</span>
                    </motion.p>
                  </div>
                ) : interestContent ? (
                  <div className="prose prose-slate prose-lg max-w-none 
                    prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#4a4e69]
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:leading-relaxed prose-p:font-medium prose-p:text-slate-600
                    prose-li:marker:text-[#ffafcc] prose-li:font-bold
                    prose-strong:text-[#ffafcc] prose-strong:font-black
                    prose-blockquote:border-none prose-blockquote:bg-gradient-to-br prose-blockquote:from-slate-50 prose-blockquote:to-white prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-3xl prose-blockquote:shadow-sm prose-blockquote:not-italic prose-blockquote:text-slate-700
                    prose-table:w-full prose-table:border-collapse prose-table:rounded-2xl prose-table:overflow-hidden prose-table:shadow-sm
                    prose-th:bg-[#4a4e69] prose-th:text-white prose-th:p-3 prose-th:text-left
                    prose-td:p-3 prose-td:border-b prose-td:border-slate-100 prose-td:bg-white
                    [&>*:first-child]:mt-0"
                  >
                    <Markdown 
                      remarkPlugins={[remarkMath]} 
                      rehypePlugins={[rehypeKatex]}
                      components={{
                        code(props) {
                          const {children, className, node, ...rest} = props;
                          const match = /language-(\w+)/.exec(className || '');
                          if (match && (match[1] === 'mindmap' || match[1] === 'json')) {
                            try {
                              const contentStr = String(children).trim();
                              const jsonStr = contentStr.replace(/^mindmap\n?/, '').trim();
                              const parsed = JSON.parse(jsonStr);
                              if (parsed && parsed.nodes && parsed.edges) {
                                return <MindMapRenderer json={parsed} />;
                              }
                            } catch (error) {
                              console.warn("Could not parse mindmap JSON:", error);
                            }
                          }
                          return <code className={className} {...rest}>{children}</code>;
                        }
                      }}
                    >
                      {interestContent}
                    </Markdown>

                    {/* Upload Image Row for Learn Your Way */}
                    <div className="mt-12 mb-6 bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-inner text-center">
                      <h4 className="text-xl font-black text-[#4a4e69] mb-4">A ke diçka nga libri jot?</h4>
                      <input 
                        type="file" 
                        id="lesson-image-upload" 
                        accept="image/*" 
                        capture="environment"
                        className="hidden" 
                        onChange={handleImageUpload} 
                      />
                      {!uploadedImage ? (
                        <button 
                          onClick={triggerFileInput}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-dashed border-[#ffafcc] bg-white rounded-2xl text-[#ffafcc] font-black uppercase tracking-widest hover:bg-[#ffafcc] hover:text-white transition-all shadow-sm hover:shadow-md"
                          disabled={isGeneratingInterest}
                        >
                          {isGeneratingInterest ? "Duke lexuar foton me AI..." : <><Camera size={24} /> Bëj një foto të mësimit</>}
                        </button>
                      ) : (
                        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-sm inline-flex">
                          <img src={uploadedImage.url} alt="Lesson snippet" className="w-20 h-20 object-cover rounded-xl border border-slate-100" />
                          <div className="flex-1 text-center sm:text-left">
                            <p className="text-sm font-black uppercase text-[#4a4e69] tracking-widest leading-tight">Fotoja u lexua me sukses nga AI!</p>
                            <p className="text-xs text-slate-400 font-bold mt-1">Shpjegimi i mësipërm tani bazohet në foton tënde.</p>
                          </div>
                          <button onClick={() => {
                            setUploadedImage(null);
                            if (activeInterest) {
                              setInterestContent(getStaticInterestExplanation(term.name, activeInterest.label));
                            }
                          }} className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-400 rounded-full hover:bg-[#ffc8dd] hover:text-white transition-all flex-shrink-0">
                             <i className="fas fa-times"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-10 relative z-10">
        {availableTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'mjet' | 'video' | 'foto' | 'ushtrime' | 'loje' | 'kuic')}
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
              <p className="text-slate-400">Këtu do të gjeni ushtrime të zgjidhura për këtë term.</p>
            </div>

            {term.ushtrime && (
              <div className="max-w-3xl mx-auto mb-8" dangerouslySetInnerHTML={{ __html: term.ushtrime }} />
            )}

            {term.ushtrimInteraktiv && (
              <>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button 
                    onClick={() => { setShowSolutionPanel(!showSolutionPanel); setShowSteps(false); }}
                    className={`px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-md transition-colors flex items-center gap-3 ${showSolutionPanel ? 'bg-[#8ec5fc] text-slate-800' : 'bg-[#a2d2ff] text-slate-800 hover:bg-[#8ec5fc]'}`}
                  >
                    <i className="fas fa-keyboard"></i> Zgjidh ushtrimin
                  </button>
                  <button 
                    onClick={() => { setShowSteps(!showSteps); setShowSolutionPanel(false); }}
                    className={`px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-sm border border-slate-200 transition-colors flex items-center gap-3 ${showSteps ? 'bg-slate-100 text-slate-600' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                  >
                    <i className="fas fa-list-ol"></i> Hap pas hapi
                  </button>
                </div>

                {/* Solution Panel */}
                {showSolutionPanel && (
                  <div className="mt-8 bg-white p-8 rounded-[2rem] shadow-inner border-2 border-slate-100 animate__animated animate__fadeIn">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Shkruaj Përgjigjen</p>
                    <div className="mb-6">
                      <input 
                        type="text" 
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="psh. 2.5 ose 2.5e-19"
                        className="w-full p-4 bg-slate-50 rounded-xl border-2 border-slate-200 focus:border-[#a2d2ff] focus:outline-none text-slate-700 text-lg"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => {
                          if (userAnswer.trim() === '') {
                             setIsCorrect(null);
                             return;
                          }
                          const isMatch = term.ushtrimInteraktiv?.zgjidhja.toLowerCase().includes(userAnswer.toLowerCase().trim());
                          setIsCorrect(!!isMatch);
                        }}
                        className="px-10 py-4 bg-[#4a4e69] text-white rounded-xl font-black uppercase tracking-widest shadow-md hover:bg-[#2b2d42] transition-colors w-full md:w-auto"
                      >
                        Kontrollo
                      </button>
                      {isCorrect === true && <span className="text-green-500 font-bold text-lg animate__animated animate__bounceIn"><i className="fas fa-check-circle mr-2"></i> E saktë!</span>}
                      {isCorrect === false && <span className="text-red-500 font-bold text-lg animate__animated animate__shakeX"><i className="fas fa-times-circle mr-2"></i> E pasaktë, provo përsëri.</span>}
                    </div>
                  </div>
                )}

                {/* Step by step solution */}
                {showSteps && (
                  <div className="mt-8 space-y-4">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate__animated animate__slideInLeft">
                      <div className="font-bold text-slate-500 mb-2">Hapi 1: Zgjidh formulën</div>
                      <div className="text-slate-700" dangerouslySetInnerHTML={{ __html: term.ushtrimInteraktiv.hapi1 }} />
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate__animated animate__slideInLeft" style={{ animationDelay: '0.1s' }}>
                      <div className="font-bold text-slate-500 mb-2">Hapi 2: Zëvendëso vlerat</div>
                      <div className="text-slate-700" dangerouslySetInnerHTML={{ __html: term.ushtrimInteraktiv.hapi2 }} />
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate__animated animate__slideInLeft" style={{ animationDelay: '0.2s' }}>
                      <div className="font-bold text-slate-500 mb-2">Hapi 3: Llogarit</div>
                      <div className="text-slate-700" dangerouslySetInnerHTML={{ __html: term.ushtrimInteraktiv.hapi3 }} />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* 4. LOJË */}
        {activeTab === 'loje' && (
          <div className="animate__animated animate__fadeInUp text-center py-12">
            {term.digitalGameId && onPlayDigitalGame ? (
              <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-24 bg-[#4a4e69] rounded-[2rem] flex items-center justify-center text-4xl text-white shadow-xl mb-4">
                  <i className="fas fa-gamepad"></i>
                </div>
                <h3 className="text-2xl font-black text-slate-800 tracking-tighter">Lojë Digjitale Interaktive</h3>
                <p className="text-slate-500 max-w-md mx-auto mb-6">
                  Kemi përgatitur një lojë speciale digjitale për të testuar njohuritë tuaja mbi <strong>{term.name}</strong>.
                </p>
                <button 
                  onClick={() => {
                    const game = DIGITAL_GAMES.find((g: DigitalGame) => g.id === term.digitalGameId);
                    if (game) onPlayDigitalGame(game);
                  }}
                  className="px-12 py-5 bg-[#4a4e69] text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-[#2b2d42] hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <i className="fas fa-play"></i> Fillo Lojën
                </button>
              </div>
            ) : term.catName === 'Dinamika' && term.id !== undefined && term.id >= 1 && term.id <= 15 ? (
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

        {/* 5. KUICE */}
        {activeTab === 'kuic' && term.kuic && (
           <KuicTab kuic={term.kuic} />
        )}

      </div>
    </div>
  );
};

export default TermDetailsTabs;
