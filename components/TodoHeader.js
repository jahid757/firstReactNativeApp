import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/AntDesign'

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
