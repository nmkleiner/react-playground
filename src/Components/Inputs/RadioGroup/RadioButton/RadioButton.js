import React from "react";
import "./style.scss";

export default (props) => {
    const {label, checked, id, check} = props;
    const wrapperClassNames = "radio-button-wrapper" + (checked ? " checked" : "");

    return (
        <div className={wrapperClassNames}>
            <label htmlFor={id}>
                {label}
                {" " + checked.toString()}
                <input
                    name={id}
                    type="radio"
                    checked={checked}
                    onChange={check}
                />
                <span onClick={check} className="custom-radio-button pointer">
                    <span className="inner-circle"></span>
                </span>
            </label>
        </div>
    );
}
