import React from "react";
import "./style.scss";
import SalaryExpectation from "../../Layouts/Stages/SalaryExpectation/SalaryExpectation";
import GetName from "../../Layouts/Stages/GetName/GetName";
import PreferredFramework from "../../Layouts/Stages/PreferredFramework/PreferredFramework";
import NavigationButtons from "../../Layouts/NavigationButtons/NavigationButtons";

export default (props) => {
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
    } = props;

    const getName = (<GetName
        name={name}
        change={setName}
    />);

    const salaryExpectation = (<SalaryExpectation
        setSalarySelected={setSalarySelected}
        salaryAmount={salaryAmount}
        setSalary={setSalary}
    />);

    const preferredFramework = (<PreferredFramework
        framework={framework}
        setFramework={setFramework}
        frameworkSelected={frameworkSelected}
        setFrameworkSelected={setFrameworkSelected}
    />);


    const stages = [
        getName,
        salaryExpectation,
        preferredFramework,
        ("papa"),
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
