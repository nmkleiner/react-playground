import React from "react";
import classes from "./style.module.scss";

const InputLabel = ({isFloating, label}) => {
    let labelClasses = [
        classes.InputLabel,
        isFloating ? classes.floating : "",
    ].join(" ");

    return (
        <div className={labelClasses}>
            {label}
        </div>
    );
};

export default InputLabel;
