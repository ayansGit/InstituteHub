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
import Checkbox from "@react-native-community/checkbox";
import Color from "../../../../assets/Colors"
import Fonts from "../../../../assets/Fonts"
import normalize from '../../../../utils/dimen';
import ImagePath from '../../../../assets/ImagePath';
import Header from '../../../common/Header';
import TextInputField from '../../../common/TextInputField';
import DatePicker from '../../../common/DatePicker';

export default function TeacherDetails(props) {

    const [gender, setGender] = useState("Male")
    const [feesType, setFeesType] = useState("Monthly")

    const [permissions, setPermissions] = useState([
        {
            name: "Student Permission",
            enable: false
        },
        {
            name: "Student Attendance",
            enable: false
        },
        {
            name: "Batch Operation",
            enable: false
        },
        {
            name: "Fee Access",
            enable: false
        },
        {
            name: "Exam Access",
            enable: false
        },
        {
            name: "Staff Access",
            enable: false
        },
        {
            name: "Teacher Permission",
            enable: false
        },
        {
            name: "Salary Access",
            enable: false
        },

    ])

    return (
        <View style={{ flex: 1, backgroundColor: Color.blueBackground }}>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar backgroundColor={Color.blueBackground} />
                <Header
                    title={"Staff Details"}
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
                                }}>PERSONAL INFO</Text>
                            </View>

                            <TextInputField
                                placeholder={"Staff Name"}
                                marginTop={normalize(20)} />

                            <DatePicker
                                placeholder={"Joining date"}
                                marginTop={normalize(15)} />

                            <Text style={{
                                width: "90%", fontSize: normalize(12), fontFamily: Fonts.medium,
                                color: Color.lightBlueText, textAlign: "left", marginTop: normalize(15), marginLeft: normalize(20)
                            }}>
                                Select gender of the staff:
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
                                }}>INSTITUTE DETAILS</Text>
                            </View>

                            <TextInputField
                                placeholder={"Position"}
                                marginTop={normalize(20)} />

                            <TextInputField
                                placeholder={"Qualification"}
                                marginTop={normalize(20)} />

                            <TextInputField
                                placeholder={"Salary"}
                                marginTop={normalize(20)}
                                keyboardType={"numeric"} />

                            <Text style={{
                                width: "90%", fontSize: normalize(12), fontFamily: Fonts.medium,
                                color: Color.lightBlueText, textAlign: "left", marginTop: normalize(15), marginLeft: normalize(20)
                            }}>
                                How the staff will get paid?
                            </Text>

                            <RadioButton.Group
                                onValueChange={newValue => {
                                    setFeesType(newValue)
                                }}
                                value={feesType}>

                                <TouchableOpacity style={{
                                    width: "90%", flexDirection: "row", justifyContent: "space-around",
                                    alignItems: "center", marginTop: normalize(10),
                                }}
                                    onPress={() => {
                                        setFeesType("Monthly")
                                    }}>
                                    {Platform.OS == "android" && <RadioButton color={Color.orange} uncheckedColor={Color.orange} value={"Monthly"} />}
                                    <Text style={{
                                        width: "90%", textAlign: "left", fontSize: normalize(12), color: Color.white,
                                        fontFamily: Fonts.regular, marginLeft: normalize(15)
                                    }}>Monthly</Text>
                                    {Platform.OS == "ios" && <RadioButton color={Color.orange} uncheckedColor={Color.orange} value={"Monthly"} />}
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    width: "90%", flexDirection: "row", justifyContent: "space-around",
                                    alignItems: "center", marginTop: normalize(10)
                                }}
                                    onPress={() => {
                                        setFeesType("Daily")
                                    }}>
                                    {Platform.OS == "android" && <RadioButton color={Color.orange} uncheckedColor={Color.orange} value={"Daily"} />}
                                    <Text style={{
                                        width: "90%", textAlign: "left", fontSize: normalize(12), color: Color.white,
                                        fontFamily: Fonts.regular, marginLeft: normalize(15)
                                    }}>Daily</Text>
                                    {Platform.OS == "ios" && <RadioButton color={Color.orange} uncheckedColor={Color.orange} value={"Daily"} />}
                                </TouchableOpacity>

                            </RadioButton.Group>

                            <View style={{
                                width: "100%", paddingTop: normalize(10), paddingBottom: normalize(10),
                                backgroundColor: Color.lightBlueText, marginTop: normalize(20)
                            }}>
                                <Text style={{
                                    marginLeft: "5%", fontSize: normalize(10), color: Color.white,
                                    fontFamily: Fonts.regular,
                                }}>PERMISSIONS</Text>
                            </View>

                            {permissions.map((value, index) => {

                                return (
                                    <TouchableOpacity style={{
                                        width: "90%", flexDirection: "row", justifyContent: "space-around",
                                        alignItems: "center", marginTop: normalize(10),
                                    }}
                                        onPress={() => {
                                            // value.enable = !value.enable
                                            // let permissionsArr = permissions
                                            // permissionsArr[index].enable = !value.enable
                                            // console.log("Permission: ", permissionsArr)
                                            // setPermissions(permissionsArr)
                                            // setPermissions(permissionsArr)
                                        }}>
                                        {/* {Platform.OS == "android" && <Checkbox tintColors={{ true: Color.orange, false: Color.orange }} value={value.enable} />} */}
                                        <Checkbox  tintColors={{ true: Color.orange, false: Color.orange }} value={value.enable} />
                                        <Text style={{
                                            width: "90%", textAlign: "left", fontSize: normalize(12), color: Color.white,
                                            fontFamily: Fonts.regular, marginLeft: normalize(15)
                                        }}>{value.name}</Text>
                                        {/* {Platform.OS == "ios" && <Checkbox value={value.enable} />} */}
                                    </TouchableOpacity>
                                )
                            })}

                            <View style = {{height: normalize(60)}}/>


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