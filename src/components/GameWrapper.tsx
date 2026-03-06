import { useState, useRef, useEffect } from 'react';
import { Maximize, X } from 'lucide-react';

const GameWrapper = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if ((containerRef.current as any).webkitRequestFullscreen) { /* Safari */
          await (containerRef.current as any).webkitRequestFullscreen();
        } else if ((containerRef.current as any).msRequestFullscreen) { /* IE11 */
          await (containerRef.current as any).msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) { /* Safari */
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) { /* IE11 */
          await (document as any).msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error("Error attempting to toggle fullscreen:", err);
      // Fallback to CSS fullscreen if API fails
      setIsFullscreen(!isFullscreen);
      if (!isFullscreen) {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (!document.fullscreenElement) {
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full rounded-xl overflow-hidden transition-all duration-300 ${
        isFullscreen 
          ? 'fixed inset-0 z-[9999] bg-background p-0 flex flex-col w-screen h-screen m-0 rounded-none' 
          : 'bg-card border border-border shadow-sm'
      }`}
    >
      <button 
        onClick={toggleFullscreen}
        className={`z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors ${
          isFullscreen 
            ? 'absolute top-4 right-4 md:top-6 md:right-6' 
            : 'absolute top-4 right-4'
        }`}
        title={isFullscreen ? "Mbyll lojën" : "Ekrani i plotë"}
      >
        {isFullscreen ? <X size={24} /> : <Maximize size={20} />}
      </button>
      
      <div className={`w-full ${isFullscreen ? 'h-full overflow-y-auto overflow-x-hidden flex items-center justify-center bg-white' : 'p-4 md:p-6'}`}>
        <div className={isFullscreen ? 'w-full h-full max-w-7xl p-2 md:p-4 flex flex-col justify-center [&>div]:h-full [&_iframe]:h-full' : 'w-full'}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default GameWrapper;
