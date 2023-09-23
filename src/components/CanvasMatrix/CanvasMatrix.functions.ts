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

export const drawTriangle = (ctx: CanvasRenderingContext2D, x: number, y: number, sideLength: number) => {
  // Calculate the height of the equilateral triangle
  const height = (Math.sqrt(3) / 2) * sideLength;

  // Calculate the coordinates of the triangle's vertices
  const x1 = x - sideLength / 2;
  const y1 = y + height / 2;

  const x2 = x + sideLength / 2;
  const y2 = y + height / 2;

  const x3 = x;
  const y3 = y - height / 2;

  ctx.beginPath();

  // Move to the first vertex
  ctx.moveTo(x1, y1);

  // Draw lines to the other two vertices
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);

  // Close the path to complete the triangle
  ctx.closePath();

  // Fill and/or stroke the triangle
  ctx.fill();
  ctx.stroke();
};

export const drawCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.lineWidth = radius * 0.6;
  ctx.stroke();
  ctx.closePath();
};

export const drawRoundRect = (ctx: CanvasRenderingContext2D, x: number, y: number, rh: number) => {
  ctx.beginPath();
  // ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  // ctx.arc(x, y, radius * 0.85, 0, Math.PI * 2, true);
  // ctx.roundRect(x, y, radius, radius * 1.3, 0, 0, 2 * Math.PI);
  ctx.roundRect(x, y, rh * 0.75, rh, rh);
  // ctx.ellipse(x, y, radius * 0.85, radius * 0.85 * 1.3, 0, 0, 2 * Math.PI);
  // ctx.fill("evenodd");
  ctx.lineWidth = rh * 0.13;
  ctx.stroke();
  ctx.closePath();
};

export const drawTrademark = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.lineWidth = radius * 0.25;

  const text = `R`;
  ctx.font = `bold ${radius * 1.4}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y + 0.1);

  ctx.stroke();
  ctx.closePath();
};

export const drawMultipleSymbols = (ctx: CanvasRenderingContext2D, x: number, y: number, height: number, width: number) => {
  ctx.beginPath();

  ctx.font = `${Math.min(width * 0.3, 14)}px`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const x1 = x + width * 0.2;
  const y1 = y + height * 0.2;
  ctx.fillText("$", x1, y1);

  const x2 = x + width * 0.8;
  const y2 = y + height * 0.2;
  ctx.fillText("*", x2, y2);

  const x3 = x + width * 0.5;
  const y3 = y + height * 0.5;
  ctx.fillText("1", x3, y3);

  const x4 = x + width * 0.25;
  const y4 = y + height * 0.8;
  ctx.fillText("RE", x4, y4);

  const x5 = x + width * 0.8;
  const y5 = y + height * 0.8;
  ctx.fillText("*", x5, y5);

  ctx.stroke();
  ctx.closePath();
};
