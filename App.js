import React from "react";
import { View, StyleSheet, Button,Text, Alert, TouchableOpacity } from "react-native";
import Images from "./src/screens/Images";


const App = () => {
  return (
    <View style={Styles.v}>
        <Images/>
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