import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import FloorPlans from "./pages/FloorPlans";
import Gallery from "./pages/Gallery";
import ShopsOffices from "./pages/ShopsOffices";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/floor-plans" element={<FloorPlans />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shops-offices" element={<ShopsOffices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;