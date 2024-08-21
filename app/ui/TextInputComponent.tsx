import React from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";

export interface ITextInputComponent {
  name: string;
  handleChange: (value: string) => void;
  value: string;
  errorText: string;
}

const TextInputComponent = ({
  name,
  handleChange,
  value,

  errorText,
}: ITextInputComponent) => {
  const handleTextChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const { text } = e.nativeEvent;

    handleChange(text);
  };
  console.log({ value });

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{name}</Text>
      <TextInput
        style={styles.text}
        value={value}
        onChange={(e) => handleTextChange(e)}
      />
      {errorText ? <Text style={styles.error}>{errorText}</Text> : <></>}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 12,
    width: "100%",
  },
  text: {
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    width: "100%",
    color: "#30C2E3",
    height: 40,
    fontFamily: "Roboto",
  },
  error: {
    color: "red",
    fontSize: 20,
    fontFamily: "Roboto",
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: "#000",
    fontFamily: "Roboto",
  },
});

export default TextInputComponent;
