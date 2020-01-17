import React from "react";
import { Button, View } from "react-native";
import styles from "./styles/styles";
import Points from "../helpers/TablePoints";

export default class Puntos extends React.Component {
  constructor() {
    super();
    this.state = {
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
      <View style={styles.MainContainer}>
        {this.state.show ? <Points></Points> : null}
        <Button title="Sumar Puntos" onPress={this.ShowHideComponent} />
      </View>
    );
  }
}
