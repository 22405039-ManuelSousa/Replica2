"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import Link from "next/link";

export default function ProductDetail({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    const handleQuantityChange = (delta: number) => {
        setQuantity((prev) => Math.max(1, Math.min(prev + delta, product.availableQuantity)));
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="min-h-screen bg-black text-white pt-32 px-4 md:px-8 pb-20">
            <div className="max-w-7xl mx-auto">
                <Link href="/collection" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 md:mb-12">
                    <ArrowLeft size={20} />
                    <span className="text-sm tracking-wide">Back to Collection</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[3/4] bg-neutral-900 rounded-2xl overflow-hidden"
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </motion.div>

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 md:space-y-12"
                    >
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl font-light tracking-wide">{product.name}</h1>
                            <p className="text-2xl md:text-3xl font-light text-neutral-400">€{product.price.toFixed(2)}</p>
                        </div>

                        <div className="space-y-6 text-neutral-300 font-light leading-relaxed text-lg">
                            <p>{product.description}</p>

                            <div className="pt-4">
                                <h3 className="text-white font-medium mb-2 text-sm uppercase tracking-widest">Fragrance Notes</h3>
                                <p>{product.notes}</p>
                            </div>

                            <div className="pt-4">
                                <h3 className="text-white font-medium mb-2 text-sm uppercase tracking-widest">Usage</h3>
                                <p>{product.usage}</p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10 space-y-8">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-4 bg-white/5 rounded-full p-2 border border-white/10">
                                    <button
                                        onClick={() => handleQuantityChange(-1)}
                                        className="p-3 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50 text-white"
                                        disabled={quantity <= 1}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange(1)}
                                        className="p-3 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50 text-white"
                                        disabled={quantity >= product.availableQuantity}
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    className={`flex-1 py-4 px-8 rounded-full font-medium text-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-3 ${added ? "bg-white text-black" : "bg-white text-black hover:bg-neutral-200"
                                        }`}
                                >
                                    {added ? (
                                        "Added to Cart"
                                    ) : (
                                        <>
                                            <ShoppingBag size={20} />
                                            Add to Cart
                                        </>
                                    )}
                                </button>
                            </div>
                            <p className="text-sm text-neutral-500 text-center">
                                Free shipping on orders over €200. 30-day returns.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
