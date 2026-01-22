"use client";

import { ShoppingBag, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingNav() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-2 p-1.5 bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
                {/* Bag Icon */}
                <button className="p-3 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5">
                    <ShoppingBag size={20} strokeWidth={1.5} />
                </button>

                {/* Home Pill (Active) */}
                <div className="px-6 py-2 bg-white rounded-full">
                    <span className="text-sm font-medium text-black tracking-wide">Home</span>
                </div>

                {/* Info Icon */}
                <button className="p-3 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5">
                    <Info size={20} strokeWidth={1.5} />
                </button>
            </div>
        </motion.div>
    );
}
