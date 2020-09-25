import React from "react";
import "./style.scss";
import SalaryExpectation from "../../Layouts/SalaryExpectation/SalaryExpectation";
import GetName from "../../Layouts/GetName/GetName";

export default (props) => {
    const {setName, name} = props;

    const salaryExpectation = name ? (<SalaryExpectation/>) : null;

    return (
        <div className="playgroundPage">
            <GetName name={name} change={setName}/>
            {salaryExpectation}
        </div>
    );
};
