import React from 'react';
import { Text } from 'react-native';
import {View, StyleSheet} from 'react-native';

const HeightWidth = () => {
    return (
        <View>
            <View style={{backgroundColor:'red',height:150}}>
                {/* <Text>2</Text> */}
            </View>
            <View style={{backgroundColor:'yellow',height:200}}>
                {/* <Text>4</Text> */}
            </View>
            <View style={{backgroundColor:'green',height:150}}>
                {/* <Text>5</Text> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor:'white',
        flex:3,
        // flexDirection:'column'
    }

})

export default HeightWidth;
