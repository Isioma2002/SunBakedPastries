import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Catering from "./pages/Catering";
import Cart from "./pages/Cart";

export default function App() {
  // 🛒 Load cart from localStorage (runs only on first load)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 💾 Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="app-layout">
      <Navbar cart={cart} />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/menu"
            element={<Menu cart={cart} setCart={setCart} />}
          />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/catering" element={<Catering />} />

          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}