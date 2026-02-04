"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function ShoppingCart() {
    const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

    return (
        <div className="min-h-screen bg-[#000000] text-white pt-32 px-4 md:px-8 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-light mb-12 tracking-wide">
                    Your Selection
                </h1>

                {items.length === 0 ? (
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <div className="flex flex-col items-center justify-center py-20 text-white/50">
                            <ShoppingBag size={48} strokeWidth={1} className="mb-4" />
                            <p className="text-lg font-light">Your cart is currently empty.</p>
                            <Link href="/collection">
                                <button className="mt-8 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors">
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-8">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
                            <div className="p-6 md:p-8 space-y-8">
                                <AnimatePresence mode="popLayout">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="flex flex-col md:flex-row gap-6 items-start md:items-center border-b border-white/10 pb-8 last:border-0 last:pb-0"
                                        >
                                            {/* Product Image */}
                                            <div className="relative w-24 h-32 md:w-32 md:h-40 flex-shrink-0 bg-white/5 rounded-lg overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-grow space-y-2">
                                                <h3 className="text-xl font-medium tracking-wide">{item.name}</h3>
                                                <p className="text-white/60 font-light">€{item.price.toFixed(2)}</p>
                                            </div>

                                            {/* Controls */}
                                            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                                                <div className="flex items-center gap-3 bg-white/5 rounded-full p-1 border border-white/10">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-sm font-medium w-6 text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50"
                                                        disabled={item.quantity >= item.availableQuantity}
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-3 text-white/50 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-colors"
                                                    aria-label="Remove item"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="text-center md:text-left">
                                    <p className="text-white/60 mb-1">Total (VAT included)</p>
                                    <p className="text-3xl font-light tracking-wide">€{totalPrice.toFixed(2)}</p>
                                </div>
                                <button className="w-full md:w-auto px-12 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors text-lg tracking-wide">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
