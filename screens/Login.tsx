import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

interface LoginProps{
    navigation: any;
}

export default function Login({navigation}: LoginProps) {
    const [email, setEmail] = useState<string>('')
    const [passWork, setPassWork] = useState<string>('')
    const [showPW, setShowPW] = useState<boolean>(false)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.labelField}>Email or mobile number</Text>
            <View>
                <TextInput
                    style={styles.textField}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    autoCompleteType="email"
                    keyboardType="email-address"
                />
            </View>
            <View>
                <Text style={styles.labelField}>Password</Text>
                <View style={styles.inputPassword}>
                    <TextInput
                        style={styles.textField}
                        onChangeText={text => setPassWork(text)}
                        value={passWork}
                        secureTextEntry={!showPW}
                    />
                    <View  style={styles.eyeOutline}>
                        <TouchableOpacity onPress={() => setShowPW(!showPW)} style={styles.eye}>
                            <Ionicons name={showPW ? "md-eye-outline": "md-eye-off-outline"} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonLogin} onPress={() => {}}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <Text style={styles.textForgotPw}>FORGOT PASSWORD</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
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
    labelField: {
        fontSize: 33,
        fontWeight: "bold",
        color: '#000000',
        marginBottom: 20,
        marginTop: 20
    },
    textField: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 33,
        backgroundColor: '#FFFFFF',
        minWidth: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 24
    },
    textForgotPw: {
        marginTop: 22,
        fontSize: 20,
        color: '#000000',
        textAlign: "center"
    },
    inputPassword: {
        position: "relative"
    },
    eyeOutline: {
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    eye: {
        marginRight: 15
    }
});

