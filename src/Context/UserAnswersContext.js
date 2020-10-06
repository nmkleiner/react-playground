import * as React from "react";

const UserAnswersContext = React.createContext({
    currentStage: "",
    setCurrentStage: () => null,
    name: "",
    setName: () => null,
    expectedSalary: "",
    setExpectedSalary: () => null,
    framework: "",
    setFramework: () => null,
    startDate: "",
    setStartDate: () => null,
});

export default UserAnswersContext;
