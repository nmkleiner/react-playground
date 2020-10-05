import React from "react";
import classes from "./style.module.scss";

const RoundButton = ({click, children}) => {
    const buttonClasses = [classes.RoundButton, "primary-color"].join(" ");

    return (
        <button
            className={buttonClasses}
            onClick={click()}
        >
            {children}
        </button>
    );
};

export default RoundButton;
