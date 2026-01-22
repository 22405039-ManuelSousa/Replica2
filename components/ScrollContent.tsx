"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollContent() {
    const { scrollYProgress } = useScroll();

    // Beat A: 0-15% (The Hook)
    const opacityA = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
    const yA = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

    // Beat B: 20-50% (The Features - Sensory)
    const opacityB = useTransform(scrollYProgress, [0.15, 0.2, 0.45, 0.5], [0, 1, 1, 0]);
    const yB = useTransform(scrollYProgress, [0.15, 0.5], [50, -50]);

    // Beat C: 60-80% (Testimonials)
    const opacityC = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
    const yC = useTransform(scrollYProgress, [0.55, 0.8], [50, -50]);

    // Beat D: 85-100% (CTA)
    const opacityD = useTransform(scrollYProgress, [0.8, 0.85, 1], [0, 1, 1]);
    const yD = useTransform(scrollYProgress, [0.8, 1], [50, 0]);

    return (
        <div className="relative z-10 w-full h-full pointer-events-none font-light">
            {/* Beat A: The Hook */}
            <motion.div
                style={{ opacity: opacityA, y: yA }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
            >
                <h1 className="text-6xl md:text-8xl font-serif text-white/80 tracking-widest uppercase mb-4 drop-shadow-2xl mix-blend-overlay">
                    Replica
                </h1>
                <p className="text-xl md:text-2xl text-white/60 font-light tracking-[0.2em] drop-shadow-lg">
                    Breathe in the Pacific.
                </p>
            </motion.div>

            {/* Beat B: The Features (Sensory) */}
            <motion.div
                style={{ opacity: opacityB, y: yB }}
                className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 md:px-20"
            >
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4">
                    <div className="text-left">
                        <h3 className="text-2xl font-serif text-white/70 mb-2 drop-shadow-lg tracking-wide">Warm Sand</h3>
                        <p className="text-white/50 leading-relaxed drop-shadow-md tracking-wide">
                            Feel the golden grains between your toes as the sun dips below the horizon.
                        </p>
                    </div>
                    <div className="text-center md:pt-40">
                        <h3 className="text-2xl font-serif text-white/70 mb-2 drop-shadow-lg tracking-wide">Ancient Rhythms</h3>
                        <p className="text-white/50 leading-relaxed drop-shadow-md tracking-wide">
                            Let the sound of the ukulele and the ocean waves reset your internal clock.
                        </p>
                    </div>
                    <div className="text-right">
                        <h3 className="text-2xl font-serif text-white/70 mb-2 drop-shadow-lg tracking-wide">Lush Rainforests</h3>
                        <p className="text-white/50 leading-relaxed drop-shadow-md tracking-wide">
                            Get lost in the emerald embrace of the Hana Highway.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Beat C: Testimonials */}
            <motion.div
                style={{ opacity: opacityC, y: yC }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-4xl px-4"
            >
                <h2 className="text-4xl font-serif text-white/80 mb-12 drop-shadow-xl tracking-widest">Stories from Paradise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="backdrop-blur-sm bg-white/5 p-8 border border-white/10 rounded-sm shadow-2xl">
                        <p className="text-xl italic text-white/60 mb-4 tracking-wide">"I forgot who I was, and remembered who I wanted to be."</p>
                        <span className="text-white/40 uppercase tracking-[0.2em] text-sm">— Sarah J., New York</span>
                    </div>
                    <div className="backdrop-blur-sm bg-white/5 p-8 border border-white/10 rounded-sm shadow-2xl">
                        <p className="text-xl italic text-white/60 mb-4 tracking-wide">"The air just smells different here. Like life."</p>
                        <span className="text-white/40 uppercase tracking-[0.2em] text-sm">— Mark T., London</span>
                    </div>
                </div>
            </motion.div>

            {/* Beat D: CTA */}
            <motion.div
                style={{ opacity: opacityD, y: yD }}
                className="fixed bottom-20 left-1/2 -translate-x-1/2 text-center w-full px-4 pointer-events-auto"
            >
                <h2 className="text-5xl font-serif text-white/80 mb-4 drop-shadow-2xl tracking-widest">Aloha</h2>
                <p className="text-white/60 mb-10 drop-shadow-lg tracking-[0.15em]">Your escape is waiting.</p>
                <button className="px-12 py-4 bg-white/5 border border-white/20 text-white/80 uppercase tracking-[0.25em] hover:bg-white/10 hover:border-white/40 transition-all duration-500 cursor-pointer backdrop-blur-md shadow-lg hover:shadow-white/10">
                    Book Your Escape
                </button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ opacity: [0, 0.5, 0], y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs uppercase tracking-[0.3em] drop-shadow-md"
            >
                Scroll to Explore
            </motion.div>
        </div>
    );
}
