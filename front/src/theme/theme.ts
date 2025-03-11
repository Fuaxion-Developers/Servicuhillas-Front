'use client';
import { createTheme } from '@mui/material/styles';

const responsiveTypography = (
  mobile: string,
  tablet: string,
  laptop: string,
  desktop: string,
  weight = '400'
) => ({
  fontSize: mobile,
  fontWeight: weight,
  '@media (min-width:768px)': {
    fontSize: tablet,
  },
  '@media (min-width:1024px)': {
    fontSize: laptop,
  },
  '@media (min-width:1440px)': {
    fontSize: desktop,
  },
});
const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#E5E5E5',
      secondary: '#939393',
    },
    primary: {
      main: '#26156E',
    },
    secondary: {
      main: '#FBC600',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#050C1F',
      // default: '#262626',
    },
  },

  typography: {
    fontFamily: "'Segoe UI', sans-serif",
    h1: responsiveTypography('3rem', '4rem', '6rem', '6rem', '700'),
    h2: responsiveTypography('2.8rem', '3.6rem', '3.6rem', '4.8rem', '700'),
    h3: responsiveTypography('2.4rem', '3rem', '3rem', '4rem', '600'),
    h4: responsiveTypography('2rem', '2.6rem', '1.8rem', '3.2rem', '600'),
    // h5: responsiveTypography('1.8rem', '2.2rem', '2rem', '2.8rem', '600'),
    // h6: responsiveTypography('1.6rem', '2rem', '1.8rem', '1.8rem', '600'),
    body1: responsiveTypography('1.4rem', '1.6rem', '1.8rem', '2rem', '500'),
    body2: responsiveTypography('1.2rem', '1.4rem', '1.6rem', '1.8rem', '400'),
    button: responsiveTypography('1.4rem', '1.6rem', '1.4rem', '2rem', '600'),
    caption1: responsiveTypography(
      '1.2rem',
      '1.4rem',
      '1.4rem',
      '1.8rem',
      '600'
    ),
    caption2: responsiveTypography('1rem', '1.2rem', '1.4rem', '1.6rem', '400'),
  },

  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          padding: '12px 16px',
        },
      },
    },

    // MuiInputBase: {
    //   styleOverrides: {
    //     input: {
    //       '&:-webkit-autofill': {
    //         WebkitBoxShadow: '0 0 0px 1000px transparent inset',
    //         WebkitTextFillColor: '#fff',
    //         transition: 'background-color 5000s ease-in-out 0s',
    //       },
    //     },
    //   },
    // },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollbarWidth: 'none',
        },
        'html::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },

    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       textDecoration: 'none',
    //     },
    //   },
    // },
  },
});

export default theme;
