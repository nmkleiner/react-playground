import React from "react";
import classes from "./style.module.scss";

const ActionButton = (props) => {
    const {disabled, click, children} = props;
    const classNames = [classes.ActionButton, "primary-background-color"].join(" ");

    return (
        <button
            className={classNames}
            disabled={disabled}
            onClick={click}>
            {children}
        </button>
    );
};

export default ActionButton;
