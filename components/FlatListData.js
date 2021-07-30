import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import DataLoop from './DataLoop';

const FlatListData = () => {
    const [users,setUsers] = useState([]);

    const loadData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
        });
    }
    return (
        <View>
            <Button onPress={loadData} color='black' title="Load Data"/>
            {
                users.map(user => <DataLoop key={user.id} data={user}/>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default FlatListData;