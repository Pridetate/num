import React, { useEffect, useState } from "react";
import {
  Button as RNButton,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";
import TextInputComponent from "../ui/TextInputComponent";
import { validateEmail } from "../helpers/emailValidation";
import Button from "../ui/Button";
import { ThemedView } from "@/components/ThemedView";
import submitApplication from "../helpers/submitApplication";
import { amountValidation } from "../helpers/amountValidation";

export const textInputNames = [
  "fullname",
  "email",
  "amount",
  "purpose",
] as const;

const ApplicationForm = () => {
  const initialFormState = Object.freeze({
    fullname: "",
    email: "",
    amount: "",
    purpose: "",
  });
  const [form, setForm] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ message: "" });
  const [showResult, setShowResult] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (
    name: (typeof textInputNames)[number],
    text: string
  ) => {
    let objValue = { [name]: text };
    let objError = { [name]: "" };
    if (!text) {
      objError[name] = `${name} cannot be empty`;
    } else {
      if (name === "email") {
        if (!validateEmail(text)) {
          objError[name] = "invalid email";
          // set error for invalid email
        }
      }
      if (name === "amount") {
        if (isNaN(+text)) {
          objError[name] = "invalid amount";
          // set error for invalid email
        }
      }
    }
    setForm((oldValues) => ({ ...oldValues, ...objValue }));
    setFormErrors((err) => ({ ...err, ...objError }));
    if (objError[name] === "") {
      setSubmitError(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    const errors = [];
    for (const [key, value] of Object.entries(formErrors)) {
      if (!value) {
        errors.push(value);
      }
    }

    if (errors.length > 0 && form.amount) {
      const dat = await submitApplication({
        full_name: form.fullname,
        email: form.email,
        loan_amount: form.amount,
        loan_purpose: form.purpose,
      });
      setData(dat);
      setLoading(false);
    } else {
      setSubmitError(true);
    }
  };
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const displayResult = async () => {
    if (
      !loading &&
      data?.message === "Loan application submitted successfully."
    ) {
      setShowResult(true);
      await timeout(5000);
      router.replace("/");
      // navigate to dashboard
    } else if (!loading && data?.message) {
      setSubmitError(true);
    }
  };

  useEffect(() => {
    displayResult();
  }, [loading]);

  if (showResult) {
    return (
      <View style={styles.mainContainer}>
        <Text>{data?.message ?? "failed to fetch data, please try again"}</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Text>APPLY FOR LOAN</Text>
      <FlatList
        data={textInputNames}
        style={{ flex: 1, width: "100%" }}
        renderItem={({ item }) => (
          <TextInputComponent
            key={item}
            name={item}
            value={form[item]}
            handleChange={(text) => handleInputChange(item, text)}
            errorText={formErrors[item]}
          />
        )}
      />
      {submitError ? (
        <Text style={styles.error}>Error in submitting</Text>
      ) : (
        <></>
      )}
      <Button
        text="APPLY FOR A LOAN"
        onClick={() => {
          handleSubmit();
        }}
        textStyle={styles.buttonTextStyle}
        containerStyle={styles.buttonContainerStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    gap: 1,
  },
  head: {
    fontSize: 100,
    fontWeight: 500,
    color: "#000",
    fontFamily: "Roboto",
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
  error: {
    color: "red",
    fontSize: 20,
    fontFamily: "Roboto",
  },
});

export default ApplicationForm;
