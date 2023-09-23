import React from "react";
import classes from "./InputSlider.module.css";

interface IProps extends React.HTMLProps<HTMLInputElement> {
  valueLabel?: string;
}

const InputSlider = (props: IProps) => {
  const { valueLabel, ...resProps } = props;
  return (
    <div className={classes.rootContainer}>
      {valueLabel ? <span className={classes.valueLabel}>{valueLabel}</span> : null}
      <div className={classes.inputWrapper}>
        <span className={classes.minMaxlabel}>-</span>
        <input type="range" className={classes.inputSlider} {...resProps} />
        <span className={classes.minMaxlabel}>+</span>
      </div>
    </div>
  );
};

export default InputSlider;
