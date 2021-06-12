import React from 'react';
import {Text, View, Image, FlatList, Alert, ScrollView } from 'react-native';
import Background from '../Component/Background';
import Rectangle from '../Component/Rectangle';
import Slide from '../Component/Slide';

export default class ItemInfo extends React.Component{
    
    constructor(props){
        super(props);
        this.flatListRef = null;

    }

    render(){
        const position = require('../Styles/PositionStyle');
        const {route, navigation} = this.props;
        const {item} = route.params;
        const album = [ {source: `${item.source}1.jpg`, id: 1}, 
                        {source: `${item.source}2.jpg`, id: 2}, 
                        {source: `${item.source}3.jpg`, id: 3}, 
                        {source: `${item.source}4.jpg`, id: 4}];
        return(
            <Background image={require('../Images/background2.jpg')}>
                <Slide album={album} onPress={()=> navigation.navigate('Album', {item})}></Slide>           
            </Background>
            );
    };

}
