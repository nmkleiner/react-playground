import React, {useContext} from "react";
import classes from "./style.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import UserAnswersContext from "../../Context/UserAnswersContext";

const NavigationButtons = () => {
    const userAnswersContext = useContext(UserAnswersContext);
    const {currentStage, setCurrentStage} = userAnswersContext;

    const backButton = currentStage > 0 && (
        <button
            className={classes.navigationButton}
            onClick={() => setCurrentStage(currentStage - 1)}
        >
            <FontAwesomeIcon icon={faArrowLeft}/> back
        </button>
    );

    return (
        <div className={classes.NavigationButtons}>
            {backButton}
        </div>
    );
};

export default NavigationButtons;
