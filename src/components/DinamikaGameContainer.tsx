import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  generateFillBlanks, 
  generateMcqs, 
  generateMatchPairs, 
  generateBuildFormula, 
  generateTrueFalse 
} from '../data/dinamikaGames';
import FillBlank from './minigames/FillBlank';
import McqGame from './minigames/McqGame';
import MatchPairs from './minigames/MatchPairs';
import BuildFormula from './minigames/BuildFormula';
import TrueFalseGame from './minigames/TrueFalseGame';
import GameWrapper from './GameWrapper';

interface Props {
  termId: number;
  termName: string;
  formula: string;
}

type GameType = 'menu' | 'fill' | 'mcq' | 'match' | 'build' | 'tf';

const DinamikaGameContainer: React.FC<Props> = ({ termId, termName, formula }) => {
  const [activeGame, setActiveGame] = useState<GameType>('menu');

  const fillQs = generateFillBlanks(termId);
  const mcqQs = generateMcqs(termId);
  const matchQs = generateMatchPairs(termId);
  const buildQ = generateBuildFormula(termId, termName, formula);
  const tfQs = generateTrueFalse(termId);

  const games = [
    { id: 'fill', label: 'Plotëso Fjalën', icon: '📝', count: fillQs.length, color: 'bg-blue-100 text-blue-700' },
    { id: 'mcq', label: 'Kuiz (MCQ)', icon: '❓', count: mcqQs.length, color: 'bg-purple-100 text-purple-700' },
    { id: 'match', label: 'Lidh Çiftet', icon: '🔗', count: matchQs.length, color: 'bg-green-100 text-green-700' },
    { id: 'build', label: 'Ndërto Formulën', icon: '🔧', count: buildQ.pieces.length > 1 ? 1 : 0, color: 'bg-orange-100 text-orange-700' },
    { id: 'tf', label: 'E Vërtetë / E Gabuar', icon: '✅', count: tfQs.length, color: 'bg-red-100 text-red-700' },
  ].filter(g => g.count > 0);

  const handleBack = () => setActiveGame('menu');

  return (
    <GameWrapper>
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg sm:text-xl">🎮</span>
            Lojëra: {termName}
          </h2>
          {activeGame !== 'menu' && (
            <button 
              onClick={handleBack}
              className="px-3 py-2 sm:px-4 sm:py-2 bg-slate-100 text-slate-600 rounded-lg font-bold text-xs sm:text-sm hover:bg-slate-200 transition-colors w-full sm:w-auto text-center"
            >
              ← Kthehu tek Menuja
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {activeGame === 'menu' ? (
            <motion.div 
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {games.length > 0 ? (
                games.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => setActiveGame(game.id as GameType)}
                    className="group relative overflow-hidden bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 text-left"
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500 ${game.color.split(' ')[0]}`}></div>
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl ${game.color} flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                        {game.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">{game.label}</h3>
                      <p className="text-sm text-slate-400 font-medium">{game.count} {game.count === 1 ? 'Pyetje' : 'Pyetje'}</p>
                    </div>
                  </button>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-slate-400">
                  <p>Nuk ka lojëra të disponueshme për këtë term.</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="game"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full"
            >
              {activeGame === 'fill' && <FillBlank questions={fillQs} onComplete={handleBack} />}
              {activeGame === 'mcq' && <McqGame questions={mcqQs} onComplete={handleBack} />}
              {activeGame === 'match' && <MatchPairs pairs={matchQs} onComplete={handleBack} />}
              {activeGame === 'build' && <BuildFormula data={buildQ} onComplete={handleBack} />}
              {activeGame === 'tf' && <TrueFalseGame questions={tfQs} onComplete={handleBack} />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GameWrapper>
  );
};

export default DinamikaGameContainer;
