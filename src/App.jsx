import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Catering from "./pages/Catering";
import Cart from "./pages/Cart"; // ✅ NEW

export default function App() {
  // 🛒 GLOBAL CART STATE
  const [cart, setCart] = useState([]);

  return (
    <div className="app-layout">
      {/* pass cart if you later want a badge */}
      <Navbar cart={cart} />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* ✅ PASS cart + setCart to Menu */}
          <Route
            path="/menu"
            element={<Menu cart={cart} setCart={setCart} />}
          />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/catering" element={<Catering />} />

          {/* ✅ NEW CART PAGE */}
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}