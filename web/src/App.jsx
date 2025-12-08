import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Nav from "./Modules/Nav.jsx";
import Footer from "./Modules/Footer.jsx";

import Home from "./Home.jsx";
import ProjectPage from "./ProjectPage.jsx";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";


const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

function App() {

  return (
    <>

      <Router>
        <Wrapper>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:projectSlug" element={<ProjectPage />} />
          </Routes >
        </Wrapper>
      </Router>
      <Footer />
    </>
  );
}

export default App;