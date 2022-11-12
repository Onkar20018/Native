import React from "react";
import {View,Text,StyleSheet} from "react-native";
import CustomComponent from "./src/screens/CustomeComponent";
import FlatListDemo from "./src/screens/FlatListDemo";


const App =()=>{
  return(
    <View style={Styles.v}>
      <Text style={Styles.Text}>Hi This is Omkar</Text>
       <CustomComponent/>
       <FlatListDemo/>     
    </View>
  )
};
const Styles= StyleSheet.create({
  Text:{
    color:"red",
    marginTop:150,
    
  },
  v:{
    marginLeft:100,
  }
});

export default App;