import React from "react";
import {View,StyleSheet} from "react-native";
import FlatListDemo from "./src/screens/FlatListDemo";


const App =()=>{
  return(
    <View style={Styles.v}>
       <FlatListDemo/>     
    </View>
  )
};
const Styles= StyleSheet.create({
  v:{
   
    marginTop:260,
    marginBottom:150,
    borderColor:"red",
    borderWidth:10
  }
});

export default App;