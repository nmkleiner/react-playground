import React from "react";
import classes from "./style.module.scss";

const InputLabel = ({isFloating, name}) => {
    let labelClasses = [
        classes.InputLabel,
        isFloating ? classes.floating : "",
    ].join(" ");

    return (
        <div className={labelClasses}>
            {name}
        </div>
    );
};

export default InputLabel;
