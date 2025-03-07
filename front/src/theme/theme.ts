'use client';
import { createTheme } from '@mui/material/styles';
// import { Poppins, Arial } from 'next/font/google';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600'],
// });

const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
    },
    primary: {
      main: '#1519FA',
    },
    secondary: {
      main: '#EAC01B',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#262626',
    },
  },

  typography: {
    fontFamily: 'Arial, sans-serif',

    h1: {
      fontWeight: '600',
      fontSize: '60px',
      color: '#F1f2ee',
      fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif",
    },
    h2: {
      fontWeight: '700',
      fontSize: '40px',
      color: '#F1f2ee',
    },
    h3: {
      fontWeight: '600',
      fontSize: '30px',
      color: '#F1f2ee',
    },
    h4: {
      fontWeight: '500',
      fontSize: '24px',
      color: '#F1f2ee',
    },
    h5: {
      fontWeight: '600',
      fontSize: '18px',
      color: '#F1f2ee',
    },
    h6: {
      fontWeight: '500',
      fontSize: '10px',
      color: '#F1f2ee',
    },

    body1: {
      fontWeight: 'normal',
      fontSize: '18px',
      color: '#BFB7B6',
    },
    body2: {
      fontWeight: 'normal',
      fontSize: '16px',
      color: '#BFB7B6',
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
      desktop: 1920,
      laptop: 1366,
      tablet: 640,
      mobile: 0,
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
