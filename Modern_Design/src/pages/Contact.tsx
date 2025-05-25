import { useEffect, useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import InteractiveMap from '../components/InteractiveMap';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
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
  const heroRef = useScrollAnimation(0.2);
  const formRef = useScrollAnimation(0.2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
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

  return (
    <div className="min-vh-100 bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient pt-5 pb-5">
        <div className="container pt-5">
          <div
            ref={heroRef.ref}
            className={`text-center transition-all ${heroRef.isVisible ? 'fade-in visible' : 'fade-in'
              }`}
            style={{ transitionDuration: '1s' }}
          >
            <h1 className="display-1 fw-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '48rem' }}>
              Ready to build your sports community? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-6">
              <div className="p-4 rounded-4 shadow-sm bg-light border">
                <h2 className="display-4 fw-bold text-dark mb-4">
                  Amsterdam Office
                </h2>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex gap-3">
                    <div className="bg-danger bg-opacity-10 rounded-circle p-3 flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                      <MapPin className="text-danger" style={{ width: 24, height: 24 }} />
                    </div>
                    <div>
                      <h5 className="fw-semibold text-dark mb-2">Address</h5>
                      <div className="d-flex align-items-start gap-3">
                        <div>
                          <p className="text-muted mb-0">
                            NMS PRODUCTIONS EUROPE B.V.<br />
                            Herengracht 257<br />
                            1016 BJ, Amsterdam<br />
                            The Netherlands
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3 flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="fw-semibold text-dark mb-2">Email</h5>
                      <p className="text-muted mb-0">hello@sportstxt.com</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <div className="bg-success bg-opacity-10 rounded-circle p-3 flex-shrink-0">
                      <Phone className="text-success" size={24} />
                    </div>
                    <div>
                      <h5 className="fw-semibold text-dark mb-2">Phone</h5>
                      <p className="text-muted mb-0">+31 (0) 20 123 4567</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <img src="/lovable-uploads/nmsbg.png" alt="NMS Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div
              className="col-lg-6"
              ref={formRef.ref}
            >
              <div
                className={`p-4 rounded-4 shadow-sm bg-white border transition-all ${formRef.isVisible ? 'fade-in visible' : 'fade-in'
                  }`}
                style={{ transitionDelay: '200ms', transitionDuration: '1s' }}
              >
                <h2 className="display-4 fw-bold text-dark mb-4">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div>
                    <label htmlFor="name" className="form-label fw-medium">
                      Name *
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
                    <label htmlFor="email" className="form-label fw-medium">
                      Email *
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
                    <label htmlFor="phone" className="form-label fw-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="form-control"
                      placeholder="+63 912 345 6789"
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="form-label fw-medium">
                      Industry
                    </label>
                    <select
                      id="industry"
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="form-select"
                    >
                      <option value="">Select your industry</option>
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
                    <label htmlFor="message" className="form-label fw-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="form-control"
                      rows={4}
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-sports-red btn-lg rounded-pill w-100 fw-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold text-dark mb-4 text-center">Find Us</h2>
              <InteractiveMap />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
