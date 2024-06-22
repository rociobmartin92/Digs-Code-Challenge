import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import { CheckCircleIcon } from "react-native-heroicons/solid";
import { ClockIcon } from "react-native-heroicons/outline";
import { Colors } from "@/constants/Colors";

export default function CalendarHeader({ status, scheduledDate }) {
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dateObj = new Date(scheduledDate ?? "");
  const dayNumber = dateObj.getDate();
  const dayName = weekDays[dateObj.getDay()];

  return (
    <View style={styles.headerContainer}>
      {status === "Unscheduled" ? (
        <View style={styles.container}>
          <Text style={styles.tbd}> TBD </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <ThemedText style={styles.tbd}>{dayName}</ThemedText>
          <ThemedText style={styles.number}>{dayNumber}</ThemedText>

          {status === "Completed" ? (
            <View style={{ marginHorizontal: 4 }}>
              <CheckCircleIcon color={"#00B47D"} size={16} />
            </View>
          ) : (
            <ClockIcon color={"#00B47D"} size={18} />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  headerContainer: { marginTop: -10 },
  tbd: {
    fontFamily: "Lato-Black",
    fontSize: 9,
    color: Colors.dark.darkGrey,
  },
  number: {
    // fontFamily: "SF Pro Display",
    fontSize: 20,
    fontWeight: 700,
  },
});
