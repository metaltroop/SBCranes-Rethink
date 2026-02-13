import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, ArrowRight, Building2 } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.png';
import crawlerImg from '../assets/images/crawler_crane.png';

// Import Client Logos
import hmel from '../assets/keyLeaders/HMEL.jpg';
import ntpc from '../assets/keyLeaders/NTPC.png';
import ongc from '../assets/keyLeaders/ONGC.png';
import reliance from '../assets/keyLeaders/reliance.png';
import lnt from '../assets/keyLeaders/l&t.png';
import tata from '../assets/keyLeaders/tataprojects.png';
import adani from '../assets/keyLeaders/adani.png';
import ultratech from '../assets/keyLeaders/ultratech.png';
import gail from '../assets/keyLeaders/GAIL.png';

import powergrid from '../assets/keyLeaders/powergrid.png';

// this is the update 

const projects = [
    {
        id: 1,
        title: "HMEL Refinery (HPCL-Mittal Energy Limited)",
        category: "Refinery & Maintenance",
        location: "Bathinda, Punjab",
        year: "2019-2022",
        description: "SB Cranes provided long-term mobile crane support at HMEL Refinery for routine maintenance, shutdown activities, and equipment handling across multiple process units. The engagement spanned nearly three years, supporting critical refinery operations requiring precision lifting and strict safety compliance.",
        details: [
            "Frequent mobilization of cranes for handling mechanical components and piping systems.",
            "Executed under stringent safety and permit-to-work procedures.",
            "Zero safety incidents utilizing well-maintained cranes and trained operators."
        ],
        image: heroBg,
        partnerLogo: hmel
    },
    {
        id: 2,
        title: "JLN Stadium Redevelopment",
        category: "Infrastructure & Sports",
        location: "New Delhi",
        year: "2010",
        description: "Played a key role in the redevelopment and structural upgradation of Jawaharlal Nehru (JLN) Stadium for the Commonwealth Games. The project involved heavy structural lifting, precision placement, and coordinated execution within a live construction environment.",
        details: [
            "Heavy lifting support for large structural components.",
            "Addressed challenges of restricted site access and tight working spaces.",
            "Deployed high-capacity crawler cranes for smooth installation."
        ],
        image: crawlerImg,
        partnerLogo: null // P&R Logo not available, will use generic layout
    },
    {
        id: 3,
        title: "Installation of National Flag at Wagah Border",
        category: "Iconic / Government",
        location: "Wagah Border, Punjab",
        year: "2017",
        description: "Entrusted with the prestigious responsibility of supporting the installation of the National Flag structure at the Wagah Border. The project involved precision lifting and careful handling of structural components at a site of high national importance.",
        details: [
            "Seamless coordination with authorities and strict adherence to protocols.",
            "Controlled and composed lifting maintaining the dignity of the location.",
            "Successfully achieved accurate placement of the structure."
        ],
        image: heroBg
    },
    {
        id: 4,
        title: "Tower Crane Erection for High-Rise",
        category: "Urban Construction",
        location: "Gurgaon, Haryana",
        year: "2023",
        description: "Engaged for the erection of a tower crane for a major high-rise construction project in a congested urban site. The project involved the installation of a T-type tower crane, requiring precise planning and coordination with the construction team.",
        details: [
            "Successful erection in a restricted urban environment.",
            "Used luffing crane configuration for safe and precise lifting.",
            "No disruption to surrounding construction activities."
        ],
        image: crawlerImg
    }
];

const clientLogos = [ntpc, ongc, reliance, lnt, tata, adani, ultratech, gail, powergrid];

export default function Projects() {
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
                        Our <span className="text-safety-yellow">Projects</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 font-medium">
                        Delivering excellence in complex lifting operations across India.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Main Content: Featured Projects */}
                    <div className="w-full lg:w-3/4">
                        <div className="mb-12">
                            <h2 className="text-industrial-blue text-xs font-bold uppercase tracking-widest mb-4">Portfolio</h2>
                            <h3 className="text-3xl md:text-4xl font-bold uppercase font-header text-dark-slate">
                                Major <span className="text-safety-yellow">Milestones</span>
                            </h3>
                        </div>

                        <div className="space-y-20">
                            {projects.map((project) => (
                                <div key={project.id} className="group border-b border-gray-100 pb-20 last:border-0 last:pb-0">
                                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                                        <div className="w-full md:w-1/3 relative overflow-hidden rounded-xl shadow-lg">
                                            <div className="absolute inset-0 bg-industrial-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                            <img src={project.image} alt={project.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                            {project.partnerLogo && (
                                                <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow-md z-20">
                                                    <img src={project.partnerLogo} alt="Partner Logo" className="h-8 object-contain" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <div className="flex flex-wrap gap-4 mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                                                <span className="flex items-center gap-1"><Briefcase className="h-3 w-3 text-safety-yellow" /> {project.category}</span>
                                                <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-safety-yellow" /> {project.location}</span>
                                                <span className="flex items-center gap-1"><Calendar className="h-3 w-3 text-safety-yellow" /> {project.year}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold uppercase font-header text-industrial-blue mb-4 group-hover:text-safety-yellow transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="w-16 h-1 bg-gray-200 mb-6 group-hover:bg-safety-yellow transition-colors duration-500"></div>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {project.description}
                                            </p>

                                            <ul className="space-y-2 mb-6">
                                                {project.details.map((detail, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm text-dark-slate font-medium">
                                                        <ArrowRight className="h-4 w-4 text-safety-yellow shrink-0 mt-0.5" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar: Client Logos */}
                    <aside className="w-full lg:w-1/4 sticky top-28">
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm">
                            <h4 className="text-lg font-bold uppercase font-header text-dark-slate mb-6 border-b border-gray-200 pb-4">
                                Trusted By
                            </h4>
                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                                {clientLogos.map((logo, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow grayscale hover:grayscale-0 duration-300">
                                        <img src={logo} alt={`Client ${idx}`} className="max-h-12 w-auto object-contain" />
                                    </div>
                                ))}
                                <div className="bg-industrial-blue p-4 rounded-lg shadow-sm flex items-center justify-center text-white text-center">
                                    <span className="text-xs font-bold uppercase tracking-widest">And Many More...</span>
                                </div>
                            </div>

                            <div className="mt-10 bg-safety-yellow p-6 rounded-xl text-center relative overflow-hidden">
                                <Building2 className="h-12 w-12 text-black/10 absolute -bottom-2 -right-2" />
                                <h5 className="font-bold uppercase text-black mb-2 text-sm">Have a Project?</h5>
                                <p className="text-xs text-black/80 mb-4">Let's discuss how we can support your next heavy lift.</p>
                                <button className="w-full bg-black text-white text-xs font-bold uppercase tracking-widest py-3 hover:bg-white hover:text-black transition-colors" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}
