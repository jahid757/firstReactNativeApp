import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList, LogBox } from 'react-native';
import { View, StyleSheet, Text,Image,Alert } from 'react-native';

class FlatListClass extends Component {
    componentDidMount() {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }
    myData = [
        {
            name:'Jahid',
            email:'jahid@gmail.com',
            image:'https://cdn.pixabay.com/photo/2021/07/18/10/54/black-headed-gull-6475203_960_720.jpg',
            id:'1'
        },
        {
            name:'Hasan',
            email:'hasan@gmail.com',
            image:'https://cdn.pixabay.com/photo/2020/12/16/18/25/zebras-5837321_960_720.jpg',
            id:'2'
        },
        {
            name:'Niloy',
            email:'niloy@gmail.com',
            image:'https://cdn.pixabay.com/photo/2021/06/21/09/10/poppy-6353123_960_720.jpg',
            id:'3'
        }
    ];

    onClickItem = (title,email) => {
        Alert.alert(title,email)
    }

    ChildView = (user) => {
        const {name,email,image} = user.user
        // console.log(user);
        return(
            <TouchableOpacity  onPress={() => this.onClickItem(name,email)}  style={styles.view}>
                <View style={{flex:30,paddingRight:10}}>
                    <Image style={{height:'100%'}} source={{uri: image}} />
                </View>
                <View style={{flex:70}}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </TouchableOpacity>
        )
    }



    render() {
        return (
            <FlatList data={this.myData} renderItem={({item}) => <this.ChildView user={item} key={item.id} />} />
        );
    }
}

const styles = StyleSheet.create({
    view:{
        backgroundColor:'#000',
        padding:10,
        margin:5,
        flex:100,
        flexDirection:'row'
    },
    name:{
        fontSize:20,
        color:'yellow'
    },
    email:{
        fontSize:18,
        color:'#fff'
    }
})

export default FlatListClass;
