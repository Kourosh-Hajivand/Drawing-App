"use client";
import useDraw from "@/util/hook/useDraw";

export default function Home() {
  const { canvesRef } = useDraw();
  return (
    <div className="w-full h-screen flex items-center justify-center py-10">
      <canvas
        ref={canvesRef}
        className="w-full max-w-[70%] h-full border border-neutral-400 rounded "
      />
    </div>
  );
}
