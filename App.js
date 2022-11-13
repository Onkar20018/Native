import React from "react";
import {View,StyleSheet,Button,Alert} from "react-native";
//import Button from "./src/screens/Button";


const App =()=>{
  return(
    <View style={Styles.v}>
            <Button title="Press Me"
            onPress={()=>{
               // console.log("Pressed ");
            Alert.alert("Why You pressed the Button???")
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