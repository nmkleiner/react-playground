import React from "react";
import "./style.scss";

export default (props) => {
    let className = "input-label";

    if (props.isFloating) {
        className += " floating";
    }

    return (
        <div className={className}>
            {props.name}
        </div>
    );
}
