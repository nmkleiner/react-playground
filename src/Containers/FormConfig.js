import React, {useEffect, useState} from "react";
import UserAnswersContext from "../Context/UserAnswersContext";
import {InputComponents, InputTypes} from "../Enums/InputTypes";
import {faAngular, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons";
import StorageService from "../Services/StorageService";

const FormConfig = (props) => {
    const [nameState, setName] = useState("");
    const [emailState, setEmail] = useState("");
    const [experienceState, setExperience] = useState("");
    const [frameworkState, setFramework] = useState("");
    const [fullstackState, setFullstack] = useState("");
    const [salaryState, setSalary] = useState(10);
    const [startDateState, setStartDate] = useState("");

    const formStates = [
        {state: nameState, setState: setName},
        {state: emailState, setState: setEmail},
        {state: experienceState, setState: setExperience},
        {state: frameworkState, setState: setFramework},
        {state: fullstackState, setState: setFullstack},
        {state: salaryState, setState: setSalary},
        {state: startDateState, setState: setStartDate},
    ];

    const saveFormAnswersToStorage = () => {
        formStates.forEach((formState, index) => {
            if (formState.state) {
                StorageService.saveToStorage(`form_state_${index}`, formState.state);
            }
        });
    };

    const loadFormAnswersFromStorage = () => {
        formStates.forEach((formState, index) => {
            const savedState = StorageService.loadFromStorage(`form_state_${index}`);

            if (savedState) {
                formState.setState(savedState);
            }
        });
    };

    const init = () => {
        loadFormAnswersFromStorage();
    };

    const onUpdate = () => {
        saveFormAnswersToStorage();
    };

    useEffect(init, []);

    useEffect(onUpdate);


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
            id: "email",
            question: "e-mail",
            answer: emailState,
            setAnswer: setEmail,
            text: "What is your email address?",
            type: InputTypes.EMAIL,
            inputComponent: InputComponents.INPUT_GROUP,
            rules: {pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/},
        },
        {
            id: "experience",
            question: "experience",
            answer: experienceState,
            setAnswer: setExperience,
            text: "How many years of experience do you have?",
            inputComponent: InputComponents.INPUT_GROUP,
            rules: {min: 1},
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
