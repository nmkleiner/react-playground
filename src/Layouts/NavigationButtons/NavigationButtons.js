import React, {useContext} from "react";
import classes from "./style.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import UserAnswersContext from "../../Context/UserAnswersContext";
import {Router, Redirect, useParams, useHistory} from "react-router-dom";

const NavigationButtons = () => {
    const {index} = useParams();
    const history = useHistory();

    const userAnswersContext = useContext(UserAnswersContext);
    const {stages} = userAnswersContext;
    const currentStage = stages[index - 1];
    const isBackButtonVisible = index > 1;
    const isNextButtonVisible = currentStage.answer;
    const getVisibility = (isVisible) => isVisible ? "visible" : "hidden";

    const navigate = (num) => {
        const updatedIndex = +index + num;
        history.push(`/interviewer/${updatedIndex}`)
    };

    const backButton = (
        <button
            style={{visibility: getVisibility(isBackButtonVisible)}}
            className={classes.navigationButton}
            onClick={() => navigate(-1)}
        >
            <FontAwesomeIcon icon={faArrowLeft}/> back
        </button>
    );

    const nextButton = (
        <button
            style={{visibility: getVisibility(isNextButtonVisible)}}
            className={classes.navigationButton}
            onClick={() => navigate(1)}
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
