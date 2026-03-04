import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const levels = [
  { w0: 0, w1: 20, t: 4, a: 5 },
  { w0: 10, w1: 30, t: 5, a: 4 },
  { w0: 50, w1: 20, t: 6, a: -5 } // Nxitim negativ (frenim)
];

const AngularAccelerationGame = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState<{ success: boolean; msg: string; title: string } | null>(null);
  const [rotation, setRotation] = useState(0);
  
  const lvl = levels[currentIdx];
  const currentSpeedRef = useRef(lvl.w0 / 10);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset speed when level changes
    currentSpeedRef.current = lvl.w0 / 10; // Scale down for visual
    
    const animate = () => {
      // Simulate acceleration visually
      setRotation(prev => prev + currentSpeedRef.current);
      
      // Gradually adjust speed towards target w1 for visual effect
      const targetSpeed = lvl.w1 / 10;
      if (currentSpeedRef.current < targetSpeed) {
          currentSpeedRef.current = Math.min(currentSpeedRef.current + 0.005, targetSpeed);
      } else if (currentSpeedRef.current > targetSpeed) {
          currentSpeedRef.current = Math.max(currentSpeedRef.current - 0.005, targetSpeed);
      }
      
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

    const diff = Math.abs(val - lvl.a);
    
    let success = false;
    let title = "GABIM!";
    let msg = "";

    if (diff < 0.1) {
      success = true;
      title = "SISTEMI OK!";
      msg = `Nxitimi kendor është ${lvl.a} rad/s². Turbina punon me efikasitet.`;
    } else {
      title = "AVARI!";
      msg = `Llogaritja e gabuar! Sistemi u mbingarkua.`;
    }

    setResult({ success, title, msg });
  };

  const nextLevel = () => {
    setCurrentIdx((prev) => (prev + 1) % levels.length);
    setResult(null);
    setUserInput("");
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto p-6 bg-indigo-950 text-white rounded-xl shadow-[0_0_20px_rgba(192,132,252,0.3)] border-2 border-purple-500 font-mono">
      <h3 className="text-xl font-bold text-emerald-400 border-b border-white/10 pb-2 w-full text-center">Nxitimi Këndor</h3>

      <div className="text-emerald-400 text-2xl font-bold mb-2">
        α = Δω / Δt
      </div>

      <div className="relative w-[150px] h-[150px] flex items-center justify-center mb-4">
        {/* Propeller */}
        <motion.div 
            className="w-[120px] h-[120px] rounded-full border-4 border-emerald-400 relative"
            style={{ rotate: rotation * (180 / Math.PI) }}
        >
            <div className="absolute top-1/2 left-0 w-full h-1 bg-emerald-400 -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 h-full w-1 bg-emerald-400 -translate-x-1/2"></div>
        </motion.div>
      </div>

      <div className="bg-black/50 p-4 rounded border-l-4 border-emerald-400 w-full text-sm space-y-1 font-mono">
        <p>Shpejtësia nisi: <b className="text-purple-300">ω₀ = {lvl.w0} rad/s</b></p>
        <p>Arriti në: <b className="text-purple-300">ω₁ = {lvl.w1} rad/s</b></p>
        <p>Brenda kohës: <b className="text-purple-300">Δt = {lvl.t} s</b></p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <input 
          type="number" 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="α (rad/s²)"
          className="w-full p-3 rounded bg-transparent border border-purple-500 text-center text-purple-300 text-xl focus:outline-none focus:bg-purple-900/20"
        />
        <button 
          onClick={checkAnswer}
          className="w-full bg-purple-600 text-indigo-950 font-bold py-3 px-6 rounded hover:bg-purple-500 transition shadow-[0_0_10px_rgba(192,132,252,0.5)]"
        >
          AKTIVIZO TURBINËN
        </button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-center p-6 z-30 rounded-xl border border-purple-500"
          >
            <h2 className={`text-2xl font-bold mb-2 ${result.success ? 'text-emerald-400' : 'text-red-500'}`}>{result.title}</h2>
            <p className="mb-6 text-slate-300">{result.msg}</p>
            <button 
              onClick={nextLevel}
              className="bg-purple-600 text-white font-bold py-2 px-8 rounded hover:bg-purple-500 transition"
            >
              Niveli Tjetër
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AngularAccelerationGame;
