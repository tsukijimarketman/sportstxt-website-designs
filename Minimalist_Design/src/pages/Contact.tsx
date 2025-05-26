import React, { lazy } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ContactForm } from '../components/ContactForm';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
export const Contact = () => {
  return <div className="w-full pt-24">
      {/* Contact Header */}
      <AnimatedSection className="py-16 md:py-24 bg-gray-50" animation="fade-up">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have a question or want to learn more about SportsTXT? Get in touch
            with our team.
          </p>
        </div>
      </AnimatedSection>
      {/* Contact Information */}
      <AnimatedSection className="py-16 md:py-24 bg-white" animation="fade-in">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Amsterdam Office
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <MapPinIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-700">
                      NMS PRODUCTIONS EUROPE B.V.
                      <br />
                      Herengracht 257
                      <br />
                      1016 BJ, Amsterdam
                      <br />
                      The Netherlands
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <PhoneIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-700">+31 (0) 20 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <MailIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-700">info@sportstxt.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <ClockIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* Map Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gray-50" animation="fade-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5481220172297!2d4.882099076939284!3d52.36730804535739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c14a6680df%3A0x643f005113531f9a!2sHerengracht%20257%2C%201016%20BJ%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus" width="100%" height="450" style={{
              border: 0
            }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location" className="rounded-lg" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>;
};