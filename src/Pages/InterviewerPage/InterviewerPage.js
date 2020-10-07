import React, {useContext} from "react";
import classes from "./style.module.scss";
import NavigationButtons from "../../Layouts/NavigationButtons/NavigationButtons";
import UserAnswersContext from "../../Context/UserAnswersContext";
import {Redirect} from "react-router-dom";

const InterviewerPage = (props) => {
    console.log(props);

    const userAnswersContext = useContext(UserAnswersContext);
    const {currentStageIndex, stages} = userAnswersContext;

    const interviewComplete = currentStageIndex === stages.length;


    return interviewComplete ? <Redirect to="/confirmation"/> : (
        <div className={classes.InterviewerPage}>
            <div className={classes.stagesContainer}>
                <div className={classes.stageContainer + " column"}>
                    {stages[currentStageIndex].component}
                </div>
                <NavigationButtons/>
            </div>
        </div>
    );
};

export default InterviewerPage;
