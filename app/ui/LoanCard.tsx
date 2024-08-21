import { Avatar, Button, Card, Text, Icon } from "react-native-paper";

import React from "react";
import { LoanProductsQuery } from "../__generated__/graphql";
import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

type ILoanCard = LoanProductsQuery["loanProducts"][number];
const LoanCard = (loan: ILoanCard) => {
  return (
    <Card style={styles.mainContainer}>
      <Card.Content style={styles.titleContainer}>
        <Text variant="titleLarge">{loan.name}</Text>
      </Card.Content>
      <Card.Content>
        <Text variant="bodyMedium">Maximum Amount</Text>
        <Text variant="titleLarge">${loan.maximumAmount}</Text>
      </Card.Content>
      <Card.Actions>
        <Text variant="bodyMedium">interest {loan.interestRate}%</Text>
        <Link href="/application">
          <Button mode="outlined" onPress={() => {}} style={styles.button}>
            <Text style={styles.text}>Learn more</Text>
            <View style={styles.icon}>
              <Icon source="arrow-right" color="#30C2E3" size={20} />
            </View>
          </Button>
        </Link>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#D4FAF5",
    marginBottom: 20,
  },
  titleContainer: {
    marginBottom: 30,
  },
  icon: {
    alignSelf: "center",
    marginTop: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    verticalAlign: "middle",
  },
  text: {
    color: "#30C2E3",
  },
});

export default LoanCard;
