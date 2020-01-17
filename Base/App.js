import React, { Component } from "react";
import { StyleSheet, View, Button, ImageBackground } from "react-native";
import Indice from "./components/Indice";
import sinLogo from "./assets/sinLogo.png";
import style from "./components/styles/styles";
import Puntos from "././components/Puntajes";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.mostrar = {
      show: false
    };
  }

  ShowHideComponent = () => {
    if (this.state.show == false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  };

  render() {
    return (
      <ImageBackground
        source={sinLogo}
        style={style.background}
        imageStyle={style.logo}
      >
        <View style={styles.MainContainer}>
          {this.state.show ? <Indice></Indice> : null}
          <Button title="Ver partidos" onPress={this.ShowHideComponent} />
          <Puntos></Puntos>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 10
  }
});
