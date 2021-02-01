import React, { useEffect, useRef, useState } from "react";
import send from "../../assets/images/send.png";
import { MdAttachFile, MdSend } from "react-icons/md";

import upload from "../../assets/images/upload.png";
import "./SendMessageFrom.css";

const SendMessageForm = ({ updateMessage }) => {
  const [input, setInput] = useState("");
  const [images, setImages] = useState({});

  function imageAdd() {
    document.getElementById("button").addEventListener("click", () => {
      document.getElementById("fileInput").click();
    });

    console.log(images);
  }
  return (
    <div className="input-main">
      <div className="send-button">
        <textarea
          type="text"
          className="send-button-input"
          placeholder="Enter Message"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MdAttachFile
          id="button"
          size="3em"
          onClick={imageAdd}
          style={{ marginTop: "25px" }}
        />{" "}
        <MdSend
          size="3em"
          color="blue"
          onClick={() => {
            // console.log(input);
            updateMessage(input);
          }}
          style={{ marginTop: "25px" }}
        />
      </div>
      <input
        id="fileInput"
        type="file"
        style={{ display: "none" }}
        onClick={(e) => setImages(e.target.value)}
      />
      {/* <div className="row">
        <textarea
          type="text"
          multiple={true}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="enter your message.."
          className="col-md-7"
        />

        <div id="button" onClick={imageAdd} classNam="col-md-2 mr-2 ml-2">
          <img
            className="mr-4 ml-4"
            src={upload}
            style={{ width: "50px", height: "50px" }}
          />
        </div>

        <button
          onClick={() => {
            console.log(input);
            updateMessage(input);
          }}
          className="col-md-2"
        >
          <img src={send} style={{ width: "28px", height: "28px" }} />
        </button>

        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          onClick={(e) => setImages(e.target.value)}
          className="col-md-1"
        />
      </div> */}
    </div>
  );
};

export default SendMessageForm;
