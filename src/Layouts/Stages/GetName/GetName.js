import React from "react";
import {InputGroup} from "../../../Components/Inputs/InputGroup/InputGroup";

export const GetName = (props) => {
    return (
        <InputGroup
            name="name"
            type="text"
            change={props.change}
        >
            Welcome! What is your name?
        </InputGroup>

    );
};

