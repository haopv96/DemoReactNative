import React, {useEffect, useState} from 'react'
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import Swiper from 'react-native-deck-swiper'
import axios from 'axios'

interface HomeProps{
    navigation: any;
}

export default function SwiperScreen({ navigation }: HomeProps) {
    const [cardIndex, setCardIndex] = useState<number>(0)
    const [swipedAllCards, setSwipedAllCards] = useState<boolean>(false)
    const [cards, setCards] = useState<any>([1, 2, 3, 4, 5, 6, 7, 8,9, 10])

    useEffect(() => {
        axios.get(`https://6001e2d508587400174db797.mockapi.io/getAnimal/GetListUrl`)
            .then(res => {
                setCards(res);
            })
    }, [])

    const renderCard = (card: any, index: number) => {
        return (
            <View style={styles.card}>
                <Image source={{
                    uri: card?.url,
                }} style={{ width: 100, height: 100 }} />
            </View>
        )
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Swiper
                cards={cards}
                cardIndex={cardIndex}
                cardVerticalMargin={0}
                renderCard={renderCard}
                onSwipedAll={() => setSwipedAllCards(true)}
                stackSeparation={15}
                animateOverlayLabelsOpacity
                animateCardOpacity
                swipeBackCard
            />
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
    }
})

