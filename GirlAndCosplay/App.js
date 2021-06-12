<script src="http://localhost:8097"></script>
import React from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import ItemNavigator from './routes/ItemNavigator'

export default props => {
    let [fontsLoaded] = useFonts({
        'dancing-script': require('./assets/fonts/DancingScript.ttf'),
    });

    if (!fontsLoaded) return <AppLoading />;
    else return <ItemNavigator/>;
};
