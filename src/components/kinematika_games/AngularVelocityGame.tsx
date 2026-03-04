import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const levels = [
  { theta: 3.14, t: 2.0, omega: 1.57 }, // Gjysmë rrethi në 2 sekonda
  { theta: 6.28, t: 4.0, omega: 1.57 }, // Rreth i plotë në 4 sekonda
  { theta: 1.57, t: 0.5, omega: 3.14 }, // Çerek rrethi shumë shpejt
  { theta: 4.71, t: 3.0, omega: 1.57 }  // 270 gradë
];

const AngularVelocityGame = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState<{ success: boolean; msg: string; title: string } | null>(null);
  const [rotation, setRotation] = useState(0);
  
  const lvl = levels[currentIdx];
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    let lastTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      
      // Update rotation based on current level's omega
      // omega is in rad/s, convert to deg/s: omega * (180/PI)
      const degPerSec = lvl.omega * (180 / Math.PI);
      setRotation(prev => (prev + degPerSec * dt) % 360);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [currentIdx, lvl.omega]);

  const checkAnswer = () => {
    const val = parseFloat(userInput);
    if (isNaN(val)) return;

    const diff = Math.abs(val - lvl.omega);
    
    let success = false;
    let title = "GABIM!";
    let msg = "";

    if (diff < 0.1) {
      success = true;
      title = "KTHESË E PËRKRYER!";
      msg = `Saktë! Shpejtësia këndore është ${lvl.omega} rad/s. Makina qëndroi në pistë!`;
    } else {
      title = "JASHTË PISTE!";
      msg = `Llogaritja jote nuk ishte e saktë. Pjesto këndin me kohën!`;
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
      <h3 className="text-xl font-bold text-slate-800">Shpejtësia Këndore (ω)</h3>

      <div className="bg-pink-100 p-4 rounded-lg border-l-4 border-pink-400 w-full text-center">
        <span className="text-2xl font-serif italic">ω = θ / t</span>
      </div>

      <div className="relative w-[200px] h-[200px] bg-slate-200 rounded-full border-8 border-slate-300 flex items-center justify-center">
        <div className="w-3 h-3 bg-slate-400 rounded-full absolute"></div>
        
        {/* Car */}
        <motion.div 
            className="w-6 h-10 bg-pink-400 rounded-md absolute shadow-lg"
            style={{ 
                top: 0, 
                left: 'calc(50% - 12px)',
                transformOrigin: 'center 100px',
                rotate: rotation
            }}
        ></motion.div>
      </div>

      <div className="bg-slate-100 p-4 rounded-xl w-full text-center space-y-2">
        <p>Zhvendosja: <b>θ = {lvl.theta} rad</b></p>
        <p>Koha e kthesës: <b>t = {lvl.t} s</b></p>
      </div>

      <div className="flex gap-2 w-full items-center justify-center">
        <input 
          type="number" 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="ω = ?"
          className="w-24 p-3 rounded-lg border-2 border-pink-200 text-center focus:outline-none focus:border-pink-400 font-bold text-lg"
        />
        <span className="font-bold text-slate-500">rad/s</span>
      </div>
      
      <button 
          onClick={checkAnswer}
          className="w-full bg-pink-300 text-slate-800 font-bold py-3 px-6 rounded-xl hover:bg-pink-400 transition shadow-sm"
        >
          KONTROLLO KTHESËN
      </button>

      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center text-center p-6 z-20 rounded-xl m-4 border shadow-2xl"
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

export default AngularVelocityGame;
