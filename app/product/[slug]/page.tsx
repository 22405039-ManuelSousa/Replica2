"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Plus, Minus, ShoppingBag, ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

// Import your data and context
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const { addToCart } = useCart();

    // Find product based on URL slug
    const product = PRODUCTS.find((p) => p.slug === params.slug);

    // State
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);

    // Handle 404 if product not found
    if (!product) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-4">
                <h1 className="text-2xl font-light">Product not found.</h1>
                <Link href="/" className="text-neutral-400 hover:text-white underline">
                    Return to Collection
                </Link>
            </div>
        );
    }

    const handleQuantityChange = (delta: number) => {
        setQuantity((prev) => {
            const newValue = prev + delta;
            return Math.max(1, Math.min(newValue, product.availableQuantity || 10));
        });
    };

    const handleAddToCart = () => {
        setIsAdding(true);
        addToCart(product, quantity);

        // Reset animation state after delay
        setTimeout(() => setIsAdding(false), 2000);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation / Back Button */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 mix-blend-difference text-white pointer-events-none">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity pointer-events-auto"
                >
                    <ArrowLeft size={16} /> Back
                </button>
            </nav>

            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* Left: Hero Image (Sticky on Desktop) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="lg:w-1/2 relative h-[60vh] lg:h-screen w-full lg:sticky lg:top-0 bg-neutral-900"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                </motion.div>

                {/* Right: Product Details (Scrollable) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:w-1/2 flex flex-col justify-center px-6 py-12 md:px-20 lg:py-24 space-y-10 bg-black"
                >
                    {/* Header */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-yellow-500/80">
                            <Star size={14} fill="currentColor" />
                            <span className="text-xs text-neutral-400 tracking-widest uppercase">Premium Collection</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-light tracking-wide">{product.name}</h1>
                        <p className="text-2xl md:text-3xl text-neutral-300 font-light">€{product.price.toFixed(2)}</p>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-white/10" />

                    {/* Description */}
                    <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
                        <p>{product.description || "An exquisite addition to your daily ritual. Crafted with precision and premium materials to ensure an unparalleled experience."}</p>

                        {/* Mock Fragrance Notes / Specs */}
                        <div className="grid grid-cols-2 gap-4 py-4">
                            <div>
                                <h3 className="text-white text-sm uppercase tracking-widest mb-2">Top Notes</h3>
                                <p className="text-sm">Bergamot, Black Pepper</p>
                            </div>
                            <div>
                                <h3 className="text-white text-sm uppercase tracking-widest mb-2">Base Notes</h3>
                                <p className="text-sm">Amber wood, Musk</p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-6">
                            {/* Quantity */}
                            <div className="flex items-center border border-white/20 rounded-full px-4 py-3 gap-6">
                                <button
                                    onClick={() => handleQuantityChange(-1)}
                                    disabled={quantity <= 1}
                                    className="hover:text-neutral-400 disabled:opacity-30 transition-colors"
                                >
                                    <Minus size={18} />
                                </button>
                                <span className="w-4 text-center font-medium">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange(1)}
                                    disabled={quantity >= (product.availableQuantity || 10)}
                                    className="hover:text-neutral-400 disabled:opacity-30 transition-colors"
                                >
                                    <Plus size={18} />
                                </button>
                            </div>

                            {/* Add Button */}
                            <button
                                onClick={handleAddToCart}
                                className={`flex-1 py-4 px-8 rounded-full font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${isAdding
                                        ? "bg-green-500 text-black"
                                        : "bg-white text-black hover:bg-neutral-200"
                                    }`}
                            >
                                {isAdding ? (
                                    <span>Added to Bag</span>
                                ) : (
                                    <>
                                        <ShoppingBag size={18} />
                                        <span>Add to Cart</span>
                                    </>
                                )}
                            </button>
                        </div>
                        <p className="text-xs text-center text-neutral-500">
                            Free shipping on orders over €100. 30-day return policy.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}