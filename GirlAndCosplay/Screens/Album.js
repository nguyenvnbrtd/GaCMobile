import React, {useEffect} from 'react';
import {View, ScrollView, Text, Alert, StyleSheet, Dimensions, BackHandler} from 'react-native';
import Rectangle from '../Component/Rectangle';
import Image from 'react-native-scalable-image';

const Album = (props) => {
    const {route, navigation} = props;
    const {item} = route.params;



    const onBackPress = () => {
        navigation.navigate('ItemInfo'); // ???? lag or something I never know
        return false;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);
 
    return(
        <ScrollView 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.container}>
                <View style={styles.albumImages}>
                    {generateImages(item)}       
                </View>
            </View>
            
        </ScrollView>
    );
}

const generateImages = (item) => {
    const sources = [];
    for (let index = 0; index < item.amount; index++) {
        sources.push(index+1);
    }
    
    return(

        sources.map((source) => (
            <View key = {source}  style={styles.imageContainer}>
                <Image  
                    style={styles.image} 
                    width ={getWidth(80)}
                    source={{uri:`${item.source}${source}.jpg`}} />
            </View>                               
        ))
        
    );

}

const getWidth = (percent) =>{
    return (Dimensions.get('window').width)*percent/100;
}
const getHeight = (percent) =>{
    return (Dimensions.get('window').height)*percent/100;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 50,
    },
});

export default Album;