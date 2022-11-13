import React from "react";
import {View,StyleSheet,Image} from "react-native";
import FlatListDemo from "./src/screens/FlatListDemo";
import Images from "./src/screens/Images";

const App =()=>{
  return(
    <View style={Styles.v}>
            
       <Images/>
       <Image style={Styles.i} source={require("./assets/my.jpg")}></Image>
       <Image style={Styles.i} source={require("./assets/my.jpg")}></Image>
       <Image style={Styles.i} source={require("./assets/my.jpg")}></Image>
       <Image style={Styles.i} source={require("./assets/my.jpg")}></Image>
    </View>
  )
};
const Styles= StyleSheet.create({
  v:{
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