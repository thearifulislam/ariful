import { useState, useEffect } from 'react';

const IntroLogo = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    console.log('IntroLogo component loaded!');
    
    // Show intro for 3 seconds
    const timer = setTimeout(() => {
      console.log('IntroLogo timer finished');
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  console.log('IntroLogo render - isLoading:', isLoading);
  
  if (!isLoading) {
    return null;
  }
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#0f0f0f',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Animated grid background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(246, 163, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(246, 163, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'gridMove 20s linear infinite'
      }}></div>
      
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        {/* Main logo container */}
        <div style={{
          marginBottom: '60px',
          position: 'relative'
        }}>
          {/* Glowing background */}
          <div style={{
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(246, 163, 0, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'glow 3s ease-in-out infinite'
          }}></div>
          
          {/* Logo text */}
          <div style={{
            fontSize: '4rem',
            fontWeight: '900',
            color: '#F6A300',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            textShadow: '0 0 30px rgba(246, 163, 0, 0.8)',
            animation: 'textGlow 2s ease-in-out infinite alternate',
            position: 'relative',
            zIndex: 2
          }}>
            ArifulGFX
          </div>
        </div>
        
        {/* Tagline with underline */}
        <div style={{
          marginBottom: '50px',
          position: 'relative'
        }}>
          <p style={{ 
            color: 'white', 
            fontSize: '1.8rem',
            fontWeight: '300',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            margin: '0 0 10px 0'
          }}>
            Your Design Partner
          </p>
          <div style={{
            width: '200px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #F6A300, transparent)',
            margin: '0 auto',
            animation: 'underline 2s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Loading animation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '30px'
        }}>
          <div style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            background: '#F6A300',
            animation: 'loadingDot 1.5s ease-in-out infinite'
          }}></div>
          <div style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            background: '#F6A300',
            animation: 'loadingDot 1.5s ease-in-out infinite 0.2s'
          }}></div>
          <div style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            background: '#F6A300',
            animation: 'loadingDot 1.5s ease-in-out infinite 0.4s'
          }}></div>
        </div>
        
        {/* Progress bar */}
        <div style={{
          width: '400px',
          height: '6px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '3px',
          margin: '0 auto 20px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #F6A300, #FFB183)',
            borderRadius: '3px',
            animation: 'progress 3s ease-in-out',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '30px',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
              animation: 'shimmer 1.5s infinite'
            }}></div>
          </div>
        </div>
        
        {/* Status text */}
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.9rem',
          fontWeight: '300',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          Loading Creative Assets...
        </p>
      </div>
      
      <style>
        {`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          
          @keyframes glow {
            0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
          }
          
          @keyframes textGlow {
            0% { text-shadow: 0 0 30px rgba(246, 163, 0, 0.8); }
            100% { text-shadow: 0 0 50px rgba(246, 163, 0, 1); }
          }
          
          @keyframes underline {
            0%, 100% { opacity: 0.5; transform: scaleX(0.8); }
            50% { opacity: 1; transform: scaleX(1.2); }
          }
          
          @keyframes loadingDot {
            0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
            40% { transform: scale(1.2); opacity: 1; }
          }
          
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
};

export default IntroLogo; 