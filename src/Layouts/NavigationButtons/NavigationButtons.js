import React, {useContext} from "react";
import classes from "./style.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import UserAnswersContext from "../../Context/UserAnswersContext";
import {useHistory, useParams} from "react-router-dom";

const NavigationButtons = ({fixing, handleSubmit}) => {
    const {index} = useParams();
    const history = useHistory();

    const userAnswersContext = useContext(UserAnswersContext);
    const {stages} = userAnswersContext;
    const currentStage = stages[index - 1];
    const isBackButtonVisible = index > 1 && !fixing;
    const isNextButtonVisible = currentStage.answer;
    const getVisibility = (isVisible) => isVisible ? "visible" : "hidden";

    const navigate = (num) => {
        if (fixing) {
            history.push(`/confirmation`);
        } else {
            const updatedIndex = +index + num;
            history.push(`/interviewer/${updatedIndex}`);
        }
    };

    const onSuccess = (_) => {
        navigate(1);
    };

    const onError = () => null;

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
            onClick={handleSubmit(onSuccess, onError)}
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
