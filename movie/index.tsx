import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import Cart from "./components/MovieDetailCart";

  function Movie(): JSX.Element {
  
    return (
        
    <ScrollView style={styles.body}>
        <SafeAreaView>
            <Text style={styles.textStyle}>Movies</Text>
            <View style={styles.container}>
                <Cart/>
                <Cart/>
                <Cart/>
                {/* <Cart/>
                <Cart/>
                <Cart/> */}
            </View>
        </SafeAreaView>
    </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    body: {
        backgroundColor:"#696969",
    },
    container: {
        width:"100%",
        height:"auto",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"

    },
    textStyle: {
        fontSize:30,
        fontWeight: 'bold',
        color:"white",
        marginLeft:30,
    }
  })

export default Movie;