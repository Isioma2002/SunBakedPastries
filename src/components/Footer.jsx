export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-heading"><strong>Get In Touch</strong></p>
      <p>
        <span className="footer-item">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
        </span>
        <span className="separator">&bull;</span>
        <span className="footer-item">
          <a href="mailto:your.email@example.com">Email</a>
        </span>
        <span className="separator">&bull;</span>
        <span className="footer-item">
          <a href="tel:+1234567890">Phone</a>
        </span>
      </p>
    </footer>
  )
}