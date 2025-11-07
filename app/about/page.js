"use client";
import React from 'react';
import { FileText, Warehouse, ShoppingCart, Users, Trophy, TrendingUp, Target, Sparkles, Mail, Heart, Layers, Megaphone, Monitor } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="absolute top-10 left-10 w-24 h-24 bg-teal-400 opacity-50 transform rotate-45"></div>
        <div className="absolute top-20 left-32 w-16 h-16 bg-blue-200 opacity-40 transform rotate-12"></div>
        <div className="absolute top-10 right-10 w-8 h-8 bg-orange-400 opacity-60 rounded-full"></div>
        <div className="absolute bottom-10 right-32 w-32 h-20 bg-purple-500 opacity-40 transform rotate-12"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-blue-200 opacity-30 transform rotate-45"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#181824]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* LLC Formation */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-10 h-10 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">LLC Formation</h3>
              <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm mb-6">
                We make the process of establishing your Limited Liability Company smooth and hassle-free.
              </p>
              <button className="text-gray-700 font-semibold hover:text-gray-900 transition-colors">
                READ MORE
              </button>
            </div>

            {/* Warehouse Services */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Warehouse className="w-10 h-10 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Warehouse Services</h3>
              <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm mb-6">
                Optimize your e-commerce operations with our state-of-the-art warehouse services.
              </p>
              <button className="text-gray-700 font-semibold hover:text-gray-900 transition-colors">
                READ MORE
              </button>
            </div>

            {/* E-commerce Store Management */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-10 h-10 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Store Management</h3>
              <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm mb-6">
                Maximize your e-commerce presence with our specialized E-commerce Store Management Services.
              </p>
              <button className="text-gray-700 font-semibold hover:text-gray-900 transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Founder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet The Founder
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Zohaib Muhammad - Founder & CEO
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Zohaib Muhammad, the visionary Founder & CEO of <span className="font-semibold">RelianceNexus LLC</span>, has years of experience in e-commerce and business management. With a deep understanding of <span className="font-semibold">Amazon, eBay, Walmart, and Etsy marketplaces</span>, he has successfully guided numerous clients toward building profitable online businesses. He operates ensures that every client receives top-notch service and personalized solutions tailored to their specific needs.
              </p>
              
              <button className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors">
                Talk To Us
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop" 
                alt="Founder" 
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why People Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white transform rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-white transform -rotate-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why People Choose Us
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <Users className="w-16 h-16" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">986</div>
              <div className="text-blue-200">Satisfied Customers</div>
            </div>
            
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <Trophy className="w-16 h-16" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2036</div>
              <div className="text-blue-200">Successful Projects</div>
            </div>
            
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-16 h-16" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24%</div>
              <div className="text-blue-200">Average Conversion</div>
            </div>
            
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <Target className="w-16 h-16" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Guaranteed Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Standards
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering excellence in every aspect of e-commerce business solutions. Our core values define how we operate and help our clients succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Being Relevant */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-yellow-500 transform rotate-45 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white transform -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Being Relevant</h3>
              <p className="text-gray-600 text-sm">
                We stay ahead of the curve, ensuring your business adapts to the latest trends and market demands for sustained growth.
              </p>
            </div>

            {/* Memorable Branding */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-yellow-500 transform rotate-45 flex items-center justify-center">
                  <Mail className="w-10 h-10 text-white transform -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Memorable Branding</h3>
              <p className="text-gray-600 text-sm">
                Build a strong brand identity with our strategies that enhance visibility, trust, and customer loyalty in e-commerce space.
              </p>
            </div>

            {/* Positive Impact */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-yellow-500 transform rotate-45 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white transform -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Positive Impact</h3>
              <p className="text-gray-600 text-sm">
                Our solutions drive meaningful results, empowering businesses to scale efficiently while maintaining customer satisfaction.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cross-functional */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-yellow-500 transform rotate-45 flex items-center justify-center">
                  <Layers className="w-10 h-10 text-white transform -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-functional</h3>
              <p className="text-gray-600 text-sm">
                We integrate multiple expertise areas, from LLC formation to logistics, to provide a seamless e-commerce experience.
              </p>
            </div>

            {/* Multidisciplinary Team */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-yellow-500 transform rotate-45 flex items-center justify-center">
                  <Megaphone className="w-10 h-10 text-white transform -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multidisciplinary Team</h3>
              <p className="text-gray-600 text-sm">
                Our team consists of experts in business strategy, technology, and marketing to ensure holistic support for your success.
              </p>
            </div>

            {/* Recent Technology */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-yellow-500 transform rotate-45 flex items-center justify-center">
                  <Monitor className="w-10 h-10 text-white transform -rotate-45" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recent Technology</h3>
              <p className="text-gray-600 text-sm">
                Leverage the latest tools and automation to optimize operations, improve efficiency, and enhance customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}