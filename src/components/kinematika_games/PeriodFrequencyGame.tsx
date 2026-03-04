import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  mode: 'period' | 'frequency';
}

const levels = [
  { t: 1.00, f: 1.00 },
  { t: 0.50, f: 2.00 },
  { t: 2.00, f: 0.50 },
  { t: 0.25, f: 4.00 },
  { t: 0.80, f: 1.25 }
];

const PeriodFrequencyGame = ({ mode }: Props) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState<{ success: boolean; msg: string; title: string } | null>(null);
  
  const lvl = levels[currentIdx];
  const animationRef = useRef<number | null>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const time = (now - startTime) / 1000;
      
      if (ballRef.current) {
        // Simple Harmonic Motion: y = A * sin(2 * PI * f * t)
        // f = 1/T
        const f = 1 / lvl.t;
        const y = Math.sin(2 * Math.PI * f * time) * 35; // Amplitude 35px
        ballRef.current.style.transform = `translateY(${y}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [currentIdx, lvl.t]);

  const checkAnswer = () => {
    const val = parseFloat(userInput);
    if (isNaN(val)) return;

    const correctVal = mode === 'period' ? lvl.t : lvl.f;
    const diff = Math.abs(val - correctVal);
    
    let success = false;
    let title = "GABIM!";
    let msg = "";

    if (diff < 0.1) {
      success = true;
      title = "SAKTË!";
      msg = `Bravo! Llogaritja jote është e saktë.`;
    } else {
      msg = `Gabim. Vlera e saktë ishte ${correctVal}.`;
    }

    setResult({ success, title, msg });
  };

  const nextLevel = () => {
    setCurrentIdx((prev) => (prev + 1) % levels.length);
    setResult(null);
    setUserInput("");
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-xl text-slate-700">
      <h3 className="text-xl font-bold text-slate-800">
        {mode === 'period' ? 'Gjej Periodën (T)' : 'Gjej Frekuencën (f)'}
      </h3>

      <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 w-full text-center">
        <span className="text-2xl font-serif italic">
          {mode === 'period' ? 'T = 1 / f' : 'f = 1 / T'}
        </span>
      </div>

      <div className="relative w-full h-[120px] bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden">
        <div 
          ref={ballRef}
          className="w-10 h-10 bg-indigo-400 rounded-full shadow-lg absolute"
        ></div>
      </div>

      <div className="text-center space-y-2">
        <p className="text-sm text-slate-500">
          {mode === 'period' 
            ? `Frekuenca është f = ${lvl.f} Hz` 
            : `Perioda është T = ${lvl.t} s`
          }
        </p>
        <p className="text-xs text-slate-400">
          {mode === 'period' 
            ? "Sa kohë duhet për një lëkundje të plotë?" 
            : "Sa lëkundje ndodhin në një sekondë?"
          }
        </p>
      </div>

      <div className="flex gap-2 w-full">
        <input 
          type="number" 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={mode === 'period' ? "T = ?" : "f = ?"}
          className="flex-1 p-3 rounded-lg border border-slate-300 text-center focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button 
          onClick={checkAnswer}
          className="bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-600 transition"
        >
          KONTROLLO
        </button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className={`absolute inset-0 bg-white/95 flex flex-col items-center justify-center text-center p-6 z-10 rounded-xl border-2 ${result.success ? 'border-green-500' : 'border-red-500'}`}
          >
            <h2 className={`text-2xl font-bold mb-2 ${result.success ? 'text-green-600' : 'text-red-600'}`}>{result.title}</h2>
            <p className="mb-6 text-slate-600">{result.msg}</p>
            <button 
              onClick={nextLevel}
              className="bg-slate-800 text-white font-bold py-2 px-8 rounded-lg hover:bg-slate-700 transition"
            >
              Vazhdo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PeriodFrequencyGame;
