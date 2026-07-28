const DROP_COUNT = 70;

export const RainEffect = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: DROP_COUNT }, (_, index) => {
        const left = (index * 37) % 100;
        const delay = ((index * 17) % 100) / 100;
        const duration = 0.55 + ((index * 13) % 40) / 100;
        const height = 14 + (index % 5) * 4;

        return (
          <span
            key={index}
            className="weather-rain-drop absolute top-[-10%] w-px bg-gradient-to-b from-sky-100/0 via-sky-100/80 to-sky-200/90"
            style={{
              left: `${left}%`,
              height: `${height}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};
