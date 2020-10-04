import React, {useState} from "react";
import "./style.scss";
import RadioButton from "./RadioButton/RadioButton";



export default (props) => {
    const {radioButtons} = props;

    const [checkedRadioStates, setCheckedRadioStates] = useState(radioButtons.map(() => false));

    const setCheckedRadio = (radioIndex) => {
        const updatedCheckedRadioStates = checkedRadioStates.map((_, index) => index === radioIndex);
        setCheckedRadioStates(updatedCheckedRadioStates);
    };

    return (
        <div className="radio-group">
            {radioButtons.map((radioButton, index) =>
                <RadioButton
                    key={radioButton.id}
                    id={radioButton.id}
                    label={radioButton.label}
                    icon={radioButton.icon}
                    checked={checkedRadioStates[index]}
                    check={() => setCheckedRadio(index)}
                />,
            )}
        </div>
    );
}
