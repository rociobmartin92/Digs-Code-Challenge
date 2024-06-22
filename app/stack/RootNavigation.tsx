import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Calendar from "../(tabs)";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="calendar" component={Calendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
