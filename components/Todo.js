import React,{useState} from 'react';
import { Text, Alert } from 'react-native';
import {View, StyleSheet,FlatList} from 'react-native';
import AddTodo from './AddTodo';
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
    const submit = (text) => {
        // console.log(todos.length);
        if(text.length >= 3){
            setTodos(previousTodo => {
                return[
                    {title: text,key:previousTodo.length+1},
                    ...previousTodo
                ]
            })
        }else{
            Alert.alert('OOPS!','Todo Should be minimum 3 character', [
                {text:'Understood', onPress:() => console.log('Alert Close')}
            ])
        }
    }
    return (
        <View style={styles.container}>
            <TodoHeader/>
            <View style={styles.content}>
                <AddTodo submit={submit}/>
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
