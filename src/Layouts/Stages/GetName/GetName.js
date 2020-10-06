import React, {useContext} from "react";
import {InputTypes} from "../../../Enums/InputTypes";
import InputGroup from "../../../Components/Inputs/InputGroup/InputGroup";
import UserAnswersContext from "../../../Context/UserAnswersContext";

const GetName = () => {
    const userAnswersContext = useContext(UserAnswersContext);
    const change = userAnswersContext.setName;
    const value = userAnswersContext.name;

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

export default GetName;
