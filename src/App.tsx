import { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import routes from "tempo-routes";
import AppLayout from "./components/layout/AppLayout";
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

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      }
    >
      <AppLayout>
        {import.meta.env.VITE_TEMPO && useRoutes(routes)}
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
          {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
          <Route path="*" element={<Home />} />
        </Routes>
      </AppLayout>
    </Suspense>
  );
}

export default App;
