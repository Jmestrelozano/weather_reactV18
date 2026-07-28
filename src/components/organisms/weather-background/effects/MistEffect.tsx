export const MistEffect = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="weather-mist absolute inset-y-[10%] -left-1/4 w-[70%] bg-gradient-to-r from-slate-200/10 via-white/35 to-slate-200/10 blur-2xl" />
      <div
        className="weather-mist absolute inset-y-[35%] -left-1/3 w-[80%] bg-gradient-to-r from-slate-300/5 via-white/40 to-slate-300/5 blur-3xl"
        style={{ animationDelay: "-6s", animationDuration: "22s" }}
      />
      <div
        className="weather-mist absolute inset-y-[55%] -left-1/5 w-[75%] bg-gradient-to-r from-white/5 via-slate-100/30 to-white/5 blur-2xl"
        style={{ animationDelay: "-12s", animationDuration: "28s" }}
      />
    </div>
  );
};
