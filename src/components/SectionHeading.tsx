import { useEffect, useRef, useState } from "react";

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
  progress: externalProgress,
  className = "",
  isDark = false,
}: Props) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [internalProgress, setInternalProgress] = useState(0);

  useEffect(() => {
    if (externalProgress !== undefined) return;

    const onScroll = () => {
      if (!wrapRef.current) return;
      const r = wrapRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Animate when the heading enters the viewport
      const pct = Math.max(
        0,
        Math.min(1, 1 - (r.top - vh * 0.3) / (vh * 0.6))
      );
      setInternalProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [externalProgress]);

  const textColor = isDark ? "text-white" : "text-gray-900";
  const subtitleColor = isDark ? "text-white/80" : "text-gray-600";
  const lineColor = isDark ? "text-white/60" : "text-gray-400";

  return (
    <div
      ref={wrapRef}
      className={`w-full flex flex-col items-center text-center ${className}`}
    >
      <h2
        className={`font-montserrat text-4xl sm:text-5xl md:text-6xl font-extrabold ${textColor} tracking-wide`}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {title.toUpperCase()}
      </h2>

      {/* Divider with arrows (always complete) */}
      <div className="relative mt-4 h-5 w-full max-w-sm">
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
          className={`mt-3 text-2xl sm:text-3xl ${subtitleColor}`}
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
