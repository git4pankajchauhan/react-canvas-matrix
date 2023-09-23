import { useEffect, useRef, useState } from "react";
import { IProps } from "./CanvasMatrix.utils";
import { setDPI } from "./CanvasMatrix.functions";

export const useDrawCanvas = (props: IProps) => {
  const { gridColumn, gridRows, gridHeight, gridWidth } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [zoomScale, setZoomScale] = useState<number>(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const totalWidth = gridColumn * gridWidth;
    const totalHeight = gridRows * gridHeight;

    /* This is a function that sets the DPI (dots per inch)
    of the canvas to ensure that it is rendered properly on different devices with different pixel
    densities. */
    setDPI(canvas, ctx, totalWidth, totalHeight);

    /* This is clearing the entire canvas by erasing all  the pixels within the specified rectangle. */
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid boxes
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridColumn; col++) {
        const x = col * gridWidth;
        const y = row * gridHeight;

        // Draw border
        ctx.strokeRect(x, y, gridWidth, gridHeight);

        // Draw count in the center
        const count = `${row * gridColumn + col + 1}`;
        const textWidth = ctx.measureText(count).width;
        const textX = x + (gridWidth - textWidth) / 2;
        const textY = y + gridHeight / 2;
        ctx.fillText(count, textX, textY);
      }
    }
  }, [gridRows, gridColumn, gridHeight, gridWidth]);
  return { canvasRef, zoomScale, setZoomScale };
};
