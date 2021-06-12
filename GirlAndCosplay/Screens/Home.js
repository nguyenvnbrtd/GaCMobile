import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import Items from '../Component/Items';
import Background from '../Component/Background';

const albums = [
    {id: 1, name: 'tree and flower 1', amount: 6, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/1/'},
    {id: 2, name: 'tree and flower 2', amount: 5, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/2/'},
    {id: 3, name: 'tree and flower 3', amount: 11, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/3/'},
    {id: 4, name: 'tree and flower 4', amount: 5, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/4/'},
    {id: 5, name: 'tree and flower 5', amount: 10, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/5/'},
    {id: 6, name: 'tree and flower 5', amount: 8, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/6/'},
    {id: 7, name: 'tree and flower 5', amount: 11, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/7/'},
    {id: 8, name: 'tree and flower 5', amount: 7, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/8/'},
    {id: 9, name: 'tree and flower 5', amount: 9, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/9/'},
    {id: 10, name: 'tree and flower 5', amount: 11, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/10/'},
    {id: 11, name: 'tree and flower 5', amount: 6, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/11/'},
    {id: 12, name: 'tree and flower 5', amount: 7, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/12/'},
    {id: 13, name: 'tree and flower 5', amount: 9, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/13/'},
    {id: 14, name: 'tree and flower 5', amount: 8, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/14/'},
    {id: 15, name: 'tree and flower 5', amount: 13, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/15/'},
    {id: 16, name: 'tree and flower 5', amount: 14, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/16/'},
    {id: 17, name: 'tree and flower 5', amount: 40, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/17/'},
    {id: 18, name: 'tree and flower 5', amount: 6, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/18/'},
    {id: 19, name: 'tree and flower 5', amount: 7, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/19/'},
    {id: 20, name: 'tree and flower 5', amount: 80, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/20/'},
    {id: 21, name: 'tree and flower 5', amount: 45, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/21/'},
    {id: 22, name: 'tree and flower 5', amount: 45, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/22/'},
    {id: 23, name: 'tree and flower 5', amount: 19, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/23/'},
    {id: 24, name: 'tree and flower 5', amount: 38, source: 'https://raw.githubusercontent.com/nguyenvnbrtd/GirlAndCosplay/master/album/24/'},
    
]

export default function Home(props) {
    
    let position = require('../Styles/PositionStyle');
    const {navigation} = props;
    return (
        <Background  image={require('../Images/background2.jpg')}>
            <StatusBar style="inverted" />
            {/* <Text style={[require('../Styles/TextStyle').mainHeader, position.header]}>Travel and Photo</Text> */}
            <Text style={[require('../Styles/TextStyle').mainHeader, position.header]}>Girl and Cosplay</Text>
            <Items navigation = {navigation} albums={albums}></Items>
            
        </Background>
    );
}


// const homeStyles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#576574',
//       alignItems: 'center',
//       // justifyContent: 'center',
//     },
// });