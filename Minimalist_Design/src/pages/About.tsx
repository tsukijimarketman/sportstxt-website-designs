import React from 'react';
import { Button } from '../components/Button';
import { AnimatedSection } from '../components/AnimatedSection';
export const About = () => {
  const teamMembers = [{
    name: 'Jane Doe',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }, {
    name: 'John Smith',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }, {
    name: 'Emma Wilson',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }, {
    name: 'Michael Brown',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }];
  return <div className="w-full pt-24">
      {/* About Header */}
      <AnimatedSection className="py-16 md:py-24 bg-gray-50" animation="fade-up">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Learn more about the team behind SportsTXT and our mission to
            revolutionize sports fan engagement.
          </p>
        </div>
      </AnimatedSection>
      {/* Company Info */}
      <AnimatedSection className="py-16 md:py-24 bg-white" animation="fade-in">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaboration" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SportsTXT is an initiative from NMS Productions BV, a division
                of New Media Services, a global company specializing in
                delivering intelligent outsourcing services through a
                combination of machine learning and human-powered activities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From fans to brands to individual content creators, NMSP designs
                and builds collaborative online platforms for our users to
                communicate, connect, learn, and share.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* Team Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gray-50" animation="fade-up">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Key People
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => <AnimatedSection key={member.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow" animation="fade-up" delay={index * 100}>
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </AnimatedSection>)}
          </div>
        </div>
      </AnimatedSection>
      {/* Values Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white" animation="fade-in">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-700">
              At SportsTXT, we're guided by a set of core values that inform
              everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection className="bg-gray-50 p-8 rounded-lg" animation="slide-in-left">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-700">
                We constantly push boundaries and explore new technologies to
                provide the best possible experience for sports fans and clubs.
              </p>
            </AnimatedSection>
            <AnimatedSection className="bg-gray-50 p-8 rounded-lg" animation="slide-in-right">
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-700">
                We believe in the power of bringing people together through
                their shared passion for sports.
              </p>
            </AnimatedSection>
            <AnimatedSection className="bg-gray-50 p-8 rounded-lg" animation="slide-in-left">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-700">
                We operate with honesty and transparency in all our dealings
                with clubs, athletes, and fans.
              </p>
            </AnimatedSection>
            <AnimatedSection className="bg-gray-50 p-8 rounded-lg" animation="slide-in-right">
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-700">
                We strive for the highest standards in everything we do, from
                platform development to customer service.
              </p>
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