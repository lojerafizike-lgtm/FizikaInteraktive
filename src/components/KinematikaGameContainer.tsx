import { motion } from "framer-motion";
import FreeFallGame from "./kinematika_games/FreeFallGame";
import PeriodFrequencyGame from "./kinematika_games/PeriodFrequencyGame";
import AngularVelocityGame from "./kinematika_games/AngularVelocityGame";
import LinearVelocityGame from "./kinematika_games/LinearVelocityGame";
import CentripetalAccelerationGame from "./kinematika_games/CentripetalAccelerationGame";
import AngleGame from "./kinematika_games/AngleGame";
import AngularAccelerationGame from "./kinematika_games/AngularAccelerationGame";
import GameWrapper from "./GameWrapper";

interface Props {
  termId: number;
  termName: string;
}

const KinematikaGameContainer = ({ termId, termName }: Props) => {
  
  const renderGame = () => {
    switch (termId) {
      case 9: // Nxitimi i renies se lire
        return <FreeFallGame />;
      case 10: // Perioda
        return <PeriodFrequencyGame mode="period" />;
      case 11: // Frekuenca
        return <PeriodFrequencyGame mode="frequency" />;
      case 12: // Shpejtësia këndore
        return <AngularVelocityGame />;
      case 13: // Shpejtësia lineare
        return <LinearVelocityGame />;
      case 14: // Nxitimi qendërsynues
        return <CentripetalAccelerationGame />;
      case 15: // Këndi
        return <AngleGame />;
      case 16: // Nxitimi këndor
        return <AngularAccelerationGame />;
      default:
        return (
          <div className="text-center p-8 bg-muted/30 rounded-xl border border-dashed border-muted-foreground/25">
            <p className="text-muted-foreground">
              Lojërat për këtë term janë duke u zhvilluar.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 sm:mb-8 text-center px-4"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
          {termName} - Lojë Interaktive
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Zgjidh sfidat dhe mëso duke luajtur!
        </p>
      </motion.div>

      <GameWrapper>
        {renderGame()}
      </GameWrapper>
    </div>
  );
};

export default KinematikaGameContainer;
