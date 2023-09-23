import React from "react";
import InputSlider from "../InputSlider/InputSlider";
import { useDrawCanvas } from "./CanvasMatrix.hooks";
import classes from "./CanvasMatrix.module.css";
import { IProps } from "./CanvasMatrix.utils";

const CanvasMatrix = (props: IProps) => {
  const { canvasRef, zoomScale, setZoomScale } = useDrawCanvas(props);

  const onScaleChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    setZoomScale(Number(e.currentTarget.value));
  };

  return (
    <main className={classes.rootContainer}>
      <section className={classes.canvasBox}>
        <canvas ref={canvasRef} className={classes.matrixCanvas}></canvas>
      </section>
      <section className={classes.canvasActions}>
        <InputSlider
          min={0.1}
          max={2}
          step={0.1}
          valueLabel={`${(zoomScale * 100).toFixed()}%`}
          value={zoomScale}
          onChange={onScaleChange}
        />
      </section>
    </main>
  );
};

export default CanvasMatrix;
