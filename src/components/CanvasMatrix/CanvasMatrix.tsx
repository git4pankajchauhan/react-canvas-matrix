import React from "react";
import InputSlider from "../InputSlider/InputSlider";
import { useDrawCanvas } from "./CanvasMatrix.hooks";
import classes from "./CanvasMatrix.module.css";
import { IProps } from "./CanvasMatrix.utils";

const CanvasMatrix = (props: IProps) => {
  const { canvasRef, scale, setScale } = useDrawCanvas(props);

  const onScaleChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    setScale(Number(e.currentTarget.value));
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
          valueLabel={`${(scale * 100).toFixed()}%`}
          value={scale}
          onChange={onScaleChange}
        />
      </section>
    </main>
  );
};

export default CanvasMatrix;
