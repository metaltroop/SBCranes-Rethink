import { motion } from 'framer-motion';
import { FileText, Download, ArrowRight, ChevronRight } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.png';

const brochures = [
    { title: "SB Cranes Corporate Brochure", size: "4.2 MB", type: "PDF" },
    { title: "Mobile Cranes Tele-Chart", size: "2.8 MB", type: "PDF" },
    { title: "Crawler Cranes Load Charts", size: "5.1 MB", type: "PDF" },
    { title: "Heavy Transport Specifications", size: "1.5 MB", type: "PDF" },
    { title: "Safety & HSE Manual", size: "3.2 MB", type: "PDF" },
    { title: "Project Portfolio 2025", size: "8.5 MB", type: "PDF" },
];

export default function Resources() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-dark-slate">
                <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBg})` }}></div>
                <div className="absolute inset-0 bg-linear-to-t from-dark-slate to-transparent"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold uppercase font-header text-white mb-6"
                    >
                        Brochures & <span className="text-safety-yellow">Resources</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 font-medium">
                        Technical specifications and company information at your fingertips.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 lg:py-24">

                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-industrial-blue text-xs font-bold uppercase tracking-widest mb-4">Downloads</h2>
                        <h3 className="text-3xl font-bold uppercase font-header text-dark-slate">
                            Technical <span className="text-industrial-blue">Library</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                        {brochures.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-gray-50 hover:bg-white p-6 rounded-xl border border-gray-200 hover:border-safety-yellow hover:shadow-lg transition-all duration-300 flex items-center gap-4 cursor-pointer"
                            >
                                <div className="bg-white group-hover:bg-safety-yellow p-4 rounded-lg shadow-sm border border-gray-100 transition-colors duration-300">
                                    <FileText className="h-6 w-6 text-industrial-blue" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-bold text-dark-slate group-hover:text-industrial-blue transition-colors text-lg mb-1">{item.title}</h4>
                                    <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                                        {item.type} • {item.size}
                                    </p>
                                </div>
                                <div className="bg-gray-200 group-hover:bg-industrial-blue p-2 rounded-full transition-colors duration-300">
                                    <Download className="h-4 w-4 text-gray-500 group-hover:text-white" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Custom Solution CTA */}
                    <div className="bg-industrial-blue rounded-3xl p-8 md:p-12 relative overflow-hidden text-center">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h3 className="text-2xl md:text-4xl font-bold uppercase font-header text-white mb-6">
                                Need More Details or a <span className="text-safety-yellow">Customized Solution?</span>
                            </h3>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                Our engineering team can provide specific load charts, lift plans, and technical advice tailored to your project requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button
                                    onClick={() => document.getElementById('plan-lift-btn')?.click()}
                                    className="bg-safety-yellow text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
                                >
                                    Contact Engineering <ChevronRight className="h-5 w-5" />
                                </button>
                                <a
                                    href="/contact"
                                    className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-industrial-blue transition-colors flex items-center justify-center gap-2"
                                >
                                    Get in Touch <ArrowRight className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
