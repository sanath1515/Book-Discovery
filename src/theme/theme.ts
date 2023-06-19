import { createTheme } from "@material-ui/core/styles";
import { COLORS } from "./constants";


const theme = createTheme({

  spacing: 4,

  palette: {
    primary: {
      dark: COLORS.PRIMARY_COLOR_700,
      main: COLORS.PRIMARY_COLOR_500,
      light: COLORS.PRIMARY_COLOR_300,
    },
    //To be used for text
    secondary: {
      dark: COLORS.SECONDARY_900,
      main: COLORS.SECONDARY_500,
      light: COLORS.SECONDARY_300,
    },
    success: {
      main: COLORS.SUCCESS_500,
    },
    error: {
      main: COLORS.ERROR_500,
    },
    warning: {
      main: COLORS.WARNING_500,
    },
    grey: {
      "100": COLORS.GREY_100,
      "300": COLORS.GREY_300,
      "500": COLORS.GREY_500,
      "700": COLORS.GREY_700,
      "900": COLORS.GREY_900,
    }
  },

  typography: {
    h1: {
      fontFamily: "Roboto",
      fontSize: "36px",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.39,
      letterSpacing: "normal",
    },
    h2: {
      fontFamily: "Roboto",
      fontSize: "36px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.39,
      letterSpacing: "normal",
    },
    h3: {
      fontFamily: "Roboto",
      fontSize: "26px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.46,
      letterSpacing: "normal",
    },
    h4: {
      fontFamily: "Roboto",
      fontSize: "20px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    h5: {
      fontFamily: "Roboto",
      fontSize: "20px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.56,
      letterSpacing: "normal",
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      textAlign: "right",
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      textAlign: "right",
    },
    body1: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.57,
      letterSpacing: "normal",
      textAlign: "right",
    },
    body2: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.57,
      letterSpacing: "normal",
    },

    //caption1
    caption: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      textAlign: "right",
    },
    //caption2
    overline: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      textAlign: "center",
    },
  },

});



export default theme;
