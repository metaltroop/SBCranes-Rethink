import { useState, useEffect } from 'react';
import { Star, Truck, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '../assets/images/hero_bg.png';
import refineryImg from '../assets/images/refinery_project.png';
import stadiumImg from '../assets/images/stadium_project.png';

// Placeholder array using existing assets since generation quota was hit
const heroImages = [heroBg, refineryImg, stadiumImg];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const features = [
        {
            icon: <Truck className="h-8 w-8 text-safety-yellow group-hover:text-black transition-colors duration-300" />,
            title: "Right Equipment",
            desc: "Modern fleet up to 800 MT capacity",
            borderColor: "hover:border-safety-yellow",
            sweepColor: "before:bg-safety-yellow",
            hoverTextColor: "group-hover:text-black",
            subTextColor: "group-hover:text-black/80"
        },
        {
            icon: <ShieldCheck className="h-8 w-8 text-emerald-400 group-hover:text-white transition-colors duration-300" />,
            title: "Safe Execution",
            desc: "Engineered lift planning & safety",
            borderColor: "hover:border-emerald-500",
            sweepColor: "before:bg-emerald-600",
            hoverTextColor: "group-hover:text-white",
            subTextColor: "group-hover:text-white/90"
        },
        {
            icon: <MapPin className="h-8 w-8 text-orange-400 group-hover:text-white transition-colors duration-300" />,
            title: "Pan-India Support",
            desc: "On-time mobilization across India",
            borderColor: "hover:border-orange-500",
            sweepColor: "before:bg-orange-600",
            hoverTextColor: "group-hover:text-white",
            subTextColor: "group-hover:text-white/90"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 8000); // Change bg every 8 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-dark-slate">
            {/* Background Slideshow */}
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={currentImageIndex}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 1.5, ease: "easeInOut" },
                        scale: { duration: 10, ease: "linear" }
                    }}
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 z-0 bg-black/60" /> {/* Darker overlay for better text contrast */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark-slate via-transparent to-transparent" /> {/* Smoother bottom fade */}

            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col justify-center pt-20 pb-32"> {/* Centered vertically more, added padding */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-4xl text-3xl sm:text-5xl font-bold uppercase leading-none tracking-tighter text-white md:text-6xl drop-shadow-2xl font-header break-words"
                        >
                            Safe. Reliable. <br />
                            On-Time Lifting & <br />
                            <span className="text-safety-yellow">Heavy Transport </span> Solutions.
                        </motion.h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <p className="mt-6 max-w-lg text-lg font-light text-gray-200 border-l-4 border-safety-yellow pl-6">
                            Crane rental, heavy lifting, erection, and ODC
                            transportation for infrastructure and industrial
                            projects across India.
                        </p>

                        {/* Trust Indicators */}
                        <div className="mt-6 flex items-center gap-4 pl-6 opacity-30">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-10 w-10 rounded-full bg-gray-300 border-2 border-dark-slate flex items-center justify-center text-xs font-bold text-dark-slate">User</div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-safety-yellow">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-white uppercase tracking-wider">over 1000+ happy clients</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Info Bar - Anchored to bottom */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "circOut" }}
                    className="absolute bottom-0 left-0 w-full grid grid-cols-1 md:grid-cols-3 border-t border-white/10"
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`
                                group relative flex h-24 items-center justify-between px-8 
                                bg-industrial-blue/90 border-r border-white/10 overflow-hidden cursor-default transition-all duration-300
                                before:absolute before:top-0 before:left-0 before:h-full before:w-2 before:transition-all before:duration-300 before:z-0
                                hover:before:w-full ${feature.sweepColor}
                            `}
                        >
                            <div className="relative z-10 flex items-center gap-6 w-full">
                                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-black/10 transition-colors duration-300 shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className={`text-lg font-bold uppercase tracking-wider text-white font-header leading-tight mb-1 transition-colors duration-300 ${feature.hoverTextColor}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-xs text-gray-300 font-medium tracking-wide transition-colors duration-300 ${feature.subTextColor}`}>
                                        {feature.desc}
                                    </p>
                                </div>
                                <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${feature.hoverTextColor}`}>
                                    <ArrowRight className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
