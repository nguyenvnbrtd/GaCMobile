import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image } from 'react-native';
import Item from '../Component/Item';


export default function App() {
    let home = require('../Styles/HomeStyle');
    let position = require('../Styles/PositionStyle');
    return (
    <View options={{headerShown: false}} style={home.container}>
        <StatusBar style="inverted" />
        <Image style={[require('../Styles/ImageStyle').backgroundImage, position.onAbsolute]} source={require('../Images/p1.jpg')}/>
        <Text style={[require('../Styles/TextStyle').mainHeader, position.header]}>Travel and Photo</Text>
        <Item ></Item>
    </View>
    );
}


