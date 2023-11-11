"use client";
import useDraw from "@/util/hook/useDraw";
import { useState } from "react";
import { ChromePicker } from "react-color";
export default function Home() {
  const [color, setcolor] = useState<string>("#000");
  const { canvesRef, onMouseDown, clearCanves } = useDraw(drawline);
  function drawline({ prevPoint, curentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = curentPoint;
    const lineColor = color;
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
    ctx.arc(startPoint.x, startPoint.y, 2, 0, -0.5 * Math.PI);
    ctx.fill();
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center py-10 gap-10">
      <div className="flex flex-col gap-5">
        {" "}
        <ChromePicker
          color={color}
          onChange={(e) => {
            setcolor(e.hex);
          }}
        />
        <button
          className="w-full px-6 py-4 rounded border border-neutral-400 shadow"
          onClick={() => clearCanves()}
        >
          Clear
        </button>
      </div>
      <canvas
        ref={canvesRef}
        onMouseDown={onMouseDown}
        width={720}
        height={750}
        className="  border border-neutral-400 rounded "
      />
    </div>
  );
}
