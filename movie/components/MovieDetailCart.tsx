import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
import data from "../data/movieDetail.json"
  function Cart(): JSX.Element {
  
    return (
        <View style={styles.body}>
          <Image style={styles.imageStyle} source={{uri:data[1].Poster}}/>
          <View>
            <Text style={styles.textStyle}>{data[1].Title}</Text>
            <Text style={styles.textStyle}>{data[1].Year}</Text>
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
    }
  })

export default Cart;