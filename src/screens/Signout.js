
import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
  Navigator
  
} from 'react-native';
import { Auth } from 'aws-amplify';
import Constants from 'expo-constants'



class Signout extends Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = { titleText:"Signout"}
    
      
    }
  
    onPress = () => {
        this.setState({
          
        })
      }
    
    async componentDidMount() {
         {
            
            
          this.props.navigation.navigate('HomeScreen');
          //Auth.signOut()
         }
      
    };
   
    render(){
        return(

            <TouchableOpacity
        onPress={()=> this.props.navigation.navigate('Setting')}
        style ={styles.touchbutton}>
        <Text
        style={styles.newtext}>Sign Out</Text>  
        </TouchableOpacity>


           );
    }
}
    

const styles = StyleSheet.create({
    touchbutton:{
        backgroundColor:'white',
        borderRadius: 25,
        height: 40,
        alignItems:'center',
        justifyContent:'center'
      },
      newtext:{
        alignItems: 'center',
        textAlign:'center',
        color:'black'
      }
    
    })
    
    
    
    
     
export default Signout;