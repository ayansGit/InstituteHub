import React, {useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Color from "../../assets/Colors"
import Fonts from "../../assets/Fonts"
import normalize from '../../utils/dimen';
import { immersiveModeOn, immersiveModeOff } from 'react-native-android-immersive-mode';



export default function Splash(props) {

    useEffect(() => {
        immersiveModeOn()
        navigate()
    }, [])

    function navigate(){

        setTimeout(() => {
            props.navigation.replace("SignedOutNavigator")
        }, 2000)

    }


    return (
        <View style = {{flex: 1, backgroundColor: Color.blueBackground, justifyContent: "center", alignItems: "center"}}>
            <StatusBar backgroundColor={Color.blueBackground} />

            <Text style = {{fontFamily: Fonts.regular, fontSize: normalize(25), color: Color.white}}>Institute Hub</Text>

        </View>
    );
};
