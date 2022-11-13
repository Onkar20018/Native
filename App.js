import React from "react";
import {View,StyleSheet,Button,Image} from "react-native";
//import Button from "./src/screens/Button";


const App =()=>{
  return(
    <View style={Styles.v}>
            <Button title="Press Ass"
            onPress={()=>{
              <Image source={'./assets/'}/>
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
    height:250,
    width:350,
    margin:12,
    borderColor:'blue',
    borderWidth:5
  }
});

export default App;