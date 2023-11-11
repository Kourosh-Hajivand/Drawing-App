"use client";
import useDraw from "@/util/hook/useDraw";

export default function Home() {
  const { canvesRef } = useDraw();
  function drawline({ prevPoint, curentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = curentPoint;
    const lineColor = "#000";
    const lineWidth = 5;
    let startPoint = prevPoint ?? curentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }
  return (
    <div className="w-full h-screen flex items-center justify-center py-10">
      <canvas
        ref={canvesRef}
        className="w-full max-w-[70%] h-full border border-neutral-400 rounded "
      />
    </div>
  );
}
