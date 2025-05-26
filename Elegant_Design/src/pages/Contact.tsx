
import { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, Star, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });

  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to SportsTXT! 🎉",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      industry: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Headquarters',
      content: 'NMS PRODUCTIONS EUROPE B.V.\nHerengracht 257\n1016 BJ, Amsterdam\nThe Netherlands',
      color: 'var(--primary-blue)'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@sportstxt.com',
      color: 'var(--primary-red)'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+31 (0) 20 123 4567',
      color: 'var(--primary-blue)'
    }
  ];

  return (
    <div className="min-vh-100">
      <Navigation />

      {/* Hero Section */}
      <section className="elegant-hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className="fade-in-up">
                <Star size={60} className="text-blue mb-4 parallax-float" />
                <h1 className="display-1 text-navy mb-4">
                  Get in <span className="text-blue">Touch</span>
                </h1>
                <p className="lead mx-auto mb-5" style={{ maxWidth: '700px' }}>
                  Ready to join the SportsTXT community? We'd love to hear from you. 
                  Reach out to learn more about our platform and how you can get involved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="elegant-section">
        <div className="container">
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-6">
              <div className="scroll-reveal">
                <h2 className="display-2 text-navy mb-5">
                  Connect With <span className="text-blue">Us</span>
                </h2>
                <div className="d-flex flex-column gap-4 mb-5">
                  {contactInfo.map((info, index) => (
                    <div key={info.title} className="elegant-card hover-lift">
                      <div className="d-flex gap-4 align-items-center">
                        <div 
                          className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"
                          style={{
                            width: '60px',
                            height: '60px',
                            background: info.color,
                            color: 'white'
                          }}
                        >
                          <info.icon size={30} />
                        </div>
                        <div>
                          <h4 className="text-navy mb-2">{info.title}</h4>
                          <p className="text-slate mb-0" style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                            {info.content}
                          </p>
                          {info.title === 'Our Headquarters' && (
                            <div className="mt-3">
                              <img
                                src="/assets/6de9cb6d-f172-4105-ae8b-0a81d7d545b3.png"
                                alt="NMS Productions"
                                style={{ height: '40px', width: 'auto' }}
                                className="opacity-75"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Google Maps */}
                <div className="scroll-reveal">
                  <h4 className="text-navy mb-3">
                    <MapPin size={24} className="text-blue me-2" />
                    Visit Our Amsterdam Office
                  </h4>
                  <div className="elegant-card p-0 overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5481220172297!2d4.8853333!3d52.3717535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60964f30f3997%3A0xf78421c1b62193cc!2sNMS%20Productions%20BV!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus" 
                      width="100%" 
                      height="450" 
                      style={{
                        border: 0
                      }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade" 
                      title="NMS Productions Location" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="scroll-reveal">
                <div className="elegant-card">
                  <div className="text-center mb-4">
                    <Users size={50} className="text-blue mb-3" />
                    <h2 className="display-2 text-navy mb-3">Join SportsTXT</h2>
                    <p className="text-slate">
                      Ready to become part of our growing sports community? 
                      Fill out the form below and we'll be in touch.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="form-control"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="form-control"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="form-control"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="industry" className="form-label">
                        Favorite Sport
                      </label>
                      <select
                        id="industry"
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        className="form-select"
                      >
                        <option value="">Select your favorite sport</option>
                        <option value="football">Football/Soccer</option>
                        <option value="basketball">Basketball</option>
                        <option value="baseball">Baseball</option>
                        <option value="hockey">Hockey</option>
                        <option value="tennis">Tennis</option>
                        <option value="rugby">Rugby</option>
                        <option value="other">Other Sports</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="form-label">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="form-control"
                        rows={5}
                        placeholder="Tell us about your interest in joining SportsTXT and how you'd like to engage with our community..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      <Award size={20} /> Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="elegant-hero">
        <div className="container text-center">
          <div className="scroll-reveal">
            <Star size={60} className="text-blue mb-4 parallax-float" />
            <h2 className="display-2 text-navy mb-4">
              Your Sports Community Awaits
            </h2>
            <p className="lead text-slate mb-5" style={{ fontSize: '1.3rem' }}>
              Join thousands of sports enthusiasts who have found their home in 
              the SportsTXT community. Your journey starts with a simple message.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
