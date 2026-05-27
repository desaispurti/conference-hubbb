import { useEffect, useState } from "react";
import "./SplashAnimation.css";

export const SplashAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<'idle' | 'pulse' | 'reveal' | 'fade'>('idle');

  useEffect(() => {
    // Sequence: Pulse (animation start), Reveal (text shows fully), Fade (exit)
    const seq = [
      { stage: 'pulse', delay: 200 },
      { stage: 'reveal', delay: 1000 },
      { stage: 'fade', delay: 3000 },
    ];

    const timers = seq.map(s => 
      setTimeout(() => setStage(s.stage as any), s.delay)
    );
    
    // Complete and unmount after 3.8s
    const completeTimer = setTimeout(() => onComplete(), 3800);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`splash-container ${stage === 'fade' ? 'fade-out' : ''}`}>
      <div className="splash-background">
        <div className="grid-overlay"></div>
        <div className="particles-overlay"></div>
      </div>
      
      <div className="splash-content">
        <div className={`icon-container ${stage}`}>
          {/* Concentric pulsing rings */}
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>
          
          {/* Central Network Globe Icon */}
          <div className="globe-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
              {/* Network nodes */}
              <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="15.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="8.5" cy="16.5" r="1.5" fill="currentColor" stroke="none" />
              <path d="M12 12l3.5-4.5" strokeDasharray="1 2" />
              <path d="M12 12l-3.5 4.5" strokeDasharray="1 2" />
            </svg>
          </div>
        </div>
        
        <div className={`text-container ${stage}`}>
          <h1 className="splash-title">EMINSPHERE</h1>
          <p className="splash-subtitle">Global Research & Innovation</p>
        </div>
        
        <div className={`loading-bar-container ${stage}`}>
          <div className="loading-bar"></div>
        </div>
      </div>
    </div>
  );
};
