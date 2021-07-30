import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const TodoItem = ({item,handler}) => {
    return (
        <View style={styles.item}>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => handler(item.key)}>
                <Icon name="delete" size={30} color="red"/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item:{
        margin:10,
        padding:16,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#bbb',
        borderStyle:'dashed',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})

export default TodoItem;
