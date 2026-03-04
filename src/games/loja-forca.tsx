import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { generateBuildFormula, generateFillBlanks, generateMatchPairs, generateMcqs, generateTrueFalse } from '../src/data/dinamikaGames';
import BuildFormula from '../src/components/minigames/BuildFormula';
import FillBlank from '../src/components/minigames/FillBlank';
import MatchPairs from '../src/components/minigames/MatchPairs';
import McqGame from '../src/components/minigames/McqGame';
import TrueFalseGame from '../src/components/minigames/TrueFalseGame';
import UnitsGame from '../src/components/minigames/UnitsGame';
import { ALL_PHYSICS_DATA } from '../src/constants';
import '../src/index.css';

const term = ALL_PHYSICS_DATA["Dinamika"][0]; // 1. Forca

const GameContainer = () => {
    const [stage, setStage] = useState(0);

    const nextStage = () => setStage(s => s + 1);

    const units = [{ symbol: "F", variable: "Forca", unit: "Njuton (N)", measuringTool: "Dinamometri" }];
    const buildData = generateBuildFormula(term);
    const fillData = generateFillBlanks(term);
    const matchData = generateMatchPairs(term);
    const mcqData = generateMcqs(term);
    const tfData = generateTrueFalse(term);

    const games = [
        <UnitsGame units={units} termName={term.name} formula={term.form} onComplete={nextStage} />,
        <BuildFormula data={buildData} onComplete={nextStage} />,
        <FillBlank questions={fillData} onComplete={nextStage} />,
        <MatchPairs pairs={matchData} onComplete={nextStage} />,
        <McqGame questions={mcqData} onComplete={nextStage} />,
        <TrueFalseGame questions={tfData} onComplete={nextStage} />
    ];

    if (stage >= games.length) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-primary">
                <h2 className="text-3xl font-bold mb-4">Urime!</h2>
                <p>E përfundove me sukses sfidën e Forcës.</p>
            </div>
        );
    }

    return (
        <div className="p-8 h-full box-border overflow-y-auto bg-background">
            {games[stage]}
        </div>
    );
};

const root = createRoot(document.getElementById('root')!);
root.render(<GameContainer />);
