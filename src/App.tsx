import { lazy, Suspense } from "react";

function App() {
  const WeatherHomePage = lazy(() => import("./pages/home/WeatherHomePage"));
  return (
    <Suspense
      fallback={<div className="flex justify-center items-center min-h-screen">Cargando</div>}
    >
      <WeatherHomePage />
    </Suspense>
  );
}

export default App;
