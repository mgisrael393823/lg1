import { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
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
import routes from "tempo-routes";

function App() {
  // Initialize Tempo routes if in Tempo environment
  const tempoRoutes =
    import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;

  // Get the base path from environment
  const basePath = import.meta.env.BASE_URL || "/";

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      }
    >
      <AppLayout>
        {/* Render Tempo routes first if they exist */}
        {tempoRoutes}

        <Routes>
          <Route path={basePath} element={<Home />} />
          <Route path={`${basePath}projects`} element={<Projects />} />
          <Route
            path={`${basePath}communication`}
            element={<Communications />}
          />
          <Route
            path={`${basePath}notifications`}
            element={<Notifications />}
          />
          <Route path={`${basePath}integrations`} element={<Integrations />} />
          <Route path={`${basePath}settings`} element={<Settings />} />
          <Route path={`${basePath}analytics`} element={<Analytics />} />
          <Route path={`${basePath}documents`} element={<Documents />} />
          <Route
            path={`${basePath}platforms/microsoft-teams`}
            element={<MicrosoftTeams />}
          />
          <Route
            path={`${basePath}platforms/sharefile`}
            element={<ShareFile />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </AppLayout>
    </Suspense>
  );
}

export default App;
