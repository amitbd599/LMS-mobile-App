import { StyleSheet } from "react-native";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "#2467ec",
    width: responsiveWidth(88),
    height: responsiveHeight(5.5),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: responsiveFontSize(2.5),
    textAlign: "center",
  },
  dotStyle: {
    backgroundColor: "#c6c7cc",
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: responsiveWidth(1.25),
  },
  activeDotStyle: {
    backgroundColor: "#2467ec",
    width: responsiveWidth(8.5),
    height: responsiveWidth(2.5),
    borderRadius: 5,
  },
  title: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  description: {
    fontSize: responsiveFontSize(2),
    color: "#575757",
    textAlign: "center",
    marginTop: responsiveHeight(1),
  },
});
