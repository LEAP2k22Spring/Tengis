import React, { useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Animated,
    Button,
} from 'react-native';

function Animation(): JSX.Element {

    const translate = useRef(new Animated.ValueXY()).current;
    return (
        <SafeAreaView>
            <Animated.View style={[styles.body,
            {
                transform: [{
                    translateX: translate.x.interpolate({
                        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                        outputRange: [0, 260, 0, 260, 0, 260,]
                    })
                },{translateY:translate.y}]
            },
            ]} />
            <Button
                title="click"
                onPress={() => {
                    Animated.timing(translate, {
                        toValue: { x: 1, y: 500},
                        duration: 4000,
                        useNativeDriver: true,
                    }).start();
                }}
            />
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    body: {
        height: 120,
        width: 120,
        backgroundColor: 'yellow',
        borderRadius: 100
    },
})
export default Animation;
