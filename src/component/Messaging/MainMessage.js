import React, { Component } from "react";
import { chatDetails } from "../../assets/js/dummyData";
import MessageList from "./MessageList";
import ChatList from "./ChatList";
import SendMessageForm from "./SendMessageFrom";
import Headers from "../layout/Header/Headers";
import Footers from "../layout/Footer/Footers";
import "./MainMessage.css";

class MainMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: chatDetails,
      messageId: 1,
    };
    this.messageUpdate = this.messageUpdate.bind(this);
    this.messageCheck = this.messageCheck.bind(this);
  }
  messageUpdate(inputEl) {
    let msg = this.state.messages.map((item, i) => {
      if (item.Id !== this.state.messageId) return item;
      else {
        let m = item.messages.concat(inputEl);

        return { ...item, messages: m };
      }
    });

    this.setState({ messages: msg });
  }

  messageCheck(id) {
    this.setState({ messageId: id });
  }

  render() {
    return (
      <section className='chat-main'>
        <Headers />
      <section className='chat-main'>
        <div className="row">
          <div className="col-md-4">
            <ChatList checkMessage={this.messageCheck} />
          </div>
          <div className="col-md-6">
            <MessageList
              messages={this.state.messages}
              messageId={this.state.messageId}
              
            />
            <SendMessageForm updateMessage={this.messageUpdate} />
          </div>
        </div>
        </section>
        <Footers />
      </section>
    );
  }
}

export default MainMessage;
