
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import refineryImg from '../assets/images/refinery_project.png';
import stadiumImg from '../assets/images/stadium_project.png';
import crawlerImg from '../assets/images/crawler_crane.png';

const projects = [
    {
        id: 1,
        title: 'HMEL Refinery',
        category: 'Maintenance Support',
        image: refineryImg,
        size: 'col-span-1 md:col-span-2 row-span-2', // Large
    },
    {
        id: 2,
        title: 'JLN Stadium',
        category: 'Heavy Lift / Structural',
        image: stadiumImg,
        size: 'col-span-1 md:col-span-1 row-span-1', // Small
    },
    {
        id: 3,
        title: 'Wagah Border',
        category: 'National Flag Installation',
        image: crawlerImg, // Placeholder
        size: 'col-span-1 md:col-span-1 row-span-1', // Small
    },
];

export default function ProjectGallery() {
    return (
        <section id="projects" className="bg-white py-24 text-dark-slate">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 flex items-end justify-between">
                    <div>
                        <h2 className="text-4xl font-bold uppercase tracking-tighter text-industrial-blue md:text-6xl font-header">Featured Projects</h2>
                        <div className="mt-4 h-1 w-24 bg-safety-yellow" />
                    </div>
                    <a href="#" className="hidden text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-industrial-blue md:block transition-colors">View All Projects -&gt;</a>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 auto-rows-[300px]">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden bg-gray-100 ${project.size}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-safety-yellow opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold uppercase leading-tight text-white md:text-4xl font-header">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="absolute right-6 top-6 translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                <div className="flex h-12 w-12 items-center justify-center bg-safety-yellow text-black">
                                    <ArrowUpRight className="h-6 w-6" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="text-sm font-bold uppercase tracking-widest text-gray-500 underline decoration-safety-yellow decoration-2 underline-offset-4">View All Projects</a>
                </div>
            </div>
        </section>
    );
}
