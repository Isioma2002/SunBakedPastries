import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-heading">
        <strong>Get In Touch</strong>
      </p>

      <p className="footer-icons">
        <a
          href="https://instagram.com/sunbaked_pastries"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a href="mailto:sunbakedpastry@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>

        <a href="tel:+4374213072" aria-label="Phone">
          <FaPhone />
        </a>
      </p>
    </footer>
  );
}