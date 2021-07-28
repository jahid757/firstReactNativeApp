import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import ComponentsOne from '../components/ComponentsOne';
import ComponentsThree from '../components/ComponentsThree';
import ComponentsTwo from '../components/ComponentsTwo';
import FunState from '../components/FunState';
import HeightWidth from '../components/HeightWidth';
import ImageView from '../components/ImageView';
import State from '../components/State';

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
            </View>
        );
    }
}

const styles = StyleSheet.create({})

export default PageOne;
