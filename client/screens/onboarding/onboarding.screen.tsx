import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "@/styles/onboarding/onboard";
import { router } from "expo-router";

export default function OnboardingScreen() {
  let [fontLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#e5ecf9", "#f6f7f9"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={Styles.firstContainer}>
        <View>
          <Image source={require("@/assets/logo.png")} style={Styles.logo} />
          <Image source={require("@/assets/onboarding/shape_9.png")} />
        </View>

        <View style={Styles.titleWrapper}>
          <Image
            source={require("@/assets/onboarding/shape_3.png")}
            style={Styles.titleTextShape1}
          />
          <Text style={[Styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Start learning With
          </Text>
          <Image
            source={require("@/assets/onboarding/shape_2.png")}
            style={Styles.titleTextShape2}
          />
        </View>
        <View>
          <Image
            source={require("@/assets/onboarding/shape_6.png")}
            style={Styles.titleTextShape3}
          />
          <Text style={[Styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Becodemy
          </Text>
        </View>

        <View style={Styles.dscpWrapper}>
          <Text style={[Styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            Learn to code with the best online courses, tutorials and resources
            for free.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={Styles.buttonWrapper}
            onPress={() => {
              router.push("/(routes)/welcome-intro");
            }}
          >
            <Text
              style={[
                { color: "#fff", fontFamily: "Nunito_700Bold" },
                { fontSize: 16 },
              ]}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
