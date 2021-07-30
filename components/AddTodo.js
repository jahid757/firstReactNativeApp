import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const AddTodo = ({submit}) => {
    const [text,setText] = useState('');
    const addTodo = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='Todo Name'
            onChangeText={addTodo}
            />
            <Button onPress={() => submit(text)} title="Add Todo" color='coral'/>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        marginHorizontal:10,
        paddingHorizontal:8,
        marginBottom:10,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#bbb'
    }
})

export default AddTodo;
