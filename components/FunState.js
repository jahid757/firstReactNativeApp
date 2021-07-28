import React,{useState} from 'react';
import { ScrollView, StyleSheet, Text,Button} from 'react-native';

const FunState = () => {

    const [user,setUser] = useState({
        name:'Jahid Hasan',
        age:18,
        passion:'Happy Coding'
    });
    const change = () => {
        setUser({
            name:'Niloy',
            age:19,
            passion:'Gaming'
        })
    };

    return (
        <ScrollView>
            <Text style={styles.font}>Name (FunState): {user.name}</Text>
            <Text style={styles.font}>Age (FunState): {user.age}</Text>
            <Text style={styles.font}>Hobby (FunState): {user.passion}</Text>

            <Button color="orange" onPress={change} title="Click Me (FunState)"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    font:{
        fontSize:25,
        fontWeight:'700',
        margin:5,
    },
    btn:{

    }
})

export default FunState;
