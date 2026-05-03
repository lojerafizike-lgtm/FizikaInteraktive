import React, { useState, useRef, useEffect } from 'react';
import { getStroke } from 'perfect-freehand';
import { motion } from 'framer-motion';
import { X, Sparkles, Pen, Square, Circle, MoveRight, Type, Undo2, Trash2 } from 'lucide-react';

function getSvgPathFromStroke(stroke: number[][]) {
  if (!stroke.length) return '';
  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ['M', ...stroke[0], 'Q']
  );
  d.push('Z');
  return d.join(' ');
}

type Point = [number, number, number?];
type ToolType = 'freehand' | 'rectangle' | 'circle' | 'vector' | 'text';
type ShapeType = 'freehand' | 'vector' | 'resistor' | 'circle' | 'triangle' | 'rectangle' | 'text';

interface DrawnShape {
  id: string;
  points: Point[];
  type: ShapeType;
  color: string;
  calcPrompt?: string;
  text?: string;
}

export const PhysicsCanvas = ({ onClose, onInsert }: { onClose: () => void, onInsert: (imageData: string) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  const [shapes, setShapes] = useState<DrawnShape[]>([]);
  const [currentPoints, setCurrentPoints] = useState<Point[]>([]);
  const [activeTool, setActiveTool] = useState<ToolType>('freehand');
  
  const [textInput, setTextInput] = useState<{ x: number, y: number, value: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [textInput]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (textInput && e.target !== inputRef.current) {
      commitText();
      return;
    }

    (e.target as Element).setPointerCapture(e.pointerId);
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (activeTool === 'text') {
      setTextInput({ x, y, value: '' });
      return;
    }

    setCurrentPoints([[x, y, e.pressure]]);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons !== 1 || activeTool === 'text') return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (activeTool === 'freehand') {
      setCurrentPoints(pts => [...pts, [x, y, e.pressure]]);
    } else {
      // For rect, circle, vector, only keep start and current point
      setCurrentPoints(pts => pts.length > 0 ? [pts[0], [x, y, e.pressure]] : [[x, y, e.pressure]]);
    }
  };

  const commitText = () => {
    if (textInput && textInput.value.trim() !== '') {
      setShapes([...shapes, {
        id: Date.now().toString(),
        points: [[textInput.x, textInput.y]],
        type: 'text',
        color: '#4a4e69',
        text: textInput.value
      }]);
    }
    setTextInput(null);
  };

  const handlePointerUp = () => {
    if (activeTool === 'text') return;
    if (currentPoints.length < 2) {
       setCurrentPoints([]);
       return;
    }

    let shapeType: ShapeType = activeTool === 'freehand' ? 'freehand' : activeTool;
    let finalPoints = [...currentPoints];
    
    // Check if freehand is actually a smart heuristic
    if (activeTool === 'freehand' && currentPoints.length > 5) {
      const start = currentPoints[0];
      const end = currentPoints[currentPoints.length - 1];
      const dist = Math.hypot(end[0] - start[0], end[1] - start[1]);
      
      let yChanges = 0;
      for(let i=2; i<currentPoints.length; i++){
         const d1 = currentPoints[i-1][1] - currentPoints[i-2][1];
         const d2 = currentPoints[i][1] - currentPoints[i-1][1];
         if(d1 * d2 < 0 && Math.abs(currentPoints[i][1] - currentPoints[i-1][1]) > 5) yChanges++;
      }

      const boundingBox = { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity };
      currentPoints.forEach(p => {
        boundingBox.minX = Math.min(boundingBox.minX, p[0]);
        boundingBox.maxX = Math.max(boundingBox.maxX, p[0]);
        boundingBox.minY = Math.min(boundingBox.minY, p[1]);
        boundingBox.maxY = Math.max(boundingBox.maxY, p[1]);
      });
      const width = boundingBox.maxX - boundingBox.minX;
      const height = boundingBox.maxY - boundingBox.minY;

      if (yChanges > 5 && width > 50) {
        shapeType = 'resistor';
      } else if (dist > 50 && yChanges < 3 && currentPoints.length < 30) {
        shapeType = 'vector';
      } else if (dist < 50 && currentPoints.length > 20 && Math.max(width, height) > 30) {
        // Closed shape!
        const center = [boundingBox.minX + width/2, boundingBox.minY + height/2] as Point;
        const r = Math.max(width, height) / 2;
        let avgDist = 0;
        currentPoints.forEach(p => {
          avgDist += Math.hypot(p[0] - center[0], p[1] - center[1]);
        });
        avgDist /= currentPoints.length;
        
        if (Math.abs(avgDist - r) < r * 0.25) {
           shapeType = 'circle';
           finalPoints = [center, [center[0] + avgDist, center[1]] as Point];
        } else {
           shapeType = 'rectangle';
           finalPoints = [[boundingBox.minX, boundingBox.minY] as Point, [boundingBox.maxX, boundingBox.maxY] as Point];
        }
      }
    }

    const newShape: DrawnShape = {
      id: Date.now().toString(),
      points: finalPoints,
      type: shapeType,
      color: shapeType === 'resistor' ? '#cdb4db' : '#4a4e69'
    };

    setShapes([...shapes, newShape]);
    setCurrentPoints([]);
  };

  const handleSave = async () => {
     if(svgRef.current){
         const svgString = new XMLSerializer().serializeToString(svgRef.current);
         const canvas = document.createElement('canvas');
         const ctx = canvas.getContext('2d');
         const v = await fetch('data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString))));
         const blob = await v.blob();
         const url = URL.createObjectURL(blob);
         
         const img = new Image();
         img.onload = () => {
             canvas.width = svgRef.current?.clientWidth || 800;
             canvas.height = svgRef.current?.clientHeight || 600;
             if(ctx) {
                ctx.fillStyle = 'white';
                ctx.fillRect(0,0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);
                onInsert(canvas.toDataURL('image/png'));
                onClose();
             }
         };
         img.src = url;
     }
  };

  const undo = () => setShapes(shapes.slice(0, -1));
  const clear = () => setShapes([]);

  const tools: { id: ToolType, icon: React.ReactNode, label: string }[] = [
    { id: 'freehand', icon: <Pen size={20} />, label: 'Lapsi & Inteligjenca' },
    { id: 'vector', icon: <MoveRight size={20} />, label: 'Vektor / Shigjetë' },
    { id: 'rectangle', icon: <Square size={20} />, label: 'Drejtkëndësh' },
    { id: 'circle', icon: <Circle size={20} />, label: 'Rreth' },
    { id: 'text', icon: <Type size={20} />, label: 'Shkronja / Tekst' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
    >
      <div className="bg-white w-full h-full rounded-[3rem] shadow-2xl flex flex-col overflow-hidden border-8 border-white relative">
        {/* Header */}
        <div className="h-20 bg-slate-50 border-b border-slate-100 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-gradient-to-br from-[#ffafcc] to-[#ffc8dd] text-white rounded-2xl flex items-center justify-center text-xl shadow-lg">
                <Sparkles size={24} />
             </div>
             <div>
               <h2 className="text-xl font-black tracking-tighter text-slate-800">Skicuesi Inteligjent</h2>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Kombinimi i mjeteve manuale dhe AI</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={handleSave} className="px-6 py-3 bg-[#a2d2ff] hover:bg-[#8abeef] text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all">
              Shto në Shënime
            </button>
            <button onClick={onClose} className="w-12 h-12 bg-white border border-slate-100 text-slate-400 hover:bg-slate-50 hover:text-red-500 rounded-xl flex items-center justify-center transition-all">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white p-2 rounded-2xl shadow-xl border border-slate-100 flex gap-2 z-50 overflow-x-auto max-w-[90vw]">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`p-3 rounded-xl transition-all flex items-center justify-center ${activeTool === tool.id ? 'bg-[#ffafcc] text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
              title={tool.label}
            >
              {tool.icon}
            </button>
          ))}
          <div className="w-px h-8 bg-slate-100 my-auto mx-1" />
          <button onClick={undo} disabled={shapes.length === 0} className="p-3 rounded-xl text-slate-500 hover:bg-slate-100 disabled:opacity-50 transition-all flex items-center justify-center" title="Kthehu prapa">
            <Undo2 size={20} />
          </button>
          <button onClick={clear} disabled={shapes.length === 0} className="p-3 rounded-xl text-red-400 hover:bg-red-50 hover:text-red-500 disabled:opacity-50 transition-all flex items-center justify-center" title="Fshi të gjitha">
            <Trash2 size={20} />
          </button>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 relative bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-slate-50/50 touch-none flex items-center justify-center overflow-hidden" ref={containerRef}>
           <svg 
             ref={svgRef}
             className="w-full h-full cursor-crosshair relative z-10"
             onPointerDown={handlePointerDown}
             onPointerMove={handlePointerMove}
             onPointerUp={handlePointerUp}
           >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#a2d2ff" />
                </marker>
                <marker id="arrowhead-draw" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#4a4e69" />
                </marker>
              </defs>

              {/* Render Existing Shapes */}
              {shapes.map(shape => {
                 if (shape.type === 'freehand') {
                   const stroke = getStroke(shape.points as number[][], { size: 6, thinning: 0.5, smoothing: 0.5, streamline: 0.5 });
                   const pathData = getSvgPathFromStroke(stroke);
                   return <path key={shape.id} d={pathData} fill={shape.color} opacity={0.6} />;
                 }
                 if (shape.type === 'vector') {
                   const start = shape.points[0];
                   const end = shape.points[shape.points.length - 1];
                   return (
                     <g key={shape.id}>
                       <line x1={start[0]} y1={start[1]} x2={end[0]} y2={end[1]} stroke={shape.color} strokeWidth="6" strokeLinecap="round" markerEnd="url(#arrowhead-draw)" />
                       <circle cx={start[0]} cy={start[1]} r="6" fill={shape.color} />
                     </g>
                   );
                 }
                 if (shape.type === 'rectangle') {
                   const start = shape.points[0];
                   const end = shape.points[shape.points.length - 1];
                   const minX = Math.min(start[0], end[0]);
                   const minY = Math.min(start[1], end[1]);
                   const width = Math.abs(start[0] - end[0]);
                   const height = Math.abs(start[1] - end[1]);
                   return <rect key={shape.id} x={minX} y={minY} width={width} height={height} fill="none" stroke={shape.color} strokeWidth="6" rx="4" />;
                 }
                 if (shape.type === 'circle') {
                   const start = shape.points[0];
                   const end = shape.points[shape.points.length - 1];
                   const r = Math.hypot(end[0] - start[0], end[1] - start[1]);
                   return <circle key={shape.id} cx={start[0]} cy={start[1]} r={r} fill="none" stroke={shape.color} strokeWidth="6" />;
                 }
                 if (shape.type === 'text') {
                   return <text key={shape.id} x={shape.points[0][0]} y={shape.points[0][1]} fill={shape.color} fontSize="28" fontWeight="bold" fontFamily="sans-serif">{shape.text}</text>;
                 }
                 if (shape.type === 'resistor') {
                     const start = shape.points[0];
                     const end = shape.points[shape.points.length - 1];
                     const dx = end[0] - start[0];
                     const dy = end[1] - start[1];
                     const angle = Math.atan2(dy, dx);
                     const dist = Math.hypot(dx, dy);
                     
                     const l1 = dist * 0.2;
                     const zigzagWidth = dist * 0.6;
                     const l2 = dist * 0.2;
                     const zigs = 5;
                     const zigStep = zigzagWidth / zigs;
                     
                     let path = `M 0 0 L ${l1} 0 `;
                     for (let i = 1; i <= zigs; i++) {
                       const yOff = i % 2 === 0 ? 15 : -15;
                       path += `L ${l1 + (i - 0.5) * zigStep} ${yOff} L ${l1 + i * zigStep} 0 `;
                     }
                     path += `L ${l1 + zigzagWidth + l2} 0`;

                     return (
                       <g key={shape.id} transform={`translate(${start[0]}, ${start[1]}) rotate(${angle * 180 / Math.PI})`} filter="url(#glow)">
                          <path d={path} fill="none" stroke={shape.color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                       </g>
                     )
                 }
                 return null;
              })}

              {/* Render Current Stroke Preview */}
              {currentPoints.length > 0 && activeTool === 'freehand' && (
                <path 
                  d={getSvgPathFromStroke(getStroke(currentPoints as number[][], { size: 6, thinning: 0.5, smoothing: 0.5, streamline: 0.5 }))} 
                  fill="#4a4e69" 
                  opacity={0.8}
                />
              )}
              {currentPoints.length > 1 && activeTool === 'vector' && (
                 <g opacity={0.6}>
                   <line x1={currentPoints[0][0]} y1={currentPoints[0][1]} x2={currentPoints[1][0]} y2={currentPoints[1][1]} stroke="#4a4e69" strokeWidth="6" strokeLinecap="round" markerEnd="url(#arrowhead-draw)" />
                   <circle cx={currentPoints[0][0]} cy={currentPoints[0][1]} r="6" fill="#4a4e69" />
                 </g>
              )}
              {currentPoints.length > 1 && activeTool === 'rectangle' && (
                 <rect 
                   x={Math.min(currentPoints[0][0], currentPoints[1][0])} 
                   y={Math.min(currentPoints[0][1], currentPoints[1][1])} 
                   width={Math.abs(currentPoints[0][0] - currentPoints[1][0])} 
                   height={Math.abs(currentPoints[0][1] - currentPoints[1][1])} 
                   fill="none" 
                   stroke="#4a4e69" 
                   strokeWidth="6" 
                   rx="4"
                   opacity={0.6}
                 />
              )}
              {currentPoints.length > 1 && activeTool === 'circle' && (
                 <circle 
                   cx={currentPoints[0][0]} 
                   cy={currentPoints[0][1]} 
                   r={Math.hypot(currentPoints[1][0] - currentPoints[0][0], currentPoints[1][1] - currentPoints[0][1])} 
                   fill="none" 
                   stroke="#4a4e69" 
                   strokeWidth="6" 
                   opacity={0.6}
                 />
              )}
           </svg>

           {/* Text Input Overlay */}
           {textInput && (
              <input
                ref={inputRef}
                type="text"
                value={textInput.value}
                onChange={e => setTextInput({ ...textInput, value: e.target.value })}
                onKeyDown={e => {
                  if (e.key === 'Enter') commitText();
                  if (e.key === 'Escape') setTextInput(null);
                }}
                className="absolute z-50 bg-transparent text-[#4a4e69] text-[28px] font-bold font-sans outline-none w-64 shadow-[0_0_0_2px_rgba(255,175,204,0.5)] p-1 rounded"
                style={{ left: textInput.x, top: textInput.y - 14 }}
              />
           )}

        </div>
      </div>
    </motion.div>
  );
};
