import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const ComponentsOne = ({name,age,info}) => {
    return (
        <View>
            <Text style={styles.font}>I am Component One: {info.name || name}</Text>
            <Text style={styles.font}>Age is {age || info.age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    font:{
        fontSize:19,
        margin:5
    }
})

export default ComponentsOne;
