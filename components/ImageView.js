import React from 'react';
import {View, StyleSheet,Image} from 'react-native';

const ImageView = () => {
    return (
        <View>
            <Image style={styles.img} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/330px-React-icon.svg.png'}}/>
            <Image style={styles.img} source={require('../images/javascript.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width:'100%',
        height:300
    }
})

export default ImageView;
