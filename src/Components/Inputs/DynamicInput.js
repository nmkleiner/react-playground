import React from "react";
import {InputComponents} from "../../Enums/InputTypes";
import InputGroup from "./InputGroup/InputGroup";
import RadioGroup from "./RadioGroup/RadioGroup";
import SalaryInput from "./SalaryInput/SalaryInput";
import DatePicker from "./DatePicker/DatePicker";


const DynamicInput = (props) => {
    switch (props.inputComponent) {
        case InputComponents.DATEPICKER:
            return <DatePicker {...props}/>;
        case InputComponents.INPUT_GROUP:
            return <InputGroup {...props}/>;
        case InputComponents.RADIO_GROUP:
            return <RadioGroup {...props}/>;
        case InputComponents.SALARY:
            return <SalaryInput {...props}/>;
    }
};

export default DynamicInput;
