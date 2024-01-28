import { View, Text, StyleSheet } from "react-native";

import Button from "./Button";

import { GlobalStyles } from "../../constants/styles";

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occured!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    fontFamily: "poppins-regular",
    textAlign: "center",
    color: "white",
    marginBottom: 8,
  },
  title: {
    fontFamily: "poppins-bold",
    fontSize: 20,
  },
});
