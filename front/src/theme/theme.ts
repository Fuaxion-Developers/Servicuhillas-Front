'use client';
import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#030712',
    },
  },

  typography: {
    fontFamily: poppins.style.fontFamily,

    h1: {
      fontSize: '700',
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: '700',
      fontSize: '40px',
    },
    h3: {
      fontWeight: '600',
      fontSize: '36px',
    },
    h4: {
      fontWeight: '500',
      fontSize: '24px',
    },
    h5: {
      fontWeight: '500',
      fontSize: '12px',
    },
    h6: {
      fontWeight: '500',
      fontSize: '10px',
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '20px',
    },
    body2: {
      fontWeight: 'normal',
      fontSize: '16px',
    },
    button: {
      fontWeight: '600',
      fontSize: '14px',
      textTransform: 'capitalize',
    },
    caption1: {
      fontWeight: '500',
      fontSize: '14px',
    },
    caption2: {
      fontWeight: '500',
      fontSize: '14px',
    },
    caption3: {
      fontWeight: '300',
      fontSize: '15px',
    },
  },

  breakpoints: {
    values: {
      desktop: 1280,
      laptop: 1024,
      tablet: 640,
      mobile: 0,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          padding: '12px 24px',
          fontWeight: '500',
          fontSize: '14px',
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0px 1000px transparent inset',
            WebkitTextFillColor: '#fff',
            transition: 'background-color 5000s ease-in-out 0s',
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
