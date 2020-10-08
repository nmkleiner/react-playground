import React, {Component} from "react";
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import classes from "./style.module.scss";
import moment from "moment";
import * as PropTypes from "prop-types";
import "./registerDatepickerTheme"

const dateFormat = "DD/MM/YY";

class DatePicker extends Component {

    state = {
        focused: false,
        date: this.props.answer ? moment(this.props.answer, dateFormat) : null,
    };

    handleDateChange = (date) => {
        if (date) {
            this.setState({date});
            const dateString = date.format(dateFormat);
            this.props.setAnswer(dateString);
        }
    };

    render() {
        return (
            <div className={classes.Datepicker}>
                <span className={classes.message}>{this.props.text}</span>
                <SingleDatePicker
                    placeholder={dateFormat}
                    date={this.state.date}
                    onDateChange={date => this.handleDateChange(date)}
                    focused={this.state.focused}
                    onFocusChange={({focused}) => this.setState({focused})}
                    numberOfMonths={1}
                    hideKeyboardShortcutsPanel
                    displayFormat={dateFormat}
                    readOnly
                    noBorder
                />
            </div>
        );
    }
}

DatePicker.propTypes = {
    startDate: PropTypes.string,
    setStartDate: PropTypes.func,
};

export default DatePicker;
