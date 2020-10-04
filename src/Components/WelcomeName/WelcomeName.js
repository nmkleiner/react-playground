import React, {useState} from "react";
import "./style.scss";

export const WelcomeName = (props) => {
    const {name} = props;

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

    const message = `Hello ${name}!`;

    return (
        props.name ?
            <div className="welcome goUp">
                <p
                    className={"welcome-statement primary-color pointer"}
                    onClick={click}
                    onMouseEnter={showTooltip}
                    onMouseLeave={hideTooltip}
                >
                    {message}
                </p>
                {tooltip}
            </div> : null
    );
}
