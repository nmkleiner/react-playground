import React, {useContext} from "react";
import classes from "./style.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import UserAnswersContext from "../../Context/UserAnswersContext";

const NavigationButtons = () => {
    const userAnswersContext = useContext(UserAnswersContext);
    const {currentStageIndex, setCurrentStageIndex, stages} = userAnswersContext;
    const currentStage = stages[currentStageIndex];
    const isBackButtonVisible = currentStageIndex > 0;
    const isNextButtonVisible = currentStage.answer;
    const getVisibility = (isVisible) => isVisible ? "visible" : "hidden";

    const backButton = (
        <button
            style={{visibility: getVisibility(isBackButtonVisible)}}
            className={classes.navigationButton}
            onClick={() => setCurrentStageIndex(currentStageIndex - 1)}
        >
            <FontAwesomeIcon icon={faArrowLeft}/> back
        </button>
    );

    const nextButton = (
        <button
            style={{visibility: getVisibility(isNextButtonVisible)}}
            className={classes.navigationButton}
            onClick={() => setCurrentStageIndex(currentStageIndex - 1)}
        >
            next <FontAwesomeIcon icon={faArrowRight}/>
        </button>
    );

    return (
        <div className={classes.NavigationButtons}>
            {backButton}
            {nextButton}
        </div>
    );
};

export default NavigationButtons;
