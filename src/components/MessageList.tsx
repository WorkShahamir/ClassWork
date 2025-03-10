import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface Message {
  id?: string;
  author: string;
  message: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <>
      {messages.map((msg) => (
        <Card key={msg.id} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Typography variant="h6">{msg.author}</Typography>
            <Typography>{msg.message}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default MessageList;
