

// Using text placeholders for logos as explicit image assets were not provided/generated.
// In a real scenario, these would be SVG imports.
const clients = ['TATA Projects', 'Reliance Industries', 'L&T Construction', 'NTPC', 'ONGC'];

export default function TrustBanner() {
    return (
        <section className="bg-gray-100 py-16 border-y border-gray-200">
            <div className="container mx-auto px-4">
                <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-gray-400">Trusted By Industry Leaders</p>
                <div className="flex flex-wrap  items-center justify-center gap-12 md:gap-24 opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
                    {clients.map((client) => (
                        <div key={client} className="text-xl md:text-2xl font-bold font-header uppercase tracking-tighter text-dark-slate">
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
