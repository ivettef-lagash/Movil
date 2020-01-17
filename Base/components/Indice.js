import React, { Component } from "react";
import { Image, ImageBackground, Text, Main, View } from "react-native";
import wallpaper from "../assets/wallpaper.png";
import Logo from "../assets/Logo.png";
import styles from "./styles";

export default class Indice extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={wallpaper}
          style={styles.background}
          imageStyle={styles.logo}
        >
          {!!global.HermesInternal && (
            <Text style={styles.engine}>{HERMES_ENGINE}</Text>
          )}
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: 370, height: 250 }}
            source={Logo}
          />
        </ImageBackground>
      </View>
    );
  }
}
