import React from "react";
import classes from "./style.module.scss";
import AnswerEditButton from "../AnswerEditButton/AnswerEditButton";

const AnswerConfirmation = ({question, answer, index}) => {
    return (
        <span className={classes.AnswerConfirmation}>
            <span className={classes.name}>{question + ": "}</span>
            <span className={"primary-color"}>{answer}</span>
            <AnswerEditButton index={index}/>
        </span>
    );
};

export default AnswerConfirmation;
