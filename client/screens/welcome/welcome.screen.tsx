import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import { onboardingSwiperData } from "@/constants/constants";
import { router } from "expo-router";
import { CommonStyles } from "@/styles/common/common.style";
const WelcomeScreen = () => {
  let [fontLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_600SemiBold,
  });

  if (!fontLoaded && !fontError) {
    return null;
  }

  let renderItem = ({ item }: { item: onboardingSwiperDataType }) => {
    return (
      <LinearGradient
        colors={["#e5ecf9", "#f6f7f9", "#e8eef9"]}
        style={{ flex: 1 }}
      >
        <View style={{ marginTop: 80 }}>
          <Image
            source={item.image}
            style={{ alignSelf: "center", marginBottom: 80 }}
          />
          <Text style={CommonStyles.title}>{item.title}</Text>
          <View style={{ marginTop: 15 }}>
            <Text style={CommonStyles.description}>{item.description}</Text>
          </View>
        </View>
      </LinearGradient>
    );
  };

  return (
    <>
      <AppIntroSlider
        renderItem={renderItem}
        data={onboardingSwiperData}
        onDone={() => {
          router.push("/login");
        }}
        onSkip={() => {
          router.push("/login");
        }}
        renderNextButton={() => (
          <View style={CommonStyles.buttonContainer}>
            <Text
              style={[
                CommonStyles.buttonText,
                { fontFamily: "Nunito_600SemiBold" },
              ]}
            >
              Next
            </Text>
          </View>
        )}
        renderDoneButton={() => (
          <View style={CommonStyles.buttonContainer}>
            <Text
              style={[
                CommonStyles.buttonText,
                { fontFamily: "Nunito_600SemiBold" },
              ]}
            >
              Done
            </Text>
          </View>
        )}
        showSkipButton={false}
        dotStyle={CommonStyles.dotStyle}
        bottomButton={true}
        activeDotStyle={CommonStyles.activeDotStyle}
      />
    </>
  );
};

const style = StyleSheet.create({
  slideImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  titleText: {
    fontSize: 24,
    fontFamily: "Raleway_700Bold",
    color: "#4F46E5",
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: "Nunito_400Regular",
    color: "#575757",
  },
});

export default WelcomeScreen;
