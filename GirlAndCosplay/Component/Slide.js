import React, {useState} from 'react';
import {Text, View, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Rectangle from '../Component/Rectangle';
import { LinearGradient } from 'expo-linear-gradient';

class Slide extends React.Component{
    
    constructor(props){
        super(props);
        this.flatListRef = null;
    }

    scrollToItem(index, setSelectedIndex){
        this.flatListRef.scrollToIndex( {animated: true, index: index});
        setSelectedIndex(index);
    }

    scrollLeft(index, setSelectedIndex){
        this.scrollToItem(index === 0 ? 3 :index-1, setSelectedIndex);
    }

    scrollRight(index, setSelectedIndex){
        this.scrollToItem(index === 3 ? 0 :index+1, setSelectedIndex);
    }

    render(){
        const position = require('../Styles/PositionStyle');
        const {album, values, selectedIndex, setSelectedIndex, onPress} = this.props;
        
        return(
            <View style={[position.centerContent, {width:'100%', height: '100%'}]}>
                <Rectangle width = {getWidth(70)} height = {getHeight(60)} style={[position.centerContent]}>  
                    <FlatList 
                        ref = {(ref) => this.flatListRef = ref }
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={album}
                        renderItem={ ({item}) => 
                            <View style={{width: getWidth(70), height: getHeight(60), borderTopWidth: 0 ,marginStart: 0, marginEnd: item.id===4? 0: 250}}  >            
                                <Image style={[require('../Styles/ImageStyle').itemImage, position.onAbsolute]} source={{uri:`${item.source}`}}/>
                            </View>
                        }
                        keyExtractor = { (item) => `${item.id}`}
                        horizontal = {true}
                        scrollEnabled={false}
                    />                
                </Rectangle>
                <View style={[styles.rowContainer, styles.indexNumContainer]}>
                    {values.map((value) => (
                        <TouchableOpacity 
                            key={value}
                            style={[styles.indexNum, selectedIndex === value && styles.selectedIndex]} 
                            onPress={()=> this.scrollToItem(value, setSelectedIndex)}
                            >
                            <Text style={selectedIndex === value ? {color: 'white'}: {color: '#576574'}}></Text>
                        </TouchableOpacity> 
                    ))}
                </View>
                
                <TouchableOpacity style={[styles.button, styles.horizontalButton, position.centerContent, {left:'1%'}, {borderRightWidth: 0}]} onPress={()=> this.scrollLeft(selectedIndex, setSelectedIndex)} >
                    <Text style={[styles.textHorizontalButton]}>&#8249;</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.horizontalButton, position.centerContent, {right:'1%'}, {borderLeftWidth: 0}]} onPress={()=> this.scrollRight(selectedIndex, setSelectedIndex)} >
                    <Text style={[styles.textHorizontalButton]}>&#8250;</Text>
                </TouchableOpacity>
                <View style={[styles.rowContainer, styles.bottomButtonContainer]}>
                        <TouchableOpacity style={[styles.button, styles.bottomButton, position.centerContent, {marginRight:5}]} onPress={onPress} >
                            <LinearGradient
                                colors = {['#1e90ff', '#dfe4ea']}
                                style = {styles.linearBackground}
                                >    
                            </LinearGradient>
                            <Text style={styles.textBottomButton}>Open</Text>
                        </TouchableOpacity>    
                    
                    <TouchableOpacity style={[styles.button, styles.bottomButton, position.centerContent]}  >
                        <LinearGradient
                            colors = {['#1e90ff', '#dfe4ea']}
                            style = {styles.linearBackground}
                            >    
                        </LinearGradient>
                        <Text style={styles.textBottomButton}>Add</Text>
                    </TouchableOpacity>
                </View>
                
            </View>                 
        );
    };

}

const SlideContainer = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const values = [0, 1, 2, 3];
    const {album, onPress} = props;

    return(
        <Slide  album = {album} 
                values = {values}
                selectedIndex = {selectedIndex}
                setSelectedIndex = {setSelectedIndex}
                onPress = {onPress}
                />
    );
}

const getWidth = (percent) =>{
    return (Dimensions.get('window').width)*percent/100;
}
const getHeight = (percent) =>{
    return (Dimensions.get('window').height)*percent/100;
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
    },
    indexNumContainer:{
        position: 'absolute',
        top: getHeight(70),
    },
    bottomButtonContainer:{
        marginTop: 10,
    },
    button:{
        borderWidth: 2,
        borderRadius: 5, 
        borderColor: '#576574',
        // backgroundColor: 'white',
        opacity: 0.5,
        overflow: 'hidden',
    
    },
    bottomButton:{
        width: 100,
        height: 50,
        borderWidth: 1,
        borderRadius: 40,        
        // backgroundColor: '#fd9644',
        borderColor: 'white',

    },
    horizontalButton:{
        position: 'absolute',
        width: 50,
        height: 80,
        top: getHeight(45),
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    indexNum:{
        margin: 5,
        marginTop:25,
        width: 20,
        height: 20,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#576574',
        opacity: 0.6,
    },
    selectedIndex:{
        backgroundColor:'#576574',
        color: 'white',
        borderColor: 'white'
    },
    textBottomButton: {
        fontSize:20, 
        color:'white',
    },
    textHorizontalButton: {
        fontSize:40, 
        color: 'white',
    },
    linearBackground: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        
    },
})

export default SlideContainer;