import React, {useState} from "react";
import "./style.css";


export default () => {

    const [amountState, setAmount] = useState(0);

    const changeAmount = (n) => {
        const updatedAmount = amountState + n;

        if (updatedAmount >= 0) {
            setAmount(updatedAmount);
        }
    };

    return (
        <div className="playgroundPage">
            <div className="condition">
                <p>Give me {amountState} dollars, and I will do what you want!</p>
                <div className="buttonsWrapper">
                    <button onClick={() => changeAmount(-1)}>-</button>
                    <button onClick={() => changeAmount(1)}>+</button>
                </div>
            </div>
        </div>
    );
};
