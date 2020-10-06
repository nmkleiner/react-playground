import React, {useState} from "react";
import "./App.scss";
import PlaygroundPage from "./Pages/PlaygroundPage/PlaygroundPage";
import {debounce} from "lodash";
import Header from "./Layouts/Header/Header";
import UserAnswersContext from "./Context/UserAnswersContext";


const App = () => {
    const [currentStageState, setCurrentStage] = useState(0);

    const [nameState, setNameState] = useState("");
    const [experienceState, setExperienceState] = useState("");
    const [frameworkState, setFrameworkState] = useState("");
    const [expectedSalaryState, setExpectedSalaryState] = useState(0);
    const [startDateState, setStartDateState] = useState("");

    const incrementCurrentStage = () => setCurrentStage(currentStageState + 1);

    const setName = (name) => {
        setNameState(name);
        setTimeout(() => {
            incrementCurrentStage();
        }, 800);
    };

    const setExperience = (experience) => {
        setExperienceState(experience);
        setTimeout(() => {
            incrementCurrentStage();
        }, 800);
    };

    const setFramework = (selectedFramework) => {
        setFrameworkState(selectedFramework);
        setTimeout(() => {
            incrementCurrentStage();
        }, 800);
    };

    const setExpectedSalary = (expectedSalary) => {
        setExpectedSalaryState(expectedSalary);
        setTimeout(() => {
            incrementCurrentStage();
        }, 100);
    };

    const setStartDate = (date) => {
        setStartDateState(date);
        setTimeout(() => {
            incrementCurrentStage();
        }, 800);
    };

    const userAnswersContext = {
        currentStage: currentStageState,
        setCurrentStage: setCurrentStage,
        name: nameState,
        setName: setName,
        experience: experienceState,
        setExperience : setExperience,
        framework: frameworkState,
        setFramework: setFramework,
        expectedSalary: expectedSalaryState,
        setExpectedSalary: setExpectedSalary,
        startDate: startDateState,
        setStartDate: setStartDate,
    };


    return (
        <div className="app">
            <UserAnswersContext.Provider value={userAnswersContext}>
                <Header/>
                <PlaygroundPage/>
            </UserAnswersContext.Provider>
            <pre>
                name: {nameState}<br/>
                experience: {experienceState}<br/>
                framework: {frameworkState}<br/>
                salaryAmount: {expectedSalaryState}<br/>
                startDate: {startDateState}<br/>
            </pre>
        </div>
    );
};

export default App;
