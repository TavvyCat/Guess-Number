import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const changeImageSize = () => {
      setDeviceWidth(Dimensions.get("window").width);
    };

    Dimensions.addEventListener("change", changeImageSize);

    return () => {
      Dimensions.removeEventListener("change", changeImageSize);
    };
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <Image
          style={{ ...styles.image, height: deviceWidth < 500 ? 200 : 400 }}
          source={require("../assets/images/success.png")}
          resizeMode="contain"
        />
        <BodyText style={styles.resultContainer}>
          Rounds: <Text style={styles.highlight}>{props.rounds}</Text>
        </BodyText>
        <BodyText style={styles.resultContainer}>
          Number: <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
        <MainButton onPress={props.onNewGame} style={styles.button}>
          NEW GAME
        </MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  image: {
    width: "80%",
    borderRadius: Dimensions.get("window").width,
    marginVertical: 20,
  },

  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    marginBottom: 20,
  },
});

export default GameOverScreen;
