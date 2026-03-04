import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BuildFormulaQ } from "../../data/minigames";
import { CheckCircle } from "lucide-react";

interface Props {
  data: BuildFormulaQ;
  onComplete: () => void;
}

const BuildFormula = ({ data, onComplete }: Props) => {
  const [placed, setPlaced] = useState<string[]>([]);
  const [remaining, setRemaining] = useState(data.pieces);
  const [solved, setSolved] = useState(false);
  const [showApps, setShowApps] = useState(false);

  const addPiece = (piece: string, idx: number) => {
    setPlaced(p => [...p, piece]);
    setRemaining(r => r.filter((_, i) => i !== idx));
  };

  const removePiece = (idx: number) => {
    if (solved) return;
    const piece = placed[idx];
    setPlaced(p => p.filter((_, i) => i !== idx));
    setRemaining(r => [...r, piece]);
  };

  const checkFormula = () => {
    const built = placed.join(" ").replace(/\s+/g, " ").trim();
    const target = data.formula.replace(/\s+/g, " ").trim();
    if (built === target) {
      setSolved(true);
      setShowApps(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-md mx-auto">
      <p className="font-display text-sm text-muted-foreground">Ndërto: <span className="text-foreground">{data.termName}</span></p>

      {/* Build area */}
      <div className="min-h-[48px] w-full rounded-lg border-2 border-dashed border-border bg-muted/50 p-3 flex flex-wrap gap-1.5 items-center justify-center">
        {placed.length === 0 && <span className="text-xs text-muted-foreground">Kliko pjesët më poshtë...</span>}
        {placed.map((p, i) => (
          <motion.button
            key={`${p}-${i}`}
            layout
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={() => removePiece(i)}
            className="rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 font-display text-sm text-primary"
          >
            {p}
          </motion.button>
        ))}
      </div>

      {/* Available pieces */}
      {!solved && (
        <div className="flex flex-wrap gap-1.5 justify-center">
          {remaining.map((p, i) => (
            <motion.button
              key={`${p}-${i}`}
              layout
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addPiece(p, i)}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:border-primary/50"
            >
              {p}
            </motion.button>
          ))}
        </div>
      )}

      {!solved && placed.length > 0 && (
        <button onClick={checkFormula} className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
          Kontrollo
        </button>
      )}

      <AnimatePresence>
        {showApps && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full space-y-3"
          >
            <div className="flex items-center justify-center gap-2 text-accent">
              <CheckCircle className="h-5 w-5" />
              <span className="font-display text-sm">Saktë! Ja rastet e zbatimit:</span>
            </div>
            {data.applications.map((app, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-4 text-sm">
                <p className="text-foreground mb-1">{app.question}</p>
                <p className="text-accent font-medium">{app.answer}</p>
              </div>
            ))}
            <button onClick={onComplete} className="w-full rounded-md bg-muted py-2 text-sm text-muted-foreground hover:text-foreground">
              Vazhdo →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BuildFormula;
