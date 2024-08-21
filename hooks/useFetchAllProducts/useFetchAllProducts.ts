// import { gql } from "@/app/__generated__";
import {
  LoanProductsQuery,
  LoanProductsQueryVariables,
} from "@/app/__generated__/graphql";
import { DocumentNode, TypedDocumentNode, useQuery, gql } from "@apollo/client";
// import FetchAllProductsQuery from "../useFetchAllProducts/fetch-all-products.graphql";

const useFetchAllProducts = () => {
  const ALL_LOAN_PRODUCTS_QUERY: DocumentNode = gql`
    query LoanProducts {
      loanProducts {
        id
        name
        interestRate
        maximumAmount
      }
    }
  `;

  const { data, loading, error } = useQuery<
    LoanProductsQuery,
    LoanProductsQueryVariables
  >(ALL_LOAN_PRODUCTS_QUERY, {});
  console.log("test, ", data);
  return {
    data: data?.loanProducts,
    loading,
    error,
  };
};

export default useFetchAllProducts;
