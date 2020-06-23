import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}/>
            <View style={styles.textTwoStyle}/>
            <Text style={styles.textThreeStyle}/>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    textOneStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    textTwoStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    textThreeStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;