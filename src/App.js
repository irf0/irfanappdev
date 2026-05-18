import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";

const ProjectDetail = lazy(() => import("./Pages/ProjectDetail"));

function PageLoader() {
  return (
    <div
      className="min-h-screen bg-[#151312]"
      aria-busy="true"
      aria-label="Loading"
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="/projectdetail/:projectId"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProjectDetail />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
