import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: '20'},
        {name: 'Friend #2', age: '34'},
        {name: 'Friend #3', age: '3'},
        {name: 'Friend #4', age: '86'},
        {name: 'Friend #5', age: '20'},
        {name: 'Friend #6', age: '20'},
        {name: 'Friend #7', age: '20'},
        {name: 'Friend #8', age: '20'},
        {name: 'Friend #9', age: '20'},
    ]

    return (
        <FlatList 
        //     horizontal
        //     showsHorizontalScrollIndicator = {false}
            keyExtractor={ friend => friend.name}
            data={friends} 
            renderItem = {({item})=>{
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        // marginVertical: 50
    }
});

export default ListScreen;