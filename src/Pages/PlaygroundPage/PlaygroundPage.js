import React, {useContext} from "react";
import classes from "./style.module.scss";
import GetSalaryExpectation from "../../Layouts/Stages/GetSalaryExpectation/GetSalaryExpectation";
import GetName from "../../Layouts/Stages/GetName/GetName";
import GetPreferredFramework from "../../Layouts/Stages/GetPreferredFramework/GetPreferredFramework";
import NavigationButtons from "../../Layouts/NavigationButtons/NavigationButtons";
import GetExperience from "../../Layouts/Stages/GetExperience/GetExperience";
import GetStartDate from "../../Layouts/Stages/GetStartDate/GetStartDate";
import UserAnswersContext from "../../Context/UserAnswersContext";

const PlaygroundPage = (props) => {
    const userAnswersContext = useContext(UserAnswersContext);
    const {currentStage} = userAnswersContext;

    const getNameComponent = (<GetName/>);

    const salaryExpectationComponent = (<GetSalaryExpectation/>);

    const preferredFrameworkComponent = (<GetPreferredFramework/>);

    const startDateComponent = (<GetStartDate/>);

    const getExperienceComponent = (<GetExperience/>);


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
                <NavigationButtons/>
            </div>
        </div>
    );
};

export default PlaygroundPage;
