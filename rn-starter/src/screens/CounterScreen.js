import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) =>{
    switch (action.change){
        case 'increment':
            return {...state, count: state.count + 1};
        case 'decrement':
            return {...state, count: state.count - 1};
        default:
            return state;
    }

}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0} )

    return <View>
        <Button title= "Increase" onPress={() => dispatch({change: 'increment'})}/>
        <Button title= "Decrease" onPress={() => dispatch({change: 'decrement'})}/>
        <Text>Current count: {state.count}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;