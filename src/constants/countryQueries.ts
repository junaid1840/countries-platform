import { gql } from "@apollo/client";

export const COUNTRIES_LIST = gql`
  query GetCountryList {
      countries {
        name
        code
      }
    }
`;

export const COUNTRY_CODE = gql`
  query GetCountryByCountryCode($countryCode: String) {
      countries( filter: {code: {eq: $countryCode}} ) {
        name
        code
      }
    }
`;
