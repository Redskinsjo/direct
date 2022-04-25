import { gql } from "@apollo/client";

export const GetSubscribedIndividuals = gql`
  query GetSubscribedIndividuals {
    travelers {
      _id
      fullname
      firstname
      lastname
      email
      phone
      notes
      profile
    }
    hoteliers {
      _id
      fullname
      firstname
      lastname
      email
      phone
      notes
      profile
    }
  }
`;
