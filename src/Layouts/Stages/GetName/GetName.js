import React from "react";
import classes from "./style.module.scss";
import {InputGroup} from "../../../Components/Inputs/InputGroup/InputGroup";

export const GetName = (props) => {
    return (
        <InputGroup
            name="name"
            type="text"
            change={props.change}
        >
            <p className={classes.welcomeText}>Welcome! <br/>What is your name?</p>
        </InputGroup>

    );
};

