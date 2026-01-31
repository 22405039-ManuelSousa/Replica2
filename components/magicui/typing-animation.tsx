"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
    text: string;
    className?: string;
    duration?: number;
    delay?: number;
}

export default function TypingAnimation({
    text,
    className,
    duration = 50,
    delay = 0,
}: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 }); // Plays every time

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let timeout: NodeJS.Timeout;

        if (isInView) {
            setDisplayedText(""); // Reset
            timeout = setTimeout(() => {
                let i = 0;
                interval = setInterval(() => {
                    if (i < text.length) {
                        setDisplayedText(text.substring(0, i + 1));
                        i++;
                    } else {
                        clearInterval(interval);
                    }
                }, duration);
            }, delay);
        } else {
            setDisplayedText(""); // Clear when out of view
        }

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [isInView, text, duration, delay]);

    return (
        <div ref={ref} className={cn("inline-block", className)}>
            {displayedText}
            {/* Invisible placeholder to prevent layout jumping */}
            <span className="invisible">{text.length > 0 && displayedText.length === 0 ? "A" : ""}</span>
        </div>
    );
}
