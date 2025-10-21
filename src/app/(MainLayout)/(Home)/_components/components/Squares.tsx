"use client";

import React, { useRef, useEffect } from "react";
import "./Squares.css";

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

interface GridOffset {
  x: number;
  y: number;
}

interface SquaresProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left";
  speed?: number;
  borderColor?: CanvasStrokeStyle;
  squareSize?: number;
  hoverFillColor?: CanvasStrokeStyle;
}

const Squares: React.FC<SquaresProps> = ({
  direction = "diagonal",
  speed = 0.3,
  borderColor = "#0074FF66rgba(0, 116, 255, 0.2)",
  squareSize = 60,
  hoverFillColor = "rgba(0, 116, 255, 0.1)",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);
  const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<GridOffset | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawGrid = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = -squareSize + (gridOffset.current.x % squareSize);
      const startY = -squareSize + (gridOffset.current.y % squareSize);

      for (let x = startX; x < canvas.width; x += squareSize) {
        for (let y = startY; y < canvas.height; y += squareSize) {
          const gridX = Math.floor(x / squareSize);
          const gridY = Math.floor(y / squareSize);

          // Hover fill effect
          if (
            hoveredSquareRef.current &&
            gridX === hoveredSquareRef.current.x &&
            gridY === hoveredSquareRef.current.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(x, y, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(x, y, squareSize, squareSize);
        }
      }
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);

      switch (direction) {
        case "right":
          gridOffset.current.x =
            (gridOffset.current.x + effectiveSpeed) % squareSize;
          break;
        case "left":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed) % squareSize;
          break;
        case "up":
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed) % squareSize;
          break;
        case "down":
          gridOffset.current.y =
            (gridOffset.current.y + effectiveSpeed) % squareSize;
          break;
        case "diagonal":
        default:
          gridOffset.current.x =
            (gridOffset.current.x + effectiveSpeed) % squareSize;
          gridOffset.current.y =
            (gridOffset.current.y + effectiveSpeed) % squareSize;
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const gridX = Math.floor(mouseX / squareSize);
      const gridY = Math.floor(mouseY / squareSize);

      hoveredSquareRef.current = { x: gridX, y: gridY };
    };

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return <canvas ref={canvasRef} className="squares-canvas"></canvas>;
};

export default Squares;
