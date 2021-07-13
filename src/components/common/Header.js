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
import PropTypes from "prop-types";
import ImagePath from '../../assets/ImagePath';

export default function Header(props) {



    function onBackPress(value) {
        if (props.onBackPress)
            props.onBackPress(value)
    }

    return (
        <View style={{
            width: "100%", height: normalize(50), flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            backgroundColor: props.backgroundColor,
        }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => onBackPress()}>
                    <Image
                        style={{ height: normalize(15), width: normalize(15), margin: normalize(15) }}
                        source={ImagePath.back}
                    />
                </TouchableOpacity>
                <Text style={{
                    fontSize: normalize(14), fontFamily: Fonts.medium, color: Color.white,

                }}>{props.title}</Text>
            </View>


            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {props.search &&
                    <TouchableOpacity style={{ padding: normalize(10) }}>
                        <Image
                            style={{ width: normalize(15), height: normalize(15) }}
                            source={ImagePath.search} />
                    </TouchableOpacity>}

                {props.filter &&
                    <TouchableOpacity style={{ padding: normalize(10), marginLeft: normalize(5) }}>
                        <Image
                            style={{ width: normalize(15), height: normalize(15) }}
                            source={ImagePath.filter} />
                    </TouchableOpacity>}

            </View>

        </View>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    search: PropTypes.bool,
    filter: PropTypes.bool,
    backgroundColor: PropTypes.string,
    onBackPress: PropTypes.func,
};

Header.defaultProps = {
    title: "",
    search: false,
    filter: false,
    backgroundColor: Color.blueBackground,
    onBackPress: null
};
