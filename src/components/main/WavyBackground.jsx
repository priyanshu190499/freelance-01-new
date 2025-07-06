
import { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

// Optional: your own utility
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function WavyBackground({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) {
  const noise = createNoise3D();
  let w, h, nt, ctx, canvas;
  const canvasRef = useRef(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const waveColors = colors ?? [
    "#24243e",
    "#302b63",
    "#000dfe",
    "#22d3ee",
    "#0055fe",
  ];

  const drawWave = (n) => {
    nt += getSpeed();
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId;
  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  const init = () => {
  canvas = canvasRef.current;
  if (!canvas) return;
  ctx = canvas.getContext("2d");

  // ✅ Use parent container size
  const container = canvas.parentElement;
  const rect = container?.getBoundingClientRect();
  w = ctx.canvas.width = rect?.width || window.innerWidth;
  h = ctx.canvas.height = rect?.height || window.innerHeight;

  ctx.filter = `blur(${blur}px)`;
  nt = 0;

  window.onresize = function () {
    const container = canvas.parentElement;
    const rect = container?.getBoundingClientRect();
    w = ctx.canvas.width = rect?.width || window.innerWidth;
    h = ctx.canvas.height = rect?.height || window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
  };

  render();
};


  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        " md:h-[60vh] lg:h-[100vh] flex flex-col  items-center justify-end md:justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute  w-full inset-0 z-0 "
        ref={canvasRef}
        id="canvas"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      ></canvas>

      <div className={cn("relative z-10 flex flex-col ", className)} {...props}>
        {children}
      </div>
    </div>
  );
}
