import React, { Component } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import usersApi from "../api/api";

export default class TablaJugadores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Jugador 1", "Jugador 2", "Dia", ""],
      tableData: [
        ["Hernan C", "Leonard B", "17/1", "4"],
        ["Nicolas A", "Brayan M", "17/1", "d"],
        ["Vicente H", "Fabian B", "17/1", "4"],
        ["Gustavo V", "Don Luis", "17/1", "d"]
      ],
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

  async render() {
    const apiGet = await usersApi().getMatch();
    console.log(apiGet.data[0]);
    const state = this.state;
    const element = (data, index) => (
      <View
        style={
          (styles.btn, { height: 70, width: 190, alignItems: "flex-start" })
        }
      >
        <View style={styles.MainContainer}>
          <Button
            title={
              !this.state.show
                ? (this.state.estado = "Empezar")
                : (this.state.estado = "Empezado")
            }
            onPress={() => {
              Alert.alert("Partido empezado!");
              this.ShowHideComponent();
            }}
          />
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderColor: "transparent" }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {state.tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element(cellData, index) : cellData}
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
