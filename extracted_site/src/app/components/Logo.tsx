export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Shield/Crown Shape */}
      <path
        d="M60 10 L85 25 L90 50 L85 75 L60 95 L35 75 L30 50 L35 25 Z"
        fill="#C9A860"
        stroke="#1A1A1A"
        strokeWidth="2"
      />
      
      {/* Inner Shield */}
      <path
        d="M60 20 L78 32 L82 50 L78 68 L60 85 L42 68 L38 50 L42 32 Z"
        fill="#1A1A1A"
      />
      
      {/* RS Monogram */}
      <text
        x="60"
        y="58"
        fontFamily="serif"
        fontSize="28"
        fontWeight="bold"
        fill="#C9A860"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        RS
      </text>
      
      {/* Decorative Elements - Oil Drop and Building */}
      <circle cx="48" cy="75" r="3" fill="#C9A860" opacity="0.7" />
      <rect x="69" y="72" width="4" height="6" fill="#C9A860" opacity="0.7" />
      
      {/* Crown points at top */}
      <path
        d="M60 8 L62 15 L60 12 L58 15 Z"
        fill="#C9A860"
      />
    </svg>
  );
}
