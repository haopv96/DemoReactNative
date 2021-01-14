import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

interface LoginProps{
    navigation: any;
}

export default function Login({navigation}: LoginProps) {
    const [email, setEmail] = useState<string>('')
    const [passWord, setPassWord] = useState<string>('')
    const [showPW, setShowPW] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<string>('')
    const [errorPW, setErrorPW] = useState<string>('')

    const validateEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    const handleBlurEmail = () => {
        if (email === '') {
            setErrorEmail('Please input your Email!')
        } else if (!validateEmail(email)) {
            setErrorEmail('Email is not a valid email!')
        } else {
            setErrorEmail('')
        }

    }

    const handleBlurPassword = () => {
        if (passWord === '') {
            setErrorPW('Please input your Password!')
        } else {
            setErrorPW('')
        }
    }
    
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
                    onBlur={handleBlurEmail}
                />
                {!!errorEmail && <Text style={styles.errorField}>{errorEmail}</Text>}
            </View>
            <View>
                <Text style={styles.labelField}>Password</Text>
                <View style={styles.inputPassword}>
                    <TextInput
                        style={styles.textField}
                        onChangeText={text => setPassWord(text)}
                        value={passWord}
                        secureTextEntry={!showPW}
                        onBlur={handleBlurPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPW(!showPW)} style={styles.eye}>
                        <Ionicons name={showPW ? "md-eye-outline": "md-eye-off-outline"} size={24} color="black" />
                    </TouchableOpacity>
                </View>
                {!!errorPW && <Text style={styles.errorField}>{errorPW}</Text>}
            </View>
            <TouchableOpacity style={styles.buttonLogin} onPress={() => {
                handleBlurEmail()
                handleBlurPassword()
            }}>
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
        fontSize: 30,
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
        fontSize: 24,
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
    eye: {
        position: "absolute",
        top: '30%',
        right: 15,
    },
    errorField: {
        color: 'red',
        marginLeft: 20
    }
});

