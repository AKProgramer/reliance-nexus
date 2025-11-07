import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

export default function RelianceNexusServices() {
  const services = [
    {
      title: "LLC Formation",
      content: `Setting up a Limited Liability Company (LLC) can be challenging without the right guidance. At RelianceNexus LLC, we simplify the process by handling everything from selecting the best state for registration to ensuring compliance with federal tax laws. Whether you're a domestic entrepreneur or an international business owner, our LLC services are comprehensive and professionally designed. Our services include obtaining your EIN, ITIN, filing federal taxes, and assisting with annual renewals, ensuring your business remains in good standing year-round.`
    },
    {
      title: "Warehouse Services",
      description: "Effective inventory management is essential for your e-commerce business. Our warehouse services provide seamless storage, 3PL solutions, labeling, packaging, and reliable drop shipping options. With a focus on safety, efficiency, and scalability, RelianceNexus LLC ensures your products are always ready to meet customer demand. Whether you require bulk storage or customized packaging solutions, we have everything you need to run your business smoothly and deliver on time.",
      subsections: [
        {
          subtitle: "Optimize your e-commerce operations with all of the-art warehouse services. Whether you are a startup or an established brand, we cater to all your logistics needs with precision.",
          points: [
            {
              title: "Storage Facility:",
              description: "Secure and spacious storage solutions for various types of inventory, ensuring safety and accessibility."
            },
            {
              title: "3PL Services (Pick, Pack, Parcel):",
              description: "Comprehensive third-party logistics management including order processing, packaging, and shipping."
            },
            {
              title: "Labeling & Packaging:",
              description: "Professional packaging and branding solutions to enhance your product presentation."
            },
            {
              title: "Drop Shipping with Pick-Ups:",
              description: "Efficient drop shipping services to ensure fast delivery and customer satisfaction."
            }
          ]
        }
      ]
    },
    {
      title: "E-commerce Store Management",
      description: "Managing your online stores across multiple platforms can be challenging, but at RelianceNexus LLC, we make it easier. From setting up your stores on Amazon, eBay, Walmart, and Etsy to providing ongoing management, we offer tailored solutions to enhance your sales and ensure operational efficiency. Our services include store setup, optimization, inventory management, order fulfillment, and customer support to help you stay ahead in the competitive online marketplace.",
      subsections: [
        {
          subtitle: "Maximize your e-commerce presence with our specialized E-commerce Store Management Services. We help you establish, optimize, and scale your stores on top platforms like Amazon, eBay, Walmart, and Etsy, ensuring maximum visibility and profitability.",
          points: [
            {
              title: "Store Setup & Optimization:",
              description: "Professional store setup and optimization services for platforms like Amazon, eBay, Walmart, and Etsy to maximize visibility."
            },
            {
              title: "Product Listing & Inventory Management:",
              description: "High-quality listings, keyword optimization, inventory tracking, and pricing management to boost your sales."
            },
            {
              title: "Order Processing & Fulfillment:",
              description: "Efficient order management, packaging, and shipping to maintain high customer satisfaction."
            },
            {
              title: "Customer Service Management:",
              description: "Providing prompt and professional customer support to ensure positive reviews and brand loyalty."
            },
            {
              title: "Account Health Monitoring:",
              description: "Continuous monitoring of your online stores to ensure policy compliance and account safety."
            }
          ]
        }
      ]
    }
  ];

  const platforms = [
    { name: "Etsy", color: "text-orange-500" },
    { name: "Amazon", color: "text-gray-800" },
    { name: "Walmart", color: "text-blue-600" },
    { name: "eBay", color: "text-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <Navbar />
      {/* Decorative Elements */}
      <div className="relative overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-teal-400 opacity-30 rounded-full transform -rotate-45"></div>
        <div className="absolute top-10 left-5 w-16 h-16 bg-purple-300 opacity-40 rounded-full"></div>
        <div className="absolute top-32 left-2 w-4 h-4 bg-orange-400 opacity-60 rounded-full"></div>
        
        <div className="absolute top-20 right-10 w-32 h-24 bg-purple-500 opacity-30 rounded-3xl"></div>
        <div className="absolute top-10 right-32 w-20 h-20 bg-blue-300 opacity-40 rounded-full"></div>

        {/* Header Section */}
        <div className="text-center py-16 px-4 bg-white">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            OUR Services
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-12 bg-white">
          <div className="relative">
            <div className="rounded-full w-64 flex items-center justify-center bg-white">
              <img
                src="/logoG.png"
                alt="RelianceNexus Logo"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-xl overflow-hidden">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop" 
                alt="Warehouse aisle with shelving"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <p className="text-yellow-500 font-semibold mb-2 uppercase text-sm">
                Empowering Your E-Commerce Success
              </p>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Services We Offer
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From business formation to seamless operations and store management, we provide the solutions you need to grow and scale effortlessly.
              </p>
              <button className="px-8 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-colors shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Services Detail Section */}
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              We've Done <span className="text-gray-900">Lot's of Work</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From LLC formation to seamless warehouse management and e-commerce store optimization, we've helped countless businesses streamline operations and scale successfully.
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          {/* Service Cards */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
                
                {service.content && (
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.content}
                  </p>
                )}

                {service.description && (
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                )}

                {service.subsections && service.subsections.map((subsection, subIndex) => (
                  <div key={subIndex}>
                    {subsection.subtitle && (
                      <p className="text-gray-700 leading-relaxed mb-6 italic">
                        {subsection.subtitle}
                      </p>
                    )}
                    
                    <div className="space-y-4">
                      {subsection.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-bold text-gray-800">{point.title}</span>
                            <span className="text-gray-700"> {point.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Platforms Section */}
        <div className="bg-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
              {platforms.map((platform, index) => (
                <div key={index} className={`text-3xl md:text-4xl font-bold ${platform.color}`}>
                  {platform.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}