import { useState } from "react";
import { motion } from "framer-motion";
import { UnitQ } from "../../data/minigames";

interface Props {
  units: UnitQ[];
  termName: string;
  formula: string;
  onComplete: () => void;
}

const UnitsGame = ({ units, termName, formula, onComplete }: Props) => {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setRevealed(prev => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center bg-primary/5 p-6 rounded-xl border border-primary/10">
        <p className="font-sans text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">{termName}</p>
        <p className="font-sans text-2xl font-bold text-primary">{formula}</p>
      </div>

      <p className="text-center text-sm text-muted-foreground">Kliko çdo element për të zbuluar njësinë dhe mjetin matës</p>

      <div className="space-y-3">
        {units.map((u, i) => (
          <motion.button
            key={i}
            onClick={() => toggle(i)}
            whileTap={{ scale: 0.98 }}
            className={`w-full rounded-xl border p-5 text-left transition-all shadow-sm ${
              revealed.has(i) ? "border-primary/40 bg-primary/5" : "border-border bg-card hover:border-primary/30"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 font-sans text-lg font-bold text-primary">{u.symbol}</span>
                <span className="text-base font-medium text-foreground">{u.variable}</span>
              </div>
              {!revealed.has(i) && <span className="text-xs font-semibold text-primary/60 uppercase tracking-wider">Kliko →</span>}
            </div>
            {revealed.has(i) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="mt-4 grid grid-cols-2 gap-4 border-t border-border/50 pt-4"
              >
                <div className="bg-white p-3 rounded-lg border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Njësia</p>
                  <p className="text-sm font-semibold text-slate-700">{u.unit}</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Mjeti matës</p>
                  <p className="text-sm font-semibold text-slate-700">{u.measuringTool}</p>
                </div>
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <button onClick={onComplete} className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors shadow-md mt-4">
        Vazhdo →
      </button>
    </div>
  );
};

export default UnitsGame;
