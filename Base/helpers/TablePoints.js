import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import {
  Button,
  Table,
  TableWrapper,
  Row,
  Cell
} from "react-native-table-component";

export default class TablaPuntos extends Component {
  constructor() {
    super();
    this.state = {
      Puntaje1: 0,
      Puntaje2: 0,
      set1: 0,
      set2: 0
    };
  }
  render() {
    let flag1 = 0;
    let flag2 = 0;
    let tableHead = ["", "Puntos", "Sets", ""];
    let tableData = [
      ["Jugador 1", `${this.state.Puntaje1}`, `${this.state.set1}`, "4"]
    ];
    let tableData2 = [
      ["Jugador 2", `${this.state.Puntaje2}`, `${this.state.set2}`, "d"]
    ];
    const AddArray1 = () => {
      flag1 = this.state.Puntaje1 + 1;
      this.setState({ Puntaje1: flag1 });
    };

    const AddArray2 = () => {
      flag2 = this.state.Puntaje2 + 1;
      this.setState({ Puntaje2: flag2 });
    };

    const element = () => (
      <TouchableOpacity onPress={() => AddArray1()}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Punto 1</Text>
        </View>
      </TouchableOpacity>
    );

    const element2 = () => (
      <TouchableOpacity onPress={() => AddArray2()}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Punto 2</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={(styles.container, { width: 350, height: 100 })}>
        <Table borderStyle={{ borderColor: "transparent" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          {tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element() : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
          {tableData2.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element2() : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  btn: { width: 58, height: 18, backgroundColor: "#78B7BB", borderRadius: 2 },
  btnText: { textAlign: "center", color: "#fff" }
});
