import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Headers from "../layout/Header/Headers";
import Footers from "../layout/Footer/Footers";
import owner2 from "../../assets/images/owner2.jpg";
import img10 from "../../assets/images/page_img/10.jpg";
import img11 from "../../assets/images/page_img/11.jpg";
import img12 from "../../assets/images/page_img/12.jpg";
import img13 from "../../assets/images/page_img/13.jpg";
import img13_1 from "../../assets/images/page_img/13.png";
import img14 from "../../assets/images/page_img/14.jpg";
import img15 from "../../assets/images/page_img/15.jpg";
import imgk13 from "../../assets/images/page_img/k13.jpg";
import send from "../../assets/images/send.png";
import close from "../../assets/images/close.png";
import "./Page.css";
import { chatDetails } from "../../assets/js/dummyData";

const Page = () => {
  const [chat, openChat] = useState(false);
  const messageEl = useRef(null);

  // let msg = messages.filter((item) => {
  //   return item.Id === messageId;
  // });

  useEffect(() => {
    if (chat) {
      if (messageEl) {
        console.log(messageEl)
        messageEl.current.addEventListener("DOMNodeInserted", (event) => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: "smooth" });
        });
      }
    }
  }, []);
  return (
    <section className="page-section">
      {/* <div className="go_top">
            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
          </div> */}

      <Headers />

      {/* <section className="search">
            <div className="container">
              <div className="search-box py-4">
                <input className="form-control" type="text" placeholder="SEARCH...." />
              </div>
            </div>
          </section> */}

      <section className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <a href="#">
                  <img className="rounded" src={owner2} alt="profile" />
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="profile-info ml-3">
                <h2>Sohag</h2>
                <p>HI, I'm Sohag. I make and sell handmade silver jewelry.</p>
                <div style={{ display: "flex" }}>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked final"></span>
                  <span>(3)</span>
                </div>
                <em>6-8 days delivery</em>
                <span>Cash On Delivery and BKash Avaliable</span>
                <a className="btn flw" href="#">
                  <i className="fa fa-plus" aria-hidden="true"></i> Follow
                </a>
                <a className="btn msg" href="#" onClick={() => openChat(true)}>
                  <i className="fa fa-plus" aria-hidden="true"></i> Message
                </a>

                {chat ? (
                  <section className="list-mains">
                    <nav className="navbar" >
                      <div className="navbar-brand" style={{ display: "flex" }}>
                        <img
                          src={chatDetails[0].img}
                          alt="user"
                          className="rounded-circle"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <h2>{chatDetails[0].sender}</h2>
                      </div>

                      <div onClick={() => openChat(false)}>
                        <img
                          src={close}
                          style={{
                            width: "20px",
                            height: "20px",
                            float: "right",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </nav>
                    <div className="conversations" ref={messageEl} >
                      {chatDetails[0].messages.map((item, index) => {
                        if (index % 2 === 0)
                          return (
                            <div className="row  ">
                              <div className="col-md-9">
                                <div style={{ display: "flex" }}>
                                  <img
                                    src={chatDetails[0].img}
                                    alt="user"
                                    className="rounded-circle"
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                      marginRight: "10px",
                                    }}
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

                    <div className="row input-page-main" >
                      <input
                        type="text"
                        placeholder="enter your message.."
                        className="input-text-page col-md-10"
                      />
                      <button className="page-chat-button col-md-2">
                        {/* <img src={send} style={{ width: '100%', height: ''}} /> */}
                        <i className="fa fa-paper-plane" aria-hidden="true" style={{color: 'black', fontSize: '35px'}}></i>
                      </button>
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
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-items">
        <div className="section-items">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img10} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img11} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img12} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img13} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img14} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img15} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={imgk13} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img13} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img11} alt="user-items" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section-items">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img10} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img11} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img12} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img13} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img14} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img15} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={imgk13} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img13} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img11} alt="user-items" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footers />
    </section>
  );
};

export default Page;
