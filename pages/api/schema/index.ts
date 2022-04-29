import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Traveler {
    _id: ID
    email: String
    firstname: String
    fullname: String
    lastname: String
    notes: String
    phone: String
    profile: String
  }

  type Hotelier {
    _id: ID
    email: String
    firstname: String
    fullname: String
    lastname: String
    notes: String
    phone: String
    profile: String
  }

  type User {
    _id: ID
    business: String
    email: String
    firstname: String
    fullname: String
    lastname: String
    notes: String
    phone: String
    profile: String
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
    hash: String
    nickname: String
    salt: String
    token: String
  }

  type LoginObject {
    data: Admin
    error: Boolean
    message: String
  }

  type Query {
    hoteliers: [Hotelier]
    signinAdmin(nickname: String, password: String, token: String): LoginObject
    travelers: [Traveler]
    users: [User]
  }

  type Mutation {
    createAdmin(nickname: String, password: String): Admin
    createUser(data: UserInput): User
  }
`;

export default typeDefs;
