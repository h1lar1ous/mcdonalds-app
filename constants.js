import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#F2CA46",    
    secondary: "#EE1C03",

    white: "#FCFCFC",
    black: "#000000",
    gray: "#111111",
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 20,
    padding: 24,

    // font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
};

const appTheme = { COLORS, SIZES };

export default appTheme;