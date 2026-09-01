import React from "react";

interface StripeAccentProps {
  className?: string;
  width?: string;
  height?: string;
}

export default function StripeAccent({
  className = "",
  width = "w-16",
  height = "h-[3px]",
}: StripeAccentProps) {
  return (
    <div
      className={`inline-flex ${width} ${height} rounded-full overflow-hidden shrink-0 ${className}`}
      aria-hidden="true"
    >
      <span className="flex-1 bg-brand-red" />
      <span className="flex-1 bg-brand-orange" />
      <span className="flex-1 bg-brand-yellow" />
      <span className="flex-1 bg-brand-green" />
      <span className="flex-1 bg-brand-blue" />
    </div>
  );
}
