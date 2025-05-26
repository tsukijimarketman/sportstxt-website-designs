
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Globe, Heart, Zap, Trophy, Star, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries to create new ways for sports communities to connect and engage.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We share the same love for sports that drives our community members every day.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We build trust through transparency, security, and putting our users interests first.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of bringing people together around shared interests and experiences.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We connect sports fans across cultures and continents, creating a truly worldwide community.'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we build and deliver to our community.'
    }
  ];

  const team = [
    {
      name: 'Leadership Team',
      role: 'Strategic Vision',
      description: 'Experienced leaders dedicated to revolutionizing sports fan engagement.'
    },
    {
      name: 'Development Team',
      role: 'Technical Innovation',
      description: 'Skilled developers building the future of sports community platforms.'
    },
    {
      name: 'Community Team',
      role: 'User Experience',
      description: 'Passionate advocates ensuring every fan feels welcomed and valued.'
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
                <Trophy size={60} className="text-blue mb-4 parallax-float" />
                <h1 className="display-1 text-navy mb-4">
                  About <span className="text-blue">SportsTXT</span>
                </h1>
                <p className="lead mx-auto mb-5" style={{ maxWidth: '700px' }}>
                  We're passionate about creating the ultimate digital community platform 
                  that brings sports fans together, fostering connections and enhancing 
                  the fan experience worldwide.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Join Our Mission <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="elegant-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="scroll-reveal">
                <h2 className="display-2 text-navy mb-4">Our Story</h2>
                <p className="lead text-slate mb-4">
                  SportsTXT is an initiative from <strong>NMS Productions BV</strong>, a division of New Media Services, 
                  a global company specializing in delivering intelligent solutions through 
                  a combination of innovative technology and human-centered design.
                </p>
                <p className="text-slate mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                  From fans to brands to content creators, we design and build 
                  collaborative online platforms that enable our users to communicate, 
                  connect, learn, and share their passion for sports.
                </p>
                <p className="text-slate mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                  Our mission is to bridge the gap between sports enthusiasts worldwide, 
                  creating meaningful connections that go beyond geographical boundaries 
                  and team loyalties.
                </p>
                <Link
                  to="/contact"
                  className="btn btn-primary"
                >
                  Work With Us <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="scroll-reveal">
                <div className="elegant-card">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="text-center">
                        <div 
                          className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: '70px',
                            height: '70px',
                            background: 'var(--primary-blue)',
                            color: 'white'
                          }}
                        >
                          <Target size={35} />
                        </div>
                        <h5 className="text-navy mb-2">Mission Driven</h5>
                        <p className="text-slate mb-0">Connecting sports communities worldwide through innovative technology</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-center">
                        <div 
                          className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: '70px',
                            height: '70px',
                            background: 'var(--primary-red)',
                            color: 'white'
                          }}
                        >
                          <Users size={35} />
                        </div>
                        <h5 className="text-navy mb-2">Community First</h5>
                        <p className="text-slate mb-0">Building meaningful relationships between passionate sports fans</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-center">
                        <div 
                          className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: '70px',
                            height: '70px',
                            background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-red))',
                            color: 'white'
                          }}
                        >
                          <Globe size={35} />
                        </div>
                        <h5 className="text-navy mb-2">Global Impact</h5>
                        <p className="text-slate mb-0">Serving teams and fans across continents and cultures</p>
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
      <section className="elegant-section elegant-section-alt">
        <div className="container">
          <div className="scroll-reveal text-center mb-5">
            <h2 className="display-2 text-navy mb-4">Our Values</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              These core principles guide everything we do at SportsTXT, ensuring 
              we create value for every member of our community.
            </p>
          </div>
          <div className="row g-4">
            {values.map((value, index) => (
              <div key={value.title} className="col-lg-4 col-md-6">
                <div className="elegant-card text-center h-100 scroll-reveal hover-lift">
                  <div 
                    className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: '70px',
                      height: '70px',
                      background: index % 2 === 0 ? 'var(--primary-blue)' : 'var(--primary-red)',
                      color: 'white'
                    }}
                  >
                    <value.icon size={35} />
                  </div>
                  <h4 className="text-navy mb-3">{value.title}</h4>
                  <p className="text-slate">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="elegant-section">
        <div className="container">
          <div className="scroll-reveal text-center mb-5">
            <h2 className="display-2 text-navy mb-4">Our Team</h2>
            <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
              Meet the passionate professionals behind SportsTXT's innovative platform 
              and thriving community.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {team.map((member, index) => (
              <div key={member.name} className="col-lg-4 col-md-6">
                <div className="elegant-card text-center h-100 scroll-reveal hover-lift">
                  <div 
                    className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-red))',
                      color: 'white'
                    }}
                  >
                    <Users size={40} />
                  </div>
                  <h4 className="text-navy mb-2">{member.name}</h4>
                  <p className="text-blue fw-semibold mb-3">{member.role}</p>
                  <p className="text-slate">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="elegant-hero">
        <div className="container text-center">
          <div className="scroll-reveal">
            <Star size={60} className="text-blue mb-4 parallax-float" />
            <h2 className="display-2 text-navy mb-4">
              Ready to Join Us?
            </h2>
            <p className="lead text-slate mb-5" style={{ fontSize: '1.3rem' }}>
              Become part of our mission to connect sports fans worldwide and 
              build the ultimate community platform.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <Link
                to="/features"
                className="btn btn-secondary"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
