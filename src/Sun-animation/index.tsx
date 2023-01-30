import React, { useEffect, useRef, useState } from "react";
import {
    StyleSheet,
    View,
    Image,
    Animated,
    Switch,
} from 'react-native';
import Sun from "./sun.png";

function SunAnimation(): JSX.Element {

    const [isNight, setIsNight] = useState(false)
    const translate = useRef(new Animated.ValueXY()).current;

    useEffect(() => {
        Animated.timing(translate, {
            toValue: isNight ? 55 : 0,
            duration:2000,
            useNativeDriver:true,
        }).start()
    },[isNight, translate]);
    
    const toggleSwitch = () => {
        setIsNight(!isNight);
    };
    
    return (
        <View style={styles.body}>
            <Image style={styles.SunImage} source={Sun}>

            </Image>
            <Animated.Image style={[styles.sun, {transform:[{
                    translateX: translate.x.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5]
                })},{translateY:translate.y}
                ]}]}/>
            <Switch
                style={styles.switchStyle}
                trackColor={{false: 'black', true: '#4B0082'}}
                thumbColor={isNight ? 'yellow' : 'yellow'}
                ios_backgroundColor="#4B0082"
                onValueChange={toggleSwitch}
                value={isNight}/>
        </View>

);
}
const styles = StyleSheet.create({
    sun: {
        height: 80,
        width: 80,
        backgroundColor: '#FFF8DC',
        borderRadius:50,
        position:"absolute",
        top:390,
        left:100

    },
    SunImage:{
        height:"100%",
        width:"100%",
    },
    body:{
        display:"flex",
    },
    switchStyle:{
        position:"absolute",
        top:50,
        right:20,
    }
})
export default SunAnimation;
