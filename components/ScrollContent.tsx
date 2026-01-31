"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import TypingAnimation from "@/components/magicui/typing-animation";
import ShimmerButton from "@/components/magicui/shimmer-button";
import TypewriterEffect from "@/components/TypewriterEffect";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function ScrollContent() {
    const { scrollYProgress } = useScroll();

    // Beat A: 0-10% (The Hook) - Faster start
    const opacityA = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const yA = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Beat B: 15-40% (The Features) - Compressed range
    const opacityB = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 1, 0]);
    const yB = useTransform(scrollYProgress, [0.1, 0.5], [50, -50]);

    // Beat C: 45-70% (Testimonials) - Earlier appearance
    const opacityC = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0]);
    const yC = useTransform(scrollYProgress, [0.4, 0.8], [50, -50]);

    // Beat D: 75-100% (CTA) - Final close
    const opacityD = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, 1, 1]);
    const yD = useTransform(scrollYProgress, [0.7, 1], [50, 0]);

    return (
        <div className="relative z-10 w-full h-full pointer-events-none font-light">
            {/* Beat A: The Hook */}
            <motion.div
                style={{ opacity: opacityA, y: yA }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 sm:px-6 md:px-8"
            >
                {/* Subtle background overlay for contrast */}
                <div className="relative inline-block max-w-full">
                    {/* Soft dark gradient behind text */}
                    <div className="absolute inset-0 -inset-x-8 sm:-inset-x-12 md:-inset-x-16 -inset-y-6 sm:-inset-y-8 md:-inset-y-10 bg-gradient-to-b from-black/40 via-black/50 to-black/40 blur-2xl sm:blur-3xl" />

                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 max-w-full"
                    >
                        <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,12vw,9rem)] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase mb-4 sm:mb-5 md:mb-6 [text-shadow:_0_4px_12px_rgb(0_0_0_/_60%)] break-words">
                            REPLICA
                        </h1>
                        <TypingAnimation
                            text="Reproduction of familiar moments."
                            className="text-[clamp(0.75rem,3vw,1.25rem)] sm:text-base md:text-lg lg:text-xl text-white/95 font-extralight tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase drop-shadow-[0_5px_5px_rgba(0,0,0,1)] px-2 sm:px-4"
                            duration={40}
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Beat B: The Features (Sensory) */}
            <motion.div
                style={{ opacity: opacityB, y: yB }}
                className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 md:px-20 pointer-events-none"
            >
                {/* Centered Content Block */}
                <div className="text-center max-w-2xl space-y-8 pointer-events-auto">
                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-wide text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]"
                    >
                        Find Your <AuroraText className="font-medium">Signature</AuroraText>.
                    </motion.h2>

                    {/* Subtitle */}
                    <TypingAnimation
                        text="Explore our full library of olfactory memories."
                        className="text-base sm:text-lg md:text-xl text-white font-bold tracking-wide drop-shadow-[0_5px_5px_rgba(0,0,0,1)]"
                        duration={30}
                        delay={200}
                    />

                    {/* Shimmer Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="pt-6 flex justify-center"
                    >
                        <Link href="/collection">
                            <ShimmerButton className="shadow-2xl bg-black">
                                <span className="text-center text-sm font-medium tracking-widest text-white uppercase">
                                    View Collection
                                </span>
                            </ShimmerButton>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Beat C: Testimonials */}
            <motion.div
                style={{ opacity: opacityC, y: yC }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-4xl px-4"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-serif text-white/80 mb-12 drop-shadow-xl tracking-widest"
                >
                    Stories from Paradise
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="backdrop-blur-sm bg-white/5 p-8 border border-white/10 rounded-sm shadow-2xl"
                    >
                        <p className="text-xl italic text-white/60 mb-4 tracking-wide">"I forgot who I was, and remembered who I wanted to be."</p>
                        <span className="text-white/40 uppercase tracking-[0.2em] text-sm">— Sarah J., New York</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="backdrop-blur-sm bg-white/5 p-8 border border-white/10 rounded-sm shadow-2xl"
                    >
                        <p className="text-xl italic text-white/60 mb-4 tracking-wide">"The air just smells different here. Like life."</p>
                        <span className="text-white/40 uppercase tracking-[0.2em] text-sm">— Mark T., London</span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Beat D: CTA */}
            <motion.div
                style={{ opacity: opacityD, y: yD }}
                className="fixed bottom-20 left-1/2 -translate-x-1/2 text-center w-full px-4 pointer-events-auto"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl font-serif text-white/80 mb-4 drop-shadow-2xl tracking-widest"
                >
                    Aloha
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-white/60 mb-10 drop-shadow-lg tracking-[0.15em]"
                >
                    Your escape is waiting.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="px-12 py-4 bg-white/5 border border-white/20 text-white/80 uppercase tracking-[0.25em] hover:bg-white/10 hover:border-white/40 transition-all duration-500 cursor-pointer backdrop-blur-md shadow-lg hover:shadow-white/10"
                >
                    Book Your Escape
                </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ opacity: [0, 0.5, 0], y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs uppercase tracking-[0.3em] drop-shadow-md pointer-events-none"
            >
                Scroll to Explore
            </motion.div>
        </div>
    );
}
