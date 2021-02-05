import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Content, Header, Form, Input, Item, Label, Button} from 'native-base'
import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAMXc0fWCr8gnjMEUSS2u8PEeI95rma178",
    authDomain: "zbuddy-3a716.firebaseapp.com",
    databaseURL: "https://zbuddy-3a716-default-rtdb.firebaseio.com",
    projectId: "zbuddy-3a716",
    storageBucket: "zbuddy-3a716.appspot.com",
    messagingSenderId: "400197254537",
    appId: "1:400197254537:web:594b03cf13bdebbcdff558",
    measurementId: "G-1EJ4XPE0DV"
  };
  
  if(firebase.apps.length == 0){
    firebase.initializeApp(firebaseConfig);
  }

  export default class Signup extends Component{
    constructor(props){
      super(props)
      this.state = ({
        email: '',
        password: ''
      })
    }
    changeToHome = (user) =>{
        this.props.navigation.navigate('route1')
    }

    signUpUser = (email, password) =>{

        try{
          if(this.state.password.length < 6){
            alert("Please enter atleast 6 characters")
            return
          }
          firebase.auth().createUserWithEmailAndPassword(email, password).then(() => this.changeToHome())
        }
        catch(error){
          console.log(error.toString())
        }
        
    }
    
    loginUser = (email, password) =>{
    
        try{
          firebase.auth().signInWithEmailAndPassword(email, password).then(() => this.changeToHome())
        }
        catch(error){
          console.log(error.toString())
        }
    
    }

    render(){
        return(
            <Container style = {styles.container}>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect = {false}
                autoCapitalize = "none"
                onChangeText = {(email => this.setState({email}))}
              />
            </Item>

            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry = {true}
                autoCorrect = {false}
                autoCapitalize = "none"
                onChangeText = {(password => this.setState({password}))}
              />
            </Item>

            <Button style = {{marginTop: 10}}
              full
              rounded
              success
              onPress = {() => this.loginUser(this.state.email, this.state.password)}
            >
              <Text style = {{color: 'white'}}>Login</Text>
            </Button>

            <Button style = {{marginTop: 10}}
              full
              rounded
              primary
              onPress = {() => this.signUpUser(this.state.email, this.state.password)}
            >
              <Text style = {{color: 'white'}}>Sign up</Text>
            </Button>
          </Form>
        </Container>

        );
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