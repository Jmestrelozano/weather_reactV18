import { lazy, Suspense, type ComponentType } from "react";

const WeatherHomePage = lazy(
  () =>
    import("./pages/home/WeatherHomePage") as Promise<{
      default: ComponentType;
    }>,
);

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-weather-bg text-white">
          Loading...
        </div>
      }
    >
      <WeatherHomePage />
    </Suspense>
  );
}

export default App;
