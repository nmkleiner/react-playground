import React, {useState} from "react";
import "./App.scss";
import InterviewerPage from "./Pages/InterviewerPage/InterviewerPage";
import Header from "./Layouts/Header/Header";
import UserAnswersContext from "./Context/UserAnswersContext";
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import ConfirmationPage from "./Pages/ConfirmationPage/ConfirmationPage";


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
        setExperience: setExperience,
        framework: frameworkState,
        setFramework: setFramework,
        expectedSalary: expectedSalaryState,
        setExpectedSalary: setExpectedSalary,
        startDate: startDateState,
        setStartDate: setStartDate,
    };


    return (
        <BrowserRouter>
            <div className="app">
                <UserAnswersContext.Provider value={userAnswersContext}>
                    <Header/>
                    <Route path="/interviewer" exact render={() => <InterviewerPage/>}/>
                    <Route path="/confirmation" exact render={() => <ConfirmationPage/>}/>
                </UserAnswersContext.Provider>
            </div>
        </BrowserRouter>
    );
};

export default App;
