import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BuildFormula from "./BuildFormula";
import FillBlank from "./FillBlank";
import MatchPairs from "./MatchPairs";
import McqGame from "./McqGame";
import TrueFalseGame from "./TrueFalseGame";
import UnitsGame from "./UnitsGame";

// Import data generators
import * as dinamikaData from "../../data/dinamikaGames";
import * as kinematikaData from "../../data/kinematikaGames";
import { PhysicsTerm } from "../../types";

interface Props {
  term: PhysicsTerm;
  category: string;
}

const GameWrapper = ({ term, category }: Props) => {
  const [stage, setStage] = useState(0);

  // Extract term ID from name (e.g., "1. Forca" -> 1)
  const termIdMatch = term.name.match(/^(\d+)\./);
  const termId = termIdMatch ? parseInt(termIdMatch[1], 10) : 1;

  // Select data source based on category
  const dataSource = category === "Kinematika" ? kinematikaData : dinamikaData;

  // Generate data for the current term
  const fillBlanks = dataSource.generateFillBlanks ? dataSource.generateFillBlanks(termId) : [];
  const mcqs = dataSource.generateMcqs ? dataSource.generateMcqs(termId) : [];
  const matchPairs = dataSource.generateMatchPairs ? dataSource.generateMatchPairs(termId) : [];
  const buildFormula = dataSource.generateBuildFormula ? dataSource.generateBuildFormula(termId, term.name.replace(/^\d+\.\s*/, ''), term.form) : null;
  const trueFalse = dataSource.generateTrueFalse ? dataSource.generateTrueFalse(termId) : [];

  // Define the sequence of games
  const gamesSequence = [];
  
  if (fillBlanks && fillBlanks.length > 0) {
    gamesSequence.push({
      id: "fill-blank",
      title: "Plotëso Fjalën",
      component: <FillBlank questions={fillBlanks} onComplete={() => setStage(s => s + 1)} />
    });
  }
  
  if (mcqs && mcqs.length > 0) {
    gamesSequence.push({
      id: "mcq",
      title: "Fakte & Llogaritje",
      component: <McqGame questions={mcqs} onComplete={() => setStage(s => s + 1)} />
    });
  }
  
  if (matchPairs && matchPairs.length > 0) {
    gamesSequence.push({
      id: "match",
      title: "Lidh Çiftet",
      component: <MatchPairs pairs={matchPairs} onComplete={() => setStage(s => s + 1)} />
    });
  }
  
  if (buildFormula && buildFormula.pieces.length > 1) {
    gamesSequence.push({
      id: "build",
      title: "Ndërto Formulën",
      component: <BuildFormula data={buildFormula} onComplete={() => setStage(s => s + 1)} />
    });
  }
  
  if (trueFalse && trueFalse.length > 0) {
    gamesSequence.push({
      id: "tf",
      title: "E Vërtetë / E Gabuar",
      component: <TrueFalseGame questions={trueFalse} onComplete={() => setStage(s => s + 1)} />
    });
  }

  // If no games are available for this term
  if (gamesSequence.length === 0) {
    return (
      <div className="text-center py-12">
        <i className="fas fa-tools text-5xl text-slate-300 mb-4"></i>
        <h4 className="text-xl font-bold text-slate-500">Lojërat janë në zhvillim</h4>
        <p className="text-slate-400 mt-2">Së shpejti do të shtohen lojëra interaktive për këtë term.</p>
      </div>
    );
  }

  // If all games are completed
  if (stage >= gamesSequence.length) {
    return (
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-12 bg-green-50 rounded-2xl border border-green-100"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-trophy text-4xl text-green-500"></i>
        </div>
        <h3 className="text-2xl font-black text-green-700 mb-2">Urime!</h3>
        <p className="text-green-600 mb-6">Keni përfunduar me sukses të gjitha sfidat për këtë term.</p>
        <button 
          onClick={() => setStage(0)}
          className="px-6 py-2 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-colors shadow-md"
        >
          Luaj Përsëri
        </button>
      </motion.div>
    );
  }

  const currentGame = gamesSequence[stage];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 px-1 uppercase tracking-wider">
          <span>Sfida {stage + 1} nga {gamesSequence.length}</span>
          <span className="text-primary">{currentGame.title}</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden flex">
          {gamesSequence.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-full flex-1 border-r border-white/20 last:border-0 transition-colors duration-500 ${
                idx < stage ? "bg-green-400" : idx === stage ? "bg-primary" : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Game Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {currentGame.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GameWrapper;
