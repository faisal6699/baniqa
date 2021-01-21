import React, { useState,useRef, useEffect } from "react";
import online from "../../assets/images/online.png";
import offline from "../../assets/images/offline.png";
import "./MessageList.css";

const MessageList = ({ messages, messageId }) => {
  const messageEl = useRef(null)

  let msg = messages.filter((item) => {
    return item.Id === messageId;
  });

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])
  //console.log(msg);
  return (
    <section className="list-main">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="navbar-brand " style={{ display: "flex" }}>
          <img
            src={msg[0].img}
            alt="user"
            className="rounded-circle"
            style={{ width: "50px", height: "50px" }}
          />
          <h2>{msg[0].sender}</h2>
          {messageId % 2 === 0 ? (
            <img
              src={online}
              style={{ width: "20px", height: "20px", marginTop: "30px" }}
              alt="1"
            />
          ) : (
            <img
              src={offline}
              style={{ width: "20px", height: "20px", marginTop: "30px" }}
              alt="2"
            />
          )}
        </div>
      </nav>
      <div className="conversation nav-sticky2" ref={messageEl}>
        {msg[0].messages.map((item, index) => {
          if (index % 2 === 0)
            return (
              <div className="row  ">
                <div className="col-md-9">
                <div style={{display: 'flex'}}>
                <img
                    src={msg[0].img}
                    alt="user"
                    className="rounded-circle"
                    style={{ width: "30px", height: "30px" , marginRight: '10px'}}
                  />
                  <p className="text">{item}</p>
                </div>
                </div>
                  
                <div className="col-md-3"></div>
              </div>
            );
          else
            return (
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-9">
                  <p className="text1">{item}</p>
                </div>
              </div>
            );
        })}
      </div>

      {/* {msg[0].messages.map((item,index) => {
        return{
        index % 2 !== 0 ? return(
            <div className='row'>
            <div className='col-md-6'>
                {item}
            </div>
            <div className='col-md-6'>
                
            </div>
            </div>
        ) : return(
            <div className='row'>
            <div className='col-md-6'>
                {item}
            </div>
            <div className='col-md-6'>
                
            </div>
            </div>
        )
      }})} */}
    </section>
  );
};

export default MessageList;
