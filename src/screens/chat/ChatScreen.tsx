import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import StyledView from "../../components/common/StyledView";
import MessageBubble from "../../components/chat/MessageBubble";
import ChatInput from "../../components/chat/ChatInput";
import theme from "../../constants/theme";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

const initialMessages: Message[] = [
  { id: "1", text: "Hello! How can I help you today?", isUser: false },
  { id: "2", text: "What is the weather forecast for tomorrow?", isUser: true },
  {
    id: "3",
    text: "The forecast for tomorrow is sunny with a high of 34°C.",
    isUser: false,
  },
];

const ChatScreen = () => {
  const [messages, setMessages] = useState(initialMessages);

  const handleSend = useCallback(
    (newMessageText: string) => {
      const newMessage: Message = {
        id: (messages.length + 1).toString(),
        text: newMessageText,
        isUser: true,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      // Here you would typically call an API to get the AI response
    },
    [messages]
  );

  return (
    <StyledView style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <MessageBubble text={item.text} isUser={item.isUser} />
        )}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
        contentContainerStyle={styles.messageListContent}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <ChatInput onSend={handleSend} />
      </KeyboardAvoidingView>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  messageList: {
    flex: 1,
  },
  messageListContent: {
    padding: theme.spacing.md,
  },
});

export default ChatScreen;
