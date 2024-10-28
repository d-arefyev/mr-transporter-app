"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const SOSButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOperatorMessageSent, setIsOperatorMessageSent] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (isChatOpen && !isOperatorMessageSent) {
      setMessages((prevMessages) => [
        { sender: "operator", text: "Hallo! Wie kann ich Ihnen helfen?" },
        ...prevMessages,
      ]);
      setIsOperatorMessageSent(true);
    }
  }, [isChatOpen, isOperatorMessageSent]);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  const buttonClassName = `
    fixed w-[65px] h-[65px] bg-color-accent rounded-full shadow-lg flex items-center justify-center
    right-[50px] bottom-[50px] z-50
  `;

  const chatBoxClassName = `
    fixed right-[50px] bottom-[130px] w-[330px] h-[550px] bg-white shadow-lg rounded-lg transition-transform transform ${
      isChatOpen ? "scale-100" : "scale-0"
    } origin-bottom-right
  `;

  return (
    <div>
      <button onClick={toggleChat} className={buttonClassName}>
        <Image
          src={isChatOpen ? "/icons/close.svg" : "/icons/chat.svg"}
          alt={isChatOpen ? "Close Chat" : "Help Chat"}
          width={isChatOpen ? 25 : 50}
          height={isChatOpen ? 30 : 35}
        />
      </button>

      <div className={chatBoxClassName}>
        <div className="flex flex-col h-full">
          {/* Chat header */}
          <div className="flex items-center bg-color-accent text-white p-5 rounded-t-lg">
            <div className="flex flex-col gap-2">
              <Image
                src="/icons/logo-white.svg"
                alt="Icon 2"
                width={207}
                height={13}
              />
              <span className="h-4">Online-Hilfe</span>
            </div>
          </div>

          {/* Chat Body */}
          <div
            className="flex-1 bg-color-light p-4 space-y-2 overflow-y-auto"
            style={{
              backgroundImage: "url('/chat-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender !== "user" && (
                  <Image
                    src="/icons/operator.svg"
                    alt="Operator"
                    width={35}
                    height={37}
                    className="mr-2"
                  />
                )}
                <div
                  className={`p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-color-accent text-color-light"
                      : "bg-color-primary text-color-gray"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex items-center justify-between p-3 gap-2">
            <input
              type="text"
              placeholder="Ihre Nachricht ..."
              className="flex-1 p-2 rounded-md border border-color-light-gray"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="w-8 h-8 bg-color-accent rounded-full flex items-center justify-center"
            >
              <Image
                src="/icons/send-2.svg"
                alt="Send"
                width={22}
                height={22}
              />
            </button>
            <button>
              <Image
                src="/icons/clip.svg"
                alt="Attach"
                width={25}
                height={25}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOSButton;
