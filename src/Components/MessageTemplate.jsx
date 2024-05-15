import React from 'react'

const MessageTemplate = ({ username, createdAt, message,darkMode }) => {
  const limitedUsername = username.length> 10 ? username.slice(0, 10) + '...' : username;
  return (
    <div className="message">
        {/* <p>
            <span className={`${darkMode ? 'text-white' : ' text-black'}  message__name`}>{limitedUsername}</span>
            <span className="message__meta">{createdAt}</span>
        </p>
        <p className={`${darkMode ? 'text-white' : ' text-black'}`}>{message}</p> */}


        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className={`${darkMode ? 'text-white' : ' text-black'}  chat-header`} >
          {limitedUsername}
          <span className="message__meta" style={{padding: '0px 5px'}}>{createdAt}</span>
          </div>
          <div className="chat-bubble">{message}</div>
        </div>
  </div>
  )
}

export default MessageTemplate