import { useState, useRef, useEffect } from 'react';
import { Maximize, X } from 'lucide-react';

const GameWrapper = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    // Use CSS-based fullscreen state toggle
    // This is more reliable on mobile browsers (iOS Safari) than the Fullscreen API
    setIsFullscreen(!isFullscreen);
    
    // Optional: Scroll to top when entering fullscreen
    if (!isFullscreen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = ''; // Restore scrolling
    }
  };

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full rounded-xl overflow-hidden transition-all duration-300 ${
        isFullscreen 
          ? 'fixed inset-0 z-[9999] bg-background p-0 flex flex-col' 
          : 'bg-card border border-border shadow-sm'
      }`}
    >
      <button 
        onClick={toggleFullscreen}
        className={`z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors ${
          isFullscreen 
            ? 'fixed top-6 right-6' 
            : 'absolute top-4 right-4'
        }`}
        title={isFullscreen ? "Mbyll lojën" : "Ekrani i plotë"}
      >
        {isFullscreen ? <X size={24} /> : <Maximize size={20} />}
      </button>
      
      <div className={`w-full ${isFullscreen ? 'h-full overflow-auto flex items-center justify-center bg-white' : 'p-6'}`}>
        <div className={isFullscreen ? 'w-full h-full max-w-7xl p-4 flex flex-col justify-center' : 'w-full'}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default GameWrapper;
