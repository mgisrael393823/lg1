import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./pages/projects";
import Communications from "./pages/communications";
import Notifications from "./pages/notifications";
import Integrations from "./pages/integrations";
import Settings from "./pages/settings";
import Analytics from "./pages/analytics";
import Documents from "./pages/documents";
import MicrosoftTeams from "./pages/platforms/microsoft-teams";
import ShareFile from "./pages/platforms/sharefile";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      }
    >
      <div className="min-h-screen bg-gray-50">
        {/* For the tempo routes */}
        {import.meta.env.VITE_TEMPO === "true" && (
          <Routes>
            <Route path="/tempobook/*" />
          </Routes>
        )}

        {/* Main app routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/communication" element={<Communications />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/documents" element={<Documents />} />
          <Route
            path="/platforms/microsoft-teams"
            element={<MicrosoftTeams />}
          />
          <Route path="/platforms/sharefile" element={<ShareFile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
