import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Truck, Cog, Anchor, HardHat, Factory, ChevronRight } from 'lucide-react';

// Import images
import heroBg from '../assets/images/hero_bg.png';
import crawlerImg from '../assets/images/crawler_crane.png';
import refineryImg from '../assets/images/hmel.png';
import stadiumImg from '../assets/images/jlm2.png';
import towerImg from '../assets/images/buildingcrae.png';

interface ServiceSection {
    id: string;
    title: string;
    shortTitle: string;
    icon: React.ElementType;
    image: string;
    overview: string;
    applications: string[];
    capabilities: string[];
    capacity: string[];
}

const services: ServiceSection[] = [
    {
        id: 'mobile-crane',
        title: 'Mobile Crane Rental',
        shortTitle: 'Mobile Cranes',
        icon: Truck,
        image: heroBg,
        overview: 'Our mobile crane rental services are designed for fast mobilization, flexibility, and high-performance lifting across infrastructure, industrial, and time-sensitive projects. With a modern fleet and experienced operators, SB Cranes ensures safe and efficient execution even in constrained or urban environments.',
        applications: ['Plant installation and maintenance', 'Infrastructure construction', 'Urban construction sites', 'Equipment loading and unloading', 'Emergency and time-critical lifts'],
        capabilities: ['Road-legal cranes for rapid deployment', 'Quick setup and dismantling', 'Compatible with jibs and luffing attachments', 'Suitable for tight access locations', 'Ideal for short-duration and fast-track projects'],
        capacity: ['Light to Medium Duty: 60–220 MT', 'Heavy Duty: 250–360 MT', 'Ultra Heavy Duty: 400–800 MT']
    },
    {
        id: 'crawler-crane',
        title: 'Crawler Crane Rental',
        shortTitle: 'Crawler Cranes',
        icon: Cog,
        image: crawlerImg,
        overview: 'Our crawler cranes are built for heavy industrial lifting, long-term deployment, and operations on uneven or soft ground. These cranes deliver exceptional stability and load-handling capability for complex projects.',
        applications: ['Power plants and refineries', 'Steel plants and cement plants', 'Large infrastructure projects', 'Modular construction and heavy assemblies', 'Long-duration site deployments'],
        capabilities: ['Track-mounted for superior stability', 'Capable of lifting and moving loads simultaneously', 'Ideal for continuous heavy lifting operations', 'Suitable for restricted ground conditions', 'Preferred for large-scale EPC projects'],
        capacity: ['Light to Medium Duty: 60–220 MT', 'Heavy Duty: 250–360 MT', 'Ultra Heavy Duty: 400–800 MT']
    },
    {
        id: 'heavy-lifting',
        title: 'Heavy Lifting & Erection',
        shortTitle: 'Heavy Lifting',
        icon: Anchor,
        image: stadiumImg,
        overview: 'SB Cranes specializes in heavy lifting and precision erection services for large, high-value, and critical components. Our team handles every stage — from lift planning to final placement — with uncompromising safety and accuracy.',
        applications: ['Structural erection', 'Equipment installation', 'Vessel, reactor, and column lifts', 'Modular assembly', 'Complex tandem and multi-crane lifts'],
        capabilities: ['Detailed lift studies and method statements', 'Engineered rigging solutions', 'Skilled operators and supervisors', 'Real-time coordination with project teams'],
        capacity: []
    },
    {
        id: 'shutdown',
        title: 'Shutdown & Maintenance',
        shortTitle: 'Shutdowns',
        icon: HardHat,
        image: refineryImg,
        overview: 'We provide round-the-clock crane support for plant shutdowns and maintenance activities, where timelines are tight and safety is critical. Our teams are trained to work efficiently in live and high-risk industrial environments.',
        applications: ['Shutdown crane deployment', 'Equipment removal and replacement', 'Maintenance lifting support', 'Emergency mobilization', 'Permit-to-work compliance'],
        capabilities: ['24×7 availability', 'Fast crane mobilization', 'Strict safety and refinery protocols', 'Minimal downtime for plant operations'],
        capacity: ['Refineries', 'Power plants', 'Fertilizer and chemical plants', 'Heavy industrial facilities']
    },
    {
        id: 'infrastructure',
        title: 'Infrastructure Projects',
        shortTitle: 'Infrastructure',
        icon: Factory,
        image: towerImg,
        overview: 'SB Cranes delivers end-to-end lifting solutions for large infrastructure and industrial developments across India. We work closely with EPC contractors to ensure seamless crane deployment throughout the project lifecycle.',
        applications: ['Bridges and flyovers', 'Metro and rail projects', 'Stadiums and public infrastructure', 'Industrial plant construction', 'Large civil and structural works'],
        capabilities: ['Crane selection and planning', 'On-site execution support', 'Long-term project deployment', 'Integrated lifting and logistics coordination'],
        capacity: []
    },
    {
        id: 'transport',
        title: 'Heavy Cargo Transport',
        shortTitle: 'Transport',
        icon: Truck,
        image: heroBg,
        overview: 'Our heavy cargo and ODC transportation services ensure safe and controlled movement of oversized and overweight cargo. Supported by our in-house trailers and axle lines, we provide complete logistics solutions.',
        applications: ['ODC (Over-Dimensional Cargo) transport', 'Heavy machinery movement', 'Crane and equipment transportation', 'Plant relocation support', 'Long-distance and inter-state movement'],
        capabilities: ['Heavy-duty trailers and axle configurations', 'Experienced transport planning team', 'Route surveys and compliance support', 'Integrated lifting + transport execution'],
        capacity: ['Industrial equipment suppliers', 'EPC contractors', 'Power and refinery projects', 'Infrastructure developments']
    }
];

