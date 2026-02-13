
import { Link } from 'react-router-dom';
import { Download, Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import textureBg from '../assets/images/texture_bg.png';

export default function Footer() {
    return (
        <footer id="contact" className="relative bg-dark-slate pt-24 text-white overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: `url(${textureBg})` }}></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-4">

                    {/* Column 1: Logo & Mission */}
                    <div>
                        <h2 className="text-4xl font-bold uppercase tracking-tighter text-white font-header mb-6">SB Cranes</h2>
                        <p className="mb-8 text-gray-400 leading-relaxed max-w-xs text-sm">
                            To become a globally recognized crane rental company by providing safe, efficient, and innovative heavy lifting solutions.
                        </p>
                        <div className="flex gap-4">
                            {/* Socials Placeholders */}
                            <a href="#" className="flex h-10 w-10 items-center justify-center bg-white/10 hover:bg-safety-yellow hover:text-black transition-colors rounded-sm"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="flex h-10 w-10 items-center justify-center bg-white/10 hover:bg-safety-yellow hover:text-black transition-colors rounded-sm"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="flex h-10 w-10 items-center justify-center bg-white/10 hover:bg-safety-yellow hover:text-black transition-colors rounded-sm"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-safety-yellow">Quick Links</h3>
                        <ul className="space-y-4 text-sm font-medium text-gray-300">
                            <li><Link to="/fleet" className="hover:text-white hover:underline decoration-safety-yellow underline-offset-4 transition-all">Equipment Fleet</Link></li>
                            <li><Link to="/projects" className="hover:text-white hover:underline decoration-safety-yellow underline-offset-4 transition-all">Featured Projects</Link></li>
                            <li><Link to="/about" className="hover:text-white hover:underline decoration-safety-yellow underline-offset-4 transition-all">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-white hover:underline decoration-safety-yellow underline-offset-4 transition-all">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-white hover:underline decoration-safety-yellow underline-offset-4 transition-all">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div>
                        <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-safety-yellow">Contact Us</h3>
                        <ul className="space-y-6 text-sm text-gray-300">
                            <li className="flex gap-4">
                                <MapPin className="h-6 w-6 text-safety-yellow shrink-0" />
                                <span>Okhla Industrial Area,<br />Phase-1, New Delhi</span>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="h-6 w-6 text-safety-yellow shrink-0" />
                                <div>
                                    <p>+91 98111 40311</p>
                                    <p>+91 98114 64927</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="h-6 w-6 text-safety-yellow shrink-0" />
                                <div>
                                    <p>info@sbcranes.in</p>
                                    <p>sbcranes25@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Brochure CTA */}
                    <div className="bg-white/5 p-8 border border-white/10">
                        <h3 className="mb-6 text-xl font-bold uppercase tracking-tighter text-white font-header">Company Profile</h3>
                        <p className="mb-6 text-gray-400 text-sm">
                            Get our detailed equipment specification guide and safety certifications.
                        </p>
                        <Link to="/resources" className="flex w-full items-center justify-center gap-3 bg-safety-yellow px-6 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-yellow-500/20">
                            <Download className="h-5 w-5" />
                            DOWNLOAD BROCHURE
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 text-center text-xs font-bold uppercase tracking-widest text-gray-600 sm:text-left flex flex-col sm:flex-row justify-between items-center">
                    <p>&copy; 2026 SB Cranes. Heavy Lifting Solutions.</p>
                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
