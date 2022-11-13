// This is Used to Render Items in NATIVE
/* Array value is Stored in DATA and items are render using renderItem */
import {Text, StyleSheet,FlatList} from 'react-native'
import React from 'react'
import { View } from 'react-native-web';
const FlatListDemo=()=>
   {
    const arr=[
        {
            "index":"1",
        "name":"Omkar"
    },
        {"index":"2",
        "name":"Mitali"
    },
        {"index":"3",
        "name":"Vaishali"
    },
        {"index":"4",
        "name":"Tanvi"
    },
        {"index":"5",
        "name":"Kanse"
    },
];
    return (
      <FlatList 
       style={styles.list}
       // ALLL BELOW ARE PROPS IN FLAT LIST
       //horizontal

       numColumns={2}
       showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      // THIS BELOW IS TO RENDER
      data={arr} renderItem={
        
        (element)=> {
        return(                   
            <Text style={styles.text}>{element.item.name} {element.item.index}</Text>         
        )
      }
    } />
    );
  };

const styles=StyleSheet.create({
    text:{
        color:"green",
        fontSize:59,
        backgroundColor:"blue",
        padding:0,
        margin:5
    },
    list:{
        textAlign:"center",
        margin:20
    }
});

export default FlatListDemo;