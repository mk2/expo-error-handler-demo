import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { ErrorRecovery, Updates } from "expo";

type Props = {
  exp: any;
};

export default class App extends React.Component<Props> {
  onRestartButton = () => {
    ErrorRecovery.setRecoveryProps({ restartedAt: new Date().toISOString() });
    throw new Error("Restart Error");
  };

  render() {
    console.log({ props: this.props });
    const errorRecovery = this.props.exp ? this.props.exp.errorRecovery : null;
    const restartedAt = errorRecovery ? errorRecovery.restartedAt || "" : "";
    return (
      <View style={styles.container}>
        <ScrollView>
          <Button title="Restart" onPress={this.onRestartButton} />
          <Text>Restarted At:{restartedAt}</Text>
          <Text>Props:{JSON.stringify(this.props)}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
