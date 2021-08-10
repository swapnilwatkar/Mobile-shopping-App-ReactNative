import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import RootNavigator from './src/navigation/RootNavigator';
import {enableScreens} from 'react-native-screens';
import Toast from "react-native-toast-message";
import { NativeBaseProvider } from 'native-base';
import {Colors} from './src/constants/Colors';
import Auth from './src/Context/store/Auth';
import { Provider } from "react-redux";
import store from "./src/Redux/store";
// Navigatiors
import Main from "./src/Navigators/Main";


// Screens
import Header from "./src/Shared/Header";
 
import { LogBox } from "react-native";

enableScreens();
LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <NativeBaseProvider>
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
    </NativeBaseProvider>
  );
}
