
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Video, MessageSquare, BarChart, Image, Zap, Star, Shield, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);

      // Reveal animations
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

  const features = [
    {
      icon: Users,
      title: 'Community Fanzone',
      description: 'Connect with passionate fans and create meaningful relationships in dedicated community spaces.',
      color: 'var(--primary-blue)'
    },
    {
      icon: Video,
      title: 'Exclusive Content',
      description: 'Access behind-the-scenes footage, interviews, and premium video content from your favorite teams.',
      color: 'var(--primary-red)'
    },
    {
      icon: MessageSquare,
      title: 'Smart Notifications',
      description: 'Stay updated with personalized alerts and real-time updates about your favorite sports.',
      color: 'var(--primary-blue)'
    },
    {
      icon: BarChart,
      title: 'Fan Engagement',
      description: 'Participate in polls, quizzes, and interactive content that amplifies your voice.',
      color: 'var(--primary-red)'
    },
    {
      icon: Image,
      title: 'Photo Sharing',
      description: 'Share your game-day experiences and connect through visual storytelling.',
      color: 'var(--primary-blue)'
    },
    {
      icon: Zap,
      title: 'Live Experiences',
      description: 'Join live discussions, virtual events, and real-time sports conversations.',
      color: 'var(--primary-red)'
    }
  ];

  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we build and deliver.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Creating a secure environment where fans can connect authentically.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously evolving to meet the changing needs of sports communities.'
    }
  ];

  return (
    <div className="min-vh-100">
      {/* Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress * 100}%` }}></div>

      <Navigation />

      {/* Hero Section */}
      <section className="elegant-hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="fade-in-up">
                <h1 className="display-1 text-navy mb-4">
                  Connect. Engage. <span className="text-blue">Celebrate</span> Sports.
                </h1>
                <p className="lead mb-5">
                  Join thousands of sports fans in the ultimate digital community platform. 
                  Share your passion, connect with like-minded enthusiasts, and experience 
                  sports like never before.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                  <Link to="/contact" className="btn btn-primary">
                    Join Our Community <ArrowRight size={20} />
                  </Link>
                  <Link to="/features" className="btn btn-secondary">
                    Explore Features
                  </Link>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <div className="d-flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i}
                        className="rounded-circle border-3 border-primary overflow-hidden me-n2"
                        style={{
                          width: '45px',
                          height: '45px',
                          background: `linear-gradient(135deg, var(--primary-blue), var(--primary-red))`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: '600',
                          fontSize: '0.9rem'
                        }}
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="fw-semibold text-navy">50,000+ Active Members</div>
                    <small className="text-slate">Growing community of sports enthusiasts</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="parallax-float">
                <div className="elegant-card text-center">
                  <div 
                    className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-red))'
                    }}
                  >
                    <Star size={40} className="text-white" />
                  </div>
                  <h3 className="text-navy mb-3">Premium Experience</h3>
                  <p className="text-slate mb-4">
                    Access exclusive features, connect with verified fans, and enjoy 
                    a seamless sports community experience.
                  </p>
                  <div className="text-blue fw-bold fs-5">Free to Join</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is SportsTXT Section */}
      <section className="elegant-section">
        <div className="container">
          <div className="scroll-reveal text-center mb-5">
            <h2 className="display-2 text-navy mb-4">What is SportsTXT?</h2>
            <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
              SportsTXT is a comprehensive digital community platform designed to bring 
              sports fans together, fostering connections and enhancing the fan experience 
              through innovative technology and engaging features.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="elegant-card text-center h-100 scroll-reveal hover-lift">
                <div 
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: '70px',
                    height: '70px',
                    background: 'var(--primary-blue)',
                    color: 'white'
                  }}
                >
                  <Users size={35} />
                </div>
                <h4 className="text-navy mb-3">Community First</h4>
                <p className="text-slate">
                  Connect with passionate sports fans from around the world in our 
                  vibrant and inclusive community ecosystem.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="elegant-card text-center h-100 scroll-reveal hover-lift">
                <div 
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: '70px',
                    height: '70px',
                    background: 'var(--primary-red)',
                    color: 'white'
                  }}
                >
                  <Video size={35} />
                </div>
                <h4 className="text-navy mb-3">Rich Content</h4>
                <p className="text-slate">
                  Enjoy exclusive video content, behind-the-scenes footage, and 
                  premium sports entertainment tailored to your interests.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="elegant-card text-center h-100 scroll-reveal hover-lift">
                <div 
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-red))',
                    color: 'white'
                  }}
                >
                  <Zap size={35} />
                </div>
                <h4 className="text-navy mb-3">Live Engagement</h4>
                <p className="text-slate">
                  Participate in real-time discussions, live events, and interactive 
                  experiences that bring the excitement directly to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="elegant-section elegant-section-alt">
        <div className="container">
          <div className="scroll-reveal text-center mb-5">
            <h2 className="display-2 text-navy mb-4">Platform Features</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              Discover the powerful features that make SportsTXT the ultimate destination 
              for sports fans seeking connection and engagement.
            </p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={feature.title} className="col-lg-4 col-md-6">
                <div 
                  className="elegant-card h-100 scroll-reveal hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="rounded-circle mb-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: feature.color,
                      color: 'white'
                    }}
                  >
                    <feature.icon size={30} />
                  </div>
                  <h4 className="text-navy mb-3">{feature.title}</h4>
                  <p className="text-slate mb-4">{feature.description}</p>
                  <Link 
                    to="/features" 
                    className="btn btn-secondary btn-sm"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Values Section */}
      <section className="elegant-section">
        <div className="container">
          <div className="scroll-reveal text-center mb-5">
            <h2 className="display-2 text-navy mb-4">Our Values</h2>
            <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
              Built on principles that ensure every sports fan feels welcomed, 
              valued, and connected in our community.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {values.map((value, index) => (
              <div key={value.title} className="col-lg-4 col-md-6">
                <div className="elegant-card text-center h-100 scroll-reveal hover-lift">
                  <value.icon size={50} className="text-blue mb-3" />
                  <h4 className="text-navy mb-3">{value.title}</h4>
                  <p className="text-slate">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="elegant-hero">
        <div className="container text-center">
          <div className="scroll-reveal">
            <Star size={60} className="text-blue mb-4 parallax-float" />
            <h2 className="display-2 text-navy mb-4">
              Ready to Join SportsTXT?
            </h2>
            <p className="lead text-slate mb-5" style={{ fontSize: '1.3rem' }}>
              Become part of a thriving community where your passion for sports 
              connects you with fans from around the world.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/contact" className="btn btn-primary">
                <Star size={20} /> Get Started Today
              </Link>
              <Link to="/features" className="btn btn-secondary">
                Explore All Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
