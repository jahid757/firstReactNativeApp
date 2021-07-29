import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const DataLoop = ({data}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{data.name}</Text>
            <Text style={{color:'#ddd', fontSize:17}}>{data.email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:22,
        color:'#fff'
    },
    view:{
        backgroundColor:'#e31c79',
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'yellow'
    }
})

export default DataLoop;
