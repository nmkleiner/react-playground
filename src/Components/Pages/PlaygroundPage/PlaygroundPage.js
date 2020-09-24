import React, {Component} from "react";
import "./style.css";

export default class PlaygroundPage extends Component {

    state = {
        amount: 0,
    };

    changeAmount = (n) => {
        let {amount} = this.state;
        console.log("baba", n);
        amount += n;

        if (amount >= 0) {
            this.setState({amount});
        }
    };


    render() {
        const {amount} = this.state;

        return (
            <div className="playgroundPage">
                <div className="condition">
                    <p>Give me {amount} dollars, and I will do what you want!</p>
                    <div className="buttonsWrapper">
                        <button onClick={() => this.changeAmount.call(this, -1)}>-</button>
                        <button onClick={() => this.changeAmount.call(this, 1)}>+</button>
                    </div>
                </div>
            </div>
        );
    }
};
