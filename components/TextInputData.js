import React, { useState } from 'react';
import {View, StyleSheet,TextInput,Text} from 'react-native';

const TextInputData = () => {
    const [name,setName] = useState('Jahid')
    const [age,setAge] = useState(18)
    return (
        <View>
            <Text style={styles.name}>Name: {name}</Text>
            <Text style={styles.name}>Name: {age}</Text>
            <TextInput 
            multiline
            onChangeText={(text) => setName(text)}
            placeholder='Enter Your Name' 
            style={{borderColor:'red',borderWidth:1,margin:5}}
            />
            <TextInput
            keyboardType='numeric'
            onChangeText={(age) => setAge(age)}
            placeholder='Enter Your Age'
            style={{borderColor:'red',borderWidth:1,margin:5}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    name:{
        fontSize:19,
        margin:10
    }
})

export default TextInputData;
