import React from 'react';
import {FlatList } from 'react-native';
import Item from './Item';


export default class Items extends React.Component{
    
    constructor(props) {
        super(props);
    }


    render(){
        const {albums, navigation} = this.props;

        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={albums}
                renderItem={ ({item}) => <Item item={item} onPress={()=> navigation.navigate('ItemInfo', {item} )}></Item> }
                keyExtractor = { item => `${item.id}`}
            />

        );
    }
}


