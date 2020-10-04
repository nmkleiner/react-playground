import React from "react";
import "./style.scss";

export const NavigationButtons = (props) => {
    const {currentStage, setCurrentStage} = props;

    const backButton = currentStage > 0 && (
        <button
            className="navigation-button pointer"
            onClick={() => setCurrentStage(currentStage - 1)}
        >{"<<back"}</button>
    );

    return (
        <div className="navigation-buttons">
            {backButton}
        </div>
    );
};
