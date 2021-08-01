/**
 * Here are the third-party library used on the Screen components
 * 
 * 1.   Expo Constants
 *      expo install expo-constants
 *      https://docs.expo.io/versions/latest/sdk/constants/
 * 
*/

import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';

function Screen({ children, style }) {
    return <View style={[styles.screen, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    }
});

export default Screen;