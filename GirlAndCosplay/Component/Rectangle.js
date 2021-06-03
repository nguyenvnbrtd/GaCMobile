import React from 'react';
import {View, StyleSheet} from 'react-native';

const Rectangle = ({
    width,
    height,
    children,
    }) => {
    return (
        <View style={[{width, height}, styles.rectangle]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    rectangle:{
        borderRadius: 10,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 2,
        overflow: 'hidden',
        // backgroundColor: 'white',
    }
})

export default Rectangle;