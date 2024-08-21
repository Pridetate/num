import React, { Children } from "react";
import { ScrollView, StyleSheet } from "react-native";

interface IBaseLayout {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: IBaseLayout) => {
  return <ScrollView style={styles.appContainer}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
  },
});

export default BaseLayout;
