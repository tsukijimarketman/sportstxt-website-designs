
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Video, Mic, MessageSquare, Image, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Features = () => {
  const heroRef = useScrollAnimation(0.2);
  const featuresRef = useScrollAnimation(0.2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Fanzone',
      description: 'Empower your supporters in the Fanzone, a moderated platform for interaction and involvement. Fans can create public and private subgroups for sharing content and building a supportive community.',
      color: 'text-sports-red'
    },
    {
      icon: Video,
      title: 'Video',
      description: 'Make your members feel special by offering them workouts, interviews, live matches, and behind-the-scenes content. We support a range of video platforms for easy uploads.',
      color: 'text-sports-blue'
    },
    {
      icon: Mic,
      title: 'Podcasts',
      description: 'Weekly updates, interviews, or tip of the week? Record a podcast on your phone and share it with your community for deeper engagement.',
      color: 'text-success'
    },
    {
      icon: MessageSquare,
      title: 'SMS',
      description: 'Get your fans instantly involved with the latest updates. Send personalized SMS messages straight to your members\' phones and show them that you value their membership.',
      color: 'text-purple'
    },
    {
      icon: Image,
      title: 'Photo',
      description: 'Publish photos from games, training sessions or events. There\'s no limit to how much you choose to share. Make it personal with emojis, colors and text.',
      color: 'text-warning'
    },
    {
      icon: BarChart3,
      title: 'Polls',
      description: 'Get real-time feedback from your fans. Ask questions and test their knowledge with our online quizzes and voting features.',
      color: 'text-info'
    }
  ];

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
            style={{ transitionDuration: '1s' }}
          >
            <h1 className="display-1 fw-bold text-white mb-4">
              Features
            </h1>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '48rem' }}>
              On SportsTXT, you'll find a great mix of features enabling sports clubs 
              and athletes to connect directly with their fans.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div
            ref={featuresRef.ref}
            className={`transition-all ${
              featuresRef.isVisible ? 'fade-in visible' : 'fade-in'
            }`}
            style={{ transitionDelay: '200ms', transitionDuration: '1s' }}
          >
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={feature.title} className="col-md-6 col-lg-4">
                  <div 
                    className="card h-100 border-0 shadow card-hover border-top border-4"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      borderTopColor: feature.color === 'text-sports-red' ? 'var(--sports-red)' : 
                                     feature.color === 'text-sports-blue' ? 'var(--sports-blue)' :
                                     feature.color === 'text-success' ? '#198754' :
                                     feature.color === 'text-purple' ? '#6f42c1' :
                                     feature.color === 'text-warning' ? '#ffc107' : '#0dcaf0'
                    }}
                  >
                    <div className="card-body p-4">
                      <feature.icon className={`mb-3 ${feature.color}`} size={48} />
                      <h3 className="fs-4 fw-bold text-dark mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted" style={{ lineHeight: '1.6' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-sports-light-blue">
        <div className="container py-4 text-center">
          <h2 className="display-3 fw-bold text-dark mb-4">
            Get in Touch
          </h2>
          <p className="lead text-muted mb-4">
            Build A Unified Community with SportsTXT
          </p>
          <Link
            to="/contact"
            className="btn btn-sports-red btn-lg rounded-pill px-4 d-inline-flex align-items-center gap-2 scale-hover"
          >
            Start Building <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
