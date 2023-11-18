import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // Primary (Purple)
    primary50: '#EFEFFC',
    primary100: '#D4D4F6',
    primary200: '#BAB9EF',
    primary300: '#A09FE6',
    primary400: '#8887DD',
    primary500: '#706FD3',
    primary600: '#5E5DB6',
    primary700: '#4D4C98',

    // Gray
    gray50: '#F6F6F6',
    gray100: '#EEEEEE',
    gray200: '#E2E2E2',
    gray300: '#CBCBCB',
    gray400: '#AFAFAF',
    gray500: '#6B6B6B',
    gray600: '#545454',
    gray700: '#333333',
    gray800: '#1F1F1F',
    gray900: '#141414',

    // Positive
    positive50: '#E6F2ED',
    positive100: '#ADDEC9',
    positive200: '#66D19E',
    positive300: '#06C167',
    positive400: '#048848',
    positive500: '#03703C',
    positive600: '#03582F',
    positive700: '#10462D',

    // Negative
    negative50: '#FFEFED',
    negative100: '#FED7D2',
    negative200: '#F1998E',
    negative300: '#E85C4A',
    negative400: '#E11900',
    negative500: '#AB1300',
    negative600: '#870F00',
    negative700: '#5A0A00',

    // Warning
    warning50: '#FFFAF0',
    warning100: '#FFF2D9',
    warning200: '#FFE3AC',
    warning300: '#FFCF70',
    warning400: '#FFC043',
    warning500: '#BC8B2C',
    warning600: '#996F00',
    warning700: '#674D1B',

    // Background
    backgroundPrimary: '#000000',
    backgroundSecondary: '#1F1F1F',
    backgroundTertiary: '#333333',
    backgroundInversePrimary: '#CBCBCB',
    backgroundInverseSecondary: '#AFAFAF',

    // Content
    contentPrimary: '#FFFFFF',
    contentSecondary: '#CBCBCB',
    contentTertiary: '#AFAFAF',
    contentInversePrimary: '#000000',
    contentInverseSecondary: '#545454',
    contentInverseTertiary: '#6B6B6B',

    
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    margin: 20,

    // font sizes
    t1: 52,
    t2: 44,
    t3: 36,

    h1: 32,
    h2: 28,
    h3: 24,
    h4: 20,

    l1: 18,
    l2: 16,
    l3: 14,
    l4: 12,

    ps1: 18,
    ps2: 16,
    ps3: 14,
    ps4: 12,

    pr1: 18,
    pr2: 16,
    pr3: 14,
    pr4: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    t1: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.t1, lineHeight: 64 },
    t2: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.t2, lineHeight: 52 },
    t3: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.t3, lineHeight: 44 },

    h1: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.h1, lineHeight: 40 },
    h2: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.h2, lineHeight: 36 },
    h3: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.h3, lineHeight: 32 },
    h4: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.h4, lineHeight: 28 },

    l1: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.l1, lineHeight: 24 },
    l2: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.l2, lineHeight: 20 },
    l3: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.l3, lineHeight: 16 },
    l4: { fontFamily: "Nunito Sans 10pt Bold", fontSize: SIZES.l4, lineHeight: 16 },

    ps1: { fontFamily: "Nunito Sans 10pt SemiBold", fontSize: SIZES.ps1, lineHeight: 28 },
    ps2: { fontFamily: "Nunito Sans 10pt SemiBold", fontSize: SIZES.ps2, lineHeight: 24 },
    ps3: { fontFamily: "Nunito Sans 10pt SemiBold", fontSize: SIZES.ps3, lineHeight: 20 },
    ps4: { fontFamily: "Nunito Sans 10pt SemiBold", fontSize: SIZES.ps4, lineHeight: 20 },

    pr1: { fontFamily: "Nunito Sans 10pt Regular", fontSize: SIZES.pr1, lineHeight: 28 },
    pr2: { fontFamily: "Nunito Sans 10pt Regular", fontSize: SIZES.pr2, lineHeight: 24 },
    pr3: { fontFamily: "Nunito Sans 10pt Regular", fontSize: SIZES.pr3, lineHeight: 20 },
    pr4: { fontFamily: "Nunito Sans 10pt Regular", fontSize: SIZES.pr4, lineHeight: 20 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;