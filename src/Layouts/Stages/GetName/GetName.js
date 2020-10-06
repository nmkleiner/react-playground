import React, {useContext} from "react";
import {InputTypes} from "../../../Enums/InputTypes";
import InputGroup from "../../../Components/Inputs/InputGroup/InputGroup";
import UserAnswersContext from "../../../Context/UserAnswersContext";

const GetName = () => {
    const userAnswersContext = useContext(UserAnswersContext);
    const {name, setName} = userAnswersContext;

    const inputName = "name";
    const type = InputTypes.TEXT;

    return (
        <InputGroup
            label={inputName}
            type={type}
            value={name}
            change={setName}
        >
            Welcome! What is your name?
        </InputGroup>

    );
};

export default GetName;
