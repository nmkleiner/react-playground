import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import DefaultTheme from "react-dates/lib/theme/DefaultTheme";

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