export default function Services() {
    const [activeTab, setActiveTab] = useState(services[0].id);

    // Find the active service data
    const activeService = services.find(s => s.id === activeTab) || services[0];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section - Compact */}
            <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-dark-slate flex-shrink-0">
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBg})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold uppercase font-header text-white mb-2">
                        Our <span className="text-safety-yellow">Services</span>
                    </h1>
                </div>
            </section>

            <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-row gap-4 lg:gap-12 h-full items-start">

                    {/* Unified Sticky Sidebar */}
                    {/* Mobile: Icon bar (w-14) | Desktop: Full menu (w-1/4) */}
                    {/* Unified Sticky Sidebar */}
                    {/* Mobile: Icon bar (w-14) | Desktop: Full menu (w-1/4) */}
                    <aside className="sticky top-28 z-30 flex-shrink-0 self-start">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 w-14 lg:w-72 transition-all duration-300">
                            <div className="bg-industrial-blue p-3 lg:p-4 flex justify-center lg:justify-between items-center">
                                <h3 className="text-white font-bold uppercase tracking-widest text-sm font-header hidden lg:block">Select Service</h3>
                                <div className="lg:hidden w-1.5 h-1.5 rounded-full bg-safety-yellow"></div>
                            </div>

                            <nav className="flex flex-col">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => setActiveTab(service.id)}
                                        className={`group flex items-center p-3 lg:p-4 transition-all duration-200 border-l-4 relative ${activeTab === service.id
                                            ? 'bg-blue-50 border-safety-yellow text-industrial-blue font-bold shadow-inner'
                                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-industrial-blue'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 w-full justify-center lg:justify-start">
                                            {/* Icon */}
                                            <service.icon className={`h-6 w-6 lg:h-5 lg:w-5 flex-shrink-0 ${activeTab === service.id ? 'text-safety-yellow' : 'text-gray-400'}`} />

                                            {/* Text Label - Hidden on Mobile */}
                                            <span className="uppercase tracking-tight text-sm hidden lg:block">{service.shortTitle}</span>
                                        </div>

                                        {/* Desktop Active Indicator */}
                                        {activeTab === service.id && (
                                            <ChevronRight className="h-4 w-4 text-safety-yellow hidden lg:block absolute right-3" />
                                        )}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 min-w-0 min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                            >
                                {/* Active Service Content */}
                                <div className="relative h-64 md:h-80">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${activeService.image})` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 md:left-10">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-safety-yellow p-2 rounded-lg">
                                                <activeService.icon className="h-6 w-6 text-black" />
                                            </div>
                                            <h2 className="text-xl md:text-4xl font-bold uppercase text-white font-header">
                                                {activeService.title}
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 md:p-10">
                                    <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed border-l-4 border-safety-yellow pl-6">
                                        {activeService.overview}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
                                        <div>
                                            <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-industrial-blue tracking-widest mb-6 border-b border-gray-200 pb-2">
                                                <span className="w-2 h-2 rounded-full bg-safety-yellow"></span>
                                                Applications
                                            </h4>
                                            <ul className="space-y-3">
                                                {activeService.applications.map((app, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                                        <span>{app}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center gap-2 text-sm font-bold uppercase text-industrial-blue tracking-widest mb-6 border-b border-gray-200 pb-2">
                                                <span className="w-2 h-2 rounded-full bg-safety-yellow"></span>
                                                Capabilities
                                            </h4>
                                            <ul className="space-y-3">
                                                {activeService.capabilities.map((cap, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                                        <span>{cap}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {activeService.capacity.length > 0 && (
                                        <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-100">
                                            <h4 className="text-sm font-bold uppercase text-gray-500 tracking-widest mb-4">Capacity Range</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {activeService.capacity.map((cap, i) => (
                                                    <span key={i} className="text-xs font-bold text-industrial-blue bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm uppercase tracking-wide">
                                                        {cap}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => document.getElementById('plan-lift-btn')?.click()}
                                        className="w-full md:w-auto bg-industrial-blue text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-black transition-all duration-300 rounded-sm flex items-center justify-center gap-2 group"
                                    >
                                        <span>Get a Quote for {activeService.shortTitle}</span>
                                        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>

            {/* Bottom CTA to Projects */}
            <div className="bg-industrial-blue py-12 border-t border-white/10 mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-white mb-6 text-lg">
                        See how we apply these capabilities in the real world.
                    </p>
                    <a href="/projects" className="inline-block bg-transparent border-2 border-safety-yellow text-safety-yellow px-8 py-3 font-bold uppercase tracking-widest hover:bg-safety-yellow hover:text-black transition-all duration-300">
                        View Our Projects
                    </a>
                </div>
            </div>
        </div>
    );
}
