"use client";

import { useEffect, useRef } from "react";

export default function useDraw() {
  const canvesRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const Handler = (e: MouseEvent) => {
      console.log({ x: e.clientX, y: e.clientY });
    };
    canvesRef.current?.addEventListener("mousemove", Handler);
    //  Remove eventListener
    return () =>
      // eslint-disable-next-line react-hooks/exhaustive-deps
      canvesRef.current?.addEventListener("mousemove", Handler);
  }, []);
  return { canvesRef };
}
