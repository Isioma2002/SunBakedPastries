import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo (Top Row) */}
      <Link to="/" className="logo-container">
        <img src={logo} alt="SunBaked Pastries logo" className="logo" />
      </Link>

      {/* Bottom Row */}
      <div className="nav-bottom">
        {/* Navigation Links (Centered) */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/catering">Catering</Link>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="cart-link">
          <FaShoppingCart size={24} />
        </Link>
      </div>
    </nav>
  )
}