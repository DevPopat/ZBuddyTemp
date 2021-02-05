import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, Button} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import axios from 'axios'
import * as Permissions from 'expo-permissions';



const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


export default class barCodeScanner extends Component{
    state = {
        data: {},
        CameraPermissionsGranted: null
    }
    async componentDidMount(){
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({CameraPermissionsGranted: status == "granted" ? true: false});
    }
    barCodeScanned = ({data}) => {
        var self = this;
        axios.get("https://zotbins.pythonanywhere.com/barcode/get", 
        {params: {barcode: data}}).then(function(response){
            self.setState({data: response.data});
            alert("Instructions: " + data.instructions + "\n" + "Name: " + data.name + 
            "\n" + "Type: " + data.type + "Waste Bin: " + data.wastebin);
            
        }).catch(function(error){
            console.log(error);
        });
    }

    render(){
        const {CameraPermissionsGranted} = this.state;
        if(CameraPermissionsGranted == null){
            return(
                <View style = {styles.container}>
                <Text>Please grant access to the camera</Text>
                </View>
            );
        }
        if(CameraPermissionsGranted == false){
            return(
                <View style = {styles.container}>
                <Text>Permission was not given to open the camera</Text>
                </View>
            );
        }
        if(CameraPermissionsGranted == true){
            return(
                <View style = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <BarCodeScanner
                        onBarCodeScanned = {this.barCodeScanned}
                        style = {{
                            height: DEVICE_HEIGHT/1.1,
                            width: DEVICE_WIDTH/1.1,
                        }}>
                    </BarCodeScanner>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});