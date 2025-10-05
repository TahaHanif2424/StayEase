import { useRef } from "react";

type Props = {
  title: string;
  subtitle?: string;
  progress?: number;
  className?: string;
  isDark?: boolean;
};

const SectionHeading = ({
  title,
  subtitle,
  className = "",
  isDark = false,
}: Props) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const textColor = isDark ? "text-white" : "text-gray-900";
  const subtitleColor = isDark ? "text-white/80" : "text-gray-600";
  const lineColor = isDark ? "text-white/60" : "text-gray-400";

  return (
    <div
      ref={wrapRef}
      className={`w-full flex flex-col items-center text-center px-4 ${className}`}
    >
      <h2
        className={`font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold ${textColor} tracking-wide`}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {title.toUpperCase()}
      </h2>

      {/* Divider with arrows (always complete) */}
      <div className="relative mt-3 sm:mt-4 h-4 sm:h-5 w-full max-w-[200px] sm:max-w-xs md:max-w-sm">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 20"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* center line - always full */}
          <line
            x1="40"
            y1="10"
            x2="360"
            y2="10"
            stroke="currentColor"
            strokeWidth="2"
            className={`${lineColor}`}
          />
          {/* left arrow */}
          <path d="M30 10 L40 6 L40 14 Z" className={`${lineColor}`} />
          {/* right arrow */}
          <path d="M370 10 L360 6 L360 14 Z" className={`${lineColor}`} />
        </svg>
      </div>

      {subtitle && (
        <p
          className={`mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl ${subtitleColor} px-2`}
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
