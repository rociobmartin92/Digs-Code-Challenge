import { View, Text } from "react-native";
import React from "react";
import { Action, Customer } from "@/app/models/ChallengeData";

import { MapPinIcon } from "react-native-heroicons/solid";

import { StyleSheet } from "react-native";

import { Colors } from "@/constants/Colors";
import CalendarHeader from "./CalendarHeader";

interface Card {
  data: Action | null;
  customer?: Customer;
  noData?: boolean;
}

const Card = ({ data, customer, noData }) => {
  //   console.log(JSON.stringify(data, null, " "));

  const backgroundColor =
    data?.status === "Completed"
      ? Colors.light.lightGreen
      : data?.status === "Scheduled"
      ? Colors.dark.darkGreen
      : data?.status === "Unscheduled"
      ? Colors.dark.darkBlue
      : Colors.dark.darkGrey;

  if (noData) {
    return (
      <View style={[styles.cardContainer, { backgroundColor, marginLeft: 45 }]}>
        <Text style={styles.title}>No Maintenance Scheduled</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CalendarHeader
        status={data?.status}
        scheduledDate={data?.scheduledDate}
      />
      {data && (
        <View style={[styles.cardContainer, { backgroundColor }]}>
          <View>
            <Text style={styles.title}>{data.name}</Text>
            {data.status !== "Unscheduled" && (
              <>
                <Text style={styles.subtitle}>{data?.vendor?.vendorName}</Text>
                <Text style={styles.boldSubtitle}>
                  {data?.vendor?.phoneNumber}
                </Text>
              </>
            )}
          </View>
          <View style={[styles.container, { marginTop: 10 }]}>
            <View style={styles.iconContainer}>
              <MapPinIcon size={13} color={Colors.light.background} />
            </View>
            <Text style={styles.subtitle}>{customer?.street}</Text>
          </View>
          <View style={[styles.container]}>
            {data.status !== "Unscheduled" && (
              <Text style={styles.status}>
                {data.status === "Scheduled"
                  ? `${data.arrivalStartWindow} - ${data.arrivalEndWindow}`
                  : data.status}
              </Text>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",

    alignItems: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    marginVertical: 2,
  },
  title: {
    fontSize: 16,
    color: Colors.light.background,
    fontFamily: "Lato-Bold",
  },
  subtitle: {
    fontSize: 13,
    color: Colors.light.background,
    fontFamily: "Lato-Regular",
    marginVertical: 2,
  },
  status: {
    fontSize: 12,
    color: Colors.light.background,
    fontFamily: "Lato-Regular",
    marginVertical: 2,
    marginLeft: 4,
  },
  boldSubtitle: {
    fontSize: 13,
    color: Colors.light.background,
    fontFamily: "Lato-Bold",
  },

  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    // justifyContent: "space-between",
    // backgroundColor: "red",
  },
  iconContainer: {
    marginRight: 5,
  },
});
