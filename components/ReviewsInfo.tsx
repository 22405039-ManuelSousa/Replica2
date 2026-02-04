"use client";

import Image from "next/image";
import NumberTicker from "@/components/magicui/number-ticker";
import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const reviews = [
    {
        quote: "The scent of a memory. Unparalleled longevity.",
        signature: "Sarah J.",
        region: "New York",
        img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        quote: "Exquisite packaging. My new signature.",
        signature: "Mark T.",
        region: "London",
        img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        quote: "A masterpiece of olfactory storytelling.",
        signature: "Elena R.",
        region: "Paris",
        img: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        quote: "Captures the essence of a summer evening perfectly.",
        signature: "James L.",
        region: "Los Angeles",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        quote: "I've never received so many compliments.",
        signature: "Priya M.",
        region: "Mumbai",
        img: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        quote: "Pure elegance in a bottle. Worth every drop.",
        signature: "David K.",
        region: "Berlin",
        img: "https://randomuser.me/api/portraits/men/6.jpg",
    }
];

const ReviewCard = ({
    img,
    signature,
    region,
    quote,
}: {
    img: string
    signature: string
    region: string
    quote: string
}) => {
    return (
        <figure
            className={cn(
                "relative h-40 w-80 cursor-pointer overflow-hidden rounded-xl border p-5 mx-4",
                // Light/Dark styles adaptation (keeping consistent with dark theme of page)
                "border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <img className="rounded-full object-cover" width="40" height="40" alt={signature} src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-white">
                        {signature}
                    </figcaption>
                    <p className="text-xs font-medium text-white/40">{region}</p>
                </div>
            </div>
            <blockquote className="mt-3 text-sm font-serif italic text-white/80 leading-relaxed">"{quote}"</blockquote>
        </figure>
    )
}

export default function ReviewsInfo() {
    return (
        <section className="bg-black text-white pb-12 overflow-hidden pt-32">

            {/* 1. About Us Section - Centered & Big (Collection Style) */}
            <div className="container mx-auto px-4 mb-10 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-light mb-12 tracking-wide text-center text-white"
                >
                    About Us
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-12 items-center"
                >
                    {/* Text */}
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <p className="text-sm md:text-lg font-light text-white/70 leading-relaxed md:leading-loose">
                            Born from a desire to capture fleeting moments, our atelier crafts scents that transcend time. We blend heritage with avant-garde creativity to bottle the intangible.
                        </p>
                        <p className="text-sm md:text-lg font-light text-white/70 leading-relaxed md:leading-loose">
                            Every bottle is a testament to the art of perfumery, designed to evoke your most cherished memories.
                        </p>
                    </div>

                    <div className="relative aspect-[3/4] w-full mx-auto max-w-[260px]">
                        {/* Inner Image */}
                        <div className="absolute inset-2 overflow-hidden rounded-sm bg-white/5">
                            <Image
                                src="/factory_lab.jpg"
                                alt="Maison Margiela Factory Lab"
                                fill
                                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                            />
                        </div>
                        {/* Frame Overlay */}
                        <div className="absolute inset-0 pointer-events-none z-10">
                            <Image
                                src="/frame.webp"
                                alt=""
                                fill
                                className="object-fill scale-110"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 2. Trust Highlight (NumberTicker) */}
            <div className="container mx-auto px-4 text-center mb-20 space-y-4">
                <div className="inline-block border-y border-white/10 py-6 px-12 md:px-24">
                    <h3 className="text-2xl md:text-4xl font-light tracking-tight flex items-center justify-center gap-3">
                        <span className="font-serif italic flex items-baseline">
                            <NumberTicker value={750} className="text-white tracking-tighter" />
                            <span>+</span>
                        </span>
                        <span className="uppercase text-sm md:text-lg tracking-widest text-white/60">satisfied clients</span>
                    </h3>
                </div>
            </div>

            {/* 3. Reviews - Horizontal Marquee (Single Line) */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-16">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {reviews.map((review) => (
                        <ReviewCard key={review.signature} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
            </div>

            {/* 4. Values Block (Text Only to respect image constraint) */}
            <div className="container mx-auto px-4 mb-24">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center text-center md:text-left">
                    {/* Values Text */}
                    <div className="space-y-4">
                        <h3 className="text-lg md:text-2xl font-serif text-white/90">Our Values</h3>
                        <p className="text-xs md:text-base font-light text-white/60 leading-relaxed">
                            Sustainability isn't just a promise; it's our method. We source responsibly to ensure the future of every ingredient.
                        </p>
                    </div>
                    {/* Additional Values Text */}
                    <div className="space-y-4">
                        <h3 className="text-lg md:text-2xl font-serif text-white/90">Craftsmanship</h3>
                        <p className="text-xs md:text-base font-light text-white/60 leading-relaxed">
                            Each scent is meticulously composed in Grasse, preserving tradition while embracing modern olfactory innovation.
                        </p>
                    </div>
                </div>
            </div>

            {/* 5. Isolated Sustainability Quote */}
            <div className="container mx-auto px-4 text-center mb-12">
                <p className="text-lg md:text-2xl font-serif text-white/50 italic tracking-wide max-w-2xl mx-auto border-t border-b border-white/5 py-12">
                    "A fragrance trusted by those who value elegance, memory and presence."
                </p>
            </div>

            {/* 6. Practical Info Footer */}
            <div className="container mx-auto px-4 mb-16 border-t border-white/10 pt-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Shipping</h4>
                        <p className="text-xs md:text-sm text-white/80 font-light">Worldwide Delivery<br />Complimentary over $150</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Returns</h4>
                        <p className="text-xs md:text-sm text-white/80 font-light">30-Day Guarantee<br />Pre-paid labels included</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Contact</h4>
                        <p className="text-xs md:text-sm text-white/80 font-light">concierge@maison.com<br />+1 (800) 555-0199</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Social</h4>
                        <p className="text-xs md:text-sm text-white/80 font-light">Instagram<br />Pinterest</p>
                    </div>
                </div>
            </div>

            {/* 7. Legal Disclaimer */}
            <div className="container mx-auto px-4 text-center">
                <p className="text-[10px] text-white/20 uppercase tracking-widest mb-2">
                    © 2024 Replica Scents. All rights reserved. Privacy Policy. Terms of Service.
                </p>
                <p className="text-[10px] text-white/20 uppercase tracking-widest">
                    Replica is entirely independent and not connected to Maison Margiela in any way.
                </p>
            </div>

        </section>
    );
}


