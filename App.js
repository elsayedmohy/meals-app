import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import DrawerNavigator from "./app/navigation/DrawerNavigation";
import store from "./app/store/index";

const fetchFonts = () => {
  return Font.loadAsync({
    "Nunito-Regular": require("./app/assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Italic": require("./app/assets/fonts/Nunito-Italic.ttf"),
    "Nunito-SemiBold": require("./app/assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("./app/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-BoldItalic": require("./app/assets/fonts/Nunito-BoldItalic.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        onError={(error) => console.log(error)}
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}
