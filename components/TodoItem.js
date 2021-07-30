import React from 'react';
import {TouchableOpacity, StyleSheet,Text} from 'react-native';

const TodoItem = ({item,handler}) => {
    return (
        <TouchableOpacity onPress={() => handler(item.key)}>
            <Text style={styles.item}>{item.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item:{
        margin:10,
        padding:16,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#bbb',
        borderStyle:'dashed'
    }
})

export default TodoItem;
