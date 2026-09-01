import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}

export default function Logo({
  className = "",
  size = 24,
  showWordmark = true,
}: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="polarapt-circle-clip">
            <circle cx="12" cy="12" r="12" />
          </clipPath>
        </defs>
        <g clipPath="url(#polarapt-circle-clip)">
          {/* Red band */}
          <rect x="0" y="0" width="24" height="4.8" fill="#FF3622" />
          {/* Orange band */}
          <rect x="0" y="4.8" width="24" height="4.8" fill="#FC8602" />
          {/* Yellow band */}
          <rect x="0" y="9.6" width="24" height="4.8" fill="#FCB505" />
          {/* Green band */}
          <rect x="0" y="14.4" width="24" height="4.8" fill="#45BE00" />
          {/* Blue band */}
          <rect x="0" y="19.2" width="24" height="4.8" fill="#0F87C6" />
        </g>
      </svg>
      {showWordmark && (
        <span className="font-sora font-medium text-ink tracking-tight text-xl">
          polarapt
        </span>
      )}
    </div>
  );
}
