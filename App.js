import React from "react";
import {View,StyleSheet,Button,Image} from "react-native";
//import Button from "./src/screens/Button";


const App =()=>{
  return(
    <View style={Styles.v}>
            <Button title="Press Ass"
            onPress={()=>{
              <Image style={Styles.i} source={require('./assets/My.jpg')}/>
            }}/>
    </View>
  )
};
const Styles= StyleSheet.create({
  v:{
    height:760,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  i:{
    height:100,
    width:100,
    margin:12,
    borderColor:'blue',
    borderWidth:5
  }
});

export default App;