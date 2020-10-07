import React, {useContext, useState} from "react";
import classes from "./style.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faShekelSign} from "@fortawesome/free-solid-svg-icons";
import RoundButton from "../../../Components/RoundButton/RoundButton";
import UserAnswersContext from "../../../Context/UserAnswersContext";


const GetSalary = () => {
    const index = 4;
    const userAnswersContext = useContext(UserAnswersContext);
    const {stages} = userAnswersContext;
    const stage = stages[index];
    const {setAnswer, answer} = stage;
    const onClick = (num) => {
        const updatedAnswer = answer + num;
        if (updatedAnswer > 10) {
            setAnswer(updatedAnswer);
        }
    };

    return (
        <div className={classes.SalaryExpectation}>
            <div className={classes.row + " row"}>
                <div className={classes.message}>What are your salary expectations?
                    <span className="primary-color"> <FontAwesomeIcon icon={faShekelSign}/>{answer}K</span>
                </div>
                <div className={classes.buttonsWrapper}>
                    <RoundButton click={() => onClick(-1)}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </RoundButton>
                    <RoundButton click={() => onClick(1)}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </RoundButton>
                </div>
            </div>
        </div>
    );
};

export default GetSalary;
