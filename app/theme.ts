'use client'
import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#000000', // Set the primary background color to black
    // },
    // secondary: {
    //   main: '#f2f2f2', // Set the secondary background color to light gray
    // },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '3.5rem',
        },
        h2: {
          fontSize: '3rem',
        },
        h3: {
          fontSize: '2.5rem',
        },
        h4: {
          fontSize: '2.34rem',
        },
        h5: {
          fontSize: '2rem',
        },
        h6: {
          fontSize: '1.25rem',
        },
        body1: {
          fontSize: '1.125rem',
        },
        body2: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          [`&.MuiButton-contained.MuiButton-colorPrimary`]: {
            backgroundColor: '#000000',
            color: '#f2f2f2',
            '&:hover': {
              backgroundColor: '#f2f2f2',
              color: '#000000',
            },
          },
          [`&.MuiButton-contained.MuiButton-colorSecondary `]: {
            backgroundColor: '#f2f2f2',
            color: '#000000',
            '&:hover': {
              backgroundColor: '#000000',
              color: '#f2f2f2',
            },
          },
        },
      },
    },
  },
})

export default theme
