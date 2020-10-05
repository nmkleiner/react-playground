import React, {useState} from "react";
import "./App.scss";
import {PlaygroundPage} from "./Pages/PlaygroundPage/PlaygroundPage";
import {debounce} from "lodash";
import Header from "./Layouts/Header/Header";


const App = () => {

    const [currentStageState, setCurrentStage] = useState(0);

    const [nameState, setNameState] = useState("");

    const [salaryAmountState, setSalaryAmountState] = useState(18);
    const [salarySelectedState, setSalarySelectedState] = useState(false);

    const [frameworkState, setFrameworkState] = useState("");
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

    const setSalarySelected = (isSalarySelected) => {
        setSalarySelectedState(isSalarySelected);
        incrementCurrentStage();
    };

    const setStartDate = (date) => {
        setStartDateState(date);
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

                startDate={startDateState}
                setStartDate={setStartDate}
            />

            <pre>
                name: {nameState}<br/>
                salarySelected: {salarySelectedState.toString()}<br/>
                salaryAmount: {salaryAmountState}<br/>
                framework: {frameworkState}<br/>
                frameworkSelected: {frameworkSelectedState.toString()}<br/>
                startDate: {startDateState}<br/>
                experience:
            </pre>
        </div>
    );
};

export default App;
