import React from "react";
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import RoundButton from "../../../Components/RoundButton/RoundButton";
import ActionButton from "../../../Components/ActionButton/ActionButton";

export default (props) => {
    const {setSalarySelected, salaryAmount, setSalary} = props;

    const changeAmount = (n) => {
        const updatedAmount = salaryAmount + n;

        if (updatedAmount >= 0) {
            setSalary(updatedAmount);
        }
    };

    const minSalary = 16;
    const maxSalary = 20;
    const validSalary = salaryAmount >= minSalary && salaryAmount < maxSalary;
    const actionButtonClick = () => setSalarySelected(true);


    let actionButtonText = "ok";
    if (!validSalary) {
        if (salaryAmount < minSalary) {
            actionButtonText = "hmm.. too little";
        } else if (salaryAmount >= maxSalary) {
            actionButtonText = "hmm.. too much";
        }
    }

    return (
        <div className="salary-expectation">
            <div className="row">
                <div>What are your salary expectations?
                    <span className="primary-color"> {salaryAmount}K</span>
                </div>
                <div className="buttons-wrapper ">
                    <RoundButton click={() => changeAmount.bind(this, -1)}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </RoundButton>
                    <RoundButton click={() => changeAmount.bind(this, 1)}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </RoundButton>
                </div>
            </div>

            <ActionButton
                disabled={!validSalary}
                click={actionButtonClick}>
                {actionButtonText}
            </ActionButton>
        </div>
    );
}
