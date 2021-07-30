import React,{useState} from 'react';
import { Text } from 'react-native';
import {View, StyleSheet,FlatList} from 'react-native';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';

const Todo1 = () => {
    const [todos,setTodos] = useState([
        {title:'Coffee',key:'1'},
        {title:'Tea',key:'2'},
        {title:'Ice Creme',key:'3'}
    ]);

    const handler = (key) => {
        setTodos(prevTodo => {
            return (
                prevTodo.filter(item => item.key !== key)
            )
        })
    };
    return (
        <View style={styles.container}>
            <TodoHeader/>
            <View style={styles.content}>

                <View style={styles.list}>
                    <FlatList 
                    data={todos} 
                    renderItem={({item}) => (
                        <TodoItem handler={handler} item={item}/>
                    )}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
    },
    content: {

    },
    list: {

    }
})

export default Todo1;
