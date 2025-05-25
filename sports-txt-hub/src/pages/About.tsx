import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const heroRef = useScrollAnimation(0.2);
  const companyRef = useScrollAnimation(0.2);
  const valuesRef = useScrollAnimation(0.2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-vh-100 bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient pt-5 pb-5">
        <div className="container pt-5">
          <div
            ref={heroRef.ref}
            className={`text-center transition-all ${
              heroRef.isVisible ? 'fade-in visible' : 'fade-in'
            }`}
          >
            <h1 className="display-1 fw-bold text-white mb-4">
              About Us
            </h1>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '48rem' }}>
              Learn more about SportsTXT and the team behind the platform
            </p>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div
            ref={companyRef.ref}
            className={`transition-all ${
              companyRef.isVisible ? 'fade-in visible' : 'fade-in'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <h2 className="display-3 fw-bold text-dark mb-4">
                  Our Story
                </h2>
                <p className="fs-5 text-muted mb-4" style={{ lineHeight: '1.6' }}>
                  SportsTXT is an initiative from NMS Productions BV, a division of New Media Services, 
                  a global company specializing in delivering intelligent outsourcing services through 
                  a combination of machine learning and human-powered activities.
                </p>
                <p className="fs-5 text-muted" style={{ lineHeight: '1.6' }}>
                  From fans to brands to individual content creators, NMSP designs and builds 
                  collaborative online platforms for our users to communicate, connect, learn, and share.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="bg-sports-light-blue rounded-4 p-5">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="d-flex align-items-center">
                        <div className="bg-danger bg-opacity-10 rounded-circle p-3 me-4">
                          <Target className="text-sports-red" size={32} />
                        </div>
                        <div>
                          <h5 className="fw-semibold text-dark mb-1">Mission Driven</h5>
                          <p className="text-muted mb-0">Connecting sports communities worldwide</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-4">
                          <Users className="text-sports-blue" size={32} />
                        </div>
                        <div>
                          <h5 className="fw-semibold text-dark mb-1">Community First</h5>
                          <p className="text-muted mb-0">Building meaningful relationships</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-center">
                        <div className="bg-success bg-opacity-10 rounded-circle p-3 me-4">
                          <Globe className="text-success" size={32} />
                        </div>
                        <div>
                          <h5 className="fw-semibold text-dark mb-1">Global Reach</h5>
                          <p className="text-muted mb-0">Serving teams and fans everywhere</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-sports-light-gray">
        <div className="container py-5">
          <div
            ref={valuesRef.ref}
            className={`transition-all ${
              valuesRef.isVisible ? 'fade-in visible' : 'fade-in'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="text-center mb-5">
              <h2 className="display-3 fw-bold text-dark mb-4">
                Our Values
              </h2>
              <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '48rem' }}>
                These core principles guide everything we do at SportsTXT
              </p>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow card-hover text-center">
                  <div className="card-body p-5">
                    <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                      <Users className="text-sports-red" size={40} />
                    </div>
                    <h4 className="fw-bold text-dark mb-3">Innovation</h4>
                    <p className="text-muted">
                      We constantly push boundaries to create new ways for sports communities to connect and engage.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow card-hover text-center">
                  <div className="card-body p-5">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                      <Target className="text-sports-blue" size={40} />
                    </div>
                    <h4 className="fw-bold text-dark mb-3">Integrity</h4>
                    <p className="text-muted">
                      We build trust through transparency, security, and putting our users' interests first.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow card-hover text-center">
                  <div className="card-body p-5">
                    <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                      <Globe className="text-success" size={40} />
                    </div>
                    <h4 className="fw-bold text-dark mb-3">Impact</h4>
                    <p className="text-muted">
                      We measure success by the positive impact we create for sports organizations and their fans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-white">
        <div className="container py-5 text-center">
          <h2 className="display-3 fw-bold text-dark mb-4">
            Key People
          </h2>
          <p className="fs-5 text-muted mb-5">
            Meet the team behind SportsTXT's innovative platform
          </p>
          <div className="row g-4">
            {[1, 2, 3].map((person) => (
              <div key={person} className="col-md-4">
                <div className="bg-light rounded-4 p-5">
                  <div 
                    className="hero-gradient rounded-circle mx-auto mb-4"
                    style={{ width: '96px', height: '96px' }}
                  ></div>
                  <h5 className="fw-bold text-dark mb-2">Team Member {person}</h5>
                  <p className="text-sports-blue fw-medium mb-2">Position Title</p>
                  <p className="text-muted small">
                    Experienced professional dedicated to revolutionizing sports fan engagement.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-5">
        <div className="container py-5 text-center">
          <h2 className="display-3 fw-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="lead text-white-50 mb-4">
            Build A Unified Community with SportsTXT
          </p>
          <Link
            to="/contact"
            className="btn btn-light btn-lg rounded-pill px-5 d-inline-flex align-items-center transition-all"
          >
            Start Building <ArrowRight className="ms-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
