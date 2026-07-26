"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    const ratio = window.devicePixelRatio || 1;
    const points: Point[] = [];
    const pointer = { x: null as number | null, y: null as number | null };
    let frame = 0;

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    const resizeCanvas = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const resetPoints = () => {
      points.length = 0;
      const count = Math.max(40, Math.floor((width * height) / 38000));
      for (let i = 0; i < count; i += 1) {
        points.push({
          x: random(0, width),
          y: random(0, height),
          vx: random(-0.28, 0.28),
          vy: random(-0.22, 0.22),
        });
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(244, 247, 252, 0.04)";
      context.fillRect(0, 0, width, height);

      points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x <= 0 || point.x >= width) point.vx *= -1;
        if (point.y <= 0 || point.y >= height) point.vy *= -1;

        context.beginPath();
        context.arc(point.x, point.y, 1.75, 0, Math.PI * 2);
        context.fillStyle = "rgba(54, 84, 255, 0.75)";
        context.fill();
      });

      const maxDistance = 120;
      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance > maxDistance) continue;
          const alpha = 1 - distance / maxDistance;
          context.strokeStyle = `rgba(54,84,255,${alpha * 0.24})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }

      if (pointer.x !== null && pointer.y !== null) {
        context.beginPath();
        context.arc(pointer.x, pointer.y, 10, 0, Math.PI * 2);
        context.fillStyle = "rgba(23, 201, 182, 0.12)";
        context.fill();
      }
    };

    const loop = () => {
      draw();
      frame = window.requestAnimationFrame(loop);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      pointer.x = null;
      pointer.y = null;
    };

    const handleResize = () => {
      resizeCanvas();
      resetPoints();
    };

    resizeCanvas();
    resetPoints();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    loop();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [shouldReduceMotion]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-2] overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full canvas-network" />
    </div>
  );
}
