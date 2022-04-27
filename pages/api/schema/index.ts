import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Traveler {
    _id: ID
    fullname: String
    firstname: String
    lastname: String
    email: String
    phone: String
    notes: String
    profile: String
  }

  type Hotelier {
    _id: ID
    fullname: String
    firstname: String
    lastname: String
    email: String
    phone: String
    notes: String
    profile: String
  }

  type User {
    _id: ID
    fullname: String
    firstname: String
    lastname: String
    email: String
    phone: String
    notes: String
    profile: String
    business: String
  }

  input UserInput {
    firstname: String
    lastname: String
    email: String
    phone: String
    notes: String
    profile: String
    business: String
  }

  type Admin {
    nickname: String
    hash: String
    salt: String
    token: String
  }

  type LoginObject {
    error: Boolean
    message: String
    data: Admin
  }

  type Query {
    travelers: [Traveler]
    hoteliers: [Hotelier]
    users: [User]
    signinAdmin(nickname: String, password: String, token: String): LoginObject
  }

  type Mutation {
    createAdmin(nickname: String, password: String): Admin
    createUser(data: UserInput): User
  }
`;

export default typeDefs;
