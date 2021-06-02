import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, scrollV } from 'react-native';



export default function App() {
    let homeStyles = require('../Styles/HomeStyle');
    
    return (
    <View options={{headerShown: false}} style={homeStyles.container}>
        <Image style={require('../Styles/ImageStyle').backgroundImage} source={require('../Images/background2.jpg')}/>
        <StatusBar style="inverted" />
        
        <Text style={require('../Styles/TextStyle').header}>Girl and Cosplay</Text>
    </View>
    );
}


