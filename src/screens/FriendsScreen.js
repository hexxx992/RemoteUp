import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FriendChatBox from '../components/FriendChatBox';
import FriendList from '../components/FriendList';
import Modal from "modal-enhanced-react-native-web";

const FriendsScreen = () => {
    const [talkingTo, setTalkingTo] = useState();
    const [showing, setShowing] = useState(false);

    const renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text>{text}</Text>
          </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.chat}>
                <View style={styles.friendChatBox}>
                    <FriendChatBox ></FriendChatBox>
                </View>
                <View style={styles.friendList}>
                    <FriendList setShowing={setShowing} setTalkingTo={setTalkingTo}></FriendList>
                </View>
            </View>
            <Modal
                isVisible={showing}
                animationIn="slideInRight"
                animationOut="slideOutRight"
            >
                <View style={styles.modalContent}>
                    <View style={styles.closeSection}>
                        {renderButton("X", () => setShowing(false))}
                    </View>
                    <View style={styles.detailSection}>
                        <Image source={talkingTo?.avatar} style={styles.detailImage}></Image>
                        <Text style={styles.detailName}>{talkingTo?.name}</Text>
                    </View>
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
    friendChatBox: {
        backgroundColor: '#83a8d6',
        width: '74.5%',
    },
    friendList: {
        backgroundColor: '#dbab84',
        width: '25%',
    },
    modalContent: {
        backgroundColor: "#9e77e0",
        padding: 22,
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "rgba(0, 0, 0, 0.1)",
        flexDirection: 'column'
    },
    button: {
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        wdith: 15,
        height: 15,
        padding: 7,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    detailImage: {
        width: 140,
        height: 140,
        margin: 50
    },
    detailName: {
        fontSize: 25
    },
    closeSection: {
        width: '100%',
        height: '1%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    detailSection: {
        height: '95%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FriendsScreen;