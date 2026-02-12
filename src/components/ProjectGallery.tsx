import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import refineryImg from '../assets/images/hmel.png';
import stadiumImg from '../assets/images/jlm.png';
import crawlerImg from '../assets/images/crawler_crane.png';

export default function ProjectGallery() {
    return (
        <section id="projects" className="bg-dark-slate py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-4xl font-bold uppercase tracking-tighter text-white font-header md:text-5xl">
                            Our <span className="text-safety-yellow">Projects</span>
                        </h2>
                        <div className="mt-2 h-1 w-24 bg-industrial-blue"></div>
                    </div>
                    <Link
                        to="/projects"
                        className="group flex items-center gap-2 border-b-2 border-safety-yellow pb-1 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-safety-yellow"
                    >
                        View All Projects
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 h-[800px] md:h-[600px]">
                    {/* Project 1 - Large Left */}
                    <div className="group relative overflow-hidden bg-gray-800 md:col-span-2 md:row-span-2">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${refineryImg})` }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-8">
                            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-safety-yellow">Oil & Gas</span>
                            <h3 className="text-3xl font-bold uppercase text-white font-header">HMEL Refinery </h3>
                            <p className="mt-2 text-sm text-gray-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                                SB Cranes provided long-term mobile crane support at HMEL Refinery for routine maintenance, shutdown activities, and equipment handling across multiple process units.
                            </p>
                        </div>
                    </div>

                    {/* Project 2 - Top Right */}
                    <div className="group relative overflow-hidden bg-gray-800 md:col-span-2">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${stadiumImg})` }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-safety-yellow">Infrastructure</span>
                            <h3 className="text-2xl font-bold uppercase text-white font-header">Stadium Roof Lift</h3>
                            <p className="mt-2 text-sm text-gray-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                                SB Cranes was engaged for heavy lifting and crane support during the redevelopment works at JLN Stadium, involving the handling and placement of large structural components.
                            </p>
                        </div>
                    </div>

                    {/* Project 3 - Bottom Middle */}
                    <div className="group relative overflow-hidden bg-gray-800">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${crawlerImg})` }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-safety-yellow">Wind Energy</span>
                            <h3 className="text-xl font-bold uppercase text-white font-header">Wind Farm Logistics</h3>
                        </div>
                    </div>

                    {/* Project 4 - Bottom Right */}
                    <div className="group relative overflow-hidden bg-industrial-blue flex items-center justify-center">
                        <div className="text-center p-6">
                            <h3 className="text-4xl font-bold text-white font-header mb-2">40+</h3>
                            <p className="text-sm font-medium uppercase tracking-widest text-white/70">Years of Experience</p>
                            <div className="mt-6">
                                <Link to="/projects" className="inline-flex items-center justify-center rounded-none bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black">
                                    Explore Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
