import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#5C3B24',
    secondary: '#C07F45',
    tertiary: '#F4D9B6',
    error: '#B00020',
    background: '#FFF7EE',
    surface: '#FFFFFF',
    onPrimary: '#FFFFFF',
    onSecondary: '#1A1A1A',
    onBackground: '#1A1A1A',
    onSurface: '#1A1A1A',
    onError: '#FFFFFF',
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#E7C8A0',
    secondary: '#F2A766',
    tertiary: '#6B3F22',
    error: '#CF6679',
    background: '#1B1410',
    surface: '#231A15',
    onPrimary: '#1B1410',
    onSecondary: '#1B1410',
    onBackground: '#F6EDE2',
    onSurface: '#F6EDE2',
    onError: '#1B1410',
  },
};

export const theme = lightTheme;
export { lightTheme, darkTheme };
