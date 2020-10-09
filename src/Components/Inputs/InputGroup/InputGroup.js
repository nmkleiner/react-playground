import React from "react";
import classes from "./style.module.scss";
import InputField from "../../../Components/Inputs/InputField/InputField";

const InputGroup = (props) => {
    return (
        <div className={classes.InputGroup}>
            <p className={classes.message}>{props.text}</p>
            <InputField {...props}/>
        </div>
    );
};

export default InputGroup;
