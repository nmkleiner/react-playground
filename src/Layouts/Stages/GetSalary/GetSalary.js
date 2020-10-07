import React, {useContext, useState} from "react";
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
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

    const index = 3;
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
        <div className="salary-expectation">
            <div className="row">
                <div>What are your salary expectations?
                    <span className="primary-color"> {presentedSalaryState}K</span>
                </div>
                <div className="buttons-wrapper ">
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