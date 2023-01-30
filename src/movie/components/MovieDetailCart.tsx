import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
import data from "../data/movieDetail.json"
  function Cart({index}): JSX.Element {
  
    return (
        <View style={styles.body}>
          <Image style={styles.imageStyle} source={{uri:data[index].Poster}}/>
          <View style={styles.mid}>
            <Text style={styles.textStyle}>{data[index].Title}</Text>
            <Text style={styles.textStyle}>{data[index].Year}</Text>
            <Text style={styles.textStyle}>{data[index].imdbID}</Text>
          </View> 
        </View>
    );
  }
  const styles = StyleSheet.create({
    body: {
        height:140,
        width:330,
        backgroundColor:'black',
        display:"flex",
        flexDirection:"row",
        borderRadius:10,
        marginTop:20
    },
    imageStyle: {
      height:"100%",
      width:"30%",
      borderRadius:10
    },
    textStyle:{
      color:"white",
      fontSize:20
    },
    mid:{
      display:"flex",
      alignItems:"center",
      width:"70%",
      justifyContent:"space-around"
    }
  })

export default Cart;