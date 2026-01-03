import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Gallery from './pages/Gallery'
import Collaborations from './pages/Collaborations'

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/collaborations" element={<Collaborations />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
