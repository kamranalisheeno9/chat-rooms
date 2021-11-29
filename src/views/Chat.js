import React, { useEffect, useState } from 'react'
import './chat.css'
import { Typography, TextField, Button, Card, Grid, CardActions, CardContent, Container } from '@mui/material';
import Item from '@mui/material/ListItem';

import List from '@mui/material/List';
import { chainPropTypes } from '@mui/utils';

function Chat(props) {
  const [chatInput, setChatInput] = useState("")
  const [chatData, setChatData] = useState([])

  const sendFunc = () => {
    {
      chatInput != "" ?
      chatData.push(chatInput) ||
      setChatData([...chatData])
      :
      setChatInput("")
    }
    setChatInput("")

  }

  return (<>
    <Typography variant="h5" sx={{ marginTop: 2, }} component="h5">
      CHAT ROOM
    </Typography>
    <List className="chat-screen" >
      {chatData.map((chat, index) => {
        return (

          <Typography key={index} className="chat-text" variant="p" component="p">
            You : <span>{chat}</span>
          </Typography>
        )
      })}


    </List>
    <List className="stickToBottom">
      <Item >
        <TextField className="search-bar" id="outlined-basic" label="Room Name" variant="outlined" value={chatInput} onChange={(e) => setChatInput(e.target.value)} />
        <Button variant="contained" sx={{ marginLeft: 2 }} onClick={() => sendFunc()} >Send</Button>
      </Item>
    </List>
  </>
  )
}

export default Chat;
