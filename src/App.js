import React, {useEffect, useState} from "react";
import "./App.scss";
import Header from "./Layouts/Header/Header";
import PlaygroundPage from "./Pages/PlaygroundPage/PlaygroundPage";
import {debounce} from "lodash";


const App = () => {

    const [currentStageState, setCurrentStage] = useState(0);

    const [nameState, setNameState] = useState("");

    const [salaryAmountState, setSalaryAmountState] = useState(18);
    const [salarySelectedState, setSalarySelectedState] = useState(true);

    const [frameworkState, setFrameworkState] = useState("");
    const [frameworkSelectedState, setFrameworkSelectedState] = useState(false);

    const incrementCurrentStage = () => setCurrentStage(currentStageState + 1);

    const setName = debounce((name) => {
        setNameState(name);
        incrementCurrentStage();
    }, 800);

    const setFrameworkSelected = (isFrameworkSelected) => {
        setFrameworkSelectedState(isFrameworkSelected);
        incrementCurrentStage();
    };

    const setSalarySelected = (isSalarySelected) => {
        setSalarySelectedState(isSalarySelected);
        incrementCurrentStage();
    };


    return (
        <div className="app">
            <Header name={nameState}/>
            <PlaygroundPage
                currentStage={currentStageState}
                setCurrentStage={setCurrentStage}

                name={nameState}
                setName={setName}

                salarySelected={salarySelectedState}
                setSalarySelected={setSalarySelected}
                salaryAmount={salaryAmountState}
                setSalary={setSalaryAmountState}

                framework={frameworkState}
                setFramework={setFrameworkState}
                frameworkSelected={frameworkSelectedState}
                setFrameworkSelected={setFrameworkSelected}
            />

            <pre>
                name: {nameState}<br/>
                salarySelected: {salarySelectedState.toString()}<br/>
                salaryAmount: {salaryAmountState}<br/>
                framework: {frameworkState}<br/>
                frameworkSelected: {frameworkSelectedState.toString()}<br/>
            </pre>
        </div>
    );
};

export default App;
