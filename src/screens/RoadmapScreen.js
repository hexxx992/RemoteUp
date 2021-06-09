import React, {useState, useRef} from 'react';
import { CheckBox, View, SafeAreaView, StyleSheet, Image, ImageBackground, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Modal from "modal-enhanced-react-native-web";
import {Video} from 'expo-av';

const RoadmapScreen = () => {
    const [showing, setShowing] = useState(false);
    const [status, setStatus] = useState({});
    const video1 = useRef(null);
    const video2 = useRef(null);
    const [selected, setSelected] = useState();

    const renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text>{text}</Text>
          </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source='https://cdn.sanity.io/images/xbrd0y48/production/c324e648f4f14bdb26c914d8a87f784316c46414-1600x900.png' style={styles.map}>
                <TouchableOpacity style={styles.first} 
                    onPress={() => {setShowing(true); setSelected(1)}}></TouchableOpacity>
                <TouchableOpacity style={styles.second}
                    onPress={() => {setShowing(true); setSelected(2)}}></TouchableOpacity>
                <TouchableOpacity style={styles.third}
                    onPress={() => {setShowing(true); setSelected(3)}}></TouchableOpacity>
                <TouchableOpacity style={styles.fourth}
                    onPress={() => {setShowing(true); setSelected(4)}}></TouchableOpacity>
                <Modal
                    isVisible={showing}
                    backdropColor="#ff8a8a"
                    backdropOpacity={0.9}
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={700}
                    animationOutTiming={700}
                    backdropTransitionInTiming={700}
                    backdropTransitionOutTiming={700}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.closeSection}>
                            {renderButton("X", () => {
                                setShowing(false);
                                if (selected == 1) video1.current.pauseAsync();
                                if (selected == 4) video2.current.pauseAsync();
                                })}
                        </View>
                        {(() => {
                            switch (selected) {
                                case 1: return (<Video
                                        ref={video1}
                                        style={styles.video}
                                        source={{
                                        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                                        }}
                                        useNativeControls
                                        resizeMode="contain"
                                        isLooping
                                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                                        style = {styles.video}
                                    />);
                                case 2: return (<View style={styles.task1}>
                                    <Text style={styles.task1Title}>Task 1</Text>
                                    <View style={styles.task1Sub}>
                                        <CheckBox style={styles.task1SubCheckbox}/>
                                        <Text style={styles.task1SubText}>Match one chatroom, and chat with someone in private.</Text>
                                    </View>
                                    </View>)
                                case 3: return (<View style={styles.task1}>
                                    <Text style={styles.task1Title}>Task 2</Text>
                                    <View style={styles.task1Sub}>
                                        <CheckBox style={styles.task1SubCheckbox}/>
                                        <Text style={styles.task1SubText}>Add someone in the public chatroom to your fiend list.</Text>
                                    </View>
                                    </View>)
                                case 4: return (<Video
                                    ref={video2}
                                    style={styles.video}
                                    source={{
                                    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                                    }}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                    style = {styles.video}
                                />);
                            }
                        })()}
                        <View style={styles.detailSection}>
                            {/* <Image source={talkingTo?.avatar} style={styles.detailImage}></Image> */}
                            {/* <Text style={styles.detailName}>{talkingTo?.name}</Text> */}
                            
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    map: {
        width: '100%',
        height: '100%',
    },
    closeSection: {
        width: '100%',
        height: '1%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
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
    video: {
        margin: 5
    },
    task1: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    task1Title: {
        fontSize: 22    
    },
    task1Sub: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    task1SubCheckbox: {
        width: 22,
        height: 22,
        marigin: 10
    },
    task1SubText: {
        flexDirection: 'row',
        fontSize: 20
    },
    first: {
        position: 'absolute',
        right: '40%',
        bottom: '12.5%',
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'red'
    },
    second: {
        position: 'absolute',
        left: '30%',
        bottom: '12.5%',
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'red'
    },
    third: {
        position: 'absolute',
        left: '50%',
        bottom: '28%',
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'red'
    },
    fourth: {
        position: 'absolute',
        left: '40%',
        bottom: '43.5%',
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'red'
    }
})

export default RoadmapScreen;