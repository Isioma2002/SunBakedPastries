import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>SunBaked Pastries</h2>

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
