import React from "react";
import {InputGroup} from "../../../Components/Inputs/InputGroup/InputGroup";
import {InputTypes} from "../../../Enums/InputTypes";

export const GetName = (props) => {
    const {value, change} = props;
    const name = "name";
    const type = InputTypes.TEXT;

    return (
        <InputGroup
            name={name}
            type={type}
            value={value}
            change={change}
        >
            Welcome! What is your name?
        </InputGroup>

    );
};

