import React, {useContext} from "react";
import classes from "./style.module.scss";
import NavigationButtons from "../../Layouts/NavigationButtons/NavigationButtons";
import UserAnswersContext from "../../Context/UserAnswersContext";
import {Redirect, useLocation, useParams} from "react-router-dom";


const InterviewerPage = () => {
    let {index} = useParams();
    const location = useLocation();
    const query = location.search;
    let fixing = false;
    if (query) {
        const [param, value] = query.substring(1).split("=");
        console.log(param, value);
        if (param === "fixing" && value === "1") {
            fixing = true;
            console.log(fixing);
        }
    }

    const userAnswersContext = useContext(UserAnswersContext);
    const stageIndex = +index - 1;
    const {stages} = userAnswersContext;
    const currentStage = stages[stageIndex];

    if (!index) {
        return <Redirect to={"/interviewer/1"}/>;
    }

    if (!currentStage) {
        return <Redirect to={"/confirmation"}/>;
    }

    return (
        <div className={classes.InterviewerPage}>
            <div className={classes.stagesContainer}>
                <div className={classes.stageContainer + " column"}>
                    {currentStage.component}
                </div>
                <NavigationButtons fixing={fixing}/>
            </div>
        </div>
    );
};

export default InterviewerPage;
