import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

function AppHeader(props) {
    return (
        <View style={styles.container}>

            <View style={styles.user}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/remove/user/arjun-kandel.png')} style={styles.avatar} />
                </View>
                <Text style={styles.page}>Home</Text>
            </View>

            <View style={styles.action}>
                <View style={styles.bell}>
                    <Feather name="bell" color="#FFF" size={25} />

                    <View style={styles.notification}>
                        <Text style={styles.notitext}>2</Text>
                    </View>
                </View>

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 70,
        backgroundColor: "#3F8BB5",
        borderBottomColor: "#000",
        borderBottomWidth: 0.5,
        overflow: "hidden",
        paddingVertical: 10,
        zIndex: 2
    },

    user: {
        height: 35,
        flexDirection: "row",
        paddingLeft: 20,
        marginVertical: 10,

        //backgroundColor: "#fff"

    },
    imageContainer: {
        width: 35,
        height: 35,
        marginRight: 10,
        borderRadius: 50,
        borderWidth: 5,
        backgroundColor: "#fff",
        borderColor: "#fff",
    },

    avatar: {
        width: 28,
        height: 28,
        borderRadius: 50,
        resizeMode: "contain",
        alignSelf: "center"
    },

    page: {
        alignSelf: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },

    action: {
        flexDirection: "row",
        height: 35,
        marginVertical: 10,
        marginRight: 10,
        marginTop: 15,
    },

    heart: {},

    bell: {
        marginHorizontal: 10,
    },

    notification: {
        height: 20,
        width: 20,
        top: -5,
        right: -5,
        position: "absolute",
        backgroundColor: "#B2DF8A",
        padding: 5,
        borderColor: "#495D37",
        borderWidth: 1,
        borderRadius: 50,
        overflow: "hidden",
        justifyContent: "center"
    },

    notitext: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 12,
        color: "#495D37",
    }
});

export default AppHeader;