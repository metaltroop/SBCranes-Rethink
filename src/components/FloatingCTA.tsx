import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';

interface FloatingCTAProps {
    onOpenModal: () => void;
}

export default function FloatingCTA({ onOpenModal }: FloatingCTAProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex items-center justify-end">
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        layout
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, width: isHovered ? 'auto' : '4rem' }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={onOpenModal}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        className="group flex items-center justify-center bg-safety-yellow text-black border-2 border-transparent hover:border-black/10 shadow-2xl rounded-full overflow-hidden relative h-16"
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                        {/* Icon Container - Always visible/anchored left */}
                        <motion.div
                            layout
                            className="flex h-16 w-16 items-center justify-center shrink-0 z-20 bg-safety-yellow absolute right-0 top-0"
                        >
                            <CalendarCheck className="h-8 w-8 text-black group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>

                        {/* Text Content - Reveals on hover */}
                        <motion.div
                            className="flex items-center overflow-hidden h-16 pr-16 pl-6 bg-safety-yellow whitespace-nowrap"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="text-sm font-bold uppercase tracking-wider text-black font-header mr-2">
                                Looking for a dependable partner for your project?
                            </span>
                        </motion.div>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
