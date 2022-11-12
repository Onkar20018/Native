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
  Text:{
    color:"red",
    marginTop:150,
    
  }
});

export default App;