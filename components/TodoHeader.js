import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const TodoHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor:'coral',
        marginBottom:10
    },
    title: {
        fontSize:20,
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold'
    }
})

export default TodoHeader;
