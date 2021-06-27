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

export default function StudentList(props) {

    const students = [
        { id: 1, name: "Student", icon: ImagePath.student2 },
        { id: 1, name: "Courses", icon: ImagePath.courses },
        { id: 1, name: "Batch", icon: ImagePath.batch },
        { id: 1, name: "Fees", icon: ImagePath.fees },
        { id: 1, name: "Exams", icon: ImagePath.exam },
        { id: 1, name: "Report", icon: ImagePath.report },
    ]


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar backgroundColor={Color.blueBackground} />

            <View style={{ flex: 1, width: "100%", backgroundColor: Color.blueBackground, }}>

                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: normalize(10) }}>
                    <Text style={{
                        fontSize: normalize(14), fontFamily: Fonts.medium, color: Color.white,
                        marginTop: normalize(10), marginLeft: normalize(15)
                    }}>Student List</Text>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity style={{ padding: normalize(10) }}>
                            <Image
                                style={{ width: normalize(15), height: normalize(15) }}
                                source={ImagePath.search} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: normalize(10), marginLeft: normalize(5) }}>
                            <Image
                                style={{ width: normalize(15), height: normalize(15) }}
                                source={ImagePath.filter} />
                        </TouchableOpacity>
                    </View>


                </View>

                <FlatList
                    style={{ width: "100%" , marginTop: normalize(10)}}
                    data={[1, 2, 3]}
                    renderItem={(data) => {
                        return (
                            <TouchableOpacity style={{
                                alignSelf: "stretch", flexDirection: "row",
                                padding: "5%", borderRadius: normalize(20), borderWidth: normalize(1.6),
                                borderColor: Color.lightBlueText, marginTop: normalize(10), marginLeft: "2.5%", marginRight: "2.5%"
                            }}>
                                <View style={{
                                    height: normalize(40), width: normalize(40), borderRadius: normalize(20),
                                    padding: normalize(5), backgroundColor: Color.orange, borderWidth: normalize(1),
                                    borderColor: Color.white
                                }}>
                                    <Image style={{ height: "100%", width: "100%", }}
                                        source={ImagePath.student}
                                    />
                                </View>
                                <View style={{ justifyContent: "space-between", marginLeft: normalize(15) }}>
                                    <Text style={{
                                        fontSize: normalize(12), fontFamily: Fonts.medium, color: Color.white,
                                    }}>Jon Doe</Text>

                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{
                                            fontSize: normalize(10), fontFamily: Fonts.regular, color: Color.white,
                                        }}>Roll Number:  </Text>
                                        <Text style={{
                                            fontSize: normalize(10), fontFamily: Fonts.medium, color: Color.white,
                                        }}>2</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />

                <TouchableOpacity style={{
                    height: normalize(45), width: normalize(45), borderRadius: normalize(25),
                    backgroundColor: Color.orange, justifyContent: "center", alignItems: "center", elevation: normalize(5), position: "absolute",
                    bottom: normalize(15), right: normalize(15)
                }}>
                    <Image
                        style={{ height: normalize(16), width: normalize(16) }}
                        source={ImagePath.add} />
                </TouchableOpacity>



            </View>


        </SafeAreaView>
    )

}