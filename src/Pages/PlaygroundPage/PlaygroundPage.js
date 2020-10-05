import React from "react";
import classes from "./style.module.scss";
import GetSalaryExpectation from "../../Layouts/Stages/GetSalaryExpectation/GetSalaryExpectation";
import GetName from "../../Layouts/Stages/GetName/GetName";
import GetPreferredFramework from "../../Layouts/Stages/GetPreferredFramework/GetPreferredFramework";
import NavigationButtons from "../../Layouts/NavigationButtons/NavigationButtons";
import GetExperience from "../../Layouts/Stages/GetExperience/GetExperience";
import GetStartDate from "../../Layouts/Stages/GetStartDate/GetStartDate";

const PlaygroundPage = (props) => {
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
        change={setName}
        value={name}
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
        <div className={classes.PlaygroundPage}>
            <div className={classes.stagesContainer}>
                <div className={classes.stageContainer + " column"}>
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

export default PlaygroundPage;
