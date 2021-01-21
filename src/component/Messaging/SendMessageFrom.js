import React, { useRef, useState } from "react";
import send from "../../assets/images/send.png";
import "./SendMessageFrom.css";

const SendMessageForm = ({ updateMessage }) => {
  const [input, setInput] = useState();

  return (
    <div className="input-main">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter your message.."
        className="input-text"
      />
      <button
        onClick={() => {
          console.log(input);
          updateMessage(input);
        }}
        className="input-button"
      >
        <img src={send} style={{ width: "28px", height: "28px" }} />
      </button>
    </div>
  );
};

export default SendMessageForm;
