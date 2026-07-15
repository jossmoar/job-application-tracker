import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LandingPage } from "./pages/LandingPage";
import { TrackerPage } from "./pages/TrackerPage";
import { capturePageview } from "./analytics";

// AOS scans the DOM once at init; a client-side route change mounts brand
// new [data-aos] elements it never observed, so without this they'd stay
// permanently invisible until a hard reload re-ran AOS.init(). Same effect
// also reports the route change to PostHog, since its default history-based
// autocapture doesn't see in-app (client-side) navigations.
function AosRouteRefresh() {
  const location = useLocation();
  useEffect(() => {
    const id = requestAnimationFrame(() => AOS.refreshHard());
    capturePageview(location.pathname);
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
