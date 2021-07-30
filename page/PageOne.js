import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import ComponentsOne from '../components/ComponentsOne';
import ComponentsThree from '../components/ComponentsThree';
import ComponentsTwo from '../components/ComponentsTwo';
import FlatListClass from '../components/FlatListClass';
import FlatListData from '../components/FlatListData';
import FunState from '../components/FunState';
import GridFlatList from '../components/GridFlatList';
import HeightWidth from '../components/HeightWidth';
import HorizontalFlatList from '../components/HorizontalFlatList';
import ImageView from '../components/ImageView';
import State from '../components/State';
import TextInputData from '../components/TextInputData';
import Todo1 from '../components/Todo1';

class PageOne extends Component {
    info ={
        name:'Jahid Hasan',
        age:'19'
    }
    render() {
        return (
            <View>
                <ComponentsOne name="Jahid" age="18" info={this.info} />
                <ComponentsTwo name="Hasan Class" age="21" info={this.info} />
                <ComponentsThree/>
                <State/>
                <FunState/>
                <ImageView/>
                <HeightWidth/>
                <FlatListData/>
                <FlatListClass/>
                <HorizontalFlatList/>
                <GridFlatList/>
                <TextInputData/>
                <Todo1/>
            </View>
        );
    }
}

const styles = StyleSheet.create({})

export default PageOne;
