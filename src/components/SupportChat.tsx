import React, { useState, useRef, useEffect } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";

const initialMessages = [
  { from: "bot", text: "Hi! 👋 How can I help you with your rental clothes today?" },
];

const botReplies = [
  { keywords: ["price", "cost", "charge"], reply: "You can see the price per day on each product card. Let me know if you need a quote for a specific item!" },
  { keywords: ["return", "refund"], reply: "Returns are easy! Please return the item in the same condition. Refunds are processed within 3-5 business days after inspection." },
  { keywords: ["late", "delay"], reply: "Late returns may incur additional charges. Please try to return items on time or contact support for help." },
  { keywords: ["damage", "stain"], reply: "If an item is damaged or stained, a penalty may apply as per our rental rules." },
  { keywords: ["cancel", "cancellation"], reply: "You can cancel up to 24 hours before delivery for a full refund." },
  { keywords: ["contact", "support"], reply: "You can reach us at support@rentmystyle.com or call +123 456 7890." },
  { keywords: ["hello", "hi"], reply: "Hello! How can I assist you today?" },
];

function getBotReply(userText: string) {
  const lower = userText.toLowerCase();
  for (const { keywords, reply } of botReplies) {
    if (keywords.some((k) => lower.includes(k))) return reply;
  }
  return "I'm here to help! Please ask any question about our rental service.";
}

const SupportChat: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: getBotReply(input) },
      ]);
    }, 700);
    setInput("");
  };

  if (!open) {
    return (
      <Button
        variant="primary"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          borderRadius: "50%",
          width: 56,
          height: 56,
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
        }}
        onClick={() => setOpen(true)}
        aria-label="Open support chat"
      >
        <i className="bi bi-chat-dots" style={{ fontSize: 24 }} />
      </Button>
    );
  }

  return (
    <Card
      className="shadow-lg border-0"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 320,
        zIndex: 1000,
        maxHeight: 480,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Header className="bg-primary text-white fw-bold py-2 px-3 d-flex justify-content-between align-items-center" style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
        <span><i className="bi bi-chat-dots me-2" /> Support Chat</span>
        <Button
          variant="link"
          size="sm"
          className="text-white p-0"
          style={{ fontSize: 20, lineHeight: 1 }}
          onClick={() => setOpen(false)}
          aria-label="Close support chat"
        >
          <i className="bi bi-x-lg" />
        </Button>
      </Card.Header>
      <Card.Body style={{ overflowY: "auto", flex: 1, background: "#f8f9fa", paddingBottom: 0 }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 d-flex ${msg.from === "user" ? "justify-content-end" : "justify-content-start"}`}
          >
            <div
              className={`px-3 py-2 rounded-3 ${msg.from === "user" ? "bg-primary text-white" : "bg-light border"}`}
              style={{ maxWidth: "80%" }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </Card.Body>
      <Card.Footer className="bg-white border-0 py-2">
        <Form onSubmit={handleSend}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
            />
            <Button type="submit" variant="primary">
              <i className="bi bi-send" />
            </Button>
          </InputGroup>
        </Form>
      </Card.Footer>
    </Card>
  );
};

export default SupportChat;