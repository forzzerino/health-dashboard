import { ThemeProvider } from "@/components/theme-provider";
import LandingPage from "./components/LandingPage";
import LightRays from "./components/LightRays";

import "./App.css";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LandingPage />
      <div className="absolute top-0 w-screen">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
