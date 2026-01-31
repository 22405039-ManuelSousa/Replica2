"use client";

import { useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 191;

export default function HeroScroll() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<(HTMLImageElement | null)[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Load images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: (HTMLImageElement | null)[] = [];
            const promises = [];

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    // Pad with zeros: 0001.jpg
                    const fileName = i.toString().padStart(4, "0") + ".jpg";
                    img.src = `/sequence/${fileName}`;
                    img.onload = () => {
                        loadedImages[i - 1] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        loadedImages[i - 1] = null;
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    // Render loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const render = (progress: number) => {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#0f172a"; // Deep Pacific
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Calculate current frame
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(progress * FRAME_COUNT)
            );

            const img = images[frameIndex];

            if (img) {
                // Draw image centered and COVER (Fill screen)
                const hRatio = canvas.width / img.width;
                const vRatio = canvas.height / img.height;

                // ORIGINAl LOGIC: Always use Max (Cover)
                const ratio = Math.max(hRatio, vRatio);

                const centerShift_x = (canvas.width - img.width * ratio) / 2;
                const centerShift_y = (canvas.height - img.height * ratio) / 2;

                ctx.drawImage(
                    img,
                    0,
                    0,
                    img.width,
                    img.height,
                    centerShift_x,
                    centerShift_y,
                    img.width * ratio,
                    img.height * ratio
                );
            } else {
                // Placeholder
                ctx.fillStyle = "#fbbf24";
                ctx.font = "40px serif";
                ctx.textAlign = "center";
                ctx.fillText(
                    `Frame ${frameIndex + 1} / ${FRAME_COUNT}`,
                    canvas.width / 2,
                    canvas.height / 2
                );
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render(smoothProgress.get());
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        const unsubscribe = smoothProgress.on("change", (latest) => {
            render(latest);
        });

        render(smoothProgress.get());

        return () => {
            window.removeEventListener("resize", handleResize);
            unsubscribe();
        };
    }, [images, smoothProgress, isLoaded]);

    return (
        <div className="fixed top-0 left-0 w-full h-[100dvh] z-0 overflow-hidden">
            <canvas ref={canvasRef} className="block w-full h-full" />

            {/* Loading State */}
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0f172a] z-50">
                    <div className="w-32 h-1 bg-white/20 overflow-hidden">
                        <div className="h-full bg-emerald-500 animate-pulse w-1/2" />
                    </div>
                </div>
            )}
        </div>
    );
}