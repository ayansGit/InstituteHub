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
import Color from "../../../../assets/Colors"
import Fonts from "../../../../assets/Fonts"
import normalize from '../../../../utils/dimen';
import ImagePath from '../../../../assets/ImagePath';
import Header from '../../../common/Header';

export default function FeesDetails(props) {



    return (
        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar backgroundColor={Color.lightBlueText} />

            <View style={{ flex: 1, width: "100%", backgroundColor: Color.blueBackground, }}>

                <Header
                    title={"Fees Details"}
                    search={true}
                    filter={false}
                    backgroundColor={Color.lightBlueText}
                    onBackPress={() => {
                        props.navigation.goBack()
                    }} />

                <View style={{
                    width: "100%", flexDirection: "row", padding: "5%", paddingTop: "3%",
                    paddingBottom: "6%", backgroundColor: Color.lightBlueText
                }}>
                    <View style={{
                        height: normalize(60), width: normalize(60), borderRadius: normalize(30),
                        padding: normalize(5), backgroundColor: Color.orange, borderWidth: normalize(1),
                        borderColor: Color.white,
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

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{
                                fontSize: normalize(10), fontFamily: Fonts.regular, color: Color.white,
                            }}>Fees Type:  </Text>
                            <Text style={{
                                fontSize: normalize(10), fontFamily: Fonts.medium, color: Color.white,
                            }}>Monthly</Text>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{
                                fontSize: normalize(10), fontFamily: Fonts.regular, color: Color.white,
                            }}>Fees Amount:  </Text>
                            <Text style={{
                                fontSize: normalize(10), fontFamily: Fonts.medium, color: Color.white,
                            }}>₹2500</Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    style={{ width: "100%", marginTop: normalize(10) }}
                    data={[1, 2, 3]}
                    renderItem={(data) => {
                        return (
                            <View style={{
                                alignSelf: "stretch", flexDirection: "column",
                                padding: "5%", borderRadius: normalize(20), borderWidth: normalize(1.6),
                                borderColor: Color.lightBlueText, marginTop: normalize(10), marginLeft: "2.5%", marginRight: "2.5%"
                            }}>

                                <Text style={{
                                    fontSize: normalize(10), fontFamily: Fonts.regular, color: Color.white,
                                }}>Paid on:  <Text style={{ fontFamily: Fonts.semiBold, }}>10/07/2021</Text></Text>

                                <Text style={{
                                    fontSize: normalize(12), fontFamily: Fonts.medium, color: Color.white, alignSelf: "center",
                                    marginTop: normalize(15)
                                }}>₹500</Text>

                                <View style={{
                                    width: "100%", height: normalize(10), borderBottomWidth: normalize(1), borderStyle: "dashed",
                                    borderColor: Color.lightBlueText, alignSelf: "center",
                                }} />
                                <Text style={{
                                    fontSize: normalize(8), fontFamily: Fonts.regular, color: Color.white, alignSelf: "center",
                                    marginTop: normalize(5)
                                }}>Paid Amount</Text>

                                <View style={{ flexDirection: "row", alignSelf: "center", marginTop: normalize(15) }}>
                                    <Text style={{
                                        fontSize: normalize(10), fontFamily: Fonts.bold, color: Color.white,
                                    }}>10 Jul,2021</Text>
                                    <Text style={{
                                        fontSize: normalize(10), fontFamily: Fonts.regular, color: Color.white,
                                    }}> to  </Text>
                                    <Text style={{
                                        fontSize: normalize(10), fontFamily: Fonts.bold, color: Color.white,
                                    }}>9 Aug, 2021</Text>
                                </View>

                            </View>
                        )
                    }} />

                <TouchableOpacity style={{
                    height: normalize(45), width: normalize(45), borderRadius: normalize(25),
                    backgroundColor: Color.orange, justifyContent: "center", alignItems: "center", elevation: normalize(5), position: "absolute",
                    bottom: normalize(15), right: normalize(15)
                }}
                    onPress={() => { props.navigation.navigate("StudentDetails") }}>
                    <Image
                        style={{ height: normalize(16), width: normalize(16) }}
                        source={ImagePath.add} />
                </TouchableOpacity>



            </View>


        </SafeAreaView>
    )

}