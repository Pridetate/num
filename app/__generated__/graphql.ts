/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type LoanApplicationObject = {
  __typename?: "LoanApplicationObject";
  email?: Maybe<Scalars["String"]["output"]>;
  fullName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  loanAmount?: Maybe<Scalars["Float"]["output"]>;
  loanPurpose?: Maybe<Scalars["String"]["output"]>;
};

export type LoanProduct = {
  __typename?: "LoanProduct";
  id?: Maybe<Scalars["Int"]["output"]>;
  interestRate?: Maybe<Scalars["Float"]["output"]>;
  maximumAmount?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  loanApplications?: Maybe<Array<Maybe<LoanApplicationObject>>>;
  loanProducts?: Maybe<Array<Maybe<LoanProduct>>>;
};

export type LoanProductsQueryVariables = Exact<{ [key: string]: never }>;

export type LoanProductsQuery = {
  __typename?: "Query";
  loanProducts: Array<{
    __typename: "LoanProduct";
    id: number;
    name: string;
    interestRate: number;
    maximumAmount: number;
  }>;
};

export const LoanProductsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "LoanProducts" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "loanProducts" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "interestRate" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "maximumAmount" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoanProductsQuery, LoanProductsQueryVariables>;
