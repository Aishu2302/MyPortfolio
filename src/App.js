import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/about";
import Services from "./components/services/service";
import Footer from "./components/Footer";
import Contact from "./components/Contact/contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollTotop";
import "./style.css";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
                  <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;