import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Rectangle from './Rectangle';

export default (props) => {
    const {item, onPress} = props;
    let position = require('../Styles/PositionStyle');
    let text = require('../Styles/TextStyle');

    return(
        <TouchableOpacity style={[itemStyles.container]} onPress={onPress}>
            <Rectangle width = {250} height = {250} >
                <Image style={[require('../Styles/ImageStyle').itemImage, position.onAbsolute]} source={{uri:`${item.source}about.jpg`}}/>
                <Text style={[position.onBottom, text.normalText]}>{item.name} </Text>
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
      margin: 10,
      
      },
    
  });