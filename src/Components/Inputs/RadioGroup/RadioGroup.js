import React, {useState} from "react";
import classes from "./style.module.scss";
import RadioButton from "./RadioButton/RadioButton";


const RadioGroup = ({options, question, text, type, answer, setAnswer}) => {


    const [checkedRadioStates, setCheckedRadioStates] = useState(options.map(() => false));

    const setCheckedRadioByIndex = (radioIndex) => {
        const updatedCheckedRadioStates = checkedRadioStates.map((_, index) => index === radioIndex);
        setCheckedRadioStates(updatedCheckedRadioStates);
    };

    const selectRadioButton = (radioIndex) => {
        const selectedRadioButton = options[radioIndex];
        setAnswer(selectedRadioButton.id);
    };

    if (answer) {
        if (checkedRadioStates.every((isChecked) => !isChecked)) {
            const selectedRadioIndex = options.findIndex((radioButton) => radioButton.id === answer);
            setCheckedRadioByIndex(selectedRadioIndex);
        }
    }

    return (
        <div className={classes.Container}>
            <span className={classes.message}>{text}</span>
            <div className={classes.RadioGroup}>
                {options.map((radioButton, index) =>
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
        </div>
    );
};

export default RadioGroup;
