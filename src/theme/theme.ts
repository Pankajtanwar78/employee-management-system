import { Theme } from "./themeTypes"

export const lightTheme: Theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1d1d1d',
    background: '#ffffff',
    text: '#333333',
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
};

export const darkTheme: Theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ffffff',
    background: '#1d1d1d',
    text: '#ffffff',
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
};
