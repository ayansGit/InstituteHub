import React, { useState, useRef, useEffect } from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, FlatList,
    TouchableOpacity, TextInput, ImageBackground,
    View, Image, Dimensions, KeyboardAvoidingView,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Color from "../../../../assets/Colors"
import Fonts from "../../../../assets/Fonts"
import normalize from '../../../../utils/dimen';
import ImagePath from '../../../../assets/ImagePath';
import StudentList from './StudentList';
import Header from '../../../common/Header';
import TextInputField from '../../../common/TextInputField';
import DatePicker from '../../../common/DatePicker';

export default function BatchDetails(props) {

    const [gender, setGender] = useState("Male")

    return (
        <View style={{ flex: 1, backgroundColor: Color.blueBackground }}>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar backgroundColor={Color.blueBackground} />
                <Header
                    title={"Batch Details"}
                    onBackPress={() => {
                        props.navigation.goBack()
                    }} />
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>

                        <View style={{ alignItems: "center" }}>

                            <TextInputField
                                placeholder={"Batch Name"}
                                marginTop={normalize(20)} />

                            <TextInputField
                                placeholder={"Branch Name"}
                                marginTop={normalize(20)}
                                keyboardType={"numeric"} />

                            <TextInputField
                                placeholder={"Batch Head Teacher"}
                                marginTop={normalize(20)}
                                marginBottom={normalize(60)}
                                keyboardType={"numeric"} />

                        </View>



                    </ScrollView>

                    <TouchableOpacity style={{
                        width: "100%", height: normalize(40), position: "absolute", bottom: 0,
                        backgroundColor: Color.orange, justifyContent: "center", alignItems: "center"
                    }}>
                        <Text style={{ fontSize: normalize(12), fontFamily: Fonts.bold, color: Color.white, }}>SAVE</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}