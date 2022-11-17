import React from 'react';
import {View,Text} from 'react-native';
import CardDetails from '../components/CardDetails';
const Images =()=> {
  {
    return (
          
        <View>
         <CardDetails text="This is 1" img={require('../../assets/my.jpg')}/>
         <CardDetails text="This is 2" img={require('../../assets/favicon.png')}/>
         <CardDetails text="This is 3" img={require('../../assets/my.jpg')}/>
        </View>
    )
  }
}

export default Images