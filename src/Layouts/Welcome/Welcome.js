import React, {useState} from "react";
import "./style.scss";

export default (props) => {

    const [showTooltipState, setShowTooltip] = useState(false);
    const tooltip = (
        <span
            className="tooltip primary-color"
            style={{opacity: showTooltipState ? 1 : 0}}
        >
        Change name
        </span>
    );

    const showTooltip = () => {
        setShowTooltip(true);
    };

    const hideTooltip = () => {
        setShowTooltip(false);
    };

    const click = () => {
        hideTooltip();
        props.click();
    };

    const askName = (
        <div className="welcome">
            <p className="welcome-text">Welcome! <br/>What is your name?</p>
            <input
                placeholder="name"
                className="welcome-input primary-color"
                type="text"
                onChange={(ev) => props.change(ev.target.value)}
            />
        </div>
    );

    const welcomeName = (
        <div className="welcome goUp">
            <p
                className="welcome-statement primary-color pointer"
                onClick={click}
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
            >
                Hello {props.name}!
            </p>
            {tooltip}
        </div>
    );

    return !props.name ? askName : welcomeName;
}

// TODO: welcome-statement position is kind of dangerous, maybe the whole thing should be inside the header
