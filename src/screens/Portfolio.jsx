import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
  Platform,
  Pressable,
  Text,
} from "react-native";
import React from "react";
import * as Linking from "expo-linking";

const width = Dimensions.get("window").width;

const Portfolio = () => {
  const images = [
    {
      uri: require("../../assets/images/portfolio/portfolio-1.png"),
      url: "https://darlanebrown.github.io/ecard",
      git: "https://github.com/",
    },
    {
      uri: require("../../assets/images/portfolio/portfolio-2.png"),
      url: "https://darlanebrown.github.io/ecard",
      git: "https://github.com/",
    },
    {
      uri: require("../../assets/images/portfolio/portfolio-3.png"),
      url: "https://darlanebrown.github.io/decidr",
      git: "https://github.com/",
    },
    {
      uri: require("../../assets/images/portfolio/portfolio-4.png"),
      url: "http://luceroweb.github.io/haunted-house-game/",
      git: "https://github.com/",
    },
    {
      uri: require("../../assets/images/portfolio/portfolio-5.png"),
      url: "https://www.github.com",
      git: "https://github.com/",
    },
    {
      uri: require("../../assets/images/portfolio/portfolio-6.png"),
      url: "https://damp-earth-86689.herokuapp.com/",
      git: "https://github.com/",
    },
    {
      uri: require("../../assets/images/portfolio/portfolio-7.png"),
      url: "https://github.com/NadiCa08/group-college-path",
      git: "https://github.com/",
    },
    {
      uri: require("../../assets/images/portfolio/portfolio-8.png"),
      url: "https://luceroweb.github.io/trivia-and-chill",
      git: "https://github.com/",
    },
    {
      uri: require("../../assets/images/portfolio/portfolio-9.png"),
      url: "http://Tesfa-Worku.github.io/team-marvel-project",
      git: "https://github.com/",
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable onPress={() => Linking.openURL(item.url)}>
      <Image
        source={item.uri}
        style={{ width: Platform.OS === "web" ? 400 : width, height: 300 }}
        width={Platform.OS === "web" ? 400 : width}
        height={300}
      />
      <Pressable
        style={{
          padding: 8,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
        onPress={() => {
            Linking.openURL(item.git)
        }}
      >
        <Text style={{ fontSize: 18, color: "#000" }}>
          View source on github
        </Text>
      </Pressable>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/images/portfolio-bg-1.jpg")}
        resizeMode="stretch"
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FlatList
            data={images}
            renderItem={renderItem}
            // windowSize={width}
            // sliderWidth={width}
            // itemWidth={width}
            // autoplay
            // loop
            style={{ borderWidth: 2 }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
