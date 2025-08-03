import React from "react";
import { StyleSheet } from "react-native";
import StyledView from "../common/StyledView";
import StyledText from "../common/StyledText";
import theme from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const WeatherWidget = () => {
  return (
    <LinearGradient colors={["#42A5F5", "#66BB6A"]} style={styles.container}>
      <StyledView style={styles.header}>
        <StyledText fontWeight="bold" fontSize="lg" color="inverse">
          Today&apos;s Weather
        </StyledText>
        <StyledText fontSize="sm" color="inverse">
          Nagpur, Maharashtra
        </StyledText>
      </StyledView>
      <StyledView style={styles.content}>
        <Ionicons name="sunny" size={64} color={theme.colors.inverse} />
        <StyledView style={styles.tempContainer}>
          <StyledText fontWeight="bold" fontSize="4xl" color="inverse">
            32°C
          </StyledText>
          <StyledText fontSize="lg" color="inverse">
            Sunny
          </StyledText>
        </StyledView>
      </StyledView>
      <StyledView style={styles.forecast}>
        {/* Add 7-day forecast here */}
      </StyledView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.md,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: theme.spacing.md,
  },
  tempContainer: {
    alignItems: "center",
  },
  forecast: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default WeatherWidget;
