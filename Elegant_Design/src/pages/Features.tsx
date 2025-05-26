
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Video, Mic, MessageSquare, Image, BarChart3, Star, Shield, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Features = () => {
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

  const features = [
    {
      icon: Users,
      title: 'Community Fanzone',
      description: 'Create and join dedicated communities for your favorite teams and sports. Connect with like-minded fans, share experiences, and build lasting friendships.',
      benefits: ['Team-specific communities', 'Verified fan network', 'Moderated discussions'],
      color: 'var(--primary-blue)'
    },
    {
      icon: Video,
      title: 'Exclusive Video Content',
      description: 'Access a rich library of exclusive sports content including behind-the-scenes footage, player interviews, and premium match analysis.',
      benefits: ['HD video streaming', 'Exclusive interviews', 'Match highlights'],
      color: 'var(--primary-red)'
    },
    {
      icon: Mic,
      title: 'Sports Podcasts',
      description: 'Listen to expert analysis, fan discussions, and exclusive podcasts featuring sports personalities and industry insights.',
      benefits: ['Expert commentary', 'Fan-generated content', 'Weekly episodes'],
      color: 'var(--primary-blue)'
    },
    {
      icon: MessageSquare,
      title: 'Smart Notifications',
      description: 'Stay connected with personalized alerts about your favorite teams, breaking news, and community activities.',
      benefits: ['Real-time updates', 'Customizable alerts', 'Breaking news'],
      color: 'var(--primary-red)'
    },
    {
      icon: Image,
      title: 'Photo Sharing',
      description: 'Share your game-day experiences, stadium visits, and sports memories with the community through our integrated photo platform.',
      benefits: ['High-quality uploads', 'Community galleries', 'Event documentation'],
      color: 'var(--primary-blue)'
    },
    {
      icon: BarChart3,
      title: 'Fan Polls & Analytics',
      description: 'Participate in community polls, share your opinions, and access detailed analytics about fan sentiment and engagement.',
      benefits: ['Interactive polls', 'Sentiment analysis', 'Community insights'],
      color: 'var(--primary-red)'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Enhanced Experience',
      description: 'Enjoy a seamless and intuitive platform designed specifically for sports fans.'
    },
    {
      icon: Shield,
      title: 'Safe Community',
      description: 'Connect in a secure environment with verified users and moderated content.'
    },
    {
      icon: Zap,
      title: 'Real-time Engagement',
      description: 'Stay connected with live updates, instant notifications, and real-time discussions.'
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
                  Powerful <span className="text-blue">Features</span>
                </h1>
                <p className="lead mx-auto mb-5" style={{ maxWidth: '700px' }}>
                  Discover the comprehensive suite of features designed to enhance 
                  your sports fan experience and connect you with communities worldwide.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Get Started Today <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="elegant-section">
        <div className="container">
          <div className="scroll-reveal text-center mb-5">
            <h2 className="display-2 text-navy mb-4">Core Features</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              Every feature is thoughtfully designed to bring sports fans together 
              and create meaningful connections within our community.
            </p>
          </div>
          
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={feature.title} className="col-lg-6">
                <div 
                  className="elegant-card h-100 scroll-reveal hover-lift"
                  style={{ 
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="d-flex align-items-start gap-4">
                    <div 
                      className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: feature.color,
                        color: 'white'
                      }}
                    >
                      <feature.icon size={30} />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="text-navy mb-3">{feature.title}</h3>
                      <p className="text-slate mb-4" style={{ lineHeight: '1.7' }}>
                        {feature.description}
                      </p>
                      <ul className="list-unstyled mb-4">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="d-flex align-items-center mb-2">
                            <Star size={16} className="text-blue me-2" />
                            <small className="text-slate">{benefit}</small>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        to="/contact" 
                        className="btn btn-secondary btn-sm"
                      >
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="elegant-section elegant-section-alt">
        <div className="container">
          <div className="scroll-reveal text-center mb-5">
            <h2 className="display-2 text-navy mb-4">Why Choose SportsTXT?</h2>
            <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
              Experience the advantages that make SportsTXT the preferred platform 
              for sports enthusiasts worldwide.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="col-lg-4 col-md-6">
                <div className="elegant-card text-center h-100 scroll-reveal hover-lift">
                  <benefit.icon size={50} className="text-blue mb-3" />
                  <h4 className="text-navy mb-3">{benefit.title}</h4>
                  <p className="text-slate">{benefit.description}</p>
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
            <Zap size={60} className="text-blue mb-4 parallax-float" />
            <h2 className="display-2 text-navy mb-4">
              Ready to Experience More?
            </h2>
            <p className="lead text-slate mb-5" style={{ fontSize: '1.3rem' }}>
              Join thousands of sports fans who have already discovered the power 
              of connecting through SportsTXT.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Join Our Community <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="btn btn-secondary"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
