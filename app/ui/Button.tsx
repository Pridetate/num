import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface IButton {
  text: string;
  onClick: () => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
const Button = ({ text, onClick, containerStyle, textStyle }: IButton) => {
  return (
    <Pressable
      style={[styles.mainContainer, containerStyle]}
      onPress={() => onClick()}
    >
      <View style={styles.mainContainer}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 14,
  },
});

export default Button;
