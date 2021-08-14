import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import 'react-native-gesture-handler';
import Navigation from "./src/navigation/Navigation";

const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}

export default App
