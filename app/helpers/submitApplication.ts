import React, { useState } from "react";

interface ISubmitProps {
  full_name: string;
  email: string;
  loan_amount: string;
  loan_purpose: string;
}
interface IResult {
  message: string;
}
const submitApplication = async ({
  full_name,
  email,
  loan_amount,
  loan_purpose,
}: ISubmitProps) => {
  try {
    const resp = await fetch(`http://localhost:5000/apply-loan`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        email,
        loan_amount,
        loan_purpose,
      }),
    });
    const data = (await resp.json()) as IResult;

    return {
      message: data.message,
    };
  } catch (e) {
    return {
      message: "error in fetching data",
    };
  }
};

export default submitApplication;
