import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Nav from "./Modules/Nav";
import Footer from "./Modules/Footer.jsx";

import Home from "./Home.jsx";
import ProjectPage from "./ProjectPage.jsx";


function App() {




  return (
    <>

      <Router>
        <Nav />
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