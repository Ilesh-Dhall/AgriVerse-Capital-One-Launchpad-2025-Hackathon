import React from "react";
import { StyleSheet } from "react-native";
import StyledView from "../common/StyledView";
import StyledText from "../common/StyledText";
import theme from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

interface CropCardProps {
  cropName: string;
  healthStatus: "healthy" | "warning" | "critical";
}

const CropCard: React.FC<CropCardProps> = ({ cropName, healthStatus }) => {
  const gradientColors = {
    healthy: ["#66BB6A", "#81C784"],
    warning: ["#FFB74D", "#FF8A65"],
    critical: ["#F44336", "#E57373"],
  };

  const healthIndicatorColor = {
    healthy: theme.colors.success,
    warning: theme.colors.warning,
    critical: theme.colors.error,
  };

  return (
    <LinearGradient
      colors={gradientColors[healthStatus]}
      style={styles.container}
    >
      <StyledView style={styles.header}>
        <Ionicons name="leaf" size={24} color={theme.colors.inverse} />
        <StyledText fontWeight="bold" fontSize="lg" color="inverse">
          {cropName}
        </StyledText>
      </StyledView>
      <StyledView style={styles.content}>
        <StyledText fontSize="sm" color="inverse">
          Health Status
        </StyledText>
        <StyledView style={styles.statusContainer}>
          <StyledView
            style={[
              styles.statusIndicator,
              { backgroundColor: healthIndicatorColor[healthStatus] },
            ]}
          />
          <StyledText fontWeight="medium" fontSize="base" color="inverse">
            {healthStatus.charAt(0).toUpperCase() + healthStatus.slice(1)}
          </StyledText>
        </StyledView>
      </StyledView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.md,
    minHeight: 150,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  content: {
    alignItems: "flex-start",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.xs,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default CropCard;
