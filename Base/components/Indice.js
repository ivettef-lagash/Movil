import React from "react";
import { Image, ImageBackground, View } from "react-native";
import wallpaper from "../assets/wallpaper.png";
import Logo from "../assets/Logo.png";
import styles from "./styles/styles";
import TablaJugadores from "../helpers/Table";

export default class Indice extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={wallpaper}
          style={styles.background}
          imageStyle={styles.logo}
        >
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: 370, height: 310 }}
            source={Logo}
          />
          <TablaJugadores></TablaJugadores>
        </ImageBackground>
      </View>
    );
  }
}
