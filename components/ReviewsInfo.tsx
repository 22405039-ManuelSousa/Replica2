"use client";

import Image from "next/image";
import NumberTicker from "@/components/magicui/number-ticker";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function ReviewsInfo() {
    return (
        <section className="bg-black text-white py-24 overflow-hidden">
            {/* Social Proof Header */}
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
                    <NumberTicker value={750} className="text-white" />
                    <span className="ml-2">+ Verified Reviews</span>
                </h2>
            </div>

            {/* Animated Reviews */}
            <div className="mb-24 opacity-80">
                <VelocityScroll
                    text="The scent of a memory. Unparalleled longevity. Exquisite packaging. My new signature. "
                    default_velocity={3}
                    className="font-serif text-4xl md:text-6xl font-bold tracking-[-0.02em] text-white/20 drop-shadow-sm"
                />
            </div>

            {/* Information Split */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                    {/* Left Column: Image */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="/factory_lab.jpg"
                            alt="Maison Margiela Factory Lab"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Column: Information List */}
                    <div className="flex flex-col justify-center space-y-12 pl-0 md:pl-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-serif tracking-wide text-white/90">Information</h3>
                            <ul className="space-y-4 text-lg font-light text-white/60 tracking-wider uppercase">
                                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Shipping & Returns</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Contact Concierge</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Sustainability</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <p className="text-white/40 font-light leading-relaxed">
                                Our scents are crafted with the finest ingredients, ensuring a lasting impression that evokes your most cherished memories.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
