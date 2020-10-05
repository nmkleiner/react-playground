import React from "react";
import {InputGroup} from "../../../Components/Inputs/InputGroup/InputGroup";
import {InputTypes} from "../../../Enums/InputTypes";

export const GetExperience = (props) => {
    const {value, change} = props;
    const name = "experience";
    const type = InputTypes.NUMBER;

    return (
        <InputGroup
            name={name}
            type={type}
            value={value}
            change={change}
        >
            How many years of experience do you have?
        </InputGroup>
    );
};
