"use client";
import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreed: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <Navbar />
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-teal-400 opacity-50 transform rotate-45"></div>
        <div className="absolute top-20 left-32 w-16 h-16 bg-blue-200 opacity-40 transform rotate-12"></div>
        <div className="absolute top-10 right-10 w-8 h-8 bg-orange-400 opacity-60 rounded-full"></div>
        <div className="absolute bottom-10 right-32 w-32 h-20 bg-purple-500 opacity-40 transform rotate-12"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-blue-200 opacity-30 transform rotate-45"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-12 bg-white" id='address'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Address
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto border-2 border-yellow-400 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Location */}
              <div className="text-center md:text-left">
                <div className="flex items-start justify-center md:justify-start gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Austin</h3>
                    <p className="text-gray-600 text-sm">
                      5900 Balcones Drive #13954, Austin Texas, USA 78731
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="text-center md:text-left">
                <div className="flex items-start justify-center md:justify-start gap-2 mb-2">
                  <Mail className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600 text-sm">info@reliancenexus.com</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="text-center md:text-left">
                <div className="flex items-start justify-center md:justify-start gap-2 mb-2">
                  <Phone className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office Number</h3>
                    <p className="text-gray-600 text-sm">(737) 310-2009</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Zohaib Muhammad */}
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-200 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces" 
                    alt="Zohaib Muhammad"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Zohaib Muhammad</h3>
              <p className="text-gray-600 text-sm">Founder & CEO</p>
            </div>

            {/* Imran Khan */}
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-red-200 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" 
                    alt="Imran Khan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Imran Khan</h3>
              <p className="text-gray-600 text-sm">Chief Operating Officer</p>
            </div>

            {/* Fazal Abbas */}
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces" 
                    alt="Fazal Abbas"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Fazal Abbas</h3>
              <p className="text-gray-600 text-sm">Marketing & Sales Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Have a Question?
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agreed"
                id="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="agreed" className="text-sm text-gray-600">
                I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business.
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
      <div className="w-full h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.690658731249!2d-97.75709998488474!3d30.34887568177426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb92a42c7f33%3A0x94e66b3c3b5ef9a4!2s5900%20Balcones%20Dr%20%2313954%2C%20Austin%2C%20TX%2078731%2C%20USA!5e0!3m2!1sen!2sus!4v1731000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="RelianceNexus Location"
        />
      </div>
    </section>

    <Footer />
    </div>
  );
}