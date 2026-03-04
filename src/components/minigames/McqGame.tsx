import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { McqQ } from "../../data/minigames";

interface Props {
  questions: McqQ[];
  onComplete: () => void;
}

const McqGame = ({ questions, onComplete }: Props) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const q = questions[current];

  useEffect(() => {
    if (selected !== null) {
      const timer = setTimeout(() => {
        if (current < questions.length - 1) {
          setCurrent(c => c + 1);
          setSelected(null);
        } else {
          onComplete();
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [selected, current, questions.length, onComplete]);

  const pick = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.correct) setScore(s => s + 1);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
      {/* dot tracker */}
      <div className="flex gap-1.5">
        {questions.map((_, i) => (
          <div key={i} className={`h-2.5 w-2.5 rounded-full transition-colors ${i < current ? "bg-primary" : i === current ? "bg-primary animate-pulse" : "bg-muted"}`} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          className="w-full"
        >
          <p className="mb-6 text-center font-sans text-base font-semibold text-foreground">{q.question}</p>
          <div className="grid grid-cols-1 gap-3">
            {q.options.map((opt, i) => {
              let cls = "border-border bg-card text-foreground hover:border-primary/50";
              if (selected !== null) {
                if (i === q.correct) cls = "border-green-400 bg-green-50 text-green-800";
                else if (i === selected) cls = "border-red-400 bg-red-50 text-red-800";
              }
              return (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => pick(i)}
                  className={`rounded-lg border p-4 text-left text-sm font-medium shadow-sm transition-colors ${cls}`}
                >
                  <span className="mr-3 font-sans text-xs text-muted-foreground font-bold">{String.fromCharCode(65 + i)})</span>
                  {opt}
                </motion.button>
              );
            })}
          </div>

          {/* Solution display */}
          {selected !== null && q.solution && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground"
            >
              <p className="font-sans text-xs font-bold text-primary mb-2 uppercase tracking-wider">Zgjidhje:</p>
              <p className="text-sm text-slate-700">{q.solution}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <p className="text-xs text-muted-foreground font-medium">Pikë: {score}/{questions.length}</p>
    </div>
  );
};

export default McqGame;
