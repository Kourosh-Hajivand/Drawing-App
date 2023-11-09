type Draw = {
  ctx: CanvasRenderingContext2D;
  curentPoint: Point;
  prevPoint: Point | null;
};
type Point = { x: number; y: number };
