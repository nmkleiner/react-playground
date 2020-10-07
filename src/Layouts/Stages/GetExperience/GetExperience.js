import React, {useContext} from "react";
import InputGroup from "../../../Components/Inputs/InputGroup/InputGroup";
import {InputTypes} from "../../../Enums/InputTypes";
import UserAnswersContext from "../../../Context/UserAnswersContext";

const GetExperience = () => {
    const label = "experience";
    const type = InputTypes.NUMBER;

    const index = 1;

    const userAnswersContext = useContext(UserAnswersContext);
    const {stages} = userAnswersContext;
    const stage = stages[index];
    const {answer, setAnswer }= stage;

    return (
        <InputGroup
            label={label}
            type={type}
            value={answer}
            change={setAnswer}
        >
            How many years of experience do you have?
        </InputGroup>
    );
};

export default GetExperience;
