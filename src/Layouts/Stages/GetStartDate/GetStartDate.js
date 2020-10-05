import React, {Component} from "react";
import {SingleDatePicker} from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import classes from "./style.module.scss";
import moment from "moment";
import * as PropTypes from "prop-types";

const dateFormat = "DD/MM/YY";

class GetStartDate extends Component {

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
            <div className={classes.GetStartDate}>
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

GetStartDate.propTypes = {
    startDate: PropTypes.string,
    setStartDate: PropTypes.func,
};

export default GetStartDate;
