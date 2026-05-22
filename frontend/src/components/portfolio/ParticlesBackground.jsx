import React, { useEffect, useRef } from "react";

/**
 * Lightweight neural-network particle canvas.
 * Renders subtle drifting nodes connected by lines.
 * Pure canvas — no external deps, GPU-friendly.
 */
export const ParticlesBackground = ({
    density = 50,
    maxDistance = 140,
    color = "rgba(56, 189, 248, 0.55)",
    nodeColor = "rgba(255, 255, 255, 0.7)",
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationId;
        let nodes = [];
        let width = 0;
        let height = 0;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        const resize = () => {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            const count = Math.max(
                24,
                Math.floor((width * height) / 22000),
            );
            nodes = Array.from({ length: Math.min(count, density) }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                r: Math.random() * 1.6 + 0.6,
            }));
        };

        const tick = () => {
            ctx.clearRect(0, 0, width, height);

            // edges
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i];
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < maxDistance) {
                        const alpha = 1 - dist / maxDistance;
                        ctx.strokeStyle = color.replace(
                            /[\d.]+\)$/,
                            `${(alpha * 0.5).toFixed(3)})`,
                        );
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            // nodes
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > width) n.vx *= -1;
                if (n.y < 0 || n.y > height) n.vy *= -1;
                ctx.fillStyle = nodeColor;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fill();
            }

            animationId = requestAnimationFrame(tick);
        };

        resize();
        tick();
        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, [color, density, maxDistance, nodeColor]);

    return (
        <canvas
            ref={canvasRef}
            data-testid="hero-particles-canvas"
            className="absolute inset-0 w-full h-full"
            style={{ display: "block" }}
            aria-hidden="true"
        />
    );
};

export default ParticlesBackground;
