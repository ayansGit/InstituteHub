import { PixelRatio, Platform, Dimensions } from "react-native";
import DeviceInfo from 'react-native-device-info';

const ratio = PixelRatio.get();

export default function normalize(size) {
  const { width, height } = Dimensions.get('window');

  console.log("PIXEL_RATIO: ", ratio)
  if (ratio >= 2 && ratio < 3) {
    if (width < 360) {
      return size * 0.95;
    } else if (height < 667) {
      return size;
    } else if (height >= 667 && height <= 735) {
      return size * 1.15;
    }

    return size * 1.25;
  } else if (ratio >= 3 && ratio < 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size * 1.15;
    } else if (height >= 667 && height <= 735) {
      return size * 1.2;
    }

    return size * 1.27;
  } else if (ratio >= 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size * 1.2;
    } else if (height >= 667 && height <= 735) {
      return size * 1.25;
    }
    return size * 1.4;
  }

  return size;
}

// const scale = () => {
//   if (DeviceInfo.isTablet())
//     return (Dimensions.get("window").width / 390)
//   else return (Dimensions.get("window").width / 320)

//   // let isTablet = DeviceInfo.isTablet()
//   // return (Dimensions.get("window").width / 320)
// }

// const scaleForHeight = () => {
//   if (DeviceInfo.isTablet())
//     return (Dimensions.get("window").width / 420)
//   else return (Dimensions.get("window").width / 320)

//   // let isTablet = DeviceInfo.isTablet()
//   // return (Dimensions.get("window").width / 320)
// }

// export function normalize(size) {
//   const newSize = size * scale()
//   if (Platform.OS === 'ios') {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize))
//   } else {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize))
//   }
// }

// export function normalizeHeight(size) {

// }