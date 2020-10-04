import React from "react";
import "./style.scss";

export default (props) => {
    let labelClasses = [
        "input-label",
        props.isFloating ? "floating" : ""
    ].join(" ");

    return (
        <div className={labelClasses}>
            {props.name}
        </div>
    );
}
