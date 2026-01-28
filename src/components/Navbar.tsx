import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Fleet', href: '#fleet' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-industrial-blue/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2 group">
                            <div className="h-10 w-10 bg-safety-yellow flex items-center justify-center font-bold text-black text-xl font-header">
                                SB
                            </div>
                            <span className="text-2xl font-bold uppercase tracking-tighter text-white font-header group-hover:text-safety-yellow transition-colors">
                                Cranes
                            </span>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-bold uppercase tracking-widest text-white hover:text-safety-yellow transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="flex items-center gap-2 bg-safety-yellow px-6 py-3 text-sm font-bold uppercase tracking-widest text-black hover:bg-white transition-colors"
                            >
                                <Phone className="h-4 w-4" />
                                Get Quote
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="md:hidden text-white hover:text-safety-yellow transition-colors"
                        >
                            <Menu className="h-8 w-8" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-50 bg-dark-slate md:hidden"
                    >
                        <div className="flex h-full flex-col p-8">
                            <div className="flex items-center justify-end mb-12">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white hover:text-safety-yellow transition-colors"
                                >
                                    <X className="h-10 w-10" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-bold uppercase tracking-tighter text-white hover:text-safety-yellow transition-colors font-header border-b border-white/10 pb-4"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-4 flex w-full items-center justify-center gap-2 bg-safety-yellow px-6 py-4 text-lg font-bold uppercase tracking-widest text-black hover:bg-white transition-colors"
                                >
                                    <Phone className="h-5 w-5" />
                                    Get Quote
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
