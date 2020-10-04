import React, {Component} from "react";
import {SingleDatePicker} from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import classes from "./style.module.scss";
import moment from "moment";

const dateFormat = "DD/MM/YY";

export default class GetStartDate extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        focused: false,
        date: this.props.startDate ? moment(this.props.startDate, dateFormat) : null,
    };

    handleDateChange = (date) => {
        this.setState({date});
        const dateString = date.format(dateFormat);

        this.props.setStartDate(dateString);
    };

    render() {

        return (
            <div className={classes.startDate}>
                <span>When can you start working?</span>
                <SingleDatePicker
                    placeholder={dateFormat}
                    date={this.state.date}
                    onDateChange={date => this.handleDateChange(date)}
                    focused={this.state.focused}
                    onFocusChange={({focused}) => this.setState({focused})}
                    numberOfMonths={1}
                    hideKeyboardShortcutsPanel
                    displayFormat={dateFormat}
                />
            </div>
        );
    }
}
