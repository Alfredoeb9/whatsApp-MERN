import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />

        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Chat;