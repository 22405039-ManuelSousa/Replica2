"use client";

import { ShoppingBag, Info, Grid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function FloatingNav() {
    const pathname = usePathname();
    const { totalItems } = useCart();

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-2 p-1.5 bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
                {/* Collection Icon */}
                <Link href="/collection">
                    <button className={`p-3 transition-colors rounded-full hover:bg-white/5 ${pathname === '/collection' ? 'text-white' : 'text-white/70 hover:text-white'}`}>
                        <Grid size={20} strokeWidth={1.5} />
                    </button>
                </Link>

                {/* Home Pill */}
                <Link href="/">
                    <div className={`px-6 py-2 rounded-full transition-colors ${pathname === '/' ? 'bg-white' : 'hover:bg-white/10'}`}>
                        <span className={`text-sm font-medium tracking-wide ${pathname === '/' ? 'text-black' : 'text-white'}`}>Home</span>
                    </div>
                </Link>

                {/* Info Icon */}
                <Link href="/info">
                    <button className={`p-3 transition-colors rounded-full hover:bg-white/5 ${pathname === '/info' ? 'text-white' : 'text-white/70 hover:text-white'}`}>
                        <Info size={20} strokeWidth={1.5} />
                    </button>
                </Link>

                {/* Bag Icon with Badge */}
                <Link href="/cart" className="relative">
                    <button className={`p-3 transition-colors rounded-full hover:bg-white/5 ${pathname === '/cart' ? 'text-white' : 'text-white/70 hover:text-white'}`}>
                        <ShoppingBag size={20} strokeWidth={1.5} />
                    </button>
                    <AnimatePresence>
                        {totalItems > 0 && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="absolute top-1 right-1 w-4 h-4 bg-white text-black text-[10px] font-bold flex items-center justify-center rounded-full"
                            >
                                {totalItems}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Link>
            </div>
        </motion.div>
    );
}
