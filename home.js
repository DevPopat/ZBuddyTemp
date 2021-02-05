import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default function Home({navigation}){

   const changeToBarcodeScanner = () =>{
       navigation.navigate('route2');
   }

   const changeToAboutUs = () =>{
    navigation.navigate('route3');
}

   return(
    <View style = {{justifyContent: 'center', padding: 10, flex: 1,}}>
        <Button
        title = "Open Scanner"
        onPress = {changeToBarcodeScanner}
        />
        <Button
        title = "About Us"
        onPress = {changeToAboutUs}
        />
    </View>
   )
}


