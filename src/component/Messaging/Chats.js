import React from "react";
import { chatInfo } from "../../assets/js/dummyData";
import online from "../../assets/images/online.png";
import offline from "../../assets/images/offline.png";


const Chats = ({checkEach}) => {
  return (
    <div>
      {chatInfo.map((item, index) => {
        return (
          <section className="chat-card ">
            <div className="row chat-card-each" onClick={() => checkEach(item.Id)}>
              <div className="col-md-3">
                <img
                  className="rounded-circle"
                  src={item.img}
                  alt="profile_img"
                />
              </div>

              <div className="col-md-6">
                <h4> {item.sender}</h4>
                <p>
                  {item.sender}: {item.message}
                </p>
                <span> 2h</span>
              </div>

              <div className="col-md-2">
                {index % 2 === 0 ? (
                  <img src={online} style={{ width: "20px", height: "20px", marginTop: '30px' }} alt='1'/>
                ) : (
                  <img
                    src={offline}
                    style={{ width: "20px", height: "20px", marginTop: '30px'}}
                    alt='2'
                  />
                )}
              </div>

              <div className='col-md-1'>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Chats;
