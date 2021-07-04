import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity, TextInput,
    View, Image, Dimensions, KeyboardAvoidingView, Platform, KeyboardTypeOptions
} from 'react-native';
import Color from "../../assets/Colors"
import Fonts from "../../assets/Fonts"
import normalize from '../../utils/dimen';
import PropTypes from "prop-types";

export default function TextInputField(props) {

    const [value, setValue] = useState(props.value)

    function onChangeText(value) {
        setValue(value)
        if (props.onChangeText)
            props.onChangeText(value)
    }

    return (
        <View style={{
            width: props.width, height: normalize(45), marginTop: props.marginTop, marginBottom: props.marginBottom,
            borderWidth: normalize(2), borderColor: Color.lightBlueText, flexDirection: "row", alignItems: "center", justifyContent: "center",
            borderRadius: normalize(23), paddingLeft: normalize(10), paddingRight: normalize(10)
        }}>

            <TextInput
                style={{ width: "100%", color: Color.white, fontFamily: Fonts.regular, fontSize: props.fontSize }}
                editable={props.editable}
                placeholder={props.placeholder}
                placeholderTextColor={Color.lightBlueText}
                value={value}
                onChangeText={(value) => onChangeText(value)}
                keyboardType={props.keyboardType} />


        </View>
    )
}

TextInputField.propTypes = {
    width: PropTypes.string || PropTypes.number,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    editable: PropTypes.bool,
    fontSize: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    keyboardType: PropTypes.string
};

TextInputField.defaultProps = {
    width: "90%",
    value: "",
    placeholder: "",
    onChangeText: null,
    editable: true,
    fontSize: normalize(12),
    marginTop: normalize(10),
    marginBottom: 0,
    keyboardType: "default"
};
