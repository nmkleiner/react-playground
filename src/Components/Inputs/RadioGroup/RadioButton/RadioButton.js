import React from "react";
import classes from "./style.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {InputTypes} from "../../../../Enums/InputTypes";

const RadioButton = (props) => {
    const {label, checked, id, check, icon} = props;

    const wrapperClasses = [
        classes.radioButtonWrapper,
        checked ? classes.checked : "",
    ].join(" ");

    const customButtonClasses = [
        classes.customRadioButton,
        "pointer",
    ].join(" ");

    const iconElement = icon && (<FontAwesomeIcon icon={icon}/>);

    return (
        <div className={wrapperClasses}>
            <label htmlFor={id}>
                <input
                    name={id}
                    type={InputTypes.RADIO}
                    checked={checked}
                    onChange={check}
                />
                <span onClick={check} className={customButtonClasses}>
                    <span className={classes.innerCircle}/>
                </span>
                {iconElement}
                <span className={classes.label}>{label}</span>
            </label>
        </div>
    );
};

export default RadioButton;
