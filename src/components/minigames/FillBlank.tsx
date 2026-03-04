import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FillBlankQ } from "../../data/minigames";
import { CheckCircle, XCircle } from "lucide-react";

interface Props {
  questions: FillBlankQ[];
  onComplete: () => void;
}

const FillBlank = ({ questions, onComplete }: Props) => {
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [score, setScore] = useState(0);

  const q = questions[current];

  const check = () => {
    if (input.trim().toLowerCase() === q.answer.toLowerCase()) {
      setStatus("correct");
      setScore(s => s + 1);
    } else {
      setStatus("wrong");
    }
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(c => c + 1);
        setInput("");
        setStatus("idle");
      } else {
        onComplete();
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
      <div className="flex gap-1.5">
        {questions.map((_, i) => (
          <div key={i} className={`h-1.5 w-8 rounded-full transition-colors ${i < current ? "bg-primary" : i === current ? "bg-primary/50 animate-pulse" : "bg-muted"}`} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          className="w-full rounded-lg border border-border bg-card p-6 shadow-sm"
        >
          <p className="mb-6 text-center font-sans text-foreground leading-relaxed">
            {q.sentence.split("___").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="inline-block mx-1 border-b-2 border-primary text-primary font-semibold min-w-[60px] text-center">
                    {status !== "idle" ? q.answer : "___"}
                  </span>
                )}
              </span>
            ))}
          </p>

          {status === "idle" ? (
            <div className="flex gap-2">
              <input
                autoFocus
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && input.trim() && check()}
                placeholder="Shkruaj përgjigjen..."
                className="flex-1 rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button
                onClick={check}
                disabled={!input.trim()}
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-40"
              >
                Kontrollo
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`flex items-center justify-center gap-2 rounded-md p-3 text-sm font-medium ${
                status === "correct" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {status === "correct" ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
              {status === "correct" ? "Saktë!" : `Gabim! Përgjigja: ${q.answer}`}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <p className="text-xs text-muted-foreground">Pikë: {score}/{questions.length}</p>
    </div>
  );
};

export default FillBlank;
