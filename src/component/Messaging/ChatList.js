import React from "react";
import Chats from './Chats'
import './ChatList.css'
import $ from "jquery";

const ChatList = ({checkMessage}) => {
  // $(document).ready(function () {
  //   $(window).scroll(function () {
  //     if ($(this).scrollTop() > 40) {
  //       $(".nav-sticky1").addClass("fixed-top");
  //       $(".nav-sticky1").css({
  //         "background-color": "#fff",
  //         "border-bottom": "2px solid rgb(238, 238, 238)",
  //       });
  //     } else {
  //       $(".nav-sticky1").removeClass("fixed-top");
  //     }
  //   });
  // });

  return (
    <section className='main-left'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-brand">
          <h2>Chats</h2>
        </div>
        
        <div className="search-box">
        <div className="form-group search-input">
          <span className="fa fa-search search-span"></span>
          <input
            type="text"
            className="form-control search-search"
            placeholder="Search in message"
          />
        </div>
      </div>
      </nav>

      

      <div style={{marginTop: '50px'}} className='nav-sticky1'>
        <Chats checkEach={checkMessage} />
      </div>
    </section>
  );
};

export default ChatList;
