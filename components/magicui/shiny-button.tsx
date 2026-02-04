"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
    initial: { "--x": "100%", scale: 1 },
    animate: { "--x": "-100%", scale: 1 },
    whileTap: { scale: 0.95 },
    transition: {
        repeat: Infinity,
        repeatType: "loop" as const,
        repeatDelay: 1,
        type: "spring" as const,
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
            type: "spring" as const,
            stiffness: 200,
            damping: 5,
            mass: 0.5,
        },
    },
};

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    className?: string;
}

export const ShinyButton = ({ children, className, ...props }: ShinyButtonProps) => {
    return (
        <motion.button
            {...animationProps}
            className={cn(
                "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow",
                "bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
                className,
            )}
            {...props}
        >
            <span
                className="relative block h-full w-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
                style={{
                    maskImage:
                        "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
                }}
            >
                {children}
            </span>
            <span
                style={{
                    mask: "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
                }}
                className="absolute inset-0 block h-full w-full text-sm uppercase tracking-wide text-transparent dark:font-light"
            >
                {children}
            </span>
        </motion.button>
    );
};
