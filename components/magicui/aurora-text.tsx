"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import React from "react";

interface AuroraTextProps
    extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
    className?: string;
    children: React.ReactNode;
    as?: React.ElementType;
}

export function AuroraText({
    className,
    children,
    as: Component = "span",
    ...props
}: AuroraTextProps) {
    const MotionComponent = motion(Component);

    return (
        <MotionComponent
            className={cn(
                "relative inline-flex overflow-hidden text-transparent bg-clip-text bg-300% animate-aurora",
                "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500",
                "dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400",
                className
            )}
            {...props}
        >
            {children}
        </MotionComponent>
    );
}
