import { Clock, ShieldCheck, Link, IndianRupee, Settings, MapPin } from 'lucide-react';

export default function BenefitsGrid() {
    const benefits = [
        {
            icon: <Clock className="h-10 w-10" />,
            title: "On-Time Progress",
            description: "Efficient execution to keep your project on schedule."
        },
        {
            icon: <ShieldCheck className="h-10 w-10" />,
            title: "Reduced Risk",
            description: "Minimize risks with engineered safety plans."
        },
        {
            icon: <Link className="h-10 w-10" />,
            title: "Single Accountability",
            description: "One trusted partner from start to finish."
        },
        {
            icon: <IndianRupee className="h-10 w-10" />,
            title: "Cost Control",
            description: "Avoid delays and unexpected costs."
        },
        {
            icon: <Settings className="h-10 w-10" />,
            title: "Complex Lifts",
            description: "Expert teams for critical operations."
        },
        {
            icon: <MapPin className="h-10 w-10" />,
            title: "Pan-India Support",
            description: "Consistent service wherever you are."
        }
    ];

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl font-bold uppercase tracking-tight font-header md:text-3xl text-dark-slate">
                        Why Choose <span className="text-industrial-blue">SB Cranes?</span>
                    </h2>
                    <p className="mt-2 text-base text-gray-600">
                        Tangible value for your heavy lifting projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-start justify-between bg-gray-50 p-6 rounded-xl overflow-hidden transition-all duration-300 hover:bg-dark-slate cursor-default border border-gray-100 hover:border-dark-slate hover:-translate-y-1 hover:shadow-xl h-48"
                        >
                            {/* Icon */}
                            <div className="text-industrial-blue group-hover:text-safety-yellow transition-colors duration-300 mb-3">
                                {benefit.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold uppercase text-dark-slate group-hover:text-white font-header mb-1 transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600 group-hover:text-gray-300 font-medium leading-snug transition-colors duration-300">
                                    {benefit.description}
                                </p>
                            </div>

                            {/* Large Background Number */}
                            <div
                                className="absolute -bottom-4 -right-2 text-6xl font-bold opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none pointer-events-none"
                                style={{
                                    WebkitTextStroke: '1px currentColor',
                                    WebkitTextFillColor: 'transparent',
                                    color: 'gray' // Default stroke color, updated via class if needed
                                }}
                            >
                                <span className="group-hover:text-white text-gray-400 transition-colors duration-300">
                                    0{index + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
