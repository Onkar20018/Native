import React from "react";
import { View, StyleSheet, Button,Text, Alert, TouchableOpacity } from "react-native";



const App = () => {
  return (
    <View style={Styles.v}>
      <TouchableOpacity
        onPress={() => {
          // console.log("Pressed ");
          Alert.alert("Y")
        }}>
        <Text>Pressed On </Text>
      </TouchableOpacity>
      <Button
      disabled
           title="Join ME"
        onPress={() => {
          // console.log("Pressed ");
          Alert.alert("YS")
        }}/>
       
          </View>
  )
};
const Styles = StyleSheet.create({
  v: {
    height: 760,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  i: {
    height: 100,
    width: 100,
    margin: 12,
    borderColor: 'blue',
    borderWidth: 5
  }
});

export default App;