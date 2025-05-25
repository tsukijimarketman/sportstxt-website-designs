
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthDialog from './AuthDialog';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="/lovable-uploads/9cdc027d-9330-47dc-b61c-117ad79e31ae.png"
              alt="SportsTXT"
              height="40"
              className="d-inline-block align-text-top"
            />
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ boxShadow: 'none' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-3">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item px-2">
                  <Link
                    to={link.path}
                    className={`nav-link fw-semibold navbar-link ${
                      location.pathname === link.path
                        ? 'text-danger active-page'
                        : 'text-secondary'
                    }`}
                    style={{ fontSize: '1rem' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowAuthDialog(true)}
              className="btn btn-danger rounded-pill px-4 fw-semibold"
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

      <style>{`
        .navbar-link {
          transition: color 0.3s ease !important;
        }
        .navbar-link:hover:not(.active-page) {
          color: #0d6efd !important;
        }
        .active-page {
          color: #dc3545 !important;
        }
      `}</style>
    </>
  );
};

export default Navigation;
