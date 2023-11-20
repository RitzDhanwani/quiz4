import React from "react";
import './App.css';

import Navbar from "./components/Navbar";
import Offerings from "./components/Offerings";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";

const App = () => {
  return (
    <div>
      <main className="main">
        <Navbar />
        <Offerings />
        <Contactus />
        <Welcome />
        <Footer />
      </main>
    </div>
  )
}

export default App;
