"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Star, Heart } from "lucide-react";

interface ProductData {
    id: string;
    name: string;
    note: string;
    price: string;
    image: string;
    rating: number;
    reviews: number;
    stock: "in_stock" | "low_stock" | "out_of_stock";
    stockText: string;
}

const PRODUCTS_DATA: ProductData[] = [
    {
        id: "1",
        name: "Funfair Evening",
        note: "Petitgrain",
        price: "135",
        image: "/collection/Funfair Evening-1500x1500.avif",
        rating: 4.8,
        reviews: 128,
        stock: "in_stock",
        stockText: "Available",
    },
    {
        id: "2",
        name: "Lazy Sunday Morning",
        note: "Aldehydes",
        price: "120",
        image: "/collection/Lazy sunday.avif",
        rating: 4.9,
        reviews: 342,
        stock: "low_stock",
        stockText: "Only 3 left",
    },
    {
        id: "3",
        name: "By The Fireplace",
        note: "Pink Pepper",
        price: "145",
        image: "/collection/bythefireplace.avif",
        rating: 4.9,
        reviews: 856,
        stock: "out_of_stock",
        stockText: "Sold Out",
    },
];

export default function BestSellersAbout() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            // Approximate card width logic with new smaller sizes
            // Mobile 75vw, Tablet 38vw
            const cardWidth = window.innerWidth < 768 ? window.innerWidth * 0.75 : window.innerWidth * 0.38;
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(Math.min(Math.max(index, 0), PRODUCTS_DATA.length - 1));
        }
    };

    // Wishlist interaction state
    const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

    const toggleWishlist = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <section ref={ref} className="relative z-10 w-full mt-[100px] md:mt-[120px] pb-[50px] md:pb-[70px] lg:pb-[90px]" aria-label="Best selling fragrances">
            {/* Visual Divider */}
            <div className="flex justify-center mb-10">
                <span className="text-[#D4AF37] text-[16px]">✦</span>
            </div>

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center mb-12"
            >
                <h2 className="text-[#D4AF37] 
                           font-['Inter'] font-bold uppercase 
                           text-[18px] md:text-[22px] 
                           tracking-[3px] 
                           relative inline-block"
                >
                    Best Sellers
                    <span className="block w-[60px] h-[2px] bg-[#D4AF37] mx-auto mt-3" />
                </h2>

                <p className="font-serif italic text-white/70 
                              text-[16px] md:text-[18px] 
                              mt-3"
                >
                    Discover Our Most Beloved Fragrances
                </p>
            </motion.div>

            {/* Container - Responsive Layout (Carousel -> Grid) */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="
                    /* Mobile & Tablet: Flex Carousel */
                    flex overflow-x-auto snap-x snap-mandatory pb-6 px-5 md:px-[40px] gap-4 md:gap-5 hide-scrollbar touch-pan-x
                    /* Desktop: Grid Layout using grid-cols-3 */
                    lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0 lg:px-[60px] xl:px-[80px]
                    /* Max Width constraint */
                    lg:max-w-[1100px] xl:max-w-[1250px] lg:mx-auto
                "
                style={{ scrollBehavior: 'smooth' }}
            >
                {PRODUCTS_DATA.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                        isInView={isInView}
                        isWishlisted={!!wishlist[product.id]}
                        onToggleWishlist={(e) => toggleWishlist(product.id, e)}
                    />
                ))}

                {/* Spacer for mobile/tablet carousel padding */}
                <div className="w-[5vw] flex-shrink-0 lg:hidden" />
            </div>

            {/* Navigation Dots - Hidden on Desktop */}
            <div className="flex justify-center items-center gap-2 mt-2 lg:hidden">
                {PRODUCTS_DATA.map((_, idx) => (
                    <div
                        key={idx}
                        className={`rounded-full transition-all duration-300 ${idx === activeIndex
                            ? "w-1.5 h-1.5 bg-white"
                            : "w-[5px] h-[5px] bg-white/30"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

function ProductCard({
    product,
    index,
    isInView,
    isWishlisted,
    onToggleWishlist
}: {
    product: ProductData;
    index: number;
    isInView: boolean;
    isWishlisted: boolean;
    onToggleWishlist: (e: React.MouseEvent) => void;
}) {
    // Stock colors
    const stockColor = product.stock === "in_stock" ? "#10B981" : product.stock === "low_stock" ? "#F59E0B" : "#EF4444";
    const isOutOfStock = product.stock === "out_of_stock";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
            }}
            whileTap={{ scale: 0.98, transition: { duration: 0.2 } }}
            className="
                /* Mobile: 75vw (Reduced) */
                flex-shrink-0 w-[75vw] snap-center
                /* Tablet: 38vw (Reduced) */
                md:w-[38vw] md:max-w-[360px]
                /* Desktop: Auto width in grid */
                lg:w-auto lg:snap-align-none lg:max-w-none
            "
        >
            <div className="
                bg-[#1A1A1A] rounded-2xl md:rounded-[16px] lg:rounded-[18px]
                p-4 md:p-5 lg:p-6
                shadow-[0_8px_24px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2)] 
                md:shadow-[0_10px_28px_rgba(0,0,0,0.45)]
                lg:shadow-[0_12px_32px_rgba(0,0,0,0.5)]
                
                /* Desktop Hover Styles */
                lg:hover:-translate-y-2 
                lg:hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_4px_16px_rgba(212,175,55,0.2)]
                transition-all duration-300 ease-out
                
                h-full flex flex-col relative overflow-hidden group
            ">

                {/* Image Container */}
                <div className="
                    relative aspect-square w-full bg-white 
                    rounded-xl md:rounded-[12px] lg:rounded-[14px]
                    p-4
                    mb-3 md:mb-4 lg:mb-5
                    shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden
                ">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2 md:p-3 transition-transform duration-500 lg:group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 767px) 75vw, (max-width: 1023px) 38vw, (max-width: 1440px) 30vw, 350px"
                    />

                    {/* Bestseller Badge */}
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] 
                        px-2.5 py-1 md:px-3 md:py-1.5 lg:px-3.5 lg:py-1.5
                        rounded-bl-xl rounded-tr-lg shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
                    >
                        <span className="text-[#1A1A1A] font-bold uppercase tracking-wider
                            text-[9px] md:text-[10px] lg:text-[11px]"
                        >
                            Bestseller
                        </span>
                    </div>

                    {/* Wishlist Button */}
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        animate={isWishlisted ? { scale: [1, 1.3, 1] } : {}}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        onClick={onToggleWishlist}
                        className="absolute 
                            top-2 left-2 md:top-3 md:left-3 lg:top-4 lg:left-4
                            w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10
                            rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center z-20"
                    >
                        <Heart
                            className={`transition-colors duration-300 
                                w-4 h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5
                                ${isWishlisted ? "text-[#FF6B6B] fill-[#FF6B6B]" : "text-white"}`}
                            strokeWidth={2}
                        />
                    </motion.button>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                    key={i}
                                    className={`
                                        w-3 h-3 md:w-3.5 md:h-3.5 lg:w-[15px] lg:h-[15px]
                                        ${i <= Math.round(product.rating) ? "text-[#D4AF37] fill-[#D4AF37]" : "text-white/20 fill-white/20"}
                                    `}
                                />
                            ))}
                        </div>
                        <span className="text-white/50 text-[11px] md:text-xs lg:text-[13px]">({product.reviews})</span>
                    </div>

                    {/* Title & Note */}
                    <h3 className="font-serif font-semibold text-white leading-tight tracking-[0.3px] mb-1
                        text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]"
                    >
                        {product.name}
                    </h3>
                    <p className="font-['Inter'] text-white/70 capitalize mb-3 md:mb-4
                        text-[12px] md:text-[13px] lg:text-[14px]"
                    >
                        {product.note}
                    </p>

                    {/* Price */}
                    <div className="mt-auto">
                        <p className="font-['Inter'] font-bold text-white mb-4
                            text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]"
                        >
                            € {product.price}
                        </p>

                        {/* Stock Indicator */}
                        <div className="flex items-center gap-2 mb-3">
                            <div
                                className="rounded-full
                                    w-1.5 h-1.5 md:w-[5px] md:h-[5px]"
                                style={{ backgroundColor: stockColor }}
                            />
                            <span
                                className="font-medium
                                    text-[11px] md:text-[12px] lg:text-[13px]"
                                style={{ color: stockColor }}
                            >
                                {product.stockText}
                            </span>
                        </div>

                        {/* CTA Button */}
                        <button
                            disabled={isOutOfStock}
                            className={`
                                w-full rounded-full font-semibold tracking-wide uppercase transition-all duration-300
                                h-10 md:h-11 lg:h-12
                                text-[12px] md:text-[13px] lg:text-[14px]
                                ${isOutOfStock
                                    ? "bg-white/20 text-white/40 cursor-not-allowed"
                                    : "bg-white text-black hover:bg-[#D4AF37] hover:shadow-[0_4px_16px_rgba(212,175,55,0.3)] lg:hover:scale-[1.02] active:scale-[0.98]"}
                            `}
                        >
                            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
