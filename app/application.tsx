import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import BaseLayout from "./ui/BaseLayout";
import ApplicationForm from "./feature/ApplicationForm";
import { Text } from "react-native-paper";

export default function Application() {
  return (
    <BaseLayout>
      <ApplicationForm />
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
