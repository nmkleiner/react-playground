import React, {useState} from "react";
import "./App.scss";
import PlaygroundPage from "./Pages/PlaygroundPage/PlaygroundPage";
import {debounce} from "lodash";
import Header from "./Layouts/Header/Header";
import UserAnswersContext from "./Context/UserAnswersContext";


const App = () => {
    /* already in context */
    // currentStage
    // setCurrentStage
    // name
    // setName

    /* need to add */
    // expectedSalaryState
    // setExpectedSalaryState
    // frameworkState
    // setFrameworkState
    // startDateState
    // setStartDateState

    const [currentStageState, setCurrentStage] = useState(0);

    const [nameState, setNameState] = useState("");

    const [expectedSalaryState, setExpectedSalaryState] = useState(0);

    const [frameworkState, setFrameworkState] = useState("");
    // TODO: stop using this
    const [frameworkSelectedState, setFrameworkSelectedState] = useState(false);

    const [startDateState, setStartDateState] = useState("");

    const incrementCurrentStage = () => setCurrentStage(currentStageState + 1);

    const setName = debounce((name) => {
        setNameState(name);
        incrementCurrentStage();
    }, 800);

    const setFrameworkSelected = (isFrameworkSelected) => {
        setFrameworkSelectedState(isFrameworkSelected);
        incrementCurrentStage();
    };

    const setExpectedSalary = (expectedSalary) => {
        setExpectedSalaryState(expectedSalary);
        incrementCurrentStage();
    };

    const setStartDate = (date) => {
        setStartDateState(date);
        incrementCurrentStage();
    };

    return (
        <div className="app">
            <UserAnswersContext.Provider value={{
                currentStage: currentStageState,
                setCurrentStage: setCurrentStage,
                name: nameState,
                setName: setName,
                expectedSalary: expectedSalaryState,
                setExpectedSalary: setExpectedSalary,
                framework: frameworkState,
                setFramework: setFrameworkState,
                startDate: startDateState,
                setStartDate: setStartDate,
            }}
            >
                <Header/>
                <PlaygroundPage

                    frameworkSelected={frameworkSelectedState}
                    setFrameworkSelected={setFrameworkSelected}
                />
            </UserAnswersContext.Provider>
            <pre>
                name: {nameState}<br/>
                salaryAmount: {expectedSalaryState}<br/>
                framework: {frameworkState}<br/>
                frameworkSelected: {frameworkSelectedState.toString()}<br/>
                startDate: {startDateState}<br/>
                experience:
            </pre>
        </div>
    );
};

export default App;
