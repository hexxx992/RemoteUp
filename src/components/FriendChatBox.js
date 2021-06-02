import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

const FriendChatBox = () => {
  const [messages, setMessages] = useState([]);

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

//   const renderSend = (sendProps) => {(
//     <TouchableOpacity style={styles.sendButton}>
//         <Text>Send</Text>
//     </TouchableOpacity>
//   )};

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  }, [])

  const onChoose = (props) => {
    setTalkingTo(props);
    setTalkingToImage(props.avatar);
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => onSend(newMessage)}
      user={{ _id: 1, name: 'User Test' }}
      renderBubble={renderBubble}
      style={styles.container}
      onPressAvatar={(props) => onChoose(props)}
    //   renderSend={renderSend}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20
  },
//   sendButton: {
//       backgroundColor: '#8ae86b',
//       height: '100%',
//       wdith: 40
//   }
})

export default FriendChatBox;