import React, { Component } from 'react';
import {  Follower   } from './index';
import { FlatList, Text, Fragment, View } from "react-native";


class FollowerFeed extends Component{
    _renderFollower({ item }) {
       return <Follower item = {item}/>;
    }

_returnKey(item){
    return item.toString();
}
    render() {
        return (
           
        <FlatList
            data = {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
            keyExtractor={this._returnKey}
            renderItem={this._renderFollower}
             />

     
        
         
        );        
    }
}

export default FollowerFeed;