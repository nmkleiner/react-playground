import React, {useContext} from "react";
import classes from "./style.module.scss";
import NavigationButtons from "../../Layouts/NavigationButtons/NavigationButtons";
import UserAnswersContext from "../../Context/UserAnswersContext";
import {useHistory, useParams, Redirect} from "react-router-dom";

const InterviewerPage = () => {
    let {index} = useParams();
    const history = useHistory();

    if (!index) {
        index = 1;
        history.push("/interviewer/1")
    }
    console.log(index);
    const stageIndex = +index - 1;

    const userAnswersContext = useContext(UserAnswersContext);
    const {stages} = userAnswersContext;
    const currentStage = stages[stageIndex];

    return !currentStage ? <Redirect to="/confirmation"/> : (
        <div className={classes.InterviewerPage}>
            <div className={classes.stagesContainer}>
                <div className={classes.stageContainer + " column"}>
                    {currentStage.component}
                </div>
                <NavigationButtons/>
            </div>
        </div>
    );
};

export default InterviewerPage;
