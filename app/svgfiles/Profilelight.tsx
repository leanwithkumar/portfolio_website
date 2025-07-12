import React from 'react';

type ProfileLightProps = {
  size?: number | string; // Made optional with default
  className?: string;    // Added for styling
  color?: string;       // Added for color control
};

const ProfileLight = ({ 
  size = 24,           // Default size
  className = '',      // Default empty class
  color = 'currentColor' // Default color
}: ProfileLightProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"  // Accessibility
  >
    <g 
      fill="none" 
      stroke={color} 
      strokeWidth="1.5"  // Correct JSX attribute
      strokeLinejoin="round"  // Correct JSX attribute
    >
      <path d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/>
      <circle cx="12" cy="7" r="3"/>
    </g>
  </svg>
);

export default ProfileLight;