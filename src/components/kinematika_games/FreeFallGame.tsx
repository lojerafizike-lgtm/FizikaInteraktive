import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const levels = [
  { name: "Sipërfaqja e Tokës", g: 9.8, color: "#2563eb", item: "🍎" },
  { name: "Sipërfaqja e Hënës", g: 1.6, color: "#94a3b8", item: "🌑" },
  { name: "Sipërfaqja e Jupiterit", g: 24.8, color: "#ea580c", item: "💎" }
];

const FreeFallGame = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [active, setActive] = useState(false);
  const [result, setResult] = useState<{ success: boolean; msg: string; title: string } | null>(null);
  const [objPos, setObjPos] = useState(0);
  
  const d = 10; // Height in meters
  const lvl = levels[currentIdx];
  const animationRef = useRef<number | null>(null);

  const startSimulation = () => {
    if (active) return;
    const inputVal = parseFloat(userInput);
    if (isNaN(inputVal)) return;

    setActive(true);
    setResult(null);
    setObjPos(0);
    
    const realT = Math.sqrt((2 * d) / lvl.g);
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000;

      // Visual position calculation (scaled)
      // y = 0.5 * g * t^2
      // We want to map 10m to roughly 230px (container height - padding)
      const visualY = (0.5 * lvl.g * Math.pow(elapsed, 2) * 23);

      if (elapsed < inputVal && visualY < 230) {
        setObjPos(visualY);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Simulation ended
        const hitGround = visualY >= 230;
        
        let success = false;
        let title = "GABIM!";
        let msg = "";

        if (Math.abs(inputVal - realT) < 0.15) {
             success = true;
             title = "SHKËLQYESHËM!";
             msg = `Llogaritja jote ishte pothuajse perfekte! Koha reale: ${realT.toFixed(2)}s`;
        } else {
             msg = hitGround 
                ? `U përplas më shpejt! Parashikimi yt ishte shumë i madh. Koha reale: ${realT.toFixed(2)}s`
                : `Mbeti në ajër! Parashikimi yt ishte shumë i vogël. Koha reale: ${realT.toFixed(2)}s`;
        }
        
        setResult({ success, title, msg });
        setActive(false);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  const nextLevel = () => {
    setCurrentIdx((prev) => (prev + 1) % levels.length);
    setResult(null);
    setObjPos(0);
    setUserInput("");
    setActive(false);
  };

  useEffect(() => {
      return () => {
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
      }
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto p-4 bg-slate-900 text-white rounded-xl shadow-xl">
      <h3 className="text-xl font-bold text-cyan-400">Gjej Kohën e Rënies</h3>

      <div className="bg-white/5 p-4 rounded-lg border-l-4 border-cyan-400 w-full text-sm">
        <strong>Lartësia (d):</strong> {d} metra <br />
        <strong>Formula:</strong> t = √(2d / g) <br />
        <span className="opacity-70">Gjej <b>t</b> (sekonda) për planetin përkatës.</span>
      </div>

      <div className="relative w-full h-[300px] bg-gradient-to-b from-slate-800 to-slate-950 rounded-xl overflow-hidden border border-white/10">
        <div className="absolute top-2 left-4 text-3xl">👴</div>
        
        {/* Height marker */}
        <div className="absolute left-20 top-[60px] h-[220px] border-l-2 border-dashed border-white/30"></div>
        <div className="absolute left-24 top-[150px] text-xs text-cyan-400 font-bold">d = {d}m</div>

        {/* Falling Object */}
        <motion.div 
            className="absolute left-10 text-2xl"
            style={{ top: 50 + objPos }}
        >
            {lvl.item}
        </motion.div>

        {/* Planet Surface */}
        <div 
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[450px] h-[150px] rounded-[50%]"
            style={{ background: `radial-gradient(circle, ${lvl.color} 0%, #000 80%)` }}
        ></div>

        {/* Result Overlay */}
        <AnimatePresence>
            {result && (
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-center p-6 z-10"
                >
                    <h2 className={`text-2xl font-bold mb-2 ${result.success ? 'text-green-500' : 'text-red-500'}`}>{result.title}</h2>
                    <p className="mb-4 text-sm">{result.msg}</p>
                    <button 
                        onClick={nextLevel}
                        className="bg-cyan-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-cyan-300 transition"
                    >
                        Vazhdo
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      <div className="w-full text-center space-y-4">
        <div className="text-sm bg-slate-800 py-2 px-4 rounded-lg inline-block">
            {lvl.name}: <b className="text-cyan-400">g = {lvl.g} m/s²</b>
        </div>
        
        <div className="flex justify-center gap-2">
            <input 
                type="number" 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="t = ?" 
                className="w-24 p-2 rounded-lg bg-black border border-cyan-400 text-center text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button 
                onClick={startSimulation}
                disabled={active}
                className="bg-cyan-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-cyan-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                LËSHOJE
            </button>
        </div>
      </div>
    </div>
  );
};

export default FreeFallGame;
