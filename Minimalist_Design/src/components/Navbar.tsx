import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Features',
    path: '/features'
  }, {
    name: 'About Us',
    path: '/about'
  }, {
    name: 'Contact Us',
    path: '/contact'
  }];
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/predefined-logo-removebg-preview.png" alt="SportsTXT" className="h-10 md:h-12" />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-base font-medium transition-colors hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-800'}`}>
              {link.name}
            </Link>)}
          <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium transition-all transform hover:scale-105">
            Join Now
          </Link>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-800 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-gray-800 hover:bg-gray-50'}`} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>)}
            <Link to="/contact" className="block w-full text-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md font-medium" onClick={() => setIsOpen(false)}>
              Join Now
            </Link>
          </div>
        </div>}
    </header>;
};