"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TypingAnimation from "@/components/magicui/typing-animation";
import ShimmerButton from "@/components/magicui/shimmer-button";
import TypewriterEffect from "@/components/TypewriterEffect";
import { AuroraText } from "@/components/magicui/aurora-text";


import { cn } from "@/lib/utils";

const reviews = [
    {
        quote: "The scent of a memory I didn't know I had.",
        author: "Isabella V.",
        region: "Milan, Italy"
    },
    {
        quote: "Pure elegance captured in a single breath.",
        author: "Julian R.",
        region: "Paris, France"
    },
    {
        quote: "A masterpiece that lingers like a dream.",
        author: "Sophia L.",
        region: "Kyoto, Japan"
    }
];

export default function ScrollContent() {
    const router = useRouter();
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

    // Dynamic pointer events logic
    // We map a large range to "auto" (clickable) or "none" (not clickable)
    // The "View Collection" button is in Beat B (The Features)

    const pointerEventsA = useTransform(scrollYProgress, (v) => v < 0.2 ? "auto" : "none");
    const pointerEventsB = useTransform(scrollYProgress, (v) => (v > 0.1 && v < 0.5) ? "auto" : "none");
    const pointerEventsC = useTransform(scrollYProgress, (v) => (v > 0.4 && v < 0.8) ? "auto" : "none");
    const pointerEventsD = useTransform(scrollYProgress, (v) => v > 0.7 ? "auto" : "none");

    return (
        <div className="relative z-10 w-full h-full pointer-events-none font-light">
            {/* Beat A: The Hook */}
            <motion.div
                style={{ opacity: opacityA, y: yA, pointerEvents: pointerEventsA }}
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
                style={{ opacity: opacityB, y: yB, pointerEvents: pointerEventsB }}
                className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 md:px-20"
            >
                {/* Centered Content Block */}
                <div className="relative inline-block max-w-2xl pointer-events-auto">
                    {/* Soft dark gradient behind text - Matches Beat A */}
                    <div className="absolute inset-0 -inset-x-8 sm:-inset-x-12 md:-inset-x-16 -inset-y-6 sm:-inset-y-8 md:-inset-y-10 bg-gradient-to-b from-black/40 via-black/50 to-black/40 blur-2xl sm:blur-3xl" />

                    <div className="relative z-10 space-y-8 text-center">
                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-20%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-[family-name:var(--font-allura)] text-6xl sm:text-7xl md:text-8xl text-white font-normal drop-shadow-[0_5px_5px_rgba(0,0,0,1)] [text-shadow:_0_4px_20px_rgb(0_0_0_/_100%)]"
                        >
                            Find Your Signature.
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
                            <Link href="/collection" className="block">
                                <ShimmerButton
                                    className="shadow-2xl bg-black"
                                >
                                    <span className="text-center text-sm font-medium tracking-widest text-white uppercase">
                                        View Collection
                                    </span>
                                </ShimmerButton>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>



            {/* Beat C: Testimonials */}
            <motion.div
                style={{ opacity: opacityC, y: yC, pointerEvents: pointerEventsC }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[90rem] px-4 md:px-8"
            >
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-white text-center mb-4 sm:mb-12 tracking-wider [text-shadow:0_4px_30px_rgba(0,0,0,0.9),0_10px_40px_rgba(0,0,0,0.8)] z-20 relative"
                >
                    Stories from Paradise
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8 items-center justify-center">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-20%" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                            className={cn(
                                "flex flex-col items-center justify-center px-4 py-4 md:px-6 md:py-6 sm:px-8 sm:py-8",
                                "bg-black/80 backdrop-blur-md",
                                "border border-white/10 rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.5)]",
                                "transition-transform duration-500 hover:scale-[1.02]"
                            )}
                        >
                            <p className="text-lg sm:text-xl font-[family-name:var(--font-cormorant)] text-white/95 italic mb-4 leading-relaxed tracking-wide">
                                "{review.quote}"
                            </p>
                            <div className="flex flex-col items-center space-y-1">
                                <span className="font-[family-name:var(--font-allura)] text-2xl sm:text-3xl text-white/90 relative z-10 block mt-1 bg-transparent outline-none border-none ring-0 shadow-none [text-shadow:0_2px_6px_rgba(0,0,0,0.4)]">
                                    {review.author}
                                </span>
                                <span className="text-[10px] sm:text-xs font-sans text-white/50 uppercase tracking-[0.25em]">
                                    {review.region}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    className="mt-6 md:mt-12 flex justify-center"
                >
                    <Link href="/reviews">
                        <ShimmerButton className="shadow-2xl bg-black">
                            <span className="text-center text-sm font-medium tracking-widest text-white uppercase">
                                see more reviews
                            </span>
                        </ShimmerButton>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Beat D: CTA */}
            <motion.div
                style={{ opacity: opacityD, y: yD, pointerEvents: pointerEventsD }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
            >
                <div className="relative inline-block max-w-full">
                    {/* Soft dark gradient behind text - Matches Beat A */}
                    <div className="absolute inset-0 -inset-x-8 sm:-inset-x-12 md:-inset-x-16 -inset-y-6 sm:-inset-y-8 md:-inset-y-10 bg-gradient-to-b from-black/40 via-black/50 to-black/40 blur-2xl sm:blur-3xl" />

                    <div className="relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-20%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,12vw,9rem)] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase mb-4 sm:mb-5 md:mb-6 [text-shadow:_0_4px_12px_rgb(0_0_0_/_60%)] break-words"
                        >
                            REPLICA
                        </motion.h2>

                        <div className="mb-10 flex justify-center">
                            <TypingAnimation
                                text="Small batch. Limited availability"
                                className="text-[clamp(0.75rem,3vw,1.25rem)] sm:text-base md:text-lg lg:text-xl text-white/95 font-extralight tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase drop-shadow-[0_5px_5px_rgba(0,0,0,1)] px-2 sm:px-4"
                                duration={40}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-20%" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="flex justify-center"
                        >
                            <ShimmerButton className="shadow-2xl bg-black">
                                <span className="text-center text-sm font-medium tracking-widest text-white uppercase">
                                    Reveal my scent
                                </span>
                            </ShimmerButton>
                        </motion.div>
                    </div>
                </div>
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
