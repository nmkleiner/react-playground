import React from "react";
import classes from "./style.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faShekelSign} from "@fortawesome/free-solid-svg-icons";
import RoundButton from "../../RoundButton/RoundButton";


const SalaryInput = ({text, type, answer, setAnswer}) => {

    const onClick = (ev, num) => {
        ev.preventDefault();

        const updatedAnswer = answer + num;
        if (updatedAnswer > 10) {
            setAnswer(updatedAnswer);
        }
    };

    return (
        <div className={classes.SalaryExpectation}>
            <div className={classes.row + " row"}>
                <div className={classes.message}>{text}
                    <span className="primary-color"> <FontAwesomeIcon icon={faShekelSign}/>{answer}K</span>
                </div>
                <div className={classes.buttonsWrapper}>
                    <RoundButton click={(ev) => onClick(ev, -1)}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </RoundButton>
                    <RoundButton click={(ev) => onClick(ev, 1)}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </RoundButton>
                </div>
            </div>
        </div>
    );
};

export default SalaryInput;
