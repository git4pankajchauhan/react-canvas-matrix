import { useRef } from "react";
import InputSlider from "../InputSlider/InputSlider";
import { useDrawCanvas, usePanAndZoom } from "./CanvasMatrix.hooks";
import classes from "./CanvasMatrix.module.css";
import { IProps } from "./CanvasMatrix.utils";

const CanvasMatrix = (props: IProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scale, onScaleChange, onPanStart, onPanActive, onPanEnd } = usePanAndZoom(canvasRef);

  useDrawCanvas(props, canvasRef, scale);

  return (
    <main className={classes.rootContainer}>
      <section className={classes.canvasBox}>
        <canvas
          ref={canvasRef}
          className={classes.matrixCanvas}
          onPointerDown={onPanStart}
          onPointerMove={onPanActive}
          onPointerUp={onPanEnd}
        ></canvas>
      </section>
      <section className={classes.canvasActions}>
        <InputSlider
          min={0.1}
          max={2}
          step={0.1}
          valueLabel={`${(scale * 100).toFixed()}%`}
          value={scale}
          onChange={onScaleChange}
        />
      </section>
    </main>
  );
};

export default CanvasMatrix;
