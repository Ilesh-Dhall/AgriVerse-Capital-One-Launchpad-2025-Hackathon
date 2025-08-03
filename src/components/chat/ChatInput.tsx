import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import StyledView from "../common/StyledView";
import Ionicons from "react-native-vector-icons/Ionicons";
import theme from "../../constants/theme";

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage("");
    }
  };

  return (
    <StyledView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ask me anything..."
        value={message}
        onChangeText={setMessage}
        placeholderTextColor={theme.colors.tertiary}
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Ionicons name="send" size={24} color={theme.colors.inverse} />
      </TouchableOpacity>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.surface,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  input: {
    flex: 1,
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: theme.borderRadius.xl,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    fontSize: theme.typography.fontSizes.base,
    color: theme.colors.primary,
  },
  button: {
    marginLeft: theme.spacing.sm,
    backgroundColor: theme.colors.brand,
    borderRadius: theme.borderRadius.full,
    padding: theme.spacing.sm,
    ...theme.shadows.colored,
  },
});

export default ChatInput;
