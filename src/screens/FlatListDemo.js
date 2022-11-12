// This is Used to Render Items in NATIVE
/* Array value is Stored in DATA and items are render using renderItem */
import {Text, StyleSheet,FlatList} from 'react-native'
import React from 'react'
const FlatListDemo=()=>
   {
    const arr=[
        {
        "name":"Omkar"
    },
        {
        "name":"Mitali"
    },
        {
        "name":"Vaishali"
    },
        {
        "name":"Tanvi"
    },
        {
        "name":"Kanse"
    },
];
    return (
      <FlatList data={arr} renderItem={(element)=> {
        return(
            <Text style={styles.text}>{element.item.name}</Text>
        )
      }} />
    );
  };

const styles=StyleSheet.create({
    text:{
        color:"green",
        fontSize:20
    }
});

export default FlatListDemo;