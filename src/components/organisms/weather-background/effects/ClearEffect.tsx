export const ClearEffect = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="weather-sun-glow absolute -right-16 -top-16 h-72 w-72 rounded-full bg-amber-300/35 blur-3xl sm:h-96 sm:w-96" />
      <div className="weather-sun-core absolute right-8 top-10 h-28 w-28 rounded-full bg-yellow-200/50 blur-xl sm:right-16 sm:top-14 sm:h-40 sm:w-40" />
      {Array.from({ length: 8 }, (_, index) => (
        <div
          key={index}
          className="weather-sun-ray absolute right-20 top-24 origin-bottom bg-gradient-to-t from-amber-200/0 via-amber-100/40 to-white/70 sm:right-28 sm:top-32"
          style={{
            width: "3px",
            height: `${140 + (index % 3) * 40}px`,
            transform: `rotate(${index * 45}deg)`,
            animationDelay: `${index * 0.15}s`,
          }}
        />
      ))}
      {Array.from({ length: 12 }, (_, index) => (
        <span
          key={`spark-${index}`}
          className="weather-sparkle absolute h-1.5 w-1.5 rounded-full bg-white"
          style={{
            left: `${12 + ((index * 17) % 70)}%`,
            top: `${18 + ((index * 23) % 50)}%`,
            animationDelay: `${index * 0.25}s`,
          }}
        />
      ))}
    </div>
  );
};
