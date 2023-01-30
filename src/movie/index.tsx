import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Switch,
    TextInput,
  } from 'react-native';
import Cart from "./components/MovieDetailCart";
import movieData from "./data/movieDetail.json";

// import Icon from 'react-native-vector-icons';
function Movie(): JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);;
  
    return (
    <ScrollView style={styles.body}>
        <SafeAreaView>
            <Text style={styles.textStyle}>Movies</Text>
            <View style={styles.container}>
              {movieData.map((el, index) => <Cart index={index}/>)}
            </View>
            {/* <Icon name="rocket" size={30} color="#900"/> */}
        </SafeAreaView>
        {/* <Switch
              trackColor={{false: '#767577', true: 'white'}}
              thumbColor={isEnabled ? '#f5dd4b' : 'red'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            /> */}
            {/* <TextInput keyboardType={'phone-pad '} /> */}
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