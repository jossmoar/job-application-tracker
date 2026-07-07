import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";
import { TrackerPage } from "./pages/TrackerPage";

// AOS scans the DOM once at init; a client-side route change mounts brand
// new [data-aos] elements it never observed, so without this they'd stay
// permanently invisible until a hard reload re-ran AOS.init().
function AosRouteRefresh() {
  const location = useLocation();
  useEffect(() => {
    const id = requestAnimationFrame(() => AOS.refreshHard());
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AosRouteRefresh />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tracker" element={<TrackerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
