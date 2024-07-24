import React, { useState } from "react";
import "../css/chat.css";
import log from "../images/log.svg";

import axios from "axios";


function ChatBot() {
  const [messages, setMessages] = useState([
    { text: "Hi there!!  How can I help you?", user: "bot" },
  ]);
  const [input, setInput] = useState();
  const [darkTheme, setDarkTheme] = useState(false);

   
  const handleSend = async () => {
    if (input?.trim()) {
      const newMessage = { text: input, user: "user" };
      setMessages([...messages, newMessage]);

      // Clear the input
      setInput("");

      try {
        const result = await axios.post(
          "https://3371-35-203-185-122.ngrok-free.app/query",
          { query: input }
        );
        const botMessage = { text: result.data.answer, user: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Error querying the backend:", error);
        const errorMessage = {
          text: "Error querying the backend. Please check the console for more details.",
          user: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };
  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
    <div>
      <style>{`
        body {
          background: ${darkTheme ? '#000' : ""};
        }
      `}</style>
      {/* Your component JSX goes here */}
    </div>
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
            <nav class="navbarchat">
        <div class="navbarchat-left">
          <img src={log} alt="Company Icon" class="company-icon" />
          <span class="company-name">Medical Bot</span>
        </div>
        <div class="navbarchat-right">
          <span
            class="material-symbols-outlined theme-toggler"
            id="theme-toggler"
            onClick={handleThemeToggle}
          >
            {darkTheme ? "dark_mode" : "light_mode"}
          </span>
        </div>
      </nav>
      <div class="chatbot">
        <header>
          <h2 className="chatbothead">Chatbot for medical query</h2>
        </header>
        <ul class="chatbox">
          {messages.map((message, index) => (
            <div>
              {message.user === "bot" && (
                <div style={{ display: "inline-flex" }}>
                  <span class="material-symbols-outlined smartToy">
                    smart_toy
                  </span>{" "}
                  <li key={index} class="chat incoming">
                    <p>{message.text}</p>
                  </li>
                </div>
              )}
              {message.user === "user" && (
                <>
                  {" "}
                  <li key={index} class="chat outgoing">
                    <p>{message.text}</p>
                  </li>
                </>
              )}
            </div>
          ))}
        </ul>
        <div class="chat-input">
          <textarea
            placeholder="Enter a message..."
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <span
            id="send-btn"
            class="material-symbols-outlined"
            onClick={handleSend}
          >
            send
          </span>
        </div>
      </div>
    </div>
    </>
  );
}

export default ChatBot;
