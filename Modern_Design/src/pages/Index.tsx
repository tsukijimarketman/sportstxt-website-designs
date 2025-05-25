import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Shield, Database, DollarSign, Play, MessageSquare, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroRef = useScrollAnimation(0.2);
  const missionRef = useScrollAnimation(0.2);
  const howItWorksRef = useScrollAnimation(0.2);
  const valuesRef = useScrollAnimation(0.2);
  const parallaxRef = useParallax();

  return (
    <div className="min-vh-100 bg-white">
      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress * 100}%` }}></div>

      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden">
        <div
          ref={parallaxRef.ref}
          className="position-absolute top-0 start-0 w-100 h-100 bg-gradient"
          style={{ 
            transform: `translateY(${parallaxRef.offsetY}px)`,
            background: 'linear-gradient(135deg, rgba(43, 108, 176, 0.2) 0%, rgba(229, 62, 62, 0.2) 100%)'
          }}
        />
        <div className="container position-relative" style={{ zIndex: 10 }}>
          <div
            ref={heroRef.ref}
            className={`text-center transition-all ${
              heroRef.isVisible ? 'fade-in visible' : 'fade-in'
            }`}
            style={{ transitionDuration: '1s' }}
          >
            <h1 className="display-1 fw-bold text-white mb-4 lh-sm">
              Creating Value <br />
              <span className="text-warning">Off the Pitch</span>
            </h1>
            <p className="lead text-white-50 mb-4">
              A Fan First Engagement Platform
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link
                to="/contact"
                className="btn btn-sports-red btn-lg rounded-pill px-4 d-inline-flex align-items-center gap-2 scale-hover"
              >
                Become a Member <ArrowRight size={20} />
              </Link>
              <Link
                to="/features"
                className="btn btn-outline-light btn-lg rounded-pill px-4"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x bounce-animation mb-4">
          <div className="border border-white rounded-pill d-flex justify-content-center" style={{ width: '24px', height: '40px' }}>
            <div className="bg-white rounded-pill pulse-animation mt-2" style={{ width: '4px', height: '12px' }}></div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-5 bg-sports-light-gray">
        <div className="container py-4">
          <div className="text-center">
            <h2 className="display-4 fw-bold text-dark mb-3">
              Find Fellow Fans of Your Favorite Teams!
            </h2>
            <p className="fs-5 text-muted mb-4">
              Create an account now and join the millions of sports enthusiasts around the world!
            </p>
            <Link
              to="/contact"
              className="btn btn-sports-blue btn-lg rounded-pill px-4 d-inline-flex align-items-center gap-2 scale-hover"
            >
              Join Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* What Is SportsTXT Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div
            ref={missionRef.ref}
            className={`transition-all ${
              missionRef.isVisible ? 'fade-in visible' : 'fade-in'
            }`}
            style={{ transitionDelay: '200ms', transitionDuration: '1s' }}
          >
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h2 className="display-3 fw-bold text-dark mb-4">
                  What Is <span className="text-sports-red">SportsTXT</span>?
                </h2>
                <p className="fs-5 text-muted" style={{ lineHeight: '1.6' }}>
                  Being a sports fan is not just about watching games. SportsTXT is an online platform 
                  designed to deliver the ultimate sports fan experience. Engage with other fans, get 
                  insider facts about your favorite teams, and so much more.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="hero-gradient rounded-4 p-5 text-white">
                  <div className="row g-4">
                    <div className="col-6 text-center">
                      <Users size={48} className="mb-2" />
                      <p className="fw-semibold mb-0">Community</p>
                    </div>
                    <div className="col-6 text-center">
                      <MessageSquare size={48} className="mb-2" />
                      <p className="fw-semibold mb-0">Engagement</p>
                    </div>
                    <div className="col-6 text-center">
                      <Play size={48} className="mb-2" />
                      <p className="fw-semibold mb-0">Content</p>
                    </div>
                    <div className="col-6 text-center">
                      <BarChart size={48} className="mb-2" />
                      <p className="fw-semibold mb-0">Analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5 bg-sports-light-blue">
        <div className="container py-4">
          <div className="text-center">
            <h2 className="display-3 fw-bold text-dark mb-4">
              Our Mission
            </h2>
            <p className="fs-5 text-muted" style={{ lineHeight: '1.6' }}>
              Our mission is to provide our users with a seamless and enjoyable online experience, 
              offering a diverse range of high-quality content and services that inform, inspire, 
              and engage. Through innovative design and intuitive functionality, we aim to create 
              a platform that connects people and facilitates meaningful interactions.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div
            ref={howItWorksRef.ref}
            className={`transition-all ${
              howItWorksRef.isVisible ? 'fade-in visible' : 'fade-in'
            }`}
            style={{ transitionDelay: '300ms', transitionDuration: '1s' }}
          >
            <div className="text-center mb-5">
              <h2 className="display-3 fw-bold text-dark mb-4">
                How It Works
              </h2>
              <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '48rem' }}>
                SportsTXT is a fully customizable community platform that connects directly with 
                members and fans in real-time giving them a true sense of belonging.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-md-4 text-center">
                <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4 transition-all card-hover" style={{ width: '80px', height: '80px' }}>
                  <Users className="text-sports-red" size={40} />
                </div>
                <h3 className="fs-4 fw-semibold text-dark mb-2">Connect</h3>
                <p className="text-muted">Join your favorite teams' communities</p>
              </div>
              <div className="col-md-4 text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4 transition-all card-hover" style={{ width: '80px', height: '80px' }}>
                  <MessageSquare className="text-sports-blue" size={40} />
                </div>
                <h3 className="fs-4 fw-semibold text-dark mb-2">Engage</h3>
                <p className="text-muted">Participate in discussions and activities</p>
              </div>
              <div className="col-md-4 text-center">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4 transition-all card-hover" style={{ width: '80px', height: '80px' }}>
                  <DollarSign className="text-success" size={40} />
                </div>
                <h3 className="fs-4 fw-semibold text-dark mb-2">Monetize</h3>
                <p className="text-muted">Create new revenue streams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform of Firsts Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div
            ref={valuesRef.ref}
            className={`transition-all ${
              valuesRef.isVisible ? 'fade-in visible' : 'fade-in'
            }`}
            style={{ transitionDelay: '400ms', transitionDuration: '1s' }}
          >
            <div className="text-center mb-5">
              <h2 className="display-3 fw-bold text-dark mb-3">
                The Platform of Firsts
              </h2>
            </div>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow card-hover">
                  <div className="card-body p-4 text-center">
                    <Users className="text-sports-red mb-3" size={48} />
                    <h4 className="fw-bold text-dark mb-3">Members First</h4>
                    <p className="text-muted">
                      Elevate your fan engagement beyond social media with exclusive stories, 
                      experiences, games and unique offers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow card-hover">
                  <div className="card-body p-4 text-center">
                    <Shield className="text-sports-blue mb-3" size={48} />
                    <h4 className="fw-bold text-dark mb-3">Safety First</h4>
                    <p className="text-muted">
                      24/7 protection with real-time monitoring and content analysis powered 
                      by AI technology and human expertise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow card-hover">
                  <div className="card-body p-4 text-center">
                    <Database className="text-success mb-3" size={48} />
                    <h4 className="fw-bold text-dark mb-3">Data First</h4>
                    <p className="text-muted">
                      Full ownership of your data with personal dashboards and insights 
                      to help make better business decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow card-hover">
                  <div className="card-body p-4 text-center">
                    <DollarSign className="text-warning mb-3" size={48} />
                    <h4 className="fw-bold text-dark mb-3">Value First</h4>
                    <p className="text-muted">
                      Set your content prices and enhance worth with sponsor support 
                      to significantly boost your profits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
            className="btn btn-light btn-lg rounded-pill px-4 d-inline-flex align-items-center gap-2 scale-hover"
          >
            Start Building <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
