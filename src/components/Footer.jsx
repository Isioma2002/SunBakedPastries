import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
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
    <footer className="footer">
      <p className="footer-heading">
        <strong>Get In Touch</strong>
      </p>

      <button
        onClick={downloadFoodSafeDocs}
        className="footer-foodsafe-btn"
      > Certificates
      </button>

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