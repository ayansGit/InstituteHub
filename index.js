/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Colors from "./src/assets/Colors"
console.disableYellowBox = true;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.blueBackground,
    accent: Colors.lightBlueText,
  },
};

const InstituteHub = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName, () => InstituteHub);
