import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { Link } from "expo-router";

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.companyNameText}>Numida</Text>
      <View style={styles.actionItems}>
        <Link href="/application">
          <Button
            text="APPLY FOR A LOAN"
            onClick={() => {}}
            textStyle={{ ...styles.companyText, ...styles.applyButton }}
            containerStyle={styles.containerStyle}
          />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    backgroundColor: "#F5FCFF",
    alignItems: "center",
  },
  actionItems: {
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
  },
  companyText: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#30C2E3",
  },
  companyNameText: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#30C2E3",
  },
  applyButton: {
    color: "#fff",
  },
  containerStyle: {
    flexDirection: "row",
    backgroundColor: "#30C2E3",
    borderRadius: 3,
    padding: 6,
  },
});

export default Header;
