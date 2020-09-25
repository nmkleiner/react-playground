import React, {useState} from "react";
import "./style.scss";
import RoundButton from "../../Components/RoundButton/RoundButton";
import ActionButton from "../../Components/ActionButton/ActionButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

export default () => {

    const [amountState, setAmount] = useState(18);

    const changeAmount = (n) => {
        const updatedAmount = amountState + n;

        if (updatedAmount >= 0) {
            setAmount(updatedAmount);
        }
    };

    const [salaryChosenState, setSalaryChosen] = useState(false);

    const actionButtonClick = amountState > 16 && amountState < 20 ?
        () => setSalaryChosen.bind(this, true) :
        () => null;


    let actionButtonText = "ok";
    if (amountState < 16) {
        actionButtonText = "hmm.. too little";
    } else if (amountState > 20) {
        actionButtonText = "hmm.. too much";
    }

    return !salaryChosenState ? (
            <div className="salary-expectation">
                <div className="row">
                    <div>What are your salary expectations?
                        <span className="primary-color"> {amountState}K</span>
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

                <ActionButton click={actionButtonClick}>
                    {actionButtonText}
                </ActionButton>
            </div>
        ) :
        (
            <div>OK mister</div>
        );
}
