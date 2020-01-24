import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
  Navigator,
  Divider
  
} from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';




 class Info extends Component{





render()
{
return(
  


<View style = {{width:100 + "%", height: 100 + "%", backgroundColor:'black'}}>
        <View style ={styles.userview}>
        <Text style={styles.username}>USDbasketball</Text>
        </View>
        <View style={styles.userpic}>
        <Image 
        source={{uri: 'https://usdtoreros.com/images/2018/11/22/Massalski_1.jpg?width=1920&quality=80&format=jpg'}}
        style={{width: 35, height: 35, borderRadius: 35}}/>


        </View>
        
        <View style = {styles.top}> 
        <ImageBackground
        style = {styles.container1}
        source={{uri: 'https://usdtoreros.com/images/2018/11/22/Massalski_1.jpg?width=1920&quality=80&format=jpg'}}/>
           
            
        </View>   
        <Text style = {styles.event}>Toreros vs SDSU</Text> 
               
        <View style = {styles.tabBar}> 
        <View style={styles.container}>
  <View style={styles.viewStyleOne}>
    <Text style={styles.textStyle}> Join the bullpit as USD Basketball takes on No.1 SDSU at the JCP!</Text>
  </View>
  <View style={styles.viewStyleTwo}>
    <Text style={styles.textStyletwo}>DATE:</Text>
  </View>
  <View style={styles.viewStyleThree}>
    <Text style={styles.textStylethree}>3/4/20</Text>
  </View>
  <View style={styles.viewStyleFour}>
    <Text style={styles.textStylefour}>TIME:</Text>
  </View>
  <View style={styles.viewStyleFive}>
    <Text style={styles.textStylefive}>7:00pm</Text>
  </View>
  <View style={styles.viewStyleSix}>
    <Text style={styles.textStylesix}>LOCATION:</Text>
  </View>
  <View style={styles.viewStyleSeven}>
    <Text style={styles.textStyleseven}>JCP</Text>
  </View>
</View>

</View>
</View>

)
}
 }
 export default Info;

const styles = StyleSheet.create
({
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: "center",
    marginTop: 10
},
container1:{
  height: 250,
  width: 350,
  position: 'absolute',
  top: 60
},

tabBar: {
  top: 240,
  height: 100 + '%'  
},

event:{
color:'white',
fontSize:28,
fontFamily: 'Avenir-Roman',
fontWeight: '900',
textAlign:'center',
marginTop: 1

},

top:
{
 top: 35,
 width: 310,
 height: 50,
 flexDirection: 'row',
 justifyContent: 'center',
 left: 32,

 
},
userview:{
  backgroundColor: 'black',
  height: 20,
  width: 300,
  position: 'absolute',
  top: 17

},
username:{
  color:'cyan',
  fontSize: 14,
  position:'absolute',
  top: 5,
  right: 0
},
userpic:{
  backgroundColor: 'black',
  height: 16,
  width: 20,
  position: 'absolute',
  top: 15,
  right:43
},
  
  
  container: { backgroundColor:'#4286f4'},
  viewStyleOne: {
    width:375,
    height:75,
    justifyContent: 'center',
    alignItems:'center', 
    backgroundColor:'black',
    color: 'cyan'
  },
  viewStyleTwo:{
    width:100,
    height:35,
    backgroundColor: 'black',

  },
  textStyle:{
    fontSize: 15,
    color: 'white',
   
    textAlign:'center'
  },
  textStyletwo:{
    fontSize: 18,
    fontWeight: "200",
    color: 'white'

  },
  textStylethree:{
    fontSize: 18,
    color: 'cyan',
    alignItems:'center'

  },
  textStylefour:{
    fontSize: 18,
    fontWeight: "200",
    color: 'white'
  },
  textStylefive:{
    fontSize: 18,
    color: 'cyan',
    alignItems:'center'

  },
  textStylesix:{
    fontSize: 18,
    fontWeight: "200",
    color: 'white'
  },
  textStyleseven:{
    fontSize: 18,
    color: 'cyan',
    alignItems:'center'
  },
  viewStyleThree:{
    backgroundColor:'black',
    height: 35,
    width: 275,
    position: 'absolute',
    top: 75,
    right:0
  },
  viewStyleFour:{
    backgroundColor: 'black',
    height: 35,
    width: 100
  },
  viewStyleFive:{
    backgroundColor:'black',
    height:35,
    width:275,
    position: 'absolute',
    right: 0,
    top: 110

  },
  viewStyleSix:{
    backgroundColor: 'black',
    height: 35,
    width: 100
  },
  viewStyleSeven:{
    backgroundColor:'black',
    height:35,
    width:275,
    position: 'absolute',
    right: 0,
    top: 145
    
  }
})
    
