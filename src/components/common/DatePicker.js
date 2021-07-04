import React, { useState, useRef, useEffect } from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity, TextInput,
    View, Image, Dimensions, KeyboardAvoidingView
} from 'react-native';
import dayjs from 'dayjs';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import Color from "../../assets/Colors"
import Fonts from "../../assets/Fonts"
import normalize from '../../utils/dimen';
import PropTypes from "prop-types";
import ImagePath from '../../assets/ImagePath';

export default function DatePicker(props) {

    const [value, setValue] = useState(props.value)
    const [showDatePicker, setShowDatePicker] = useState(false);

    function onDateChange(value) {
        setValue(value)
        if (props.onDateChange)
            props.onDateChange(value)
    }

    function dateModal() {
        return (

            Platform.OS == 'ios' ?

                <Modal
                    style={{ backgroundColor: 'transparent' }}
                    backdropOpacity={0.8}
                    animationIn={'fadeIn'}
                    animationOut={'fadeOut'}
                    backdropTransitionOutTiming={0}
                    hideModalContentWhileAnimating={true}
                    isVisible={showDatePicker}
                    animationInTiming={400}
                    onBackdropPress={() => { setShowDatePicker(false) }}
                >
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={value != "" ? value : dayjs().$d}
                        style={{ flex: 0.4, backgroundColor: Color.white, width: '100%', shadowColor: '000000' }}
                        textColor={Color.black}
                        mode={'date'}
                        is24Hour={false}
                        display="default"
                        onChange={(event, date) => { console.log(date), onDateChange(date); }}
                    />

                </Modal>
                :
                showDatePicker &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={value != "" ? value : dayjs().$d}
                    style={{ flex: 0.4, backgroundColor: Color.white, width: '100%', shadowColor: '000000' }}
                    textColor={Color.black}
                    mode={'date'}
                    is24Hour={false}
                    display="default"
                    onChange={(event, date) => {
                        setShowDatePicker(false)
                        if (date) {
                            onDateChange(date)
                        }

                    }}
                />
        )
    };

    return (
        <View style={{width: props.width}}>
            {dateModal()}
            <TouchableOpacity style={{
                width: "100%", height: normalize(45), marginTop: props.marginTop,
                borderWidth: normalize(2), borderColor: Color.lightBlueText, flexDirection: "row", alignItems: "center", justifyContent: "space-between",
                borderRadius: normalize(23), paddingLeft: normalize(10), paddingRight: normalize(10)
            }}
                onPress={() => {
                    setShowDatePicker(!showDatePicker)
                }}>
                {value == "" ?
                    <Text
                        style={{ width: "80%", color: Color.lightBlueText, fontFamily: Fonts.regular, fontSize: props.fontSize, marginLeft: normalize(5) }}>
                        {props.placeholder}
                    </Text> :
                    <Text
                        style={{ width: "80%", color: Color.white, fontFamily: Fonts.regular, fontSize: props.fontSize, marginLeft: normalize(5) }}>
                        {dayjs(value).format("DD/MM/YYYY")}
                    </Text>}

                <Image
                    style={{ height: normalize(15), width: normalize(15), marginRight: normalize(10), }}
                    source={ImagePath.calendar} />
            </TouchableOpacity>
        </View>

    )
}

DatePicker.propTypes = {
    width: PropTypes.string || PropTypes.number,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onDateChange: PropTypes.func,
    fontSize: PropTypes.number,
    marginTop: PropTypes.number,
};

DatePicker.defaultProps = {
    width: "90%",
    value: "",
    placeholder: "",
    onChangeText: null,
    editable: true,
    fontSize: normalize(12),
    marginTop: normalize(10)
};
