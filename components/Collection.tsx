"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import Link from "next/link";

export default function Collection() {
    const { addToCart } = useCart();
    const [quantities, setQuantities] = useState<{ [key: string]: number }>(
        PRODUCTS.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
    );
    const [addedToCart, setAddedToCart] = useState<{ [key: string]: boolean }>({});

    const handleQuantityChange = (id: string, delta: number) => {
        setQuantities((prev) => {
            const current = prev[id] || 1;
            const product = PRODUCTS.find((p) => p.id === id);
            if (!product) return prev;
            const newValue = Math.max(1, Math.min(current + delta, product.availableQuantity));
            return { ...prev, [id]: newValue };
        });
    };

    const handleAddToCart = (e: React.MouseEvent, product: typeof PRODUCTS[0]) => {
        e.preventDefault(); // Prevent navigation when clicking add to cart
        const quantity = quantities[product.id] || 1;
        addToCart(product, quantity);

        // Visual feedback
        setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
        setTimeout(() => {
            setAddedToCart((prev) => ({ ...prev, [product.id]: false }));
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-black text-white pt-32 px-4 md:px-8 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wide text-center text-white">
                    The Collection
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                    {PRODUCTS.map((product) => (
                        <Link href={`/product/${product.slug}`} key={product.id}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group relative bg-neutral-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-3 md:p-6 space-y-2 md:space-y-4">
                                    <div className="space-y-0.5 md:space-y-1">
                                        <h3 className="text-sm md:text-lg font-medium tracking-wide truncate text-white" title={product.name}>
                                            {product.name}
                                        </h3>
                                        <p className="text-xs md:text-base text-neutral-400 font-light">€{product.price.toFixed(2)}</p>
                                    </div>

                                    {/* Controls */}
                                    <div className="space-y-2 md:space-y-4 pt-1 md:pt-2">
                                        {/* Quantity Selector */}
                                        <div className="flex items-center justify-between bg-white/5 rounded-full p-0.5 md:p-1 border border-white/10" onClick={(e) => e.preventDefault()}>
                                            <button
                                                onClick={() => handleQuantityChange(product.id, -1)}
                                                className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50 text-white"
                                                disabled={quantities[product.id] <= 1}
                                                aria-label="Decrease quantity"
                                            >
                                                <Minus size={12} className="md:w-[14px] md:h-[14px]" />
                                            </button>
                                            <span className="text-xs md:text-sm font-medium w-6 md:w-8 text-center text-white">
                                                {quantities[product.id]}
                                            </span>
                                            <button
                                                onClick={() => handleQuantityChange(product.id, 1)}
                                                className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50 text-white"
                                                disabled={quantities[product.id] >= product.availableQuantity}
                                                aria-label="Increase quantity"
                                            >
                                                <Plus size={12} className="md:w-[14px] md:h-[14px]" />
                                            </button>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button
                                            onClick={(e) => handleAddToCart(e, product)}
                                            className={`w-full py-2 md:py-3 px-2 md:px-4 rounded-full font-medium text-xs md:text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 ${addedToCart[product.id]
                                                ? "bg-white text-black"
                                                : "bg-white/10 text-white hover:bg-white hover:text-black"
                                                }`}
                                        >
                                            {addedToCart[product.id] ? (
                                                <>Added</>
                                            ) : (
                                                <>
                                                    <ShoppingBag size={14} className="md:w-[16px] md:h-[16px]" />
                                                    <span className="hidden md:inline">Add to Cart</span>
                                                    <span className="md:hidden">Add</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
