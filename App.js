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
    marginLeft:150,
    marginTop:260
  }
});

export default App;