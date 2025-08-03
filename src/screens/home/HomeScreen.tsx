import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import StyledView from "../../components/common/StyledView";
import StyledText from "../../components/common/StyledText";
import WeatherWidget from "../../components/agriculture/WeatherWidget";
import CropCard from "../../components/agriculture/CropCard";
import theme from "../../constants/theme";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StyledView style={styles.header}>
        <StyledText fontWeight="bold" fontSize="3xl">
          Dashboard
        </StyledText>
      </StyledView>
      <StyledView style={styles.content}>
        <WeatherWidget />
        <StyledView style={styles.section}>
          <StyledText
            fontWeight="bold"
            fontSize="xl"
            style={styles.sectionTitle}
          >
            My Crops
          </StyledText>
          <CropCard cropName="Cotton" healthStatus="healthy" />
          <CropCard cropName="Soybean" healthStatus="warning" />
        </StyledView>
      </StyledView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.md,
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.lg,
  },
  section: {
    gap: theme.spacing.md,
  },
  sectionTitle: {
    marginBottom: theme.spacing.sm,
  },
});

export default HomeScreen;
