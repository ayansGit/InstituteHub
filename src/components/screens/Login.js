import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity, TextInput,
    View, Image, Dimensions, KeyboardAvoidingView
} from 'react-native';
import Color from "../../assets/Colors"
import Fonts from "../../assets/Fonts"
import normalize from '../../utils/dimen';
import ImagePath from '../../assets/ImagePath';
import ViewPager from '@react-native-community/viewpager';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { immersiveModeOn, immersiveModeOff } from 'react-native-android-immersive-mode';


export default function Login(props) {

    const { width, height } = Dimensions.get('window');
    var loginPager = useRef()
    const [loginType, setLoginType] = useState(0)

    useEffect(() => {
        immersiveModeOff()
        initialize()
    }, [])

    async function initialize() {
        await changeNavigationBarColor(Color.blueBackground, true)
    }


    function changeLoginType(loginTypeValue) {
        if (loginPager != null) {
            loginPager.current.setPage(loginTypeValue)
            setLoginType(loginTypeValue)
        }
    }

    function adminLogin() {
        return (
            <View key={0} style={{ width: "100%", alignItems: "center" }}>

                <TouchableOpacity
                    onPress={() => props.navigation.replace("SignedInNavigator")}
                    style={{
                        width: "70%", height: normalize(45), marginTop: normalize(40),
                        borderWidth: normalize(2), borderColor: Color.lightBlueText, flexDirection: "row", alignItems: "center", justifyContent: "center",
                        borderRadius: normalize(23),
                    }}>

                    <Image
                        style={{ height: normalize(25), width: normalize(25), position: "absolute", start: normalize(10) }}
                        source={ImagePath.google} />
                    <Text style={{ fontSize: normalize(15), fontFamily: Fonts.regular, color: Color.lightBlueText, }}>Sign In</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: normalize(10), fontFamily: Fonts.regular, color: Color.veryLightGrey, marginTop: (10) }}>Use your Google id to sign in as admin</Text>
            </View>
        )
    }

    function teacherLogin() {
        return (
            <View key={1} style={{ width: "100%", alignItems: "center" }}>

                <View style={{
                    width: "90%", height: normalize(45), marginTop: normalize(40),
                    borderWidth: normalize(2), borderColor: Color.lightBlueText, flexDirection: "row", alignItems: "center", justifyContent: "center",
                    borderRadius: normalize(23), paddingLeft: normalize(10), paddingRight: normalize(10)
                }}>

                    <TextInput
                        style={{ width: "100%", color: Color.white, fontFamily: Fonts.regular, fontSize: normalize(12) }}
                        placeholder={"Admin Email"}
                        placeholderTextColor={Color.lightBlueText} />


                </View>

                <View style={{
                    width: "90%", height: normalize(45), marginTop: normalize(20),
                    borderWidth: normalize(2), borderColor: Color.lightBlueText, flexDirection: "row", alignItems: "center", justifyContent: "center",
                    borderRadius: normalize(23), paddingLeft: normalize(10), paddingRight: normalize(10)
                }}>

                    <TextInput
                        style={{ width: "100%", color: Color.white, fontFamily: Fonts.regular, fontSize: normalize(12) }}
                        placeholder={"Teacher Key"}
                        placeholderTextColor={Color.lightBlueText} />

                </View>

                <TouchableOpacity style={{
                    width: "90%", height: normalize(45), marginTop: normalize(20),
                    backgroundColor: Color.orange, flexDirection: "row", alignItems: "center", justifyContent: "center",
                    borderRadius: normalize(23),
                }}>

                    <Text style={{ fontSize: normalize(12), fontFamily: Fonts.bold, color: Color.white, }}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function studentLogin() {
        return (
            <View key={3} style={{ width: "100%", alignItems: "center" }}>

                <View style={{
                    width: "90%", height: normalize(45), marginTop: normalize(40),
                    borderWidth: normalize(2), borderColor: Color.lightBlueText, flexDirection: "row", alignItems: "center", justifyContent: "center",
                    borderRadius: normalize(23), paddingLeft: normalize(10), paddingRight: normalize(10)
                }}>

                    <TextInput
                        style={{ width: "100%", color: Color.white, fontFamily: Fonts.regular, fontSize: normalize(12) }}
                        placeholder={"Admin Email"}
                        placeholderTextColor={Color.lightBlueText} />


                </View>

                <View style={{
                    width: "90%", height: normalize(45), marginTop: normalize(20),
                    borderWidth: normalize(2), borderColor: Color.lightBlueText, flexDirection: "row", alignItems: "center", justifyContent: "center",
                    borderRadius: normalize(23), paddingLeft: normalize(10), paddingRight: normalize(10)
                }}>

                    <TextInput
                        style={{ width: "100%", color: Color.white, fontFamily: Fonts.regular, fontSize: normalize(12) }}
                        placeholder={"Student Key"}
                        placeholderTextColor={Color.lightBlueText} />

                </View>

                <TouchableOpacity style={{
                    width: "90%", height: normalize(45), marginTop: normalize(20),
                    backgroundColor: Color.orange, flexDirection: "row", alignItems: "center", justifyContent: "center",
                    borderRadius: normalize(23),
                }}>

                    <Text style={{ fontSize: normalize(12), fontFamily: Fonts.bold, color: Color.white, }}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar backgroundColor={Color.blueBackground} />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}>



                <View style={{ flex: 1, backgroundColor: Color.blueBackground, alignItems: "center" }} >

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={{
                            fontSize: normalize(20), fontFamily: Fonts.regular, color: Color.white,
                            marginTop: normalize(20), textAlign: "center"
                        }}>Institute Hub</Text>

                        <Text style={{
                            fontSize: normalize(15), fontFamily: Fonts.regular, color: Color.lightBlueText,
                            marginTop: normalize(20), textAlign: "center"
                        }}>Who are you?</Text>

                        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: normalize(20) }}>

                            <TouchableOpacity
                                onPress={() => changeLoginType(0)}
                                activeOpacity={0.7}
                                style={{ height: normalize(80), width: normalize(80), justifyContent: "center", alignItems: "center" }}>
                                <View style={{
                                    height: normalize(74), width: normalize(74), borderRadius: normalize(37),
                                    padding: normalize(12), backgroundColor: Color.yellow, borderWidth: normalize(2),
                                    borderColor: loginType == 0 ? Color.greenHighlight : Color.white
                                }}>
                                    <Image style={{ height: "100%", width: "100%", }}
                                        source={ImagePath.admin}
                                    />
                                </View>

                                <Text style={{ fontSize: normalize(12), fontFamily: Fonts.semiBold, color: Color.yellow, marginTop: normalize(10) }}>ADMIN</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => changeLoginType(1)}
                                activeOpacity={0.7}
                                style={{ height: normalize(80), width: normalize(80), margin: normalize(10), justifyContent: "center", alignItems: "center" }}>
                                <View style={{
                                    height: normalize(74), width: normalize(74), borderRadius: normalize(37),
                                    padding: normalize(12), backgroundColor: Color.blue2, borderWidth: normalize(2),
                                    borderColor: loginType == 1 ? Color.greenHighlight : Color.white
                                }}>
                                    <Image style={{ height: "100%", width: "100%", }}
                                        source={ImagePath.teacher}
                                    />
                                </View>
                                <Text style={{ fontSize: normalize(12), fontFamily: Fonts.semiBold, color: Color.blue2, marginTop: normalize(10) }}>TEACHER</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => changeLoginType(2)}
                                activeOpacity={0.7}
                                style={{ height: normalize(80), width: normalize(80), borderRadius: normalize(50), justifyContent: "center", alignItems: "center" }}>
                                <View style={{
                                    height: normalize(74), width: normalize(74), borderRadius: normalize(37),
                                    padding: normalize(12), backgroundColor: Color.orange, borderWidth: normalize(2),
                                    borderColor: loginType == 2 ? Color.greenHighlight : Color.white
                                }}>
                                    <Image style={{ height: "100%", width: "100%", }}
                                        source={ImagePath.student}
                                    />
                                </View>
                                <Text style={{ fontSize: normalize(12), fontFamily: Fonts.semiBold, color: Color.orange, marginTop: normalize(10) }}>STUDENT</Text>
                            </TouchableOpacity>

                        </View>

                        <ViewPager
                            ref={loginPager}
                            pageMargin={normalize(10)}
                            onPageSelected={(event) => { setLoginType(event.nativeEvent.position) }}
                            style={{ width: "100%", height: height / 2, marginTop: normalize(20) }}>

                            {adminLogin()}

                            {teacherLogin()}

                            {studentLogin()}


                        </ViewPager>
                    </ScrollView>

                </View>

            </KeyboardAvoidingView>

        </SafeAreaView>
    );
};
