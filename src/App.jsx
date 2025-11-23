import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Nav from "./Modules/Nav";
import Footer from "./Modules/Footer.jsx";

import Home from "./Home.jsx";
import Illustration from "./Illustration.jsx";


function App() {



  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/illustration" element={<Illustration />} />
        </Routes >
      </Router>
      <Footer />
    </>
  );
}

export default App;