import React, {useContext} from "react";
import classes from "./style.module.scss";
import NavigationButtons from "../../Layouts/NavigationButtons/NavigationButtons";
import UserAnswersContext from "../../Context/UserAnswersContext";
import {Redirect} from "react-router-dom";

const InterviewerPage = () => {
    const userAnswersContext = useContext(UserAnswersContext);
    const {currentStage, stages} = userAnswersContext;

    const currentStageComponent = stages[currentStage].component;
    const interviewComplete = currentStage === stages.length;

    return interviewComplete ? <Redirect to="/confirmation"/> : (
        <div className={classes.InterviewerPage}>
            <div className={classes.stagesContainer}>
                <div className={classes.stageContainer + " column"}>
                    {currentStageComponent}
                </div>
                <NavigationButtons/>
            </div>
        </div>
    );
};

export default InterviewerPage;
