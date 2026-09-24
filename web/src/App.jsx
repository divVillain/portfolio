import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Nav from "./Modules/Nav.jsx";
import Footer from "./Modules/Footer.jsx";

import Home from "./Home.jsx";
import Mobile from "./Mobile.jsx";

import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import TheOtherSpain from "./projects/TheOtherSpain.jsx";
import Democrata from "./projects/Democrata.jsx";
import Carbon2Nature from "./projects/Carbon2Nature.jsx";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <>
      <Router>
        <Wrapper>
          <Nav />
          <Analytics />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/the-other-spain" element={<TheOtherSpain />} />
            <Route path="/democrata" element={<Democrata />} />
            <Route path="/carbon2nature" element={<Carbon2Nature />} />
          </Routes>
        </Wrapper>
      </Router>
      <Footer />
    </>
  );
}

export default App;
