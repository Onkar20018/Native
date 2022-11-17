import React from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';
const CardDetails =(props)=> {
  {
    return (
          
        <View>
            <Text style={Styles.t}>{props.text}</Text>
            <Image style={Styles.o}source={props.img} />
        </View>        
    )
  }
}
const Styles=StyleSheet.create({
         o:{
            height:300,
            width:300,
         },
         t:{
            height:15
         }
})

export default CardDetails  