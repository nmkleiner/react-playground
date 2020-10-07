import React from "react";
import classes from "./style.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";

const AnswerConfirmation = ({question, answer}) => {
    return (
        <span className={classes.AnswerConfirmation}>
            <span className={classes.name}>{question + ": "}</span>
            <span className={classes.answer + " primary-color"}>{answer}</span>
            <FontAwesomeIcon icon={faEdit}/>
        </span>
    );
};

export default AnswerConfirmation;
