import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrueFalseQ } from "../../data/minigames";
import { CheckCircle, XCircle } from "lucide-react";

interface Props {
  questions: TrueFalseQ[];
  onComplete: () => void;
}

const TrueFalseGame = ({ questions, onComplete }: Props) => {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const q = questions[current];
  const isCorrect = answered !== null && answered === q.correct;

  const answer = (val: boolean) => {
    if (answered !== null) return;
    setAnswered(val);
    if (val === q.correct) setScore(s => s + 1);
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(c => c + 1);
        setAnswered(null);
      } else {
        onComplete();
      }
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
      <div className="flex gap-1.5">
        {questions.map((_, i) => (
          <div key={i} className={`h-1.5 w-6 rounded-full transition-colors ${i < current ? "bg-primary" : i === current ? "bg-primary/60 animate-pulse" : "bg-muted"}`} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, rotateX: -10 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: 10 }}
          className="w-full rounded-xl border border-border bg-card p-8 shadow-sm"
        >
          <p className="mb-8 text-center text-base font-medium text-foreground leading-relaxed">{q.statement}</p>

          {answered === null ? (
            <div className="flex gap-4 justify-center">
              <button onClick={() => answer(true)} className="flex-1 rounded-lg border-2 border-green-200 bg-green-50 py-3 font-sans text-sm font-bold text-green-700 hover:bg-green-100 transition-colors">
                E Vërtetë ✓
              </button>
              <button onClick={() => answer(false)} className="flex-1 rounded-lg border-2 border-red-200 bg-red-50 py-3 font-sans text-sm font-bold text-red-700 hover:bg-red-100 transition-colors">
                E Gabuar ✗
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-lg p-4 text-sm ${isCorrect ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
            >
              <div className="flex items-center justify-center gap-2 mb-2 font-bold text-base">
                {isCorrect ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                {isCorrect ? "Saktë!" : "Gabim!"}
              </div>
              <p className="text-center text-sm opacity-90 leading-relaxed">{q.explanation}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <p className="text-xs text-muted-foreground font-medium">{current + 1}/{questions.length} · Pikë: {score}</p>
    </div>
  );
};

export default TrueFalseGame;
