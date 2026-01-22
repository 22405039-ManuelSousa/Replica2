"use client";

import { ShoppingBag, Info, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingNav() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-8 px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg hover:bg-white/10 transition-colors duration-300">
                <button className="text-white/70 hover:text-white transition-colors">
                    <Home size={20} strokeWidth={1.5} />
                </button>
                <div className="w-px h-4 bg-white/10" />
                <button className="text-white/70 hover:text-white transition-colors">
                    <Info size={20} strokeWidth={1.5} />
                </button>
                <div className="w-px h-4 bg-white/10" />
                <button className="text-white/70 hover:text-white transition-colors">
                    <ShoppingBag size={20} strokeWidth={1.5} />
                </button>
            </div>
        </motion.div>
    );
}
