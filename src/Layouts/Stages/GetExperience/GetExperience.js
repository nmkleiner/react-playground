import React, {useContext} from "react";
import InputGroup from "../../../Components/Inputs/InputGroup/InputGroup";
import {InputTypes} from "../../../Enums/InputTypes";
import UserAnswersContext from "../../../Context/UserAnswersContext";

const GetExperience = () => {
    const userAnswersContext = useContext(UserAnswersContext);
    const {experience, setExperience} = userAnswersContext;

    const label = "experience";
    const type = InputTypes.NUMBER;

    return (
        <InputGroup
            label={label}
            type={type}
            value={experience}
            change={setExperience}
        >
            How many years of experience do you have?
        </InputGroup>
    );
};

export default GetExperience;
