import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Rectangle from './Rectangle';

export default function Item(props) {
    
    let position = require('../Styles/PositionStyle');
    let text = require('../Styles/TextStyle');

    return (
        <TouchableOpacity style={[itemStyles.container]}>
            <Rectangle width = {250} height = {250} >
                <Image style={[require('../Styles/ImageStyle').itemImage, position.absolute]} source={require('../Images/p2.jpg')}/>
                <Text style={[position.onBottom, text.normalText]}> test test</Text>
            </Rectangle>
        </TouchableOpacity>
    );
}


const itemStyles = StyleSheet.create({
  container: {
      
    // alignItems: 'center',
    // justifyContent: 'center',
    opacity:0.8,
    position: 'relative',
    margin: 5,
    
    },
  
});
