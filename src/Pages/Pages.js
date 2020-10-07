import React, {useState} from "react";
import InterviewerPage from "../Pages/InterviewerPage/InterviewerPage";
import Header from "../Layouts/Header/Header";
import UserAnswersContext from "../Context/UserAnswersContext";
import {BrowserRouter, Route} from "react-router-dom";
import ConfirmationPage from "../Pages/ConfirmationPage/ConfirmationPage";
import GetName from "../Layouts/Stages/GetName/GetName";
import GetExperience from "../Layouts/Stages/GetExperience/GetExperience";
import GetFramework from "../Layouts/Stages/GetFramework/GetFramework";
import GetSalaryExpectation from "../Layouts/Stages/GetSalary/GetSalary";
import GetStartDate from "../Layouts/Stages/GetStartDate/GetStartDate";

const Pages = () => {
    const [currentStageState, setCurrentStage] = useState(0);

    const [nameState, setName] = useState("");
    const [experienceState, setExperience] = useState("");
    const [frameworkState, setFramework] = useState("");
    const [salaryState, setSalary] = useState();
    const [startDateState, setStartDate] = useState("");

    const incrementCurrentStage = () => {
        setTimeout(() => {
            setCurrentStage(currentStageState + 1);
        }, 200);
    };

    const setAndIncrementStage = (func) => (arg) => {
        func(arg);
        incrementCurrentStage();
    };

    const stages = [
        {component: <GetName/>, answer: nameState, setAnswer: setName},
        {component: <GetExperience/>, answer: experienceState, setAnswer: setExperience},
        {component: <GetFramework/>, answer: frameworkState, setAnswer: setAndIncrementStage(setFramework)},
        {component: <GetSalaryExpectation/>, answer: salaryState, setAnswer: setAndIncrementStage(setSalary)},
        {component: <GetStartDate/>, answer: startDateState, setAnswer: setAndIncrementStage(setStartDate)},
    ];

    const userAnswersContext = {
        stages: stages,
        currentStage: currentStageState,
        setCurrentStage: setCurrentStage,
        incrementCurrentStage: incrementCurrentStage,
    };

    return (
        <div className="app">
            <UserAnswersContext.Provider value={userAnswersContext}>
                <Header/>
                <BrowserRouter>
                    <Route path="/confirmation" exact component={ConfirmationPage}/>
                    <Route path="/interviewer" exact component={InterviewerPage}/>
                </BrowserRouter>
            </UserAnswersContext.Provider>
        </div>
    );
};

export default Pages;
