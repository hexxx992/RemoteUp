import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

const PublicChatBox = ({setTalkingTo}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developers',
        createdAt: new Date().toLocaleString("en-US", {timeZone: "America/Chicago"}),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ccf456e3-399d-4e68-9a00-888b379680ce/d49jmup-f3170f94-b47b-4723-86e2-b4e958f4da40.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NjZjQ1NmUzLTM5OWQtNGU2OC05YTAwLTg4OGIzNzk2ODBjZVwvZDQ5am11cC1mMzE3MGY5NC1iNDdiLTQ3MjMtODZlMi1iNGU5NThmNGRhNDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UHmpv_GKh9pY4wJraYfTEJARGg_gdxxzzl0ntpROBnM',
        },
      },
      {
        _id: 3,
        text: 'Hello there',
        createdAt: new Date().toLocaleString("en-US", {timeZone: "America/Chicago"}),
        user: {
          _id: 4,
          name: 'Another',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 5,
        text: 'How are you doing today?',
        createdAt: new Date().toLocaleString("en-US", {timeZone: "America/Chicago"}),
        user: {
          _id: 5,
          name: 'Another',
          avatar: 'data:image/jpeg;base64,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',
        },
      },
    ])
  }, []);

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
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  }, [])

  const onChoose = (props) => {
    setTalkingTo(props);
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => onSend(newMessage)}
      user={{ _id: 1, name: 'User Test' }}
      renderBubble={renderBubble}
      style={styles.container}
      onPressAvatar={(props) => onChoose(props)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20
  }
})

export default PublicChatBox;