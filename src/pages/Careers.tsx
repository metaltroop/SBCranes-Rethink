import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Send } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.png';

export default function Careers() {
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
                        className="text-5xl md:text-7xl font-bold uppercase font-header text-white mb-6"
                    >
                        Work With <span className="text-safety-yellow">Us</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 font-medium">
                        Build your future with a leader in heavy lifting.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Column: Why Work With Us */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-12">
                            <h2 className="text-industrial-blue text-xs font-bold uppercase tracking-widest mb-4">Careers</h2>
                            <h3 className="text-3xl md:text-4xl font-bold uppercase font-header text-dark-slate mb-8">
                                Why Work with <span className="text-industrial-blue">SB Cranes?</span>
                            </h3>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    At SB Cranes, we believe safe and successful lifting starts with the right people. We offer a stable work environment, modern equipment, and the opportunity to work on large-scale infrastructure and industrial projects across India.
                                </p>
                                <p>
                                    Our team is built on respect, safety, and professionalism—where skills are valued, safety is non-negotiable, and hard work is recognized.
                                </p>
                                <p>
                                    If you take pride in quality execution and want to grow with a trusted name in heavy lifting, SB Cranes is the place to build your career.
                                </p>
                            </div>
                        </div>

                        {/* Benefits List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                'Competitive Salary',
                                'Professional Growth',
                                'Modern Equipment',
                                'Safety First Culture',
                                'National Projects',
                                'Skill Development'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                    <CheckCircle2 className="h-5 w-5 text-industrial-blue shrink-0" />
                                    <span className="text-dark-slate font-bold uppercase text-sm tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Job Enquiry Form */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10 sticky top-28">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-safety-yellow p-3 rounded-full">
                                    <Briefcase className="h-6 w-6 text-black" />
                                </div>
                                <h3 className="text-2xl font-bold uppercase font-header text-dark-slate">Job Enquiry</h3>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">First Name</label>
                                        <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-safety-yellow transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Last Name</label>
                                        <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-safety-yellow transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                                    <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-safety-yellow transition-colors" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-safety-yellow transition-colors" placeholder="+91 98765 43210" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Position of Interest</label>
                                    <select className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-safety-yellow transition-colors">
                                        <option>Crane Operator</option>
                                        <option>Rigger / Signalman</option>
                                        <option>Maintenance Engineer</option>
                                        <option>Safety Officer</option>
                                        <option>Site Manager</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Experience (Years)</label>
                                    <input type="number" className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-safety-yellow transition-colors" placeholder="5" />
                                </div>

                                <button type="button" className="w-full bg-industrial-blue text-white font-bold uppercase tracking-widest py-4 hover:bg-black transition-colors flex items-center justify-center gap-2 mt-4">
                                    Submit Application <Send className="h-4 w-4" />
                                </button>
                                <p className="text-xs text-gray-400 text-center mt-4">For immediate enquiries, email us at hr@sbcranes.in</p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
