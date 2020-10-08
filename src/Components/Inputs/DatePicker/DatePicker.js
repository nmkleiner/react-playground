import React, {Component} from "react";
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import classes from "./style.module.scss";
import moment from "moment";
import * as PropTypes from "prop-types";
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import DefaultTheme from "react-dates/lib/theme/DefaultTheme";

const dateFormat = "DD/MM/YY";

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme({
    reactDates: {
        ...DefaultTheme.reactDates,
        border: {
            ...DefaultTheme.reactDates.border,
            input: {
                ...DefaultTheme.reactDates.border.input,
                borderBottomFocused: "1px solid #ff0083",
                borderBottom: "1px solid #ff0083",
            },
        },
        color: {
            ...DefaultTheme.reactDates.color,
            text: "#ff0083",
            placeholderText: "#ff0083",
            border: "#ff0083",
            selected: {
                ...DefaultTheme.reactDates.color.selected,
                color: "white",
                backgroundColor: "#ff0083",
                color_active: "#ff0083",
                backgroundColor_hover: "white",
            },
        },
        spacing: {
            ...DefaultTheme.reactDates.spacing,
            displayTextPaddingLeft: 20,
        },
        sizing: {
            ...DefaultTheme.reactDates.sizing,
            inputWidth: 300,
        },
    },
});


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
            <div className={classes.GetStartDate}>
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
