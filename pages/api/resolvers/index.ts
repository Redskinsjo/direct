// import nodemailer from "nodemailer";

import Hotelier from "../models/hotelier";
import Traveler from "../models/traveler";

const resolvers = {
  Query: {
    travelers: async (parent: any, args: any, _: any, info: any) => {
      const travelers = await Traveler.find();
      return travelers;
    },
    hoteliers: async (parent: any, args: any, _: any, info: any) => {
      const hoteliers = await Hotelier.find();
      return hoteliers;
    },
  },
  Mutation: {},
};

export default resolvers;
