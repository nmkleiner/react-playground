import * as React from "react";

const UserAnswersContext = React.createContext({
    stages: [],
    currentStage: "",
    setCurrentStage: () => null,
    incrementCurrentStage: () => null,
});

export default UserAnswersContext;
