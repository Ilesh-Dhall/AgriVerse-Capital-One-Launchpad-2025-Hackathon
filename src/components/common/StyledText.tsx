import React from "react";
import { Text, StyleSheet, TextProps } from "react-native";
import theme from "../../constants/theme";

type FontWeight = keyof typeof theme.typography.fontWeights;
type FontSize = keyof typeof theme.typography.fontSizes;
type TextColor = keyof typeof theme.colors;

interface StyledTextProps extends TextProps {
  fontWeight?: FontWeight;
  fontSize?: FontSize;
  color?: TextColor;
}

const StyledText: React.FC<StyledTextProps> = ({
  children,
  style,
  fontWeight = "regular",
  fontSize = "base",
  color = "primary",
  ...props
}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: theme.typography.fontFamily.primary,
      fontWeight: theme.typography.fontWeights[fontWeight],
      fontSize: theme.typography.fontSizes[fontSize],
      color: theme.colors[color],
    },
  });

  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default StyledText;
