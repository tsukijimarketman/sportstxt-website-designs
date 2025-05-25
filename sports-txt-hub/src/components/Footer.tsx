
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <img
              src="/lovable-uploads/9cdc027d-9330-47dc-b61c-117ad79e31ae.png"
              alt="SportsTXT"
              height="40"
              className="mb-3"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-light mb-3" style={{ lineHeight: '1.6' }}>
              Building unified sports communities worldwide. Connect clubs, athletes, and fans through our innovative platform.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light hover-scale">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-light hover-scale">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-light hover-scale">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-light hover-scale">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none hover-effect">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/features" className="text-light text-decoration-none hover-effect">
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none hover-effect">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light text-decoration-none hover-effect">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold text-white mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none footer-link">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none footer-link">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none footer-link">
                  Cookie Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none footer-link">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold text-white mb-3">Contact Info</h5>
            <div className="text-light">
              <div className="mb-2">
                <i className="fas fa-map-marker-alt me-2 text-danger"></i>
                <small>Herengracht 257, Amsterdam</small>
              </div>
              <div className="mb-2">
                <i className="fas fa-envelope me-2 text-danger"></i>
                <small>hello@sportstxt.com</small>
              </div>
              <div className="mb-2">
                <i className="fas fa-phone me-2 text-danger"></i>
                <small>+31 (0) 20 123 4567</small>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0 text-light">
              &copy; {currentYear} SportsTXT. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-md-end gap-4 flex-wrap mb-2">
              <a href="#" className="text-light text-decoration-none footer-link">
                Privacy
              </a>
              <a href="#" className="text-light text-decoration-none footer-link">
                Terms
              </a>
              <Link to="/contact" className="text-light text-decoration-none footer-link">
                Contact Us
              </Link>
            </div>
            
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #dc3545 !important;
        }
        .hover-effect {
          transition: color 0.3s ease;
        }
        .hover-effect:hover {
          color: #dc3545 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
