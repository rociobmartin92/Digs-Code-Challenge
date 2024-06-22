import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";

import getCalendar from "../services/getCalendar";
import { Colors } from "@/constants/Colors";
import { Card, ThemedText, ThemedView } from "@/components";
import { Action, ChallengeData } from "../models/ChallengeData";

function Calendar() {
  const [calendarData, setCalendarData] = useState<ChallengeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const data = await getCalendar();
        setCalendarData(data?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCalendarData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.dark.background} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView>
        <FlatList
          data={calendarData?.calendar}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            const date = new Date(item.year, item.month - 1);
            const formattedDate = `${date.toLocaleString("en-US", {
              month: "long",
            })} ${date.getFullYear()}`;

            return (
              <ThemedView>
                <ThemedText style={styles.dateTitle}>
                  {formattedDate}
                </ThemedText>

                {item.actions && item.actions.length > 0 ? (
                  item.actions.map((action: Action, index) => (
                    <Card
                      data={action}
                      key={index}
                      customer={calendarData?.customer}
                    />
                  ))
                ) : (
                  <Card
                    data={null}
                    key="0"
                    customer={calendarData?.customer}
                    noData={true}
                  />
                )}
              </ThemedView>
            );
          }}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    paddingLeft: 10,
    paddingRight: 15,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dateTitle: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
    marginLeft: 8,
    marginVertical: 20,
  },
});

export default Calendar;
