import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const levels = [
  { v: 8, r: 4, a: 16 },
  { v: 10, r: 2, a: 50 },
  { v: 6, r: 3, a: 12 }
];

const CentripetalAccelerationGame = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState<{ success: boolean; msg: string; title: string } | null>(null);
  const [rotation, setRotation] = useState(0);
  
  const lvl = levels[currentIdx];
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      // Calculate angular velocity w = v / r
      const w = lvl.v / lvl.r;
      
      // Update rotation
      setRotation(prev => prev + w * 0.02); // 0.02 is a time step factor
      
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
      title = "SAKTË! 🎉";
      msg = `Nxitimi qëndersynues a_qs është ${lvl.a} m/s². Forca e mban makinën në rrugë!`;
    } else {
      title = "GABIM! ❌";
      msg = `Llogaritja doli ${val}, por duhej ${lvl.a}. Makina do të dilte jashtë piste!`;
    }

    setResult({ success, title, msg });
  };

  const nextLevel = () => {
    setCurrentIdx((prev) => (prev + 1) % levels.length);
    setResult(null);
    setUserInput("");
  };

  const visualRadius = 100;

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto p-6 bg-white rounded-3xl shadow-xl text-slate-700 border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800">Nxitimi Qëndersynues</h3>

      <div className="bg-blue-100 p-3 rounded-2xl w-full text-center text-blue-900 font-bold text-lg">
        a_qs = v² / R
      </div>

      <div className="relative w-[260px] h-[260px] bg-slate-50 rounded-full border-8 border-white shadow-inner flex items-center justify-center overflow-hidden">
        {/* Center Point */}
        <div className="w-3 h-3 bg-slate-400 rounded-full z-10"></div>
        
        {/* Car and Vector */}
        <motion.div
            className="absolute w-full h-full flex items-center justify-center"
            style={{ rotate: rotation * (180 / Math.PI) }}
        >
             {/* Car at radius distance */}
             <div 
                className="absolute w-9 h-5 bg-red-300 rounded-md shadow-md z-20"
                style={{ 
                    transform: `translateX(${visualRadius}px) rotate(90deg)`
                }}
             ></div>

             {/* Vector Arrow pointing to center */}
             <div 
                className="absolute h-1 bg-red-500 origin-right flex items-center justify-end"
                style={{ 
                    width: `${Math.min(lvl.a * 2, visualRadius - 10)}px`, // Scale vector length, cap at radius
                    transform: `translateX(${visualRadius - Math.min(lvl.a * 2, visualRadius - 10)}px)`
                }}
             >
                <span className="text-red-500 text-xs absolute -left-4">➤</span>
             </div>
        </motion.div>
      </div>

      <div className="bg-slate-50 p-4 rounded-xl w-full text-center border border-slate-200">
        Shpejtësia: <b>v = {lvl.v} m/s</b> | Rrezja: <b>R = {lvl.r} m</b>
      </div>

      <div className="flex gap-2 w-full items-center justify-center">
        <input 
          type="number" 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="a_qs = ?"
          className="w-32 p-3 rounded-xl border-2 border-blue-200 text-center focus:outline-none focus:border-blue-400 font-bold text-lg"
        />
        <button 
          onClick={checkAnswer}
          className="bg-green-100 text-green-800 font-bold py-3 px-6 rounded-xl hover:bg-green-200 transition shadow-sm flex-1"
        >
          KONTROLLO
        </button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center text-center p-6 z-30 rounded-3xl m-4 border shadow-2xl"
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

export default CentripetalAccelerationGame;
