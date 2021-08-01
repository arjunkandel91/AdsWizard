import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

// App Intro Slider (onBoarding)
import AppIntroSlider from 'react-native-app-intro-slider';

// Components used in this Screen
import Screen from '../../components/Screen';

// import onboarding data
import AppConfig from '../../config/locale';

function Boarding({ navigation }) {

    const [isInitLoad, setInitLoad] = useState(true);

    // render onboarding items
    _renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, backgroundColor: item.bgcolor }}>
                <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.onboardImage} />
                </View>

                <Text style={styles.title}>
                    {item.title}
                </Text>

                <Text style={styles.subTitle}>
                    {item.text}
                </Text>
            </View>
        );
    };

    // next button on onboarding process
    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Feather name="arrow-right" color="#3F8BB5" size={24} />
            </View>
        );
    };

    // done button on onboarding process
    _renderDoneButton = () => {
        return (
            <View style={[styles.buttonCircle, { backgroundColor: "#3F8BB5" }]}>
                <Feather name="check" size={24} color="#fff" />
            </View>
        );
    };

    // once onboarding process finished slidings
    _onDone = () => {
        setInitLoad(false);
        navigation.navigate('Welcome');
    }

    return (


        <Screen style={styles.screen}>
            <AppIntroSlider
                renderItem={_renderItem}
                renderDoneButton={_renderDoneButton}
                renderNextButton={_renderNextButton}
                onDone={_onDone}
                data={AppConfig.onboardingItems}
                dotStyle={{
                    backgroundColor: '#9BBFD4'
                }}
                activeDotStyle={{
                    backgroundColor: "#3F8BB5",
                    width: 25
                }}
            />
        </Screen>
    );

};
const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#fff'
    },

    imageContainer: {
        width: 'auto',
        height: '60%',
        justifyContent: 'space-evenly'
    },

    onboardImage: {
        alignSelf: 'center'
    },

    title: {
        paddingTop: 25,
        paddingBottom: 10,
        fontSize: 26,
        fontWeight: "bold",
        color: "#484848",
        textAlign: "center",
        paddingHorizontal: 75
    },

    subTitle: {
        textAlign: "center",
        color: "#484848",
        fontSize: 16,
        lineHeight: 25,
        paddingHorizontal: 65
    },

    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#9BBFD4',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Boarding;