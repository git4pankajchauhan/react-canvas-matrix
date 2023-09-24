/**
 * The setDPI function sets the DPI (dots per inch) of a canvas element to match the device pixel
 * ratio.
 * @param {HTMLCanvasElement} canvas - The canvas parameter is an HTMLCanvasElement, which represents a
 * drawing area on a web page. It is used to draw graphics using JavaScript.
 * @param {CanvasRenderingContext2D} ctx - The parameter `ctx` is the rendering context of the canvas
 * element. It is an instance of the `CanvasRenderingContext2D` interface, which provides methods and
 * properties for drawing on the canvas.
 * @param {number} width - The width parameter represents the desired width of the canvas in pixels.
 * @param {number} height - The `height` parameter in the `setDPI` function represents the desired
 * height of the canvas in pixels. It is used to set the height of the canvas element and to scale the
 * context accordingly.
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

/**
 * The `drawTriangle` function takes a canvas context, coordinates, and side length as parameters and
 * draws an equilateral triangle on the canvas.
 * @param {CanvasRenderingContext2D} ctx - The `ctx` parameter is the CanvasRenderingContext2D object,
 * which represents the drawing context on the canvas. It is used to perform drawing operations such as
 * drawing lines, shapes, and text on the canvas.
 * @param {number} x - The x-coordinate of the center of the triangle.
 * @param {number} y - The parameter `y` represents the y-coordinate of the center point of the
 * triangle.
 * @param {number} sideLength - The `sideLength` parameter represents the length of each side of the
 * equilateral triangle.
 */
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

/**
 * The function `drawCircle` takes a canvas rendering context, coordinates, and radius as parameters
 * and draws a circle on the canvas.
 * @param {CanvasRenderingContext2D} ctx - The parameter `ctx` is of type `CanvasRenderingContext2D`,
 * which represents the 2D rendering context for the drawing surface of a `<canvas>` element. It
 * provides methods and properties for drawing shapes, text, and images on the canvas.
 * @param {number} x - The x parameter represents the x-coordinate of the center of the circle.
 * @param {number} y - The 'y' parameter represents the vertical position of the center of the circle
 * on the canvas.
 * @param {number} radius - The "radius" parameter in the "drawCircle" function represents the radius
 * of the circle that you want to draw. It determines the size of the circle.
 */
export const drawCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.lineWidth = radius * 0.6;
  ctx.stroke();
  ctx.closePath();
};

/**
 * The function `drawRoundRect` draws a rounded rectangle on a canvas using the provided context,
 * position, and radius.
 * @param {CanvasRenderingContext2D} ctx - The parameter `ctx` is the CanvasRenderingContext2D object,
 * which represents the 2D rendering context for the drawing surface of a canvas element. It provides
 * methods and properties for drawing shapes, text, images, and more on the canvas.
 * @param {number} x - The x-coordinate of the top-left corner of the rounded rectangle.
 * @param {number} y - The `y` parameter represents the y-coordinate of the top-left corner of the
 * rounded rectangle.
 * @param {number} rh - The parameter "rh" stands for "rounded height" and it represents the height of
 * the rounded rectangle shape that will be drawn on the canvas.
 */
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

/**
 * The function `drawRegisteredTrademark` draws a registered trademark symbol (letter R inside a
 * circle) on a canvas at a specified position and size.
 * @param {CanvasRenderingContext2D} ctx - The `ctx` parameter is the canvas rendering context. It is
 * used to draw on the canvas.
 * @param {number} x - The x parameter represents the x-coordinate of the center of the registered
 * trademark symbol on the canvas.
 * @param {number} y - The `y` parameter represents the y-coordinate of the center of the registered
 * trademark symbol on the canvas.
 * @param {number} radius - The `radius` parameter represents the radius of the circle in which the
 * registered trademark symbol will be drawn.
 */
export const drawRegisteredTrademark = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
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

/**
 * The `drawMultipleSymbols` function draws multiple symbols (dollar sign, asterisk, number 1, and
 * "RE") on a canvas at specified positions and sizes.
 * @param {CanvasRenderingContext2D} ctx - The `ctx` parameter is the CanvasRenderingContext2D object,
 * which represents the drawing context on the canvas. It is used to perform drawing operations such as
 * drawing shapes, text, and images on the canvas.
 * @param {number} x - The x-coordinate of the starting point of the symbols.
 * @param {number} y - The `y` parameter represents the vertical position of the symbols on the canvas.
 * It determines the starting point of the symbols along the y-axis.
 * @param {number} height - The `height` parameter represents the height of the canvas area where the
 * symbols will be drawn.
 * @param {number} width - The width parameter represents the width of the canvas or the area where the
 * symbols will be drawn.
 */
export const drawMultipleSymbols = (ctx: CanvasRenderingContext2D, x: number, y: number, height: number, width: number) => {
  ctx.beginPath();

  ctx.font = `${Math.min(width * 0.3, 14)}px Roboto`;
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
