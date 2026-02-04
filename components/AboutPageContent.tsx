"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Leaf, Hourglass, Star, ArrowRight, FlaskConical } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";
import NumberTicker from "@/components/magicui/number-ticker";
import BestSellersAbout from "@/components/BestSellersAbout";

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const reviews = [
    {
        quote: "The scent of a memory. Unparalleled longevity.",
        author: "Sarah J.",
        city: "New York",
        img: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        quote: "Exquisite packaging. My new signature.",
        author: "Mark T.",
        city: "London",
        img: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        quote: "A masterpiece of olfactory storytelling.",
        author: "Elena R.",
        city: "Paris",
        img: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        quote: "Captures the essence of a summer evening perfectly.",
        author: "James L.",
        city: "Los Angeles",
        img: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        quote: "I've never received so many compliments.",
        author: "Priya M.",
        city: "Mumbai",
        img: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        quote: "Pure elegance in a bottle. Worth every drop.",
        author: "David K.",
        city: "Berlin",
        img: "https://randomuser.me/api/portraits/men/6.jpg"
    }
];

const ReviewCard = ({
    img,
    author,
    city,
    quote,
}: {
    img: string;
    author: string;
    city: string;
    quote: string;
}) => {
    return (
        <div className="relative w-[350px] cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-[#D4AF37]/30 border-[0.5px] transition-all duration-300 mx-4 backdrop-blur-md">
            <div className="flex flex-row items-center gap-4 mb-4">
                <img className="rounded-full object-cover border border-white/10" width="48" height="48" alt={author} src={img} />
                <div className="flex flex-col">
                    <div className="flex gap-1 mb-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-3 h-3 text-[#F1E5AC] fill-[#F1E5AC]" />
                        ))}
                    </div>
                    <figcaption className="text-sm font-medium text-white">
                        {author}
                    </figcaption>
                    <p className="text-xs font-medium text-[#E0E0E0]/40 uppercase tracking-widest">{city}</p>
                </div>
            </div>
            <blockquote className="text-lg font-serif italic text-white/90 leading-relaxed">"{quote}"</blockquote>
        </div>
    );
};

