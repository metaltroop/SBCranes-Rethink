
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.png';
import crawlerImg from '../assets/images/crawler_crane.png';

const tabs = [
    {
        id: 'mobile',
        label: 'Mobile Cranes',
        image: heroBg,
        specs: { capacity: '60 - 800 MT', brands: 'Liebherr, Demag, Sany', usage: 'Urban, Industrial, Refinery' }
    },
    {
        id: 'crawler',
        label: 'Crawler Cranes',
        image: crawlerImg,
        specs: { capacity: '75 - 1200 MT', brands: 'Sany, Zoomlion, Kobelco', usage: 'Wind Power, Infrastructure' }
    },
    {
        id: 'trailer',
        label: 'Hydraulic Trailers',
        image: heroBg, // Placeholder
        specs: { capacity: 'Multi-Axle', brands: 'Goldhofer, Scheuerle', usage: 'Heavy Transport, ODC' }
    },
];

export default function EquipmentSelector() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="fleet" className="bg-steel-grey py-24 text-dark-slate relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold uppercase tracking-tighter text-industrial-blue md:text-6xl font-header">Our Fleet</h2>
                    <div className="mt-4 h-1 w-24 bg-safety-yellow" />
                </div>

                <div className="flex flex-col lg:flex-row gap-0 lg:h-[600px] border border-gray-300 shadow-2xl">
                    {/* Tabs Navigation */}
                    <div className="flex w-full flex-col bg-white lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-200">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(index)}
                                className={`group flex h-full flex-col justify-center border-b border-gray-200 px-10 py-8 text-left transition-all hover:bg-gray-50 bg-white
                ${activeTab === index ? '!bg-industrial-blue text-white' : ''}`}
                            >
                                <div className="flex items-center justify-between w-full">
                                    <span className={`text-sm font-bold uppercase tracking-widest mb-2 ${activeTab === index ? 'text-safety-yellow' : 'text-gray-400'}`}>0{index + 1}</span>
                                    {activeTab === index && <motion.div layoutId="activeTabIndicator" className="h-2 w-2 bg-safety-yellow rounded-full" />}
                                </div>
                                <span className="text-2xl font-bold uppercase font-header tracking-tighter">{tab.label}</span>
                            </button>
                        ))}
                        <div className="flex-1 bg-white hidden lg:block" />
                    </div>

                    {/* Content Area */}
                    <div className="relative w-full overflow-hidden bg-gray-100 lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, ease: "linear" }}
                                className="flex h-full flex-col md:flex-row"
                            >
                                {/* Image Side */}
                                <div className="relative h-64 w-full md:h-full md:w-3/5 overflow-hidden">
                                    <motion.div
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 4 }}
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${tabs[activeTab].image})` }}
                                    />
                                    <div className="absolute inset-0 bg-industrial-blue/20 mix-blend-multiply" />
                                    {/* Diagonal Hazard Stripe Overlay */}
                                    <div className="absolute top-0 right-0 h-24 w-24 bg-safety-yellow opacity-90 clipping-triangle" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                                </div>

                                {/* Specs Side */}
                                <div className="flex w-full flex-col justify-center bg-white p-12 md:w-2/5">
                                    <h3 className="mb-8 text-3xl font-bold uppercase text-industrial-blue font-header">{tabs[activeTab].label}</h3>

                                    <div className="space-y-8">
                                        <div className="border-l-2 border-safety-yellow pl-4">
                                            <span className="block text-xs uppercase tracking-widest text-gray-400">Capacity</span>
                                            <span className="text-2xl font-bold text-dark-slate font-header">{tabs[activeTab].specs.capacity}</span>
                                        </div>
                                        <div className="border-l-2 border-gray-200 pl-4">
                                            <span className="block text-xs uppercase tracking-widest text-gray-400">Brands</span>
                                            <span className="text-lg font-medium text-dark-slate">{tabs[activeTab].specs.brands}</span>
                                        </div>
                                        <div className="border-l-2 border-gray-200 pl-4">
                                            <span className="block text-xs uppercase tracking-widest text-gray-400">Ideal Usage</span>
                                            <span className="text-lg font-medium text-dark-slate">{tabs[activeTab].specs.usage}</span>
                                        </div>
                                    </div>

                                    <button className="group mt-12 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-industrial-blue hover:text-safety-yellow transition-colors bg-gray-100 p-4 border border-gray-200 hover:bg-black hover:border-black">
                                        View Spec Sheet <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
