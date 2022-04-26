import { gql } from "@apollo/client";

export const GetSubscribedIndividuals = gql`
  query GetSubscribedIndividuals {
    users {
      _id
      fullname
      firstname
      lastname
      email
      phone
      notes
      profile
      business
    }
  }
`;

export const SigninAdmin = gql`
  query SigninAdmin($nickname: String, $password: String, $token: String) {
    signinAdmin(nickname: $nickname, password: $password, token: $token) {
      error
      message
      data {
        nickname
        token
      }
    }
  }
`;

export const CreateUser = gql`
  mutation CreateUser($data: UserInput) {
    createUser(data: $data) {
      _id
      fullname
      firstname
      lastname
      email
      phone
      notes
      profile
      business
    }
  }
`;
