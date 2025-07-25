import React from 'react';

type RocketProps = {
  size?: number | string; // Made optional with default
  className?: string;    // Added for styling
  color?: string;       // Added for color control
};

const Rocket = ({ 
  size = 24,           // Default size
  className = '',      // Default empty class
  color = 'currentColor' // Default color
}: RocketProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"  // Accessibility
  >
    <path 
      fill={color} 
      d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9a6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z"
    />
    <circle cx="15.73" cy="8.3" r="2" fill={color} />
    <path fill={color} d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z" />
  </svg>
);

export default Rocket;