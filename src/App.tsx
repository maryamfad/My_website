import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/home";
import Navbar from "./components/navbar";
import Portfolio from "./components/pages/portfolio";
import Blogs from "./components/pages/blogs";
import About from "./components/pages/about";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
