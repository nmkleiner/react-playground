import React, {useContext} from "react";
import {InputTypes} from "../../../Enums/InputTypes";
import InputGroup from "../../../Components/Inputs/InputGroup/InputGroup";
import UserAnswersContext from "../../../Context/UserAnswersContext";

const GetName = () => {
    const inputName = "name";
    const type = InputTypes.TEXT;
    const index = 0;

    const userAnswersContext = useContext(UserAnswersContext);
    const {stages} = userAnswersContext;
    const stage = stages[index];
    const {answer, setAnswer }= stage;


    return (
        <InputGroup
            label={inputName}
            type={type}
            value={answer}
            change={setAnswer}
        >
            Welcome! What is your name?
        </InputGroup>

    );
};

export default GetName;
