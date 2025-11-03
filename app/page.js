"use client"
import React, { useState } from 'react';
import { ShoppingCart, Package, Store, ChevronDown, Phone, Mail, Menu, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';


export default function RelianceNexusHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: <Package className="w-12 h-12" />,
      title: "LLC Formation",
      description: "We make the process of establishing your Limited Liability Company smooth and hassle-free."
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: "Warehouse Services",
      description: "Optimize your e-commerce operations with our state-of-the-art warehouse services."
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Store Management",
      description: "Maximize your e-commerce presence with our specialized E-commerce Store Management Services."
    }
  ];

  const storeFeatures = [
    "Store Setup & Optimization",
    "Product Listing & Inventory Management",
    "Order Processing & Fulfillment",
    "Customer Service Management",
    "Account Health Monitoring"
  ];

  const processSteps = [
    {
      title: "Consultation:",
      description: "Discuss your business needs and goals."
    },
    {
      title: "Planning:",
      description: "Develop customized solutions tailored to your requirements."
    },
    {
      title: "Implementation:",
      description: "Execute strategies with precision and professionalism."
    },
    {
      title: "Support:",
      description: "Ongoing assistance to ensure seamless business growth."
    }
  ];

  const testimonials = [
    {
      text: "RelianceNexus  LLC made our transition to e-commerce seamless. Their expertise and support were invaluable!",
      author: "Sarah J."
    },
    {
      text: "The warehouse services are top-notch. We highly recommend their comprehensive solutions!",
      author: "Michael T."
    }
  ];

  const platforms = [
    { name: "Etsy", color: "text-orange-500" },
    { name: "Amazon", color: "text-gray-800" },
    { name: "Walmart", color: "text-blue-600" },
    { name: "eBay", color: "text-red-600" }
  ];

  const faqs = [
    {
      question: "How long does it take to form an LLC?",
      answer: "The LLC formation process typically takes 5-7 business days, depending on state processing times."
    },
    {
      question: "Can I use your warehouse services even if I'm not registered in the U.S.?",
      answer: "Yes, we offer warehouse services to both domestic and international clients with comprehensive logistics support."
    },
    {
      question: "What e-commerce platforms do you cover?",
      answer: "We support all major platforms including Amazon, eBay, Walmart, Etsy, and can help with custom e-commerce solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}

      <Navbar />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
            One-Stop Solution For All Your E-commerce Business
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Welcome to RelianceNexus DEALS LLC, your one-stop solution for all your E-commerce business needs. From LLC formation to comprehensive warehouse services and E-commerce Store Management, we are here to help you build and grow your online business efficiently with professionalism and precision.
          </p>
          <button className="px-8 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-colors shadow-lg">
            Talk To Us
          </button>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop" 
            alt="E-commerce shopping cart on laptop"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4 text-gray-700">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                  {service.title}
                </h3>
                <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                <div className="text-center">
                  <button className="text-gray-700 font-semibold hover:text-yellow-600 transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Store Management Detail */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" 
            alt="Packaging with tape dispenser"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            E-commerce Store Management
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Maximize your e-commerce presence with our specialized E-commerce Store Management Services. We help you establish, optimize, and scale your stores on top platforms like Amazon, eBay, Walmart, and Etsy, ensuring maximum visibility and profitability.
          </p>
          <div className="space-y-3 mb-8">
            {storeFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          <button className="px-8 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-colors shadow-lg">
            Contact Us
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              Why Choose <span className="text-yellow-400">RelianceNexus LLC</span>
            </h2>
            <h3 className="text-2xl text-white mb-6">
              for Your E-Commerce Success?
            </h3>
            <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-gray-200 text-lg mb-8">
              We provide end-to-end solutions to help you establish, manage, and scale your e-commerce business with ease.
            </p>
            <button className="px-8 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-colors shadow-lg">
              Order Service
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
              alt="Person coding"
              className="rounded-lg opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop" 
            alt="Warehouse forklift"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Process
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
          <p className="text-gray-600 mb-8 leading-relaxed">
            At RelianceNexus DEALS LLC, we follow a streamlined approach to ensure your e-commerce business runs smoothly and efficiently.
          </p>
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-gray-800">{step.title}</span>
                  <span className="text-gray-600"> {step.description}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 px-8 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-colors shadow-lg">
            Our Approach
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a <span className="underline">Consultation?</span>
          </h2>
          <p className="text-white mb-6">
            Get expert guidance and start your journey with us today!
          </p>
          <button className="px-8 py-3 bg-white text-orange-500 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Talk To Us
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Testimonials
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Discover how our services have made a difference through real stories from our satisfied clients.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.text}"
                </p>
                <p className="text-gray-800 font-semibold">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {platforms.map((platform, index) => (
              <div key={index} className={`text-4xl font-bold ${platform.color}`}>
                {platform.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
            <Footer />
    </div>
  );
}