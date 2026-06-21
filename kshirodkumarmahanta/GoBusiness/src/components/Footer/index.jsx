import "./index.css";

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      <p className="footer-brand">
        Go Business
      </p>

      <nav
        className="footer-nav"
        aria-label="Footer"
      >
        <a href="/">
          About
        </a>

        <a href="/">
          Privacy
        </a>
      </nav>
  <p className="copyright">
      © 2024 Go Business
    </p>

    </div>

    
  </footer>
);

export default Footer;