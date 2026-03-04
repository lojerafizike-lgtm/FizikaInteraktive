import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MatchPair } from "../../data/minigames";

interface Props {
  pairs: MatchPair[];
  onComplete: () => void;
}

const MatchPairs = ({ pairs, onComplete }: Props) => {
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [flash, setFlash] = useState<number | null>(null);
  const [rightOrder] = useState(() => [...pairs.map((_, i) => i)].sort(() => Math.random() - 0.5));

  const handleRight = useCallback((rightIdx: number) => {
    if (selectedLeft === null) return;
    if (selectedLeft === rightIdx) {
      setMatched(prev => new Set([...prev, rightIdx]));
      setSelectedLeft(null);
      if (matched.size + 1 === pairs.length) {
        setTimeout(onComplete, 1000);
      }
    } else {
      setFlash(rightIdx);
      setTimeout(() => { setFlash(null); setSelectedLeft(null); }, 500);
    }
  }, [selectedLeft, matched, pairs.length, onComplete]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <p className="mb-6 text-center text-sm text-muted-foreground">Zgjidh konceptin në të majtë, pastaj përshkrimin në të djathtë</p>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-3">
          {pairs.map((p, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.95 }}
              onClick={() => !matched.has(i) && setSelectedLeft(i)}
              className={`rounded-lg border p-4 text-sm font-semibold transition-all shadow-sm ${
                matched.has(i)
                  ? "border-green-200 bg-green-50 text-green-700 opacity-60"
                  : selectedLeft === i
                  ? "border-primary bg-primary/10 text-primary ring-2 ring-primary/20"
                  : "border-border bg-card text-foreground hover:border-primary/30"
              }`}
            >
              {p.left}
            </motion.button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {rightOrder.map(ri => (
            <motion.button
              key={ri}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={flash === ri ? { x: [0, -6, 6, -4, 4, 0] } : {}}
              transition={{ duration: 0.4 }}
              onClick={() => !matched.has(ri) && handleRight(ri)}
              className={`rounded-lg border p-4 text-left text-sm transition-all shadow-sm ${
                matched.has(ri)
                  ? "border-green-200 bg-green-50 text-green-700 opacity-60"
                  : flash === ri
                  ? "border-red-300 bg-red-50 text-red-600"
                  : "border-border bg-card text-foreground hover:border-primary/30"
              }`}
            >
              {pairs[ri].right}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchPairs;
