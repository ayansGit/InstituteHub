import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, FlatList,
    TouchableOpacity, TextInput, ImageBackground,
    View, Image, Dimensions, KeyboardAvoidingView
} from 'react-native';
import Color from "../../assets/Colors"
import Fonts from "../../assets/Fonts"
import normalize from '../../utils/dimen';
import ImagePath from '../../assets/ImagePath';
import ViewPager from '@react-native-community/viewpager';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { immersiveModeOn, immersiveModeOff } from 'react-native-android-immersive-mode';
import ProgressCircle from 'react-native-progress-circle'

export default function Dashboard(props) {

    const students = [
        { id: 1, name: "Student", icon: ImagePath.student2, route: "StudentList" },
        { id: 1, name: "Courses", icon: ImagePath.courses, route: "StudentList" },
        { id: 1, name: "Batch", icon: ImagePath.batch, route: "StudentList" },
        { id: 1, name: "Fees", icon: ImagePath.fees, route: "StudentList" },
        { id: 1, name: "Exams", icon: ImagePath.exam, route: "StudentList" },
        { id: 1, name: "Report", icon: ImagePath.report, route: "StudentList" },
    ]

    const institute = [
        { id: 1, name: "Staff", icon: ImagePath.teacher },
        { id: 1, name: "Staff\nAttendance", icon: ImagePath.attendance },
        { id: 1, name: "Expenses", icon: ImagePath.expense }
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar backgroundColor={Color.blueBackground} />

            <View style={{ flex: 1, width: "100%", backgroundColor: Color.blueBackground, alignItems: "center" }}>

                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: normalize(10) }}>
                    <Text style={{
                        fontSize: normalize(14), fontFamily: Fonts.medium, color: Color.white,
                        marginTop: normalize(10), marginLeft: normalize(15)
                    }}>Institute Name</Text>

                    <TouchableOpacity style={{ padding: normalize(10) }}>
                        <Image
                            style={{ width: normalize(20), height: normalize(20) }}
                            source={ImagePath.settings} />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={{
                    width: "94%", flexDirection: "row",
                    padding: normalize(10), borderRadius: normalize(20), borderWidth: normalize(1.6),
                    borderColor: Color.lightBlueText, marginTop: normalize(10)
                }}>
                    <ProgressCircle
                        percent={30}
                        radius={normalize(30)}
                        borderWidth={normalize(3)}
                        color={Color.orange}
                        shadowColor={Color.lightBlueText}
                        bgColor={Color.blueBackground}>

                        <Text style={{ fontSize: normalize(12), fontFamily: Fonts.regular, color: Color.white }}>{'30%'}</Text>

                    </ProgressCircle>

                    <View style={{ justifyContent: "space-between" }}>
                        <Text style={{
                            fontSize: normalize(12), fontFamily: Fonts.medium, color: Color.white,
                            marginLeft: normalize(15)
                        }}>Attendance</Text>

                        <View style={{ flexDirection: "row", marginLeft: normalize(15) }}>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{
                                    fontSize: normalize(10), fontFamily: Fonts.regular, color: Color.white,

                                }}>Marked</Text>
                                <Text style={{
                                    fontSize: normalize(12), fontFamily: Fonts.medium, color: Color.white,
                                }}>2</Text>
                            </View>

                            <View style={{ alignItems: "center", marginLeft: normalize(20) }}>
                                <Text style={{
                                    fontSize: normalize(10), fontFamily: Fonts.regular, color: Color.white,

                                }}>Unmarked</Text>
                                <Text style={{
                                    fontSize: normalize(12), fontFamily: Fonts.medium, color: Color.white,
                                }}>8</Text>
                            </View>

                        </View>
                    </View>


                </TouchableOpacity>

                <View style={{ width: "94%", height: normalize(160), marginTop: normalize(25),  }}>

                    <ImageBackground
                        style={{ width: "100%",  height: "100%",  marginTop: "3%", alignItems: "center", justifyContent: "center" }}
                        source={ImagePath.section_bg}
                        resizeMode="stretch" >

                        <FlatList

                            contentContainerStyle={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            data={students}
                            renderItem={(data) => {
                                return (
                                    <TouchableOpacity 
                                    onPress = {() => props.navigation.navigate(data.item.route)}
                                    style={{
                                        height: normalize(50), width: normalize(50), alignItems: "center",
                                        marginTop: normalize(10), marginBottom: normalize(5), marginLeft: normalize(20), marginRight: normalize(20)
                                    }}>
                                        <View style={{ padding: normalize(6), backgroundColor: Color.lightBlueText, borderRadius: normalize(16), }}>
                                            <Image
                                                style={{ height: normalize(20), width: normalize(20), }}
                                                source={data.item.icon} />
                                        </View>

                                        <Text style={{
                                            fontSize: normalize(10), fontFamily: Fonts.regular, color: Color.white, marginTop: normalize(5)
                                        }}>{data.item.name}</Text>
                                    </TouchableOpacity>
                                )
                            }} />

                    </ImageBackground>

                    <Text style={{
                        fontSize: normalize(12), fontFamily: Fonts.medium, color: Color.white, position: "absolute", top: 0, left: "18%"
                    }}>Students</Text>


                </View>

                <View style={{ width: "94%", height: normalize(100), marginTop: normalize(30), }}>

                    <ImageBackground
                        style={{ height: "100%", width: "100%", marginTop: "3%", alignItems: "center", justifyContent: "center" }}
                        source={ImagePath.teacher_section_bg}
                        resizeMode="stretch" >

                        <FlatList

                            contentContainerStyle={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            data={institute}
                            renderItem={(data) => {
                                return (
                                    <TouchableOpacity style={{
                                        height: normalize(50), width: normalize(60), alignItems: "center",
                                        marginTop: normalize(5), marginBottom: normalize(5), marginLeft: normalize(15), marginRight: normalize(15)
                                    }}>
                                        <View style={{ padding: normalize(6), backgroundColor: Color.lightBlueText, borderRadius: normalize(16), }}>
                                            <Image
                                                resizeMode="contain"
                                                style={{ height: normalize(20), width: normalize(20), }}
                                                source={data.item.icon} />
                                        </View>

                                        <Text

                                            style={{
                                                fontSize: normalize(10), fontFamily: Fonts.regular, color: Color.white, marginTop: normalize(5), textAlign: "center"
                                            }}>{data.item.name}</Text>
                                    </TouchableOpacity>
                                )
                            }} />

                    </ImageBackground>

                    <Text style={{
                        fontSize: normalize(12), fontFamily: Fonts.medium, color: Color.white, position: "absolute", top: 0, left: "17%"
                    }}>Institution</Text>


                </View>



            </View>


        </SafeAreaView>
    )

}