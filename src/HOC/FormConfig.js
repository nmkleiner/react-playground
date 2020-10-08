import React, {useState} from "react";
import GetName from "../Layouts/Stages/GetName/GetName";
import GetExperience from "../Layouts/Stages/GetExperience/GetExperience";
import GetFramework from "../Layouts/Stages/GetFramework/GetFramework";
import GetSalaryExpectation from "../Layouts/Stages/GetSalary/GetSalary";
import GetStartDate from "../Layouts/Stages/GetStartDate/GetStartDate";
import GetFullstack from "../Layouts/Stages/GetFullstack/GetFullstack";
import UserAnswersContext from "../Context/UserAnswersContext";

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
            component: <GetName/>,
            question: "name",
            answer: nameState,
            setAnswer: setName,
        },
        {
            id: "experience",
            component: <GetExperience/>,
            question: "experience",
            answer: experienceState,
            setAnswer: setExperience,
        },
        {
            id: "framework",
            component: <GetFramework/>,
            question: "preferred framework",
            answer: frameworkState,
            setAnswer: setFramework,
        },
        {
            id: "fullstack",
            component: <GetFullstack/>,
            question: "fullstack",
            answer: fullstackState,
            setAnswer: setFullstack,
        },
        {
            id: "salary",
            component: <GetSalaryExpectation/>,
            question: "salary expectation",
            answer: salaryState,
            setAnswer: setSalary,
        },
        {
            id: "start",
            component: <GetStartDate/>,
            question: "start date",
            answer: startDateState,
            setAnswer: setStartDate,
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
}

export default FormConfig;
