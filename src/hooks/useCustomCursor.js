import { useEffect, useRef } from "react";

export function useCustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return undefined;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frameId;

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    const onOver = (event) => {
      if (event.target.closest("a, button") && cursorRef.current) {
        cursorRef.current.classList.add("cursor-hover");
      }
    };
    const onOut = (event) => {
      if (event.target.closest("a, button") && cursorRef.current) {
        cursorRef.current.classList.remove("cursor-hover");
      }
    };
    const animate = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
        ringX += (mouseX - ringX) * 0.14;
        ringY += (mouseY - ringY) * 0.14;
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      frameId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    frameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return { cursorRef, ringRef };
}
