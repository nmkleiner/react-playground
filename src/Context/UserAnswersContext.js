import * as React from "react";

const UserAnswersContext = React.createContext({
    currentStage: "",
    setCurrentStage: () => null,
    name: "",
    setName: () => null,
    expectedSalary: 0,
    setExpectedSalary: () => null,
    framework: "",
    setFramework: () => null,
    startDate: "",
    setStartDate: () => null,
    experience: 0,
    setExperience : () => null,
});

export default UserAnswersContext;
