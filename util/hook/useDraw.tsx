import { useRef } from "react";

export default function useDraw() {
  const canvesRef = useRef<HTMLCanvasElement>(null);

  return canvesRef;
}
