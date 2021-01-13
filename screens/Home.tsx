import React, {useState} from 'react'
import {StyleSheet, Text, Button, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'

interface HomeProps{
    navigation: any;
}

export default function Home({ navigation }: HomeProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
};

