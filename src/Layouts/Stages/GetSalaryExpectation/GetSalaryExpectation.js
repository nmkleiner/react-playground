import React, {useContext} from "react";
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import RoundButton from "../../../Components/RoundButton/RoundButton";
import ActionButton from "../../../Components/ActionButton/ActionButton";
import UserAnswersContext from "../../../Context/UserAnswersContext";


const GetSalaryExpectation = (props) => {
    const {setSalarySelected} = props;

    const userAnswersContext = useContext(UserAnswersContext);
    const {expectedSalary, setExpectedSalary} = userAnswersContext;

    const changeAmount = (n) => {
        const updatedAmount = expectedSalary + n;

        if (updatedAmount >= 0) {
            setExpectedSalary(updatedAmount);
        }
    };

    const minSalary = 16;
    const maxSalary = 20;
    const validSalary = expectedSalary >= minSalary && expectedSalary < maxSalary;
    const actionButtonClick = () => setSalarySelected(true);


    let actionButtonText = "ok";
    if (!validSalary) {
        if (expectedSalary < minSalary) {
            actionButtonText = "hmm.. too little";
        } else if (expectedSalary >= maxSalary) {
            actionButtonText = "hmm.. too much";
        }
    }

    return (
        <div className="salary-expectation">
            <div className="row">
                <div>What are your salary expectations?
                    <span className="primary-color"> {expectedSalary}K</span>
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
                click={actionButtonClick}
            >
                {actionButtonText}
            </ActionButton>
        </div>
    );
};

export default GetSalaryExpectation;
