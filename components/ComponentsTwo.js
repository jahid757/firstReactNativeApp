import React, { Component } from 'react';
import {View, StyleSheet,Text} from 'react-native';

class ComponentsTwo extends Component {

    render() {
        const {name,age,info} = this.props;
        return (
            <View>
                <Text style={{fontSize:19,margin:5}}>I Am Component Two: {name}</Text>
                <Text style={{fontSize:19,margin:5}}>Age is: {info.age}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({})

export default ComponentsTwo;