export default function AboutPageContent() {
    const topProducts = PRODUCTS.slice(0, 3);

    return (
        <div className="bg-[#000000] text-[#E0E0E0] min-h-screen font-sans">
            {/* 1. Hero Section - Asymmetric Layout */}
            <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center pt-32 md:pt-0 overflow-hidden">
                {/* Left Column - Text */}
                <div className="w-full md:w-1/2 px-6 md:px-20 z-10 flex flex-col justify-center h-full order-2 md:order-1 py-12 md:py-0">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.h1
                            variants={fadeIn}
                            className="text-5xl md:text-7xl font-serif text-white leading-tight"
                        >
                            The Art of <br />
                            <span className="italic text-[#F1E5AC]">Olfactory</span> Storytelling
                        </motion.h1>

                        <motion.div variants={fadeIn} className="space-y-6 max-w-md">
                            <p className="font-light text-lg leading-relaxed text-[#E0E0E0]/80 tracking-wide">
                                Born from a desire to capture fleeting moments, our atelier crafts scents that transcend time. We blend heritage with avant-garde creativity to bottle the intangible.
                            </p>
                            <p className="font-light text-lg leading-relaxed text-[#E0E0E0]/80 tracking-wide">
                                Every bottle is a testament to the art of perfumery, designed to evoke your most cherished memories.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Column - Lifestyle Image */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 md:order-2">
                    {/* Image Container with Reveal Effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80 md:to-transparent md:bg-gradient-to-r md:from-black/80 md:via-transparent z-10" />
                        <Image
                            src="/factory_lab.jpg"
                            alt="Artisan at work in Grasse"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </motion.div>
                </div>
            </section>

            {/* 2. The Experience Section */}
            <section className="py-24 px-4 md:px-8 lg:px-20 container mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="space-y-16"
                >
                    <motion.div variants={fadeIn} className="text-center">
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            The <span className="italic text-[#D4AF37]">Experience</span>
                        </h2>
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto opacity-50" />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto"
                    >
                        {/* Card 1: High Longevity */}
                        <motion.div
                            variants={fadeIn}
                            className="group relative flex flex-row lg:flex-col lg:items-start items-center bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#D4AF37]/15 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all duration-300 hover:translate-x-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden"
                        >
                            {/* Number background - subtle */}
                            <span className="absolute top-4 right-6 font-serif text-[64px] text-white opacity-[0.03] select-none pointer-events-none">01</span>

                            <div className="flex-shrink-0 mr-6 lg:mr-0 lg:mb-6">
                                <Hourglass className="w-10 h-10 text-[#D4AF37] stroke-[1.5px]" />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="font-serif text-[18px] font-semibold text-white tracking-wide mb-2">High Longevity</h3>
                                <div className="h-[1px] w-[60px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-3 opacity-80" />
                                <p className="font-sans text-[14px] text-white/70 font-normal leading-relaxed max-w-[280px]">
                                    Formulated with high concentrations for a lasting, memorable presence.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 2: Hand-Crafted */}
                        <motion.div
                            variants={fadeIn}
                            className="group relative flex flex-row lg:flex-col lg:items-start items-center bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#D4AF37]/15 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all duration-300 hover:translate-x-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden"
                        >
                            <span className="absolute top-4 right-6 font-serif text-[64px] text-white opacity-[0.03] select-none pointer-events-none">02</span>

                            <div className="flex-shrink-0 mr-6 lg:mr-0 lg:mb-6">
                                <FlaskConical className="w-10 h-10 text-[#D4AF37] stroke-[1.5px]" />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="font-serif text-[18px] font-semibold text-white tracking-wide mb-2">Hand-Crafted</h3>
                                <div className="h-[1px] w-[60px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-3 opacity-80" />
                                <p className="font-sans text-[14px] text-white/70 font-normal leading-relaxed max-w-[280px]">
                                    Composed by master perfumers in the heart of French perfumery.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 3: Eco-Friendly */}
                        <motion.div
                            variants={fadeIn}
                            className="group relative flex flex-row lg:flex-col lg:items-start items-center bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#D4AF37]/15 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all duration-300 hover:translate-x-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden"
                        >
                            <span className="absolute top-4 right-6 font-serif text-[64px] text-white opacity-[0.03] select-none pointer-events-none">03</span>

                            <div className="flex-shrink-0 mr-6 lg:mr-0 lg:mb-6">
                                <Leaf className="w-10 h-10 text-[#D4AF37] stroke-[1.5px]" />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="font-serif text-[18px] font-semibold text-white tracking-wide mb-2">Eco-Friendly</h3>
                                <div className="h-[1px] w-[60px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-3 opacity-80" />
                                <p className="font-sans text-[14px] text-white/70 font-normal leading-relaxed max-w-[280px]">
                                    Sustainably sourced ingredients and recyclable packaging.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* 3. Social Proof - Marquee Reviews & Counter */}
            <section className="py-12 bg-white/5 relative overflow-hidden">
                <div className="w-full">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-8 text-center container mx-auto px-6 md:px-20"
                    >
                        {/* 750+ Counter */}
                        <div className="mb-6">
                            <p className="flex items-center justify-center gap-2 text-[#D4AF37] tracking-[3px] text-sm md:text-base font-sans uppercase">
                                <span className="font-medium text-xl md:text-2xl text-[#D4AF37]">
                                    <NumberTicker value={750} className="text-[#D4AF37] dark:text-[#D4AF37]" />
                                    +
                                </span>
                                <span className="text-[#D4AF37]">Satisfied Clients Worldwide</span>
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-4 h-4 text-[#F1E5AC] fill-[#F1E5AC]" />
                            ))}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif text-white">
                            Trusted by Connoisseurs
                        </h2>
                    </motion.div>

                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:40s]">
                            {reviews.map((review) => (
                                <ReviewCard key={review.author} {...review} />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#000000] to-transparent"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#000000] to-transparent"></div>
                    </div>
                </div>
            </section>



            {/* 5. Product Showcase - Best Sellers */}
            <BestSellersAbout />

            {/* CTA Section - "Discover the Collection" */}
            <section className="relative w-full pt-20 pb-24 md:pt-[100px] md:pb-[100px] px-5 md:px-[60px] flex flex-col items-center justify-center text-center">

                {/* Visual Divider - Option B with Icon */}
                <motion.div
                    initial={{ opacity: 0, width: "50%" }}
                    whileInView={{ opacity: 1, width: "auto" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex items-center justify-center gap-4 mb-[60px] opacity-80"
                >
                    <div className="h-[1px] w-[60px] md:w-[80px] bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
                    <span className="text-[#D4AF37] text-[10px] md:text-[12px]">✦</span>
                    <div className="h-[1px] w-[60px] md:w-[80px] bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
                </motion.div>

                {/* Contextual Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif font-semibold text-white tracking-wide mb-4 md:mb-5 max-w-[600px]
                               text-[24px] md:text-[32px] lg:text-[36px]"
                >
                    Ready to Find Your Signature Scent?
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-sans font-normal text-white/65 leading-relaxed mb-10 md:mb-12 max-w-[500px]
                               text-[14px] lg:text-[16px]"
                >
                    Explore our complete collection of artisanal fragrances
                </motion.p>

                {/* Styled Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link href="/collection" className="inline-block group">
                        <button className="
                            relative flex items-center justify-center
                            border-[1.5px] border-[#D4AF37] bg-transparent text-[#D4AF37]
                            rounded-full font-sans font-semibold uppercase tracking-[2px] 
                            transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]
                            shadow-[0_4px_16px_rgba(212,175,55,0.15)]
                            
                            py-[16px] px-[40px] text-[12px]
                            md:py-[18px] md:px-[48px] md:text-[13px]
                            lg:py-[20px] lg:px-[56px] lg:text-[14px]

                            hover:bg-[#D4AF37] hover:text-black hover:-translate-y-[3px]
                            hover:shadow-[0_8px_28px_rgba(212,175,55,0.35)]
                        ">
                            Discover the Collection
                            <ArrowRight className="ml-3 w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </Link>
                </motion.div>
            </section>

            {/* 6. Footer / Disclaimer / Trust Badge */}
            <footer className="border-t border-white/10 py-16 pb-[100px] text-center">
                {/* Trust Badge */}
                <div className="mb-12">
                    <div className="inline-block border border-[#F1E5AC]/20 px-8 py-3 rounded-full bg-[#F1E5AC]/5 backdrop-blur-sm">
                        <p className="text-xs text-[#F1E5AC] tracking-widest uppercase font-medium">
                            Free Worldwide Shipping on orders over $150 & 30-Day Returns
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-[10px] text-[#555555] uppercase tracking-widest mb-4 font-medium">
                        © 2024 Replica Scents. All rights reserved. Privacy Policy.
                    </p>
                    <p className="text-[10px] text-[#555555] tracking-[1.5px] max-w-lg mx-auto leading-relaxed">
                        Replica is entirely independent and not connected to Maison Margiela or any other brand in any way. All trademarks belong to their respective owners.
                    </p>
                </div>
            </footer>
        </div>
    );
}
