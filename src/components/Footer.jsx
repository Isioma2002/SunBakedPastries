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
      <p>
        <span className="footer-item">
          <a
            href="https://instagram.com/sunbaked_pastries"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </span>

        <span className="separator">&bull;</span>

        <span className="footer-item">
          <a href="mailto:sunbakedpastry@gmail.com">Mail</a>
        </span>

        <span className="separator">&bull;</span>

        <span className="footer-item">
          <a href="tel:+4374213072">Phone</a>
        </span>

        <span className="separator">&bull;</span>

        <span className="footer-item">
          <button
            onClick={downloadFoodSafeDocs}
            className="footer-link-button"
          >
            Food Safe
          </button>
        </span>
      </p>
    </footer>
  );
}
