import React from 'react';
import { Button } from '../components/Button';
import { AnimatedSection } from '../components/AnimatedSection';
import { UsersIcon, VideoIcon, HeadphonesIcon, MessageSquareIcon, ImageIcon, BarChartIcon } from 'lucide-react';
export const Features = () => {
  const features = [{
    icon: UsersIcon,
    title: 'Fanzone',
    description: 'Empower your supporters in the Fanzone, a moderated platform for interaction and involvement. Fans can create public and private subgroups for sharing content and building a supportive community.'
  }, {
    icon: VideoIcon,
    title: 'Video',
    description: 'Make your members feel special by offering them workouts, interviews, live matches, and even behind-the-scenes content. We support a range of video platforms, so you can easily upload videos from your phone.'
  }, {
    icon: HeadphonesIcon,
    title: 'Podcasts',
    description: 'Weekly updates, interviews, or tip of the week? Record a podcast on your phone and share it with your community.'
  }, {
    icon: MessageSquareIcon,
    title: 'SMS',
    description: "Want to get your fans instantly involved with the latest updates? Send personalized SMS messages straight to your members' phones and show them that you value their membership."
  }, {
    icon: ImageIcon,
    title: 'Photo',
    description: "Publish photos from, games, training sessions or events. There's no limit to how much you choose to share. Make it more personal by adding emojis, customizing colors and including text."
  }, {
    icon: BarChartIcon,
    title: 'Polls',
    description: 'Get real-time feedback from your fans. Ask questions and test their knowledge with our online quizzes and voting features.'
  }];
  return <div className="w-full pt-24">
      {/* Features Header */}
      <AnimatedSection className="py-16 md:py-24 bg-gray-50" animation="fade-up">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Features</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            On SportsTXT, you'll find a great mix of features enabling sports
            clubs and athletes to connect directly with their fans.
          </p>
        </div>
      </AnimatedSection>
      {/* Features Grid */}
      <AnimatedSection className="py-16 md:py-24 bg-white" animation="fade-in">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <AnimatedSection key={feature.title} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow" animation="fade-up" delay={index * 100}>
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-lg mb-4">
                  <feature.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </AnimatedSection>)}
          </div>
        </div>
      </AnimatedSection>
      {/* Demo Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gray-50" animation="fade-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Platform demo" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                See it in action
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our platform is designed with both clubs and fans in mind. The
                intuitive interface makes it easy for sports organizations to
                manage content and engage with their community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Request a demo today to see how SportsTXT can transform your fan
                engagement strategy.
              </p>
              <Button to="/contact" variant="primary">
                Request Demo
              </Button>
            </div>
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