"use client";

import { motion } from "framer-motion";

export default function Informations() {
    return (
        <div className="min-h-screen bg-[#000000] text-white pt-32 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wide">
                    Information
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-medium mb-4 text-white/90">About Us</h2>
                            <p className="text-white/60 leading-relaxed font-light">
                                We are dedicated to crafting the finest fragrances, sourcing rare ingredients from around the world to create scents that tell a story.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium mb-4 text-white/90">Shipping</h2>
                            <p className="text-white/60 leading-relaxed font-light">
                                Complimentary worldwide shipping on all orders over $200. Each package is carefully wrapped in our signature packaging.
                            </p>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-medium mb-4 text-white/90">Contact</h2>
                            <p className="text-white/60 leading-relaxed font-light">
                                For inquiries, please contact our concierge at<br />
                                <a href="mailto:concierge@example.com" className="underline hover:text-white transition-colors">concierge@example.com</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium mb-4 text-white/90">Returns</h2>
                            <p className="text-white/60 leading-relaxed font-light">
                                We accept returns within 30 days of purchase. The item must be unopened and in its original packaging.
                            </p>
                        </section>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
