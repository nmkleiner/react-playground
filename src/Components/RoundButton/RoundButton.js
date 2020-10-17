import React from "react";
import classes from "./style.module.scss";

const RoundButton = ({click, children}) => {

    return (
        <button
            className={classes.RoundButton}
            onClick={click}
        >
            {children}
        </button>
    );
};

export default RoundButton;
