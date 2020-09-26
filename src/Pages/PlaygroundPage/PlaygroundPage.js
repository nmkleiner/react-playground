import React from "react";
import "./style.scss";
import SalaryExpectation from "../../Layouts/Stages/SalaryExpectation/SalaryExpectation";
import GetName from "../../Layouts/Stages/GetName/GetName";
import StagesList from "../../Layouts/StagesList/StagesList";

export default (props) => {
    const {setName, name, salaryChosen, setSalaryChosen, salaryAmount, setSalary} = props;

    const getName = (<GetName
        name={name}
        change={setName}
    />);

    const salaryExpectation = (<SalaryExpectation
        setSalaryChosen={setSalaryChosen}
        salaryAmount={salaryAmount}
        setSalary={setSalary}
    />);


    const stages = [
        {order: 0, component: getName, isComplete: props.name},
        {order: 1, component: salaryExpectation, isComplete: salaryChosen},
        {order: 2, component: (<p>ok</p>), isComplete: null},
    ];


    return (
        <div className="playgroundPage">
            <StagesList stages={stages}/>
        </div>
    );
};
