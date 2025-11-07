"use client"
import React from 'react';
import { Phone, Mail } from 'lucide-react'; // Assuming you're using lucide-react for icons

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-2">RelianceNexus</h3>
                    <p className="text-gray-400 text-sm uppercase tracking-widest">
                        Discover More, Pay Less!
                    </p>
                </div>
                <div className="flex justify-center gap-12 mb-8 flex-wrap">
                    <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        <span>(737) 310-2009</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        <span>info@reliancenexus.com</span>
                    </div>
                </div>
                <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
                    <p>Copyright © {new Date().getFullYear()} - All Rights Reserved</p>
                    <p className="mt-2">
                        Website Cookies and Privacy Policy | Terms and Conditions | Consent Preferences | Contact Us
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;