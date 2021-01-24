import React, {useEffect, useState, useRef} from 'react'
import {StyleSheet, SafeAreaView, View, Image, Button, Text, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-deck-swiper'
import axios from 'axios'

interface HomeProps{
    navigation: any;
}

export default function SwiperScreen({ navigation }: HomeProps) {
    const swiperRef = useRef<any>(null)
    const [cardIndex] = useState<number>(0)
    const [, setSwipedAllCards] = useState<boolean>(false)
    const [cards, setCards] = useState<any>([1, 2, 3, 4, 5, 6, 7, 8,9, 10])

    useEffect(() => {
        axios.get(`https://6001e2d508587400174db797.mockapi.io/getAnimal/GetListUrl`)
            .then(res => {
                setCards(res?.data);
            })
    }, [])

    const renderCard = (card: any, index: number) => {
        return (
            <View style={styles.card}>
                <Image source={{
                    uri: card?.url,
                }} style={{ flex: 1 }} />
            </View>
        )
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Swiper
                ref={swiperRef}
                cards={cards}
                cardIndex={cardIndex}
                cardHorizontalMargin={0}
                renderCard={renderCard}
                onSwipedAll={() => setSwipedAllCards(true)}
                stackSeparation={15}
                animateOverlayLabelsOpacity
                animateCardOpacity
                swipeBackCard
            >
                <Button onPress={() => swiperRef.current.swipeBack()} title='Swipe Back' />
            </Swiper>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white',
        minWidth: '100%'
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
    },
})

