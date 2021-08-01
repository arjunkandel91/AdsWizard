import React from 'react';
import { ImageBackground, View, StyleSheet, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Components used in this Screen
import Screen from '../../components/Screen';

// Forms component
import AppButton from '../../components/forms/AppButton';
import AuthInputText from '../../components/forms/AuthInputText';

function Login({ navigation }) {

    const handleSignup = () => {
        navigation.navigate('Register');
    };

    const handleAuth = () => {
        navigation.navigate('Home');
    };

    return (
        <ImageBackground
            blurRadius={0}
            style={styles.background}
            source={require('../../../assets/large/welcome-screen.jpg')}>
            <LinearGradient
                colors={['rgba(255,255,255,0.99)', 'rgba(255,255,255,0.92)']}
                style={styles.overlay}>

                <Screen style={styles.screen}>

                    <View style={styles.logoContent}>
                        <Image style={styles.logo} source={require('../../../assets/icons/megaphone.png')} />
                        <Text style={styles.title}>Welcome to Ads Wizard</Text>
                        <Text style={styles.tagline}>Please login to continue.</Text>
                    </View>

                    <View style={styles.action}>
                        <AuthInputText icon="mail" placeholder="Email Address"></AuthInputText>
                        <AuthInputText password="true" icon="lock" placeholder="Password"></AuthInputText>
                        <AppButton color="primary" textcolor="white" title="Sign In" width="90%" onPress={handleAuth}></AppButton>
                    </View>

                    <View style={styles.action}>
                        <Text style={styles.tagline}>Don't have an account?</Text>
                        <AppButton title="Register an Account" color="white" textcolor="primary" width="90%" onPress={handleSignup}></AppButton>
                    </View>

                </Screen>

            </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({

    screen: {
        padding: 25,
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
        paddingTop: 25,
    },

    logo: {
        resizeMode: "contain",
        height: 75,
        marginBottom: 15
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#484848",
        textAlign: "left",
    },

    tagline: {
        color: "#484848",
        fontSize: 14,
        lineHeight: 20,
        marginHorizontal: 45,
        textAlign: "left",
    },

    action: {
        alignItems: "center",
        paddingBottom: "10%",
    },

});

export default Login;