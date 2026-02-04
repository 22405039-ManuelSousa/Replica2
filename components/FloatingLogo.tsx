"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * FloatingLogo Component
 * 
 * Displays the specific 'logo.png' in the bottom-right corner.
 * Remains fixed during scroll.
 * Redirects to homepage ('/') on click.
 * Has a smooth hover effect.
 */
export default function FloatingLogo() {
    // Optional: Add a mounted check if we want to animate entrance, 
    // but for a simple fixed element static rendering is fine.

    return (
        <Link
            href="/"
            className="fixed bottom-6 right-6 z-50 transition-transform duration-300 hover:scale-110 active:scale-95"
            aria-label="Voltar para a página inicial"
        >
            <div className="relative w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl">
                {/* 
           Using Next.js Image for optimization.
           Ensure 'logo.png' is placed in the 'public' folder.
           Added version param to bust cache since user replaced the file.
        */}
                <Image
                    src="/logo.png?v=4"
                    alt="Replica Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 96px, 128px"
                    priority
                    unoptimized
                />
            </div>
        </Link>
    );
}
