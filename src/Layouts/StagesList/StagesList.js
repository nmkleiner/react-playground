import React from "react";


export default (props) => {
    const {stages} = props;
    let currentIndex = 0;

    stages.forEach((stage) => {
        if (stage.isComplete) {
            currentIndex++;
        }
    });

    const currentStage = stages[currentIndex];

    return currentStage.component;
}
