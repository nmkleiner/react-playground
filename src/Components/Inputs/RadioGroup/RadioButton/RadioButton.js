import React from "react";
import "./style.scss";

export default (props) => {
    const {label, checked, id, check} = props;

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
                <span>{label}</span>
            </label>
        </div>
    );
}
