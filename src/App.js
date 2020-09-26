import React, {useState} from "react";
import "./App.scss";
import Header from "./Layouts/Header/Header";
import PlaygroundPage from "./Pages/PlaygroundPage/PlaygroundPage";
import {debounce} from "lodash";


const App = () => {

    const [nameState, setNameState] = useState("noam");
    const [salaryAmountState, setSalaryAmount] = useState(18);
    const [salaryChosenState, setSalaryChosen] = useState(true);

    const setName = debounce((name) => {
        setNameState(name);
    }, 800);

    const resetName = () => {
        setNameState("");
    };

    return (
        <div className="app">
            <Header
                name={nameState}
                click={resetName}
            />
            <PlaygroundPage
                name={nameState}
                setName={setName}

                salaryChosen={salaryChosenState}
                setSalaryChosen={setSalaryChosen}

                salaryAmount={salaryAmountState}
                setSalary={setSalaryAmount}
            />
        </div>
    );
};

export default App;
