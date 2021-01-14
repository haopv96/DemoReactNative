import React, {useState} from 'react'
import {StyleSheet, Text, ImageBackground, View, Image, TouchableOpacity, SafeAreaView, Modal, TouchableHighlight} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons'

interface HomeProps{
    navigation: any;
}

export default function Home({ navigation }: HomeProps) {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground source={require('./../assets/background.png')} style={styles.container} >
                <View style={styles.logoZone}>
                    <Image
                        style={styles.logo}
                        source={require('./../assets/logo.png')}
                    />
                    <Image
                        style={styles.mainName}
                        source={require('./../assets/pawtner.png')}
                    />
                </View>
                <View style={styles.loginArea}>
                    <TouchableOpacity style={styles.buttonLogin} onPress={() => setModalVisible(true)}>
                        <Text style={styles.textButton}>GET STARTED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textForgotPw}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginBottom: 10 }}>
                            <Entypo name="chevron-down" color="black" size={40} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnModal} onPress={() => {}}>
                            <Text style={styles.textButton}>SIGN UP WITH EMAIL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnModal} onPress={() => {}}>
                            <Text style={styles.textButton}>SIGN UP WITH MOBILE NO.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnPlatform} onPress={() => {}}>
                            <View style={styles.logoPlatform}>
                                <Image
                                    style={styles.logo}
                                    source={require('./../assets/google.png')}
                                />
                            </View>
                            <Text style={styles.textPlatform}>SIGN UP WITH GOOGLE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnPlatform} onPress={() => {}}>
                            <View style={styles.logoPlatform}>
                                <Image
                                    style={styles.logo}
                                    source={require('./../assets/facebook.png')}
                                />
                            </View>
                            <Text style={styles.textPlatform}>SIGN UP WITH FACEBOOK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        marginBottom: 15,
    },
    mainName: {
        height: 24
    },
    buttonLogin: {
        backgroundColor: '#000000',
        height: 50,
        minWidth: '100%',
        borderRadius: 33,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 60
    },
    textButton: {
        color: 'white',
        fontSize: 20
    },
    textForgotPw: {
        marginTop: 22,
        fontSize: 20,
        color: '#000000',
        textAlign: "center"
    },
    logoZone: {
        flex: 7,
        alignItems: "center",
        justifyContent: "center"
    },
    loginArea: {
        flex: 3,
        marginHorizontal: 16,
    },

    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        minWidth: '100%',
        alignItems: "center",
        shadowColor: "#000",
        paddingRight: 16,
        paddingLeft: 16,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingBottom: 40,
    },
    btnModal: {
        backgroundColor: '#000000',
        height: 50,
        minWidth: '100%',
        borderRadius: 33,
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 15,
    },
    btnPlatform: {
        height: 50,
        minWidth: '100%',
        borderRadius: 33,
        borderWidth: 2.5,
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 15,
        borderColor: '#000000',
        position: "relative"
    },
    textPlatform: {
        fontSize: 20,
        color: '#000000',
    },
    logoPlatform: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        flexDirection:'row',
        flexWrap:'wrap',
        paddingLeft: 10,
    }
})

