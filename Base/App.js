import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import Indice from "./components/Indice";

export default class App extends Component {
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
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {this.state.show ? <Indice></Indice> : null}
        <Button title="Ver partidos" onPress={this.ShowHideComponent} />
      </View>
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
