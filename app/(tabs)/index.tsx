import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import useFetchAllProducts from "@/hooks/useFetchAllProducts/useFetchAllProducts";
import Header from "../ui/Header";
import ApplicationForm from "../feature/ApplicationForm";
import LoanCard from "../ui/LoanCard";
import Button from "../ui/Button";
import { ScrollView } from "react-native-gesture-handler";
import { Link } from "expo-router";
import BaseLayout from "../ui/BaseLayout";

export default function HomeScreen() {
  const { data, loading, error } = useFetchAllProducts();
  if (loading)
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <BaseLayout>
      <Header />
      {error && (
        <ThemedView>
          <ThemedText type="title">{error.message}</ThemedText>
        </ThemedView>
      )}
      <View>
        {data && (
          <FlatList
            data={data}
            style={{ flex: 1, width: "100%" }}
            renderItem={({ item }) => <LoanCard {...item} />}
          />
        )}
      </View>
      <Link href="/application">
        <Button
          text="APPLY FOR A LOAN"
          onClick={() => {}}
          textStyle={styles.buttonTextStyle}
          containerStyle={styles.buttonContainerStyle}
        />
      </Link>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  loader: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  buttonContainerStyle: {
    width: "100%",
    height: 56,
    backgroundColor: "#30C2E3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextStyle: {
    fontSize: 16,
    color: "#ffff",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
