import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Layout from "./Pages/Layout";
import ProjectDetail from "./Pages/ProjectDetail";
import { projectCards } from "./utils/projectCards";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Layout />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/projectdetail/:projectId"
            element={<ProjectDetail projectCards={projectCards} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
