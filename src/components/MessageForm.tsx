import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Card } from "@mui/material";

const API_URL = "https://chat-compass-default-rtdb.europe-west1.firebasedatabase.app/messages.json";

interface MessageFormProps {
  onMessageSent: () => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ onMessageSent }) => {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!author.trim() || !message.trim()) return;
    try {
      await axios.post(API_URL, { author, message });
      setAuthor("");
      setMessage("");
      onMessageSent();
    } catch (error) {
      console.error("Ошибка отправки сообщения", error);
    }
  };

  return (
    <Card style={{ padding: "20px", marginBottom: "20px" }}>
      <TextField label="Автор" fullWidth value={author} onChange={(e) => setAuthor(e.target.value)} margin="normal" />
      <TextField label="Сообщение" fullWidth value={message} onChange={(e) => setMessage(e.target.value)} margin="normal" />
      <Button variant="contained" color="primary" onClick={sendMessage} style={{ marginTop: "10px" }}>
        Отправить
      </Button>
    </Card>
  );
};

export default MessageForm;
