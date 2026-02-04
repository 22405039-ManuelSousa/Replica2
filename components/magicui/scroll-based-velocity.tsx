"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "framer-motion";

import { cn } from "@/lib/utils";

interface VelocityScrollProps {
    text: string;
    default_velocity?: number;
    className?: string;
}

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
    className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({ children, baseVelocity = 100, className }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const [reps, setReps] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const calculateReps = () => {
            if (containerRef.current && textRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const textWidth = textRef.current.offsetWidth;
                const newReps = Math.ceil(containerWidth / textWidth) + 2;
                setReps(newReps);
            }
        };

        calculateReps();
        window.addEventListener("resize", calculateReps);
        return () => window.removeEventListener("resize", calculateReps);
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div
            className="w-full overflow-hidden whitespace-nowrap"
            ref={containerRef}
        >
            <motion.div className={cn("inline-block", className)} style={{ x }}>
                {Array.from({ length: reps }).map((_, i) => (
                    <span key={i} ref={i === 0 ? textRef : null}>
                        {children}{" "}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

export function VelocityScroll({
    text,
    default_velocity = 5,
    className,
    children,
}: VelocityScrollProps & { children?: React.ReactNode }) {
    return (
        <section className="relative w-full">
            <ParallaxText baseVelocity={default_velocity} className={className}>
                {children || text}
            </ParallaxText>
            <ParallaxText baseVelocity={-default_velocity} className={className}>
                {children || text}
            </ParallaxText>
        </section>
    );
}
