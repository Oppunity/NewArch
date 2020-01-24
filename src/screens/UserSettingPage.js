import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
 // Navigator
  
} from 'react-native'
import Constants from 'expo-constants'

class UserSettingPage extends Component{
    constructor(props) {
        super(props)
        this.state = { titleText:"Settings"}
    
      
      }
    
    
     
      
      onPress = () => {
        this.setState({
          
        })
      }
    
      
    
    
    
    
    
    
     render() {
       return (

        <View style= {{width: '100%', height: '100%',backgroundColor: 'white'}}>
        <Text style={StyleSheet.test}>Just Fucked Kaenneth's Bitch</Text>

        </View>

       )








}};

const styles = StyleSheet.create
({

    event:{
        color:'purple',
        fontSize:28,
        fontFamily: 'Avenir-Roman',
        fontWeight: '900',
        textAlign:'center',
        marginTop: 1
        
        },




})
export default UserSettingPage;