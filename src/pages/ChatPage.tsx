import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";

const API_URL = "https://chat-compass-default-rtdb.europe-west1.firebasedatabase.app/messages.json";

interface Message {
  id?: string;
  author: string;
  message: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get<{ [key: string]: Message }>(API_URL);
      if (response.data) {
        const fetchedMessages = Object.entries(response.data).map(([id, msg]) => ({ id, ...msg }));
        setMessages(fetchedMessages);
      }
    } catch (error) {
      console.error("Ошибка загрузки сообщений", error);
    }
  };

  useEffect(() => {
    fetchMessages();
    const intervalId = setInterval(fetchMessages, 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <MessageForm onMessageSent={fetchMessages} />
      <MessageList messages={messages} />
    </Container>
  );
};

export default ChatPage;
