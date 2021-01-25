import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function home({navigation}){

   const pressHandler = () =>{
       navigation.navigate('barCodeScanner');
   }

   return(
    <Button
     title = "Open Scanner"
     onPress = {pressHandler}
    />
   )
}


