import React, {useState} from "react";
import UserAnswersContext from "../Context/UserAnswersContext";
import {InputComponents, InputTypes} from "../Enums/InputTypes";
import {faAngular, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons";

const FormConfig = (props) => {
    const [nameState, setName] = useState("");
    const [experienceState, setExperience] = useState("");
    const [frameworkState, setFramework] = useState("");
    const [fullstackState, setFullstack] = useState("");
    const [salaryState, setSalary] = useState(15);
    const [startDateState, setStartDate] = useState("");


    const stages = [
        {
            id: "name",
            question: "name",
            answer: nameState,
            setAnswer: setName,
            text: "Welcome! What is your name?",
            type: InputTypes.TEXT,
            inputComponent: InputComponents.INPUT_GROUP,
        },
        {
            id: "experience",
            question: "experience",
            answer: experienceState,
            setAnswer: setExperience,
            text: "How many years of experience do you have?",
            inputComponent: InputComponents.INPUT_GROUP,
        },
        {
            id: "framework",
            question: "preferred framework",
            answer: frameworkState,
            setAnswer: setFramework,
            text: "Which is your preferred frontend framework/library?",
            inputComponent: InputComponents.RADIO_GROUP,
            options: [
                {id: "angular", label: "angular", icon: faAngular},
                {id: "react", label: "react", icon: faReact},
                {id: "vue", label: "vue", icon: faVuejs},
            ],
        },
        {
            id: "fullstack",
            question: "fullstack",
            answer: fullstackState,
            setAnswer: setFullstack,
            text: "Do you consider yourself a fullstack developer?",
            inputComponent: InputComponents.RADIO_GROUP,
            options: [
                {id: "yes", label: "yes"},
                {id: "no", label: "no"},
            ],
        },
        {
            id: "salary",
            question: "salary expectation",
            answer: salaryState,
            setAnswer: setSalary,
            text: "What are your salary expectations?",
            inputComponent: InputComponents.SALARY,
        },
        {
            id: "start",
            question: "start date",
            answer: startDateState,
            setAnswer: setStartDate,
            text: "When can you start working?",
            inputComponent: InputComponents.DATEPICKER,
        },
    ];

    const userAnswersContext = {
        stages: stages,
    };

    return (
        <UserAnswersContext.Provider value={userAnswersContext}>
            {props.children}
        </UserAnswersContext.Provider>
    );
};

export default FormConfig;
