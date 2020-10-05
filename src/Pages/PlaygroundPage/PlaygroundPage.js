import React from "react";
import "./style.scss";
import {GetSalaryExpectation} from "../../Layouts/Stages/GetSalaryExpectation/GetSalaryExpectation";
import {GetName} from "../../Layouts/Stages/GetName/GetName";
import {GetPreferredFramework} from "../../Layouts/Stages/GetPreferredFramework/GetPreferredFramework";
import {NavigationButtons} from "../../Layouts/NavigationButtons/NavigationButtons";
import GetStartDate from "../../Layouts/Stages/GetStartDate/GetStartDate";
import {GetExperience} from "../../Layouts/Stages/GetExperience/GetExperience";


export const PlaygroundPage = (props) => {
    const {
        currentStage,
        setCurrentStage,
        setName,
        name,
        setSalarySelected,
        salaryAmount,
        setSalary,
        framework,
        setFramework,
        frameworkSelected,
        setFrameworkSelected,
        startDate,
        setStartDate,
    } = props;

    const getNameComponent = (<GetName
        name={name}
        change={setName}
    />);

    const salaryExpectationComponent = (<GetSalaryExpectation
        setSalarySelected={setSalarySelected}
        salaryAmount={salaryAmount}
        setSalary={setSalary}
    />);

    const preferredFrameworkComponent = (<GetPreferredFramework
        framework={framework}
        setFramework={setFramework}
        frameworkSelected={frameworkSelected}
        setFrameworkSelected={setFrameworkSelected}
    />);

    const startDateComponent = (<GetStartDate
        startDate={startDate}
        setStartDate={setStartDate}
    />);

    const getExperienceComponent = (<GetExperience

    />);


    const stages = [
        getNameComponent,
        salaryExpectationComponent,
        preferredFrameworkComponent,
        startDateComponent,
        getExperienceComponent,
    ];

    const currentStageComponent = stages[currentStage];

    return (
        <div className="playgroundPage">
            <div className="stages-container">
                <div className="column stage-container">
                    {currentStageComponent}
                </div>

                <NavigationButtons
                    currentStage={currentStage}
                    setCurrentStage={setCurrentStage}
                />
            </div>
        </div>
    );
};
