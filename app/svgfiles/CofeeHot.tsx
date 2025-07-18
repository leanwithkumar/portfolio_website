type CoffeeHotProps = {
  size?: number | string;  // Made optional with default
  className?: string;     // Added for styling
};

const CoffeeHot = ({ 
  size = 24,              // Default size
  className = ""          // Default empty class
}: CoffeeHotProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}  // Pass through classes
    aria-hidden="true"     // Accessibility
  >
    {/* Original, unmodified paths */}
    <g 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round"  // Fixed JSX attribute
      strokeLinejoin="round" 
      strokeWidth="1.5"
    >
      <path d="M3.5 10.682c0-.875.71-1.585 1.585-1.585H16.52c.876 0 1.585.71 1.585 1.585v3.265a7.303 7.303 0 0 1-7.302 7.303v0A7.303 7.303 0 0 1 3.5 13.947z"/>
      <path d="M18.105 10.556h1.464A2.43 2.43 0 0 1 22 12.986v0a2.43 2.43 0 0 1-2.43 2.43h-1.465M6.421 3.75v2.43m4.382-2.43v2.43m4.381-2.43v2.43"/>
    </g>
  </svg>
);

export default CoffeeHot;