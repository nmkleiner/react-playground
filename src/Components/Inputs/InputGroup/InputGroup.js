import React from "react";
import classes from "./style.module.scss";
import {InputField} from "../../../Components/Inputs/InputField/InputField";

export const InputGroup = (props) => {
    const {name, type, value, change, children} = props;
    return (
        <div className={classes.InputGroup}>
            <p className={classes.message}>{children}</p>
            <InputField
                name={name}
                type={type}
                value={value}
                change={change}
            />
        </div>
    );
};