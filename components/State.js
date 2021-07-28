import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class State extends Component {

    state = {
        name: 'Jahid',
        age:18,
        passion:'Coding',
    }

    change = () => {
        this.setState({
            name:'Hasan',
            age:21,
            passion:'Journey'
        })
    }

    render() {
        return (
            <View>
                <View>
                    <Text style={styles.state}>Name: {this.state.name}</Text>
                    <Text style={styles.state}>Age: {this.state.age}</Text>
                    <Text style={styles.state}>Hobby: {this.state.passion}</Text>
                </View>
                <Button onPress={this.change} title="Click Me"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    state:{
        fontSize:25,
        margin:5
    },
    flex:{
        display:'flex',
        flexDirection:'row'
    }
})

export default State;
