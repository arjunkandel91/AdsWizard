import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

// default color combinations of application
import colors from '../../config/colors';

function AppButton({ width, title, onPress, color = "primary", textcolor = "primary" }) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={[styles.button, { backgroundColor: colors[color], width: width }]} onPress={onPress}>
            <Text style={[styles.text, { color: colors[textcolor] }]}> {title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: colors.primary,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: "center",
        padding: 18,
        width: '90%',
        marginVertical: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowOpacity: 0.2,
        shadowRadius: 15,

        elevation: 5,
    },

    text: {
        fontSize: 16,
        textTransform: 'uppercase',
    }
});

export default AppButton;