'use client';
import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="bg-gray-100 py-2 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>(561) 825-5840</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>support@reliancenexus.com</span>
                    </div>
                </div>
            </div>

            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 ">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="/logoG.png" alt="RelianceNexus DEALS Logo" className="w-46" />
                        </div>
                        
                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="/" className="text-gray-700 hover:text-gray-900 text-lg font-medium">Home</Link>
                            <Link href="/services" className="text-gray-700 hover:text-gray-900 text-lg font-medium">Services</Link>
                            <Link href="/about" className="text-gray-700 hover:text-gray-900 text-lg font-medium">About Us</Link>
                            <Link href="/contacts" className="text-gray-700 hover:text-gray-900 text-lg font-medium">Contacts</Link>
                        </nav>
                        <button className="px-6 py-2 border-2 border-yellow-500 text-yellow-600 rounded-full font-semibold hover:bg-yellow-500 hover:text-white transition-colors">
                            Get a Quote
                        </button>

                        <button 
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <nav className="md:hidden mt-4 flex flex-col gap-4">
                            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                            <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
                            <Link href="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
                            <Link href="/contacts" className="text-gray-700 hover:text-gray-900">Contacts</Link>
                            <button className="px-6 py-2 border-2 border-yellow-500 text-yellow-600 rounded-full font-semibold hover:bg-yellow-500 hover:text-white transition-colors">
                                Get a Quote
                            </button>
                        </nav>
                    )}
                </div>
            </header>
        </>
    );
};

export default Navbar;