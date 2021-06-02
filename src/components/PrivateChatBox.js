import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

const PrivateChatBox = ({talkingTo}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello there.',
        createdAt: new Date().toLocaleString("en-US", {timeZone: "America/Chicago"}),
        user: {
          _id: 3,
          name: 'User1',
          avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ccf456e3-399d-4e68-9a00-888b379680ce/d49jmup-f3170f94-b47b-4723-86e2-b4e958f4da40.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NjZjQ1NmUzLTM5OWQtNGU2OC05YTAwLTg4OGIzNzk2ODBjZVwvZDQ5am11cC1mMzE3MGY5NC1iNDdiLTQ3MjMtODZlMi1iNGU5NThmNGRhNDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UHmpv_GKh9pY4wJraYfTEJARGg_gdxxzzl0ntpROBnM',
        },
      },
    ])
  }, []);

  useEffect(() => {
      setMessages([]);
  }, [talkingTo])

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#6646ee'
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
  }

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => onSend(newMessage)}
      user={{ _id: 1, name: 'User Test' }}
      renderBubble={renderBubble}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    height: '100%'
  }
})

export default PrivateChatBox;