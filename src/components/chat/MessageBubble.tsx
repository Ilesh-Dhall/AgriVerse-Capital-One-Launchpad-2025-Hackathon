import React from "react";
import { StyleSheet } from "react-native";
import StyledView from "../common/StyledView";
import StyledText from "../common/StyledText";
import theme from "../../constants/theme";

interface MessageBubbleProps {
  text: string;
  isUser: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, isUser }) => {
  const bubbleStyle = isUser ? styles.userMessage : styles.aiMessage;
  const textColor = isUser ? "inverse" : "primary";

  return (
    <StyledView style={[styles.messageContainer, bubbleStyle]}>
      <StyledText color={textColor}>{text}</StyledText>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    maxWidth: "80%",
    marginBottom: theme.spacing.sm,
  },
  userMessage: {
    backgroundColor: theme.colors.brand,
    alignSelf: "flex-end",
    borderBottomRightRadius: theme.borderRadius.sm,
  },
  aiMessage: {
    backgroundColor: theme.colors.surface,
    alignSelf: "flex-start",
    borderBottomLeftRadius: theme.borderRadius.sm,
    ...theme.shadows.sm,
  },
});

export default MessageBubble;
