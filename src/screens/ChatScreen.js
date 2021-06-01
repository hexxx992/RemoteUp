import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, View, Text, TouchableOpacity, SectionList} from 'react-native';
import Modal from "modal-enhanced-react-native-web";
import PublicChatBox from '../components/PublicChatBox';
import PrivateChatBox from '../components/PrivateChatBox';
import { useEffect } from 'react/cjs/react.development';
import AddfriendButton from '../components/AddFriendButton';
import LeaveChatButton from '../components/LeaveChatButton';
import ChatButton from '../components/ChatButton';

const ChatScreen = () => {
    const [chatting, setChatting] = useState(false);
    const [matching, setMatching] = useState(false);
    const [leaving, setLeaving] = useState(false);
    const [talkingTo, setTalkingTo] = useState();
    const [talkingToImage, setTalkingToImage] = useState();

    return (
        <SafeAreaView style={styles.container}>
            {chatting? undefined : <ChatButton setMatching={setMatching} setChatting={setChatting}></ChatButton>}
            {chatting?<View style={styles.chat}>
                <View style={styles.publicChatBox}>
                    <View style={styles.chatHeader}>
                        <LeaveChatButton setChatting={setChatting} setLeaving={setLeaving}></LeaveChatButton>
                    </View>
                    <PublicChatBox setTalkingTo={setTalkingTo} setTalkingToImage={setTalkingToImage}></PublicChatBox>
                </View>
                <View style={styles.privateChatBox}>
                    <View style={styles.talkingTo}>
                        <Image source={talkingToImage} style={styles.imageTalkingTo}></Image>
                        {talkingTo? <AddfriendButton></AddfriendButton>: undefined}
                    </View>
                    <PrivateChatBox talkingTo={talkingTo}></PrivateChatBox>
                </View>
            </View> : undefined}
            <Modal
                isVisible={matching}
                backdropColor="#21518C"
                backdropOpacity={1}
                animationIn="slideInDown"
                animationOut="slideOutUp"
                animationInTiming={700}
                animationOutTiming={700}
                backdropTransitionInTiming={700}
                backdropTransitionOutTiming={700}
            >
                <View style={styles.modalContent}>
                    <Text style={styles.matchingText}>Matching...</Text>
                </View>
            </Modal>
            <Modal
                isVisible={leaving}
                backdropColor="#21518C"
                backdropOpacity={1}
                animationIn="slideInDown"
                animationOut="slideOutUp"
                animationInTiming={700}
                animationOutTiming={700}
                backdropTransitionInTiming={700}
                backdropTransitionOutTiming={700}
            >
                <View style={styles.modalContent}>
                    <Text style={styles.matchingText}>Leaving...</Text>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
    },
    talkingTo: {
        height: '20%',
        backgroundColor: '#dbab84',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    chatHeader: {
        height: '10%',
        width: '100%'
    },


    matchingText: {
        fontSize: 28
    },
    imageTalkingTo: {
        height: 140,
        width: 140,
        marginTop: 20,
        borderRadius: 140/2
    },
    chat: {
        backgroundColor: '#e0e0e0',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between'
    },
    publicChatBox: {
        backgroundColor: '#83a8d6',
        width: '74.5%',
    },
    privateChatBox: {
        backgroundColor: '#dbab84',
        width: '25%',
        flexDirection: 'column',
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        alignSelf: "center",
        width: '50%',
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
});

export default ChatScreen;