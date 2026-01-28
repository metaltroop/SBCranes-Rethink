
import { ArrowRight, ChevronRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero_bg.png';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-dark-slate">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
            >
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /> {/* Bottom fade */}
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col justify-between pt-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-5xl text-6xl font-bold uppercase leading-[0.9] tracking-tighter text-white md:text-8xl drop-shadow-2xl font-header"
                        >
                            Lifting With <br />
                            <span className="text-safety-yellow">Precision</span>
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-8 max-w-xl text-xl font-light text-gray-200 border-l-4 border-safety-yellow pl-6"
                    >
                        Global heavy lifting authorities. <br />
                        <span className="font-bold text-white">100+ Cranes. 40+ Years.</span>
                    </motion.p>
                </div>

                {/* Action Bar */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "circOut" }}
                    className="grid w-full grid-cols-1 md:grid-cols-3 border-t border-white/10"
                >
                    {/* Block 1: Yellow - Rental Fleet */}
                    <a href="#fleet" className="group flex h-24 items-center justify-between bg-safety-yellow px-8 text-black transition-all hover:bg-yellow-400 md:h-32">
                        <span className="text-2xl font-bold uppercase tracking-tighter font-header">Rental Fleet</span>
                        <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-2" />
                    </a>

                    {/* Block 2: White - Project Logistics */}
                    <a href="#projects" className="group flex h-24 items-center justify-between bg-white px-8 text-black transition-all hover:bg-gray-100 md:h-32 border-l border-gray-200">
                        <span className="text-2xl font-bold uppercase tracking-tighter font-header">Project Logistics</span>
                        <ChevronRight className="h-8 w-8 transition-transform group-hover:translate-x-2" />
                    </a>

                    {/* Block 3: Blue - Get a Quote */}
                    <a href="#contact" className="group flex h-24 items-center justify-between bg-industrial-blue px-8 text-white transition-all hover:bg-blue-900 md:h-32 border-l border-white/10">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium uppercase text-safety-yellow tracking-widest mb-1">Heavy Lift</span>
                            <span className="text-2xl font-bold uppercase tracking-tighter font-header">Get a Quote</span>
                        </div>
                        <div className="bg-white/10 p-3 rounded-none group-hover:bg-safety-yellow group-hover:text-black transition-colors">
                            <Phone className="h-6 w-6" />
                        </div>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
