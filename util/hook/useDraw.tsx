"use client";

import { useEffect, useRef, useState } from "react";

export default function useDraw(
  onDraw: ({ ctx, curentPoint, prevPoint }: Draw) => void
) {
  const [MouseDown, setMouseDown] = useState(false);
  const canvesRef = useRef<HTMLCanvasElement>(null);
  const prevPoint = useRef<null | Point>(null);
  const onMouseDown = () => setMouseDown(true);
  const clearCanves = () => {
    const canvas = canvesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  useEffect(() => {
    const Handler = (e: MouseEvent) => {
      if (!MouseDown) return;
      const curentPoint = computePointInCanves(e);
      const ctx = canvesRef.current?.getContext("2d");
      if (!ctx || !curentPoint) return;
      onDraw({ ctx, curentPoint, prevPoint: prevPoint.current });
      prevPoint.current = curentPoint;
    };
    const computePointInCanves = (e: MouseEvent) => {
      const canvas = canvesRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      return { x, y };
    };
    const mouseUpHandler = () => {
      setMouseDown(false);
      prevPoint.current = null;
    };
    canvesRef.current?.addEventListener("mousemove", Handler);
    window.addEventListener("mouseup", mouseUpHandler);
    //  Remove eventListener
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      canvesRef.current?.removeEventListener("mousemove", Handler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [onDraw]);
  return { canvesRef, onMouseDown, clearCanves };
}
