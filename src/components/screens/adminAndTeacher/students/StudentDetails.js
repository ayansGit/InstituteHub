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

export default function StudentDetails(props) {

    const [gender, setGender] = useState("Male")

    return (
        <View style={{ flex: 1, backgroundColor: Color.blueBackground }}>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar backgroundColor={Color.blueBackground} />
                <Header
                    title={"Student Details"}
                    onBackPress={() => {
                        props.navigation.goBack()
                    }} />
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>

                        <View style={{ alignItems: "center" }}>

                            <View style={{
                                width: "100%", paddingTop: normalize(10), paddingBottom: normalize(10),
                                backgroundColor: Color.lightBlueText, marginTop: normalize(10)
                            }}>
                                <Text style={{
                                    marginLeft: "5%", fontSize: normalize(10), color: Color.white,
                                    fontFamily: Fonts.regular,
                                }}>BASIC DETAILS</Text>
                            </View>

                            <TextInputField
                                placeholder={"Student Name"}
                                marginTop={normalize(20)} />

                            <TextInputField
                                placeholder={"Father Name"}
                                marginTop={normalize(15)} />

                            <TextInputField
                                placeholder={"Mother Name"}
                                marginTop={normalize(15)} />

                            <DatePicker
                                placeholder={"Date Of Birth"}
                                marginTop={normalize(15)} />

                            <Text style={{
                                width: "90%", fontSize: normalize(12), fontFamily: Fonts.medium,
                                color: Color.lightBlueText, textAlign: "left", marginTop: normalize(15), marginLeft: normalize(20)
                            }}>
                                What's  your Gender?
                            </Text>

                            <RadioButton.Group
                                onValueChange={newValue => {
                                    setGender(newValue)
                                }}
                                value={gender}>

                                <TouchableOpacity style={{
                                    width: "90%", flexDirection: "row", justifyContent: "space-around",
                                    alignItems: "center", marginTop: normalize(10),
                                }}
                                    onPress={() => {
                                        setGender("Male")
                                    }}>
                                    {Platform.OS == "android" && <RadioButton color={Color.orange} uncheckedColor={Color.orange} value={"Male"} />}
                                    <Text style={{
                                        width: "90%", textAlign: "left", fontSize: normalize(12), color: Color.white,
                                        fontFamily: Fonts.regular, marginLeft: normalize(15)
                                    }}>Male</Text>
                                    {Platform.OS == "ios" && <RadioButton color={Color.orange} uncheckedColor={Color.orange} value={"Male"} />}
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    width: "90%", flexDirection: "row", justifyContent: "space-around",
                                    alignItems: "center", marginTop: normalize(10)
                                }}
                                    onPress={() => {
                                        setGender("Female")
                                    }}>
                                    {Platform.OS == "android" && <RadioButton color={Color.orange} uncheckedColor={Color.orange} value={"Female"} />}
                                    <Text style={{
                                        width: "90%", textAlign: "left", fontSize: normalize(12), color: Color.white,
                                        fontFamily: Fonts.regular, marginLeft: normalize(15)
                                    }}>Female</Text>
                                    {Platform.OS == "ios" && <RadioButton color={Color.orange} uncheckedColor={Color.orange} value={"Female"} />}
                                </TouchableOpacity>

                            </RadioButton.Group>

                            <View style={{
                                width: "100%", paddingTop: normalize(10), paddingBottom: normalize(10),
                                backgroundColor: Color.lightBlueText, marginTop: normalize(15)
                            }}>
                                <Text style={{
                                    marginLeft: "5%", fontSize: normalize(10), color: Color.white,
                                    fontFamily: Fonts.regular,
                                }}>LOGIN DETAILS</Text>
                            </View>


                            <TextInputField
                                placeholder={"Login Key"}
                                marginTop={normalize(20)} />

                            <View style={{
                                width: "100%", paddingTop: normalize(10), paddingBottom: normalize(10),
                                backgroundColor: Color.lightBlueText, marginTop: normalize(20)
                            }}>
                                <Text style={{
                                    marginLeft: "5%", fontSize: normalize(10), color: Color.white,
                                    fontFamily: Fonts.regular,
                                }}>CONTACT DETAILS</Text>
                            </View>

                            <TextInputField
                                placeholder={"Phone number"}
                                marginTop={normalize(20)} />

                            <TextInputField
                                placeholder={"Address"}
                                marginTop={normalize(20)} />

                            <View style={{
                                width: "100%", paddingTop: normalize(10), paddingBottom: normalize(10),
                                backgroundColor: Color.lightBlueText, marginTop: normalize(20)
                            }}>
                                <Text style={{
                                    marginLeft: "5%", fontSize: normalize(10), color: Color.white,
                                    fontFamily: Fonts.regular,
                                }}>EDUCATION</Text>
                            </View>

                            <TextInputField
                                placeholder={"School Name"}
                                marginTop={normalize(20)} />

                            <TextInputField
                                placeholder={"Standard"}
                                marginTop={normalize(20)} />

                            <TextInputField
                                placeholder={"Batch"}
                                marginTop={normalize(20)}
                                marginBottom={normalize(60)} />

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