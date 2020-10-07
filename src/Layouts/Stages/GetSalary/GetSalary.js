import React, {useContext, useState} from "react";
import classes from "./style.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faShekelSign} from "@fortawesome/free-solid-svg-icons";
import RoundButton from "../../../Components/RoundButton/RoundButton";
import ActionButton from "../../../Components/ActionButton/ActionButton";
import UserAnswersContext from "../../../Context/UserAnswersContext";


const GetSalary = () => {
    const minSalary = 16;
    const maxSalary = 20;
    const [presentedSalaryState, setPresentedSalary] = useState(18);
    const validSalary = presentedSalaryState >= minSalary && presentedSalaryState < maxSalary;

    const updatePresentedSalary = (n) => {
        const updatedSalary = presentedSalaryState + n;

        if (updatedSalary >= 0) {
            setPresentedSalary(updatedSalary);
        }
    };

    const index = 4;
    const userAnswersContext = useContext(UserAnswersContext);
    const {stages} = userAnswersContext;
    const stage = stages[index];
    const {setAnswer} = stage;

    const actionButtonClick = () => setAnswer(presentedSalaryState);


    let actionButtonText = "ok";
    if (!validSalary) {
        if (presentedSalaryState < minSalary) {
            actionButtonText = "hmm.. too little";
        } else if (presentedSalaryState >= maxSalary) {
            actionButtonText = "hmm.. too much";
        }
    }

    return (
        <div className={classes.SalaryExpectation}>
            <div className={classes.row + " row"}>
                <div className={classes.message}>What are your salary expectations?
                    <span className="primary-color"> <FontAwesomeIcon icon={faShekelSign}/>{presentedSalaryState}K</span>
                </div>
                <div className={classes.buttonsWrapper}>
                    <RoundButton click={() => updatePresentedSalary.bind(this, -1)}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </RoundButton>
                    <RoundButton click={() => updatePresentedSalary.bind(this, 1)}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </RoundButton>
                </div>
            </div>

            <ActionButton
                disabled={!validSalary}
                click={actionButtonClick}
            >
                {actionButtonText}
            </ActionButton>
        </div>
    );
};

export default GetSalary;
