import React from "react";
import classes from "./style.module.scss";
import {InputField} from "../../../Components/Inputs/InputField/InputField";

export const GetExperience = (props) => {
    return (
        <div className={classes.GetExperience}>
            {props.children}
            <p className="welcome-text">Welcome! <br/>What is your name?</p>
            <InputField
                name="experience"
                type="number"
                change={props.change}
            />
        </div>
    );
};
