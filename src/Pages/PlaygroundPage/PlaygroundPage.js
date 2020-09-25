import React, {useState} from "react";
import "./style.scss";
import SalaryExpectation from "../../Layouts/SalaryExpectation/SalaryExpectation";
import Welcome from "../../Layouts/Welcome/Welcome";
import {debounce} from "lodash";

export default () => {

    const [nameState, setNameState] = useState("noam");

    const setName = debounce((name) => {
        setNameState(name);
    }, 800);

    const resetName = () => {
        setNameState("");
    };

    const salaryExpectation = nameState ? (<SalaryExpectation/>) : null;

    return (
        <div className="playgroundPage">
            <Welcome name={nameState} change={setName} click={resetName}/>
            {salaryExpectation}
        </div>
    );
};
