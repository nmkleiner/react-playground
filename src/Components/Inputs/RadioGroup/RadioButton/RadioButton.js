import React from "react";
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default (props) => {
    const {label, checked, id, check, icon} = props;

    const wrapperClasses = [
        "radio-button-wrapper",
        checked ? "checked" : "",
    ].join(" ");


    return (
        <div className={wrapperClasses}>
            <label htmlFor={id}>
                <input
                    name={id}
                    type="radio"
                    checked={checked}
                    onChange={check}
                />
                <span onClick={check} className="custom-radio-button pointer">
                    <span className="inner-circle"></span>
                </span>
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                <span className="label">{label}</span>
            </label>
        </div>
    );
}
