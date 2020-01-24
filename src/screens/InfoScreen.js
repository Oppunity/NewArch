import React, {Component} from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";  
import {View,Text} from "react-native"; 
import  {Info}  from './index';

class InfoScreen extends React.Component{  
    render() {  
        return(  
            
                <Info/>
              
        )  ;
    }  
}  
InfoScreen.navigationOptions={  
            tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={'rocket'}  
                color={tintColor}  
                size={20}  
            />  
        )  
}  

export default InfoScreen;