import React, { useContext, useState } from 'react';
import { Button, Container, Grid, List, TextField } from '@material-ui/core';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { Loader } from './Loader';
import { PropsContext } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase';
import { Message } from './Message';

const Chat = () => {
  const {auth, firestore } = useContext(PropsContext);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )
    console.log(messages);
  const [messageText, setMessageText] = useState('');
  const changeTextMessage = e => {
    setMessageText(e.target.value)
  }

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: messageText,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setMessageText('');
  }

  if(loading) {
    return <Loader/>
  }
  return (
    <Container>
      <Grid 
        container 
        alignItems='center' 
        justify='center'
        style={{
          height: window.innerHeight - 100,
          marginTop: '10px'
        }}>
          <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>
            <List>
              {messages.map(m => (
                <Message
                  senderId={m.uid}
                  userAuthId={user.uid}
                  key={m.createdAt}
                  name={m.displayName}
                  photo={m.photoURL}
                  text={m.text}
                  time={m.createdAt}
                />
              ))}
            </List>
          </div>
          <Grid 
            container
            direction='column'
            alignItems='flex-end'
            style={{width: '80%'}}
          >
            <TextField
              multiline
              fullWidth
              variant='outlined'
              rowsMax={2}
              label='Enter message...'
              onChange={changeTextMessage}
              value={messageText}
            />
            <Button
              variant='contained'
              color='primary'
              onClick={sendMessage}
            >
              Send
            </Button>
          </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;