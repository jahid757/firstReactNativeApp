import React, { Component } from 'react';
import {ScrollView, StyleSheet,Text,Button,Alert} from 'react-native';
import customStyle from './customStyle';
import PageOne from './page/PageOne';

class App extends Component {
  render() {

    const alert = () => {
      Alert.alert('This is my first alert in react native')
    }

    return (
      <ScrollView horizontal={false}>
        <Text style={{color:'red',fontSize:20}}>Bangladesh</Text>
        <Text style={styles.green}>Is My Country <Text style={{color:'white',fontSize:20}}>I Love My Country</Text></Text>
        <Text style={customStyle.yellow}>External Style</Text>
        <Button onPress={alert} style={styles.green} title="Alert Button"/>
        <PageOne/>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  red:{
    color:'red'
  },
  green:{
    color:'green',
    fontSize:29,
    backgroundColor:'red'
  }
})

export default App;