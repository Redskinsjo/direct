import { gql } from "apollo-server-micro";

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

  type Query {
      travelers(): [Traveler]
      hoteliers(): [Hotelier]
  }
`;

export default typeDefs;
