import { cn } from "@/lib/utils";
import React from "react";

interface LineShadowTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    shadowColor?: string;
}

export function LineShadowText({
    children,
    shadowColor = "black",
    className,
    ...props
}: LineShadowTextProps) {
    const content = typeof children === "string" ? children : null;

    if (!content) return null;

    return (
        <span
            className={cn("relative inline-block", className)}
            {...props}
        >
            {/* Shadow Layer - Positioned behind */}
            <span
                className="absolute top-0 left-0 -z-10 text-transparent"
                aria-hidden="true"
                style={{
                    textShadow: `
            1px 1px 0px ${shadowColor},
            2px 2px 0px ${shadowColor},
            3px 3px 0px ${shadowColor},
            4px 4px 0px ${shadowColor},
            5px 5px 0px ${shadowColor},
            6px 6px 0px ${shadowColor}
          `,
                }}
            >
                {children}
            </span>

            {/* Main Content Layer */}
            <span className="relative z-0">
                {children}
            </span>
        </span>
    );
}
