type GreekKeyBorderProps = {
  className?: string;
};

export function GreekKeyBorder({ className = "" }: GreekKeyBorderProps) {
  return (
    <div className={`h-6 w-full text-blue-400 ${className}`} aria-hidden="true">
      <svg
        className="block h-full w-full"
        width="100%"
        height="24"
        role="presentation"
        focusable="false"
      >
        <defs>
          <pattern
            id="greek-wave-border-pattern"
            x="0"
            y="3"
            width="48"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 12 C 6 4 18 4 24 12 C 30 20 42 20 48 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#greek-wave-border-pattern)" />
      </svg>
    </div>
  );
}
