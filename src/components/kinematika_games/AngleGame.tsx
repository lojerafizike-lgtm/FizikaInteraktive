import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const levels = [
  { s: 6.28, r: 2, theta: 3.14 },
  { s: 3.14, r: 1, theta: 3.14 },
  { s: 1.57, r: 1, theta: 1.57 },
  { s: 12.56, r: 2, theta: 6.28 }
];

const AngleGame = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState<{ success: boolean; msg: string; title: string } | null>(null);
  const [visualTheta, setVisualTheta] = useState(0);
  
  const lvl = levels[currentIdx];

  const checkAnswer = () => {
    const val = parseFloat(userInput);
    if (isNaN(val)) return;

    const diff = Math.abs(val - lvl.theta);
    
    let success = false;
    let title = "GABIM!";
    let msg = "";

    if (diff < 0.1) {
      success = true;
      title = "TRAJEKTORE E SAKTË!";
      msg = `Këndi θ është ${lvl.theta} rad. Sateliti u pozicionua në vendin e duhur!`;
      setVisualTheta(val);
    } else {
      title = "DEVIJIM!";
      msg = `Llogaritja doli ${val}. Sateliti doli jashtë orbite!`;
      // Show incorrect angle too? Or maybe just 0
      setVisualTheta(val);
    }

    setResult({ success, title, msg });
  };

  const nextLevel = () => {
    setCurrentIdx((prev) => (prev + 1) % levels.length);
    setResult(null);
    setUserInput("");
    setVisualTheta(0);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto p-6 bg-slate-900 text-white rounded-3xl shadow-xl border border-slate-700">
      <h3 className="text-xl font-bold text-cyan-400">Këndi në Radianë</h3>

      <div className="bg-slate-800 p-3 rounded-2xl w-full text-center text-cyan-300 font-bold text-lg border border-slate-700">
        θ = s / r
      </div>

      <div className="relative w-[200px] h-[200px] rounded-full border-2 border-slate-600 flex items-center justify-center">
        {/* Planet */}
        <div className="w-[60px] h-[60px] bg-pink-400 rounded-full shadow-[0_0_30px_rgba(244,114,182,0.6)] z-10"></div>
        
        {/* Arc Visual */}
        <motion.div 
            className="absolute w-full h-full rounded-full border-4 border-transparent border-t-cyan-400"
            initial={{ rotate: 0 }}
            animate={{ rotate: visualTheta * (180 / Math.PI) }}
            transition={{ duration: 1, type: "spring" }}
            style={{ 
                // We want the arc to start from top (0 deg) and rotate clockwise? 
                // Or just show the sector? 
                // The CSS border-top approach shows a quarter circle (90deg) roughly.
                // Let's use SVG for better arc representation.
            }}
        >
            {/* Satellite at the end of the arc? */}
            {/* This div rotates, so we can put a dot at the start/end */}
        </motion.div>

        {/* Better Arc Visualization with SVG */}
        <svg className="absolute w-full h-full -rotate-90 pointer-events-none">
            <circle 
                cx="100" cy="100" r="98" 
                fill="none" 
                stroke="rgba(34, 211, 238, 0.3)" 
                strokeWidth="4" 
                strokeDasharray={`${2 * Math.PI * 98}`}
                strokeDashoffset={`${2 * Math.PI * 98 * (1 - visualTheta / (2 * Math.PI))}`}
                // This assumes max theta is 2PI. If theta > 2PI, it wraps.
                // strokeDashoffset = circumference * (1 - percentage)
                // percentage = theta / 2PI
                style={{ transition: 'stroke-dashoffset 1s ease-out' }}
            />
        </svg>

        {/* Satellite Container - Rotates */}
        <motion.div
            className="absolute w-full h-full flex justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: visualTheta * (180 / Math.PI) }}
            transition={{ duration: 1, type: "spring" }}
        >
            {/* Satellite - Positioned at top (start of circle) */}
            <div className="w-4 h-4 bg-white rounded-sm shadow-[0_0_10px_white] mt-[2px]"></div>
        </motion.div>
      </div>

      <div className="bg-slate-800 p-4 rounded-xl w-full text-center border border-slate-700 text-slate-300">
        Harku <b>s = {lvl.s} m</b><br/>
        Rrezja <b>r = {lvl.r} m</b>
      </div>

      <div className="flex gap-2 w-full items-center justify-center">
        <input 
          type="number" 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="θ = ?"
          className="w-32 p-3 rounded-xl bg-slate-800 border-2 border-cyan-700 text-center text-white focus:outline-none focus:border-cyan-400 font-bold text-lg"
        />
        <span className="text-sm text-slate-400 font-bold">radianë</span>
      </div>
      
      <button 
          onClick={checkAnswer}
          className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold py-3 px-6 rounded-xl hover:opacity-90 transition shadow-lg"
        >
          KALIBRO KËNDIN
      </button>

      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center text-center p-6 z-30 rounded-3xl m-4 border border-slate-700 shadow-2xl"
          >
            <h2 className={`text-2xl font-bold mb-2 ${result.success ? 'text-green-400' : 'text-red-400'}`}>{result.title}</h2>
            <p className="mb-6 text-slate-300 text-lg">{result.msg}</p>
            <button 
              onClick={nextLevel}
              className="bg-cyan-600 text-white font-bold py-3 px-10 rounded-xl hover:bg-cyan-500 transition"
            >
              Vazhdo Misionin
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AngleGame;
