
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthDialog from './AuthDialog';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top elegant-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="/assets/249b7763-a933-4602-8cc3-6f713fad483c.png"
              alt="SportsTXT"
              height="40"
              className="d-inline-block align-text-top"
            />
          </Link>

          <button
            className="navbar-toggler border-0 p-2"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            style={{ 
              boxShadow: 'none',
              background: 'rgba(30, 64, 175, 0.1)',
              borderRadius: '8px'
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto me-4">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item mx-2">
                  <Link
                    to={link.path}
                    className={`nav-link nav-link-elegant ${
                      location.pathname === link.path ? 'active' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setShowAuthDialog(true);
                setIsMenuOpen(false);
              }}
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <AuthDialog 
        show={showAuthDialog} 
        onHide={() => setShowAuthDialog(false)} 
      />
    </>
  );
};

export default Navigation;
