
import { Link } from 'react-router-dom';
import { Star, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { href: '#', label: 'Facebook', icon: 'fab fa-facebook-f' },
    { href: '#', label: 'Twitter', icon: 'fab fa-twitter' },
    { href: '#', label: 'Instagram', icon: 'fab fa-instagram' },
    { href: '#', label: 'LinkedIn', icon: 'fab fa-linkedin-in' }
  ];

  return (
    <footer className="elegant-footer">
      <div className="container">
        <div className="row g-5 py-5">
          <div className="col-lg-4">
            <img
              src="/assets/249b7763-a933-4602-8cc3-6f713fad483c.png"
              alt="SportsTXT"
              height="50"
              className="mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-white mb-4" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              The premier digital community platform connecting sports fans worldwide 
              through innovative technology and shared passion.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '45px', height: '45px' }}
                  aria-label={social.label}
                >
                  <i className={`${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="text-white fw-bold mb-4 d-flex align-items-center">
              <Star size={20} className="text-blue me-2" />
              Navigation
            </h5>
            <ul className="list-unstyled">
              {footerLinks.map((link) => (
                <li key={link.path} className="mb-3">
                  <Link 
                    to={link.path} 
                    className="text-white text-decoration-none"
                    style={{ transition: 'color 0.3s ease' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="text-white fw-bold mb-4">Legal & Support</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a 
                  href="#" 
                  className="text-white text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-3">
                <a 
                  href="#" 
                  className="text-white text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                >
                  Terms of Service
                </a>
              </li>
              <li className="mb-3">
                <a 
                  href="#" 
                  className="text-white text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                >
                  Help Center
                </a>
              </li>
              <li className="mb-3">
                <a 
                  href="#" 
                  className="text-white text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                >
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h5 className="text-white fw-bold mb-4">Contact Info</h5>
            <div className="text-white">
              <div className="mb-3 d-flex align-items-start">
                <MapPin size={20} className="text-blue me-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="fw-semibold">NMS PRODUCTIONS EUROPE B.V.</div>
                  <div style={{ lineHeight: '1.6' }}>
                    Herengracht 257<br />
                    1016 BJ, Amsterdam<br />
                    The Netherlands
                  </div>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <Mail size={20} className="text-blue me-3" />
                <span>hello@sportstxt.com</span>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <Phone size={20} className="text-blue me-3" />
                <span>+31 (0) 20 123 4567</span>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(30, 64, 175, 0.3)', margin: '3rem 0' }} />
        
        <div className="row align-items-center py-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0 text-white d-flex align-items-center">
              <Star size={20} className="text-blue me-2" />
              © {currentYear} SportsTXT. Connecting sports fans worldwide.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-md-end gap-3 flex-wrap">
              <Link to="/contact" className="btn btn-primary btn-sm">
                Join Community
              </Link>
              <a href="#" className="btn btn-secondary btn-sm">
                Privacy
              </a>
              <a href="#" className="btn btn-secondary btn-sm">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
