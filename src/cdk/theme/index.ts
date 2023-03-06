import { createTheme, Theme } from '@mui/material/styles';
import { CSSProperties } from '@mui/material/styles/createTypography';

import '../../assets/fonts/fonts.css';
import palette from './palette';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    button2: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    highlight: string;
  }

  interface PaletteOptions {
    highlight: string;
  }

  interface TypographyVariants {
    body3: CSSProperties;
    body4: CSSProperties;
    button2: CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3: CSSProperties;
    body4: CSSProperties;
    button2: CSSProperties;
  }
}

const baseTheme = createTheme({
  palette: {
    primary: {
      main: palette.blue,
      dark: palette.blueDark,
      light: palette.blueLight,
      contrastText: palette.white,
    },
    secondary: {
      main: palette.pink,
    },
    highlight: palette.blueHighlight,
    background: {
      default: palette.blueLight,
    },
    text: {
      primary: palette.white,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 380,
      sm: 600,
      md: 769,
      lg: 1025,
      xl: 1441,
    },
  },
  typography: {
    h1: {
      fontSize: 68,
      fontWeight: 600,
      letterSpacing: '0.03em',
      lineHeight: '105%',
    },
    h2: {
      fontSize: 54,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: '105%',
    },
    h3: {
      fontSize: 48,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: '105%',
    },
    h4: {
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: '0.03em',
      lineHeight: '120%',
    },
    h5: {
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '0.03em',
      lineHeight: '105%',
    },
    body1: {
      fontSize: 22,
      fontWeight: 400,
      letterSpacing: '0.05em',
      lineHeight: '120%',
    },
    body2: {
      fontSize: 20,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '120%',
    },
    body3: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '120%',
    },
    body4: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '120%',
    },
    subtitle1: {
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: '0.03em',
      lineHeight: '120%',
    },
    subtitle2: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.03em',
      lineHeight: '120%',
    },
    button: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.03em',
      lineHeight: '105%',
    },
    button2: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: '0.05em',
      lineHeight: '120%',
    },
    allVariants: {
      color: palette.white,
    },
  },
});

const theme: Theme = {
  ...baseTheme,
  typography: {
    ...baseTheme.typography,
    h1: {
      ...baseTheme.typography.h1,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 48,
      },
    },
    h2: {
      ...baseTheme.typography.h2,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 28,
      },
    },
    h3: {
      ...baseTheme.typography.h3,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 20,
      },
    },
    subtitle1: {
      ...baseTheme.typography.subtitle1,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 20,
        fontWeight: 400,
      },
    },
    body1: {
      ...baseTheme.typography.body1,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 18,
      },
    },
    body2: {
      ...baseTheme.typography.body2,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    button: {
      ...baseTheme.typography.button,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 16,
        fontWeight: 600,
      },
    },
    button2: {
      ...baseTheme.typography.button2,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: '0',
      },
    },
  },
};

export default theme;
