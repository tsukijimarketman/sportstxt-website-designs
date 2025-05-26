import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { AnimatedSection } from '../components/AnimatedSection';
import { UsersIcon, ShieldCheckIcon, DatabaseIcon, TrendingUpIcon, ArrowDownIcon } from 'lucide-react';
export const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = currentScroll / totalScroll * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="w-full">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 h-1 bg-red-600 z-50 transition-all duration-300" style={{
      width: `${scrollProgress}%`
    }} />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-red-900/10" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0.15
      }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Creating Value <span className="text-red-600">Off the Pitch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              A Fan First Engagement Platform for sports clubs, associations and
              athletes to connect directly with their fans.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button to="/contact" variant="primary">
                Become a Member
              </Button>
              <Button to="/features" variant="outline">
                Explore Features
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDownIcon size={32} className="text-gray-600" />
        </div>
      </section>
      {/* What is SportsTXT Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white" animation="fade-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Is SportsTXT?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Being a sports fan is not just about watching games. SportsTXT is
              an online platform designed to deliver the ultimate sports fan
              experience. Engage with other fans, get insider facts about your
              favorite teams, and so much more.
            </p>
          </div>
        </div>
      </AnimatedSection>
      {/* Our Mission Section */}
      <AnimatedSection className="py-16 md:py-24" animation="fade-in" bgColor="#F5F7FA">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sports fans cheering" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is to provide our users with a seamless and
                enjoyable online experience, offering a diverse range of
                high-quality content and services that inform, inspire, and
                engage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through innovative design and intuitive functionality, we aim to
                create a platform that connects people and facilitates
                meaningful interactions.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* How It Works Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white" animation="fade-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Platform demonstration" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How It Works
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SportsTXT is a fully customizable community platform that
                connects directly with members and fans in real-time giving them
                a true sense of belonging.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                It provides sports clubs and teams with a unique opportunity to
                create more personalized experiences and open up new revenue
                streams.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You'll be able to capture valuable data and tailor content to
                specific member segments.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* Platform of Firsts Section */}
      <AnimatedSection className="py-16 md:py-24" animation="fade-in" bgColor="#F5F7FA">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            The Platform of Firsts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection className="bg-white p-8 rounded-lg shadow-md" animation="slide-in-left" delay={100}>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <UsersIcon size={24} className="text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Members First</h3>
                  <p className="text-gray-700">
                    It's time to elevate your fan engagement beyond just using
                    social media and SportsTXT brings your members straight into
                    the heart of your club through exclusive stories, new
                    experiences, games and unique offers.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="bg-white p-8 rounded-lg shadow-md" animation="slide-in-right" delay={200}>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <ShieldCheckIcon size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                  <p className="text-gray-700">
                    SportsTXT offers 24/7 protection for sports clubs with
                    real-time monitoring and content analysis powered by a
                    combination of human expertise and AI technology. With
                    SportsTXT, clubs can be confident in the quality and safety
                    of their reputation and all user-generated content.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="bg-white p-8 rounded-lg shadow-md" animation="slide-in-left" delay={300}>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <DatabaseIcon size={24} className="text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Data First</h3>
                  <p className="text-gray-700">
                    Contrary to social media, you have full ownership of your
                    data. Your personal dashboard collects and analyzes
                    important insights about members' usage of the platform,
                    demographics and other data to help you make better business
                    decisions.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="bg-white p-8 rounded-lg shadow-md" animation="slide-in-right" delay={400}>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <TrendingUpIcon size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Value First</h3>
                  <p className="text-gray-700">
                    By making a few small tweaks in the way you present your
                    content, you will be amazed at how it can significantly
                    boost your profits. You have the opportunity to set your
                    content prices based on your own judgment and enhance its
                    worth with the support of sponsors.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
      {/* CTA Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-red-600 text-white" animation="fade-up">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Build A Unified Community with SportsTXT
          </p>
          <Button to="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </AnimatedSection>
    </div>;
};