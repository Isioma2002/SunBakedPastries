import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {

  const downloadFoodSafeDocs = () => {
    const files = [
      "/pdf/AmandaFoodsafe.pdf",
      "/pdf/IsiomaFoodsafe.pdf",
    ];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

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
        <Link to="/gallery">Gallery</Link>
        <Link to="/catering">Catering</Link>

        {/* Food Safe Download */}
        <button
          onClick={downloadFoodSafeDocs}
          className="nav-link-button"
        >
          Food Safe
        </button>
      </div>
    </nav>
  )
}