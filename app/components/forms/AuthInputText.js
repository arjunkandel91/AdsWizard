import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../../config/colors';

function AuthInputText({ icon, placeholder, password }) {

    const [passwordVisibility, setPasswordVisibility] = useState(true);

    const handlePasswordVisibility = () => {
        if (passwordVisibility) {
            setPasswordVisibility(false);
        } else {
            setPasswordVisibility(true);
        }
    };

    const handlePasswordIcon = () => {
        if (passwordVisibility) {
            return "eye-off"
        }

        return "eye";
    }

    return (
        <View style={styles.container}>
            <Feather name={icon} size={25} color="#8E8E8E" style={styles.icon} />
            {password
                ?
                <>
                    <TextInput
                        secureTextEntry={passwordVisibility}
                        returnKeyType='go'
                        autoCorrect={false}
                        placeholderTextColor="#8E8E8E" placeholder={placeholder} style={styles.input} />
                    <Feather name={handlePasswordIcon()} size={25} color="#8E8E8E" style={styles.icon} onPress={handlePasswordVisibility} />
                </>
                :
                <TextInput placeholderTextColor="#8E8E8E" placeholder={placeholder} style={styles.input} returnKeyType="next" />
            }
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#fff",
        borderRadius: 15,
        flexDirection: 'row',
        width: '90%',
        padding: 10,
        marginVertical: 10,
        borderColor: "#C2C2C2",
        borderWidth: 1
    },
    icon: {
        marginHorizontal: 10,
        marginVertical: 10
    },

    input: {
        flex: 1,
        alignSelf: "stretch",
        fontSize: 14,
        color: "#646464",
    }
});

export default AuthInputText;