import React, { useState } from "react";
import InputSlider from "../InputSlider/InputSlider";
import classes from "./CanvasMatrix.module.css";
import { IProps } from "./CanvasMatrix.utils";

const CanvasMatrix = (props: IProps) => {
  const {} = props;

  const [scale, setScale] = useState(1);

  const onScaleChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    console.log(e.currentTarget.value);
    setScale(Number(e.currentTarget.value));
  };

  return (
    <main className={classes.rootContainer}>
      <section className={classes.canvasBox}>
        <canvas className={classes.matrixCanvas}></canvas>
      </section>
      <section className={classes.canvasActions}>
        <InputSlider valueLabel={`${scale}`} value={scale} onChange={onScaleChange} />
      </section>
    </main>
  );
};

export default CanvasMatrix;
