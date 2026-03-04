import { useState, useRef, useEffect } from 'react';
import { Maximize, Minimize } from 'lucide-react';

const GameWrapper = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full rounded-xl overflow-hidden transition-all duration-300 ${
        isFullscreen 
          ? 'fixed inset-0 z-50 bg-background p-4 flex flex-col items-center justify-center' 
          : 'bg-card border border-border shadow-sm'
      }`}
    >
      <button 
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-50 p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        title={isFullscreen ? "Dil nga ekrani i plotë" : "Ekrani i plotë"}
      >
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>
      
      <div className={`w-full ${isFullscreen ? 'h-full overflow-auto flex items-center justify-center' : 'p-6'}`}>
        <div className={isFullscreen ? 'w-full max-w-6xl' : 'w-full'}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default GameWrapper;
