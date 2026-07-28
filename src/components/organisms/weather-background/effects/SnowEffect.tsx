const FLAKE_COUNT = 55;

export const SnowEffect = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: FLAKE_COUNT }, (_, index) => {
        const left = (index * 41) % 100;
        const size = 3 + (index % 4);
        const delay = ((index * 19) % 120) / 20;
        const duration = 4.5 + (index % 6);

        return (
          <span
            key={index}
            className="weather-snow-flake absolute top-[-8%] rounded-full bg-white/90 shadow-[0_0_6px_rgba(255,255,255,0.8)]"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};
