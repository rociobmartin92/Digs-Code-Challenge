import { Tabs } from 'expo-router';
import React from 'react';
import {CalendarIcon} from "react-native-heroicons/outline";
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from "expo-font";

import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    "Lato-Regular": require("../../assets/fonts/Lato/Lato-Regular.ttf"),
    "Lato-Bold": require("../../assets/fonts/Lato/Lato-Bold.ttf"),
    "Lato-Black": require("../../assets/fonts/Lato/Lato-Black.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.dark.background} />
      </View>
    );
  }

  // console.log(fontsLoaded)

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color, focused }) => <CalendarIcon color={color} />,
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Lato-Bold", fontSize: 18 },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});