import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomComponent = () => {
  return (
    <Text style={Styles.textStyle}>This is My Custom Component</Text>
  )
};

const Styles = StyleSheet.create({
  textStyle: {
    color: "blue",
    alignContent:"center",
    justifyContent:"center",
    
  },
});
export default CustomComponent;