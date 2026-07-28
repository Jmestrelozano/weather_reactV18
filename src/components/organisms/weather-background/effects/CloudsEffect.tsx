export const CloudsEffect = () => {
  const clouds = [
    { top: "8%", size: "w-48 h-24 sm:w-72 sm:h-32", duration: "28s", delay: "0s", opacity: "opacity-40" },
    { top: "22%", size: "w-56 h-28 sm:w-80 sm:h-36", duration: "36s", delay: "-8s", opacity: "opacity-50" },
    { top: "38%", size: "w-40 h-20 sm:w-64 sm:h-28", duration: "32s", delay: "-14s", opacity: "opacity-35" },
    { top: "14%", size: "w-64 h-28 sm:w-96 sm:h-40", duration: "42s", delay: "-20s", opacity: "opacity-30" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {clouds.map((cloud, index) => (
        <div
          key={index}
          className={`weather-cloud absolute left-[-40%] rounded-[100%] bg-white/70 blur-md ${cloud.size} ${cloud.opacity}`}
          style={{
            top: cloud.top,
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
          }}
        />
      ))}
    </div>
  );
};
