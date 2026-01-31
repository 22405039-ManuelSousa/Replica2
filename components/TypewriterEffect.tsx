"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
    text: string;
    speed?: number;
    className?: string;
}

export default function TypewriterEffect({
    text,
    speed = 50,
    className,
}: TypewriterEffectProps) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        setDisplayedText(""); // Reset on text change

        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return <p className={cn(className)}>{displayedText}</p>;
}
