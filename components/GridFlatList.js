import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import { View, StyleSheet, Text, FlatList, LogBox, Image } from 'react-native';

class GridFlatList extends Component {
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
        },
        {
            name:'Hasan',
            email:'hasan@gmail.com',
            image:'https://cdn.pixabay.com/photo/2020/12/16/18/25/zebras-5837321_960_720.jpg',
            id:'4'
        },
        {
            name:'Niloy',
            email:'niloy@gmail.com',
            image:'https://cdn.pixabay.com/photo/2021/06/21/09/10/poppy-6353123_960_720.jpg',
            id:'5'
        },
        {
            name:'Hasan',
            email:'hasan@gmail.com',
            image:'https://cdn.pixabay.com/photo/2020/12/16/18/25/zebras-5837321_960_720.jpg',
            id:'6'
        }
    ];

    ChildView = (user) => {
        const {name,email,image} = user.user;
        console.log(name,email);
        return(
            <TouchableHighlight>
                <View style={styles.view}>
                <View style={{padding:5}}>
                    <Image style={{width:'100%',height:50}} source={{uri:image}} />
                </View>
                <View>
                    <Text style={styles.name} >{name}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </View>
            </TouchableHighlight>
        )
    }



    render() {
        return (
            <FlatList keyExtractor={item => item.id} numColumns={2} horizontal={false} data={this.myData} renderItem={({item}) => <this.ChildView user={item} />} />
        );
    }
}

const styles = StyleSheet.create({
    view:{
        backgroundColor:'#000',
        padding:10,
        margin:5,
        width:'99%'
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

export default GridFlatList;
