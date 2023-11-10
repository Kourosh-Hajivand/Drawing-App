"use client";

import { useEffect, useRef } from "react";

export default function useDraw() {
  const canvesRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const Handler = (e: MouseEvent) => {
      console.log({ x: e.clientX, y: e.clientY });
      computePointInCanves(e);
    };
    const computePointInCanves = (e: MouseEvent) => {
      const canvas = canvesRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      return { x, y };
    };
    canvesRef.current?.addEventListener("mousemove", Handler);
    //  Remove eventListener
    return () =>
      // eslint-disable-next-line react-hooks/exhaustive-deps
      canvesRef.current?.addEventListener("mousemove", Handler);
  }, []);
  return { canvesRef };
}
// Just for have some status
