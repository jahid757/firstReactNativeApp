import React, { Component } from 'react';
import {View, StyleSheet,FlatList,Text} from 'react-native';

class FlatListSolve extends Component {


    myData = [
        {title:'Bangladesh', subtitle:'This is My country',id:'1'},
        {title:'india', subtitle:'This is not My country',id:'2'}
    ]


    ChildView = (item) => {
        const {title,subtitle} = item.item;
        return(
            <View style={styles.view}>
                <Text style={styles.text}>{title}</Text>
                <Text style={{fontSize:18,color:'yellow'}}>{subtitle}</Text>
            </View>
        )
    }




    render() {
        return (
            <FlatList data={this.myData} renderItem={({item}) => <this.ChildView key={item.id} item={item}/>} />
        );
    }
}

const styles = StyleSheet.create({
    view:{
        backgroundColor:'#000',
        padding:10,
        margin:5
    },
    text:{
        color:'#e31c79',
        fontSize:23
    }
})

export default FlatListSolve;
