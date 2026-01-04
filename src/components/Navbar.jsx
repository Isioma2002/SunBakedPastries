import { Link } from 'react-router-dom'
import logo from '../assets/logo.png' // adjust path if needed

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo-container">
        <img
          src={logo}
          alt="SunBaked Pastries logo"
          className="logo"
        />
      </Link>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/order">Order Now</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/collaborations">Collaborations</Link>
      </div>
    </nav>
  )
}
