import React from "react";
import {InputGroup} from "../../../Components/Inputs/InputGroup/InputGroup";

export const GetExperience = (props) => {
    const name = "experience";
    const type = "number";


    return (
        <InputGroup
            name={name}
            type={type}
            change={props.change}
        >
            How many years of experience do you have?
        </InputGroup>
    );
};
