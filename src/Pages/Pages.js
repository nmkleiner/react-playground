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

    const [nameState, setName] = useState("");
    const [experienceState, setExperience] = useState("");
    const [frameworkState, setFramework] = useState("");
    const [fullstackState, setFullstack] = useState("");
    const [salaryState, setSalary] = useState(15);
    const [startDateState, setStartDate] = useState("");

    const incrementCurrentStage = () => {
        setTimeout(() => {
            setCurrentStageIndex(currentStageIndexState + 1);
        }, 200);
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
            setAnswer: setFramework,
        },
        {
            component: <GetFullstack/>,
            question: "fullstack",
            answer: fullstackState,
            setAnswer: setFullstack,
        },
        {
            component: <GetSalaryExpectation/>,
            question: "salary expectation",
            answer: salaryState,
            setAnswer: setSalary,
        },
        {
            component: <GetStartDate/>,
            question: "start date",
            answer: startDateState,
            setAnswer: setStartDate,
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
