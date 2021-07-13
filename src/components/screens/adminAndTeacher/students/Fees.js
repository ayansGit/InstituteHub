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
import ViewPager from '@react-native-community/viewpager';
import Color from "../../../../assets/Colors"
import Fonts from "../../../../assets/Fonts"
import normalize from '../../../../utils/dimen';
import ImagePath from '../../../../assets/ImagePath';
import Header from '../../../common/Header';

export default function Fees(props) {
    var feesTypePager = useRef()
    let feesTypeArray = ["Collected", "Due"]
    const [feesType, setFeesType] = useState(feesTypeArray[0])

    function changeFeesType(position) {
        if (feesTypePager != null) {
            feesTypePager.current.setPage(position)
            // setFeesType(feesTypeArray[position])
        }
    }

    function feesCompletedView() {
        return (
            <FlatList
                style={{ width: "100%", marginTop: normalize(10) }}
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={(data) => {
                    return (
                        <TouchableOpacity style={{
                            alignSelf: "stretch", flexDirection: "row",
                            padding: "5%", borderRadius: normalize(20), borderWidth: normalize(1.6),
                            borderColor: Color.lightBlueText, marginTop: normalize(10), marginLeft: "2.5%", marginRight: "2.5%"
                        }}
                            onPress={() => { props.navigation.navigate("FeesDetails") }}>
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
        )
    }

    function feesDueView() {
        return (
            <FlatList
                style={{ width: "100%", marginTop: normalize(10) }}
                data={[1, 2, 3]}
                renderItem={(data) => {
                    return (
                        <TouchableOpacity style={{
                            alignSelf: "stretch", flexDirection: "row",
                            padding: "5%", borderRadius: normalize(20), borderWidth: normalize(1.6),
                            borderColor: Color.lightBlueText, marginTop: normalize(10), marginLeft: "2.5%", marginRight: "2.5%"
                        }}
                            onPress={() => { props.navigation.navigate("FeesDetails") }}>
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
        )
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar backgroundColor={Color.blueBackground} />

            <View style={{ flex: 1, width: "100%", backgroundColor: Color.blueBackground, }}>

                <Header
                    title={"Fees"}
                    search={true}
                    filter={false}
                    onBackPress={() => {
                        props.navigation.goBack()
                    }} />

                <View style={{
                    width: "80%", flexDirection: "row", alignSelf: "center", borderWidth: normalize(1), borderColor: Color.lightBlueText,
                    padding: normalize(2), borderRadius: normalize(6)
                }}>

                    {feesTypeArray.map((value, index) => {
                        return (
                            <TouchableOpacity style={{
                                width: "50%", backgroundColor: feesType == value ? Color.lightBlueText : Color.blueBackground,
                                borderRadius: normalize(4)
                            }}
                                onPress={() => { changeFeesType(index) }}>
                                <Text style={{
                                    fontSize: normalize(10), textAlign: "center", fontFamily: Fonts.medium, color: Color.white,
                                    margin: normalize(5)
                                }}>{value}</Text>
                            </TouchableOpacity>
                        )
                    })}

                </View>

                <ViewPager
                    ref={feesTypePager}
                    pageMargin={normalize(10)}
                    onPageSelected={(event) => { setFeesType(feesTypeArray[event.nativeEvent.position]) }}
                    style={{ width: "100%", height: "100%", marginTop: normalize(20) }}>
                    {feesCompletedView()}
                    {feesDueView()}
                </ViewPager>


            </View>


        </SafeAreaView>
    )

}