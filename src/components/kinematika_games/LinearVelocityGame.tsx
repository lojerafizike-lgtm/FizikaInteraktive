import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const levels = [
  { tip: 1, w: 2, r: 5, v: 10, txt: "Gjej V kur ω = 2 rad/s dhe r = 5m." },
  { tip: 1, w: 1.5, r: 10, v: 15, txt: "Gjej V kur ω = 1.5 rad/s dhe r = 10m." },
  { tip: 2, t: 4, r: 7, v: 10.99, txt: "Gjej V (2πr/T) kur r = 7m dhe T = 4s. (π≈3.14)" }
];

const LinearVelocityGame = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState<{ success: boolean; msg: string; title: string } | null>(null);
  const [rotation, setRotation] = useState(0);
  
  const lvl = levels[currentIdx];
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      // Use a fixed delta for smoother animation in this context, or calculate real dt
      // Here we simulate the rotation speed based on the level parameters
      // If tip 1: w is given. If tip 2: w = 2PI/T
      const w = lvl.tip === 1 ? (lvl.w ?? 0) : (2 * Math.PI / (lvl.t ?? 1));
      
      // Scale down speed for visual purposes if needed, but keeping it proportional
      // 0.016 is roughly 1 frame at 60fps
      setRotation(prev => prev + w * 0.016); 
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [currentIdx, lvl]);

  const checkAnswer = () => {
    const val = parseFloat(userInput);
    if (isNaN(val)) return;

    const diff = Math.abs(val - lvl.v);
    
    let success = false;
    let title = "GABIM!";
    let msg = "";

    if (diff < 0.5) {
      success = true;
      title = "SAKTËSI GALAKTIKE!";
      msg = `Shpejtësia lineare është ${lvl.v} m/s. Makina lëviz në harmoni!`;
    } else {
      title = "LLOGARITJE E GABUAR";
      msg = `Përdor formulën e duhur për këtë nivel. Provo përsëri!`;
    }

    setResult({ success, title, msg });
  };

  const nextLevel = () => {
    setCurrentIdx((prev) => (prev + 1) % levels.length);
    setResult(null);
    setUserInput("");
  };

  // Visual radius for the car on the track (scaled)
  const visualRadius = 100; 

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto p-6 bg-white rounded-3xl shadow-xl text-slate-700 border border-amber-100">
      <h3 className="text-xl font-bold text-slate-800">Shpejtësia Lineare</h3>

      <div className="bg-blue-100 p-4 rounded-2xl w-full text-center text-blue-900 font-bold text-lg">
        V = ω · r &nbsp; | &nbsp; V = 2πr / T
      </div>

      <div className="bg-amber-50 p-3 rounded-xl w-full text-center text-sm mb-2 border border-amber-100">
        Niveli {currentIdx + 1}: {lvl.txt}
      </div>

      <div className="relative w-[240px] h-[240px] bg-slate-100 rounded-full border-[10px] border-slate-200 flex items-center justify-center">
        {/* Center Point */}
        <div className="w-1 h-1 bg-slate-500 rounded-full absolute"></div>
        
        {/* Car */}
        <div 
            className="w-5 h-9 bg-red-300 rounded-sm absolute shadow-md"
            style={{ 
                transform: `rotate(${rotation * (180/Math.PI) + 90}deg) translate(${visualRadius}px) rotate(90deg)` 
                // Note: The transform order matters. 
                // We rotate the container frame, push out by radius, then rotate car to face tangent.
                // However, simpler approach:
                // left/top positioning with sin/cos in JS, or transform origin.
                // Let's use the transform origin approach from previous game or absolute positioning.
            }}
        ></div>
        
        {/* Re-implementing positioning using absolute + transform for better control */}
        <motion.div
            className="w-5 h-9 bg-red-300 rounded-sm absolute shadow-md"
            style={{
                x: Math.cos(rotation) * visualRadius,
                y: Math.sin(rotation) * visualRadius,
                rotate: rotation * (180 / Math.PI) + 90
            }}
        />
      </div>

      <div className="flex gap-2 w-full items-center justify-center">
        <input 
          type="number" 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="V = ?"
          className="w-32 p-3 rounded-xl border-2 border-blue-200 text-center focus:outline-none focus:border-blue-400 font-bold text-lg"
        />
        <span className="font-bold text-slate-500">m/s</span>
      </div>
      
      <button 
          onClick={checkAnswer}
          className="w-full bg-blue-200 text-blue-900 font-bold py-3 px-6 rounded-xl hover:bg-blue-300 transition shadow-sm"
        >
          KONTROLLO SHPEJTËSINË
      </button>

      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center text-center p-6 z-20 rounded-3xl m-4 border shadow-2xl"
          >
            <h2 className={`text-2xl font-bold mb-2 ${result.success ? 'text-green-600' : 'text-red-600'}`}>{result.title}</h2>
            <p className="mb-6 text-slate-600 text-lg">{result.msg}</p>
            <button 
              onClick={nextLevel}
              className="bg-slate-800 text-white font-bold py-3 px-10 rounded-xl hover:bg-slate-700 transition"
            >
              Vazhdo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LinearVelocityGame;
