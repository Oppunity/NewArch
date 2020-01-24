  
import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Animated} from 'react-native';
import normalize from 'react-native-normalize';
import { Auth } from 'aws-amplify';
import * as Font from 'expo-font';

class HomeScreenPage extends Component {
    static navigationOptions = {
        header: null
    }
    constructor () {
      super()
      this.marginTopValue = new Animated.Value(0)
      this.delayValue = new Animated.Value(0)
      //this.state = {keyboardAvoidingViewKey: 'keyboardAvoidingViewKey',}
    }
  
    async componentDidMount() {
      this.move()
      this.dely()
    {/*}try {
        const user = await Auth.currentAuthenticatedUser()
        console.log('user: ', user)
        console.log('User worked')
        if (user) {
          console.log('User worked')
          this.props.navigation.push('MainFeed')  
        }
      } catch (err) {
        console.log('error: ', err)
      }{*/}
    }


    move () {
      this.marginTopValue.setValue(0)
      Animated.timing(
        this.marginTopValue,
        {
          toValue: 1,
          duration: 2000,
          //easing: Easing.linear
        }
      ).start() //=> this.move())
    }
    dely() {
      this.delayValue.setValue(0)
      Animated.timing(this.delayValue, {
        toValue: 1,
        delay: 2000,
        duration: 1000,
      }).start() //=> this.move())
    }

    
 
    render()
    {

      const movingmarginTop = this.marginTopValue.interpolate({
        inputRange: [0, 1],
        outputRange: [400, 40]
        //outputRange: [0, 1]
      })  
        const delayv = this.delayValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        })
        return (
            
           
       <View style={styles.BackGround}>
         {/**/}
          <Animated.Image style={{marginVertical: normalize(100), paddingVertical: 0, width: 200,height: 200,resizeMode: 'contain',marginTop: movingmarginTop, backgroundColor: 'black', position:'absolute',top: 120,left: 80}}
                        source={require('../../assets/hbn.png')} />
          <Animated.View style={{opacity: delayv, justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign:'center',backgroundColor: 'black'}}></Animated.View>
          {/*}<View style = {{height: 100, width: '100%', backgroundColor: 'black', position: 'absolute', top: 230}}>
            <Text style={styles.CompanyLogo}> Oppunity </Text>  
        </View>{*/}
            <TouchableOpacity
          style={styles.SubmitButtonLogIn}
          activeOpacity = { .5 }
          onPress={() => this.props.navigation.navigate('LogIn') }
          >
            <Text style={styles.TextStyle}> LOGIN </Text>
      </TouchableOpacity> 
  
      
      
      <TouchableOpacity
      style={styles. SubmitButtonSignUp}
      activeOpacity = { .5 }
      onPress={() => this.props.navigation.navigate('SignUp') }
      >
    <Text style={styles.TextStyle}> Sign Up </Text>
    </TouchableOpacity> 

   <Text style={styles.FounderText}> Created by Devin Devlin, Daniel Dayto, Arrion Archie, William Trevena </Text> 
   
        
   </View>

    


        );
     }
}


const styles = StyleSheet.create(
    {
      BackGround: {
        flex: 1, 
        backgroundColor: 'black'
      },

      CompanyLogo: {
        //flex: 1, 
        color: 'white', 
        fontSize: normalize(50), 
        //paddingTop: normalize(250), 
        textAlign: 'center',
       // fontFamily: 'AlexBrush'
      },
      FounderText: { 
        color: 'white', 
        fontSize: normalize(8), 
        bottom: normalize(50),
        left: normalize(50),
        textAlign: 'center',
        position: 'absolute',
        
      },
      SubmitButtonLogIn: {
        height: normalize(100),
        width: normalize(100),
        borderRadius: 35,
        left: normalize(50),
        bottom: normalize(140),
        borderWidth: normalize(2.5),
        paddingTop: normalize(40),
        borderColor: 'rgba(20,20,20,0)',
        backgroundColor:'rgba(20,20,20,0)', 
        position: 'absolute'
        
    },

    SubmitButtonSignUp: {
      height: normalize(100),
      width: normalize(100),
      borderRadius: 35,
      left: normalize(225),
      bottom: normalize(140),
      borderWidth: normalize(2.5),
      paddingTop: normalize(40),
      borderColor: 'rgba(20,20,20,0)',
      backgroundColor:'rgba(20,20,20,0)',  
      position: 'absolute'  
  },

    TextStyle: {
      color:'white',
      textAlign:'center',
      fontSize: 20
  },
    }
    );

export default HomeScreenPage;