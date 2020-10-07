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
import GetFullstack from "../Layouts/Stages/GetFullstack/GetFullstack";

const Pages = () => {
    const [currentStageIndexState, setCurrentStageIndex] = useState(0);

    const [nameState, setName] = useState("noam");
    const [experienceState, setExperience] = useState("2");
    const [frameworkState, setFramework] = useState("vue");
    const [fullstackState, setFullstack] = useState("yes");
    const [salaryState, setSalary] = useState(20);
    const [startDateState, setStartDate] = useState("20/10/20");

    const incrementCurrentStage = () => {
        setTimeout(() => {
            setCurrentStageIndex(currentStageIndexState + 1);
        }, 200);
    };

    const setAndIncrementStage = (func) => (arg) => {
        func(arg);
        incrementCurrentStage();
    };

    const stages = [
        {
            component: <GetName/>,
            question: "name",
            answer: nameState,
            setAnswer: setName,
        },
        {
            component: <GetExperience/>,
            question: "experience",
            answer: experienceState,
            setAnswer: setExperience,
        },
        {
            component: <GetFramework/>,
            question: "preferred framework",
            answer: frameworkState,
            setAnswer: setAndIncrementStage(setFramework),
        },
        {
            component: <GetFullstack/>,
            question: "fullstack",
            answer: fullstackState,
            setAnswer: setAndIncrementStage(setFullstack),
        },
        {
            component: <GetSalaryExpectation/>,
            question: "salary expectation",
            answer: salaryState,
            setAnswer: setAndIncrementStage(setSalary),
        },
        {
            component: <GetStartDate/>,
            question: "start date",
            answer: startDateState,
            setAnswer: setAndIncrementStage(setStartDate),
        },
    ];

    const userAnswersContext = {
        stages: stages,
        currentStageIndex: currentStageIndexState,
        setCurrentStageIndex: setCurrentStageIndex,
        incrementCurrentStage: incrementCurrentStage,
    };

    return (
        <div className="app">
            <UserAnswersContext.Provider value={userAnswersContext}>
                <Header/>
                <BrowserRouter>
                    <Route path="/confirmation" exact component={ConfirmationPage}/>
                    <Route path="/interviewer" component={InterviewerPage}/>
                </BrowserRouter>
            </UserAnswersContext.Provider>
        </div>
    );
};

export default Pages;
