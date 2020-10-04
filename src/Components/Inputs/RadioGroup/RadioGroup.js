import React, {useState} from "react";
import "./style.scss";
import {RadioButton} from "./RadioButton/RadioButton";


export const RadioGroup = (props) => {
    const {radioButtons, selectedValue, select} = props;

    const [checkedRadioStates, setCheckedRadioStates] = useState(radioButtons.map(() => false));

    const setCheckedRadioByIndex = (radioIndex) => {
        const updatedCheckedRadioStates = checkedRadioStates.map((_, index) => index === radioIndex);
        setCheckedRadioStates(updatedCheckedRadioStates);
    };

    const selectRadioButton = (radioIndex) => {
        const selectedRadioButton = radioButtons[radioIndex];
        select(selectedRadioButton.id);
    };

    if (selectedValue) {
        if (checkedRadioStates.every((isChecked) => !isChecked)) {
            const selectedRadioIndex = radioButtons.findIndex((radioButton) => radioButton.id === selectedValue);
            setCheckedRadioByIndex(selectedRadioIndex);
        }
    }

    return (
        <div className="radio-group">
            {radioButtons.map((radioButton, index) =>
                <RadioButton
                    key={radioButton.id}
                    id={radioButton.id}
                    label={radioButton.label}
                    icon={radioButton.icon}
                    checked={checkedRadioStates[index]}
                    check={() => {
                        setCheckedRadioByIndex(index);
                        selectRadioButton(index);
                    }}
                />,
            )}
        </div>
    );
};
