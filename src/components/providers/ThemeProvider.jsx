import React, { createContext, useContext, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext(null);

export default function ThemeProviders({ children }) {
  const [themeMode, setThemeMode] = React.useState(true);

  const themeModeSwitcher = () => {
    setThemeMode((prev) => !prev);
  };

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: 'rgba(255, 165, 0, 0.85)',
      },
      secondary: {
        main: 'rgb(238, 244, 212)', //beige color
      },
    },
  });

  const theme = lightTheme;

  const value = useMemo(() => {
    return {
      themeMode,
      themeModeSwitcher,
    };
  }, [themeMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProviders");
  return context;
};
