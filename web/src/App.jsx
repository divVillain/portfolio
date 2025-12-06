import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Nav from "./Modules/Nav";
import Footer from "./Modules/Footer.jsx";

import Home from "./Home.jsx";
import ProjectPage from "./ProjectPage.jsx";
import { getProjectsInfo } from "./lib/get-projects-info.js";
import { useEffect, useState } from "react";


function App() {




  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:projectSlug" element={<ProjectPage />} />
        </Routes >
      </Router>
      <Footer />
    </>
  );
}

export default App;