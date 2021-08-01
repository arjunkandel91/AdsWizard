import React from 'react';
import { ImageBackground, View, StyleSheet, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Components used in this Screen
import Screen from '../../components/Screen';

// Forms component
import AppButton from '../../components/forms/AppButton';

function Welcome({ navigation }) {

    const handleSignup = () => {
        navigation.navigate('Register');
    };

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <ImageBackground
            blurRadius={0}
            style={styles.background}
            source={require('../../../assets/large/welcome-screen.jpg')}>
            <LinearGradient
                colors={['rgba(155,191,212,0.83)', 'rgba(63,139,181,0.75)', 'rgba(63,139,181,1)']}
                style={styles.overlay}>

                <Screen style={styles.screen}>

                    <View style={styles.logoContent}>
                        <Image style={styles.logo} source={require('../../../assets/logo.png')} />
                        <Text style={styles.title}>Ads Wizard</Text>
                        <Text style={styles.tagline}>Facebook Ads Marketing</Text>
                    </View>

                    <View style={styles.action}>
                        <AppButton color="white" title="Register" width="90%" onPress={handleSignup}></AppButton>
                        <AppButton color="white" title="Sign In" width="90%" onPress={handleLogin}></AppButton>
                    </View>

                </Screen>

            </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({

    screen: {
        padding: 20,
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-between"
    },

    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    overlay: {
        width: "100%",
        height: "100%"
    },

    logoContent: {
        alignItems: "center",
        paddingTop: 105
    },

    logo: {
        resizeMode: "contain",
        height: 100,
        marginBottom: 15
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },

    tagline: {
        textAlign: "center",
        color: "#fff",
        fontSize: 14,
        lineHeight: 25,
    },

    action: {
        alignItems: "center",
        paddingBottom: "10%",
    },


});

export default Welcome;