import {StyleSheet} from 'react-native';

const positionStyle = StyleSheet.create({
   
    onBottom: {
        position: 'absolute',
        bottom: 15,
        left: 15,
    },
    onAbsolute: {
        position: 'absolute',
    },
    centerContent:{
        alignItems: 'center', 
        justifyContent: 'center',
    },    

    header: {
        position: 'relative',
        marginTop: 40,

    },
    
});


module.exports = positionStyle; 