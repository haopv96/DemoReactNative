import React, {useState} from 'react'
import {StyleSheet, Text, ImageBackground, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'

interface HomeProps{
    navigation: any;
}

export default function Home({ navigation }: HomeProps) {
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
                    <TouchableOpacity style={styles.buttonLogin} onPress={() => {}}>
                        <Text style={styles.textButton}>GET STARTED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textForgotPw}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
        fontSize: 24
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
    }
})

