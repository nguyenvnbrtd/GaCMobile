import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default (props) => {
    const {image, children} = props;
    return(
        <View style={styles.container}>
            <Image style={styles.backgroundImage} source={image}></Image>
            {children}
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor:'#576574',
        position: 'absolute',   
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    backgroundImage: {
        // resizeMode: 'cover',
        opacity: 0.3,
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

});