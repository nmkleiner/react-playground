import * as React from "react";

const UserAnswersContext = React.createContext({
    stages: [],
    currentStage: "",
    setCurrentStageIndex: () => null,
    incrementCurrentStage: () => null,
});

export default UserAnswersContext;
