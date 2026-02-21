import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10" }) => {
  return (
    <svg 
      viewBox="0 0 420 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      preserveAspectRatio="xMinYMid meet"
      aria-label="Steli Lux Logo"
    >
      {/* Icon Part */}
      <g transform="translate(10, 10)">
        {/* Dark swoosh/base - refined for better accuracy */}
        <path 
          d="M15 65C10 55 12 40 20 30L10 20C-2 38 -2 65 15 82C32 99 62 99 88 82L78 72C62 82 35 82 20 67L15 65Z" 
          fill="currentColor" 
        />
        
        {/* Orange arrow - refined for better accuracy */}
        <path 
          d="M30 75C55 92 100 85 145 62L215 25L205 15L260 10L250 65L240 55L160 90C110 115 60 115 30 95L30 75Z" 
          fill="#F97316" 
        />
      </g>
      
      {/* Text Part - Adjusted position and size */}
      <text 
        x="175" 
        y="82" 
        fontFamily="'Montserrat', sans-serif" 
        fontWeight="900" 
        fontSize="64" 
        fill="currentColor"
        style={{ fontStyle: 'italic', letterSpacing: '-0.04em' }}
      >
        STELI LUX
      </text>
    </svg>
  );
};

export default Logo;
