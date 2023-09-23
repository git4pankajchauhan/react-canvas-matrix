/**
 * The function sets the device pixel ratio for a canvas element to ensure proper rendering on
 * high-resolution screens.
 */
export const setDPI = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, width: number, height: number) => {
  ctx.imageSmoothingEnabled = true;

  // Get the device pixel ratio
  const dpr = Math.max(window.devicePixelRatio || 1, 2);

  // Set the canvas dimensions accounting for the device pixel ratio
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  // Scale the context to match the device pixel ratio
  ctx.scale(dpr, dpr);
};
