import React from "react";
import classes from "./style.module.scss";

const ActionButton = (props) => {
    const {disabled, click, children} = props;

    return (
        <button
            className={classes.ActionButton}
            disabled={disabled}
            onClick={click}>
            {children}
        </button>
    );
};

export default ActionButton;
