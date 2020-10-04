import React from "react";
import "./style.scss";
import {SalaryExpectation} from "../../Layouts/Stages/SalaryExpectation/SalaryExpectation";
import {GetName} from "../../Layouts/Stages/GetName/GetName";
import {PreferredFramework} from "../../Layouts/Stages/PreferredFramework/PreferredFramework";
import {NavigationButtons} from "../../Layouts/NavigationButtons/NavigationButtons";
import StartDate from "../../Layouts/Stages/StartDate/StartDate";


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

    const salaryExpectationComponent = (<SalaryExpectation
        setSalarySelected={setSalarySelected}
        salaryAmount={salaryAmount}
        setSalary={setSalary}
    />);

    const preferredFrameworkComponent = (<PreferredFramework
        framework={framework}
        setFramework={setFramework}
        frameworkSelected={frameworkSelected}
        setFrameworkSelected={setFrameworkSelected}
    />);

    const startDateComponent = (<StartDate
        startDate={startDate}
        setStartDate={setStartDate}
    />);


    const stages = [
        getNameComponent,
        salaryExpectationComponent,
        preferredFrameworkComponent,
        startDateComponent,
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
