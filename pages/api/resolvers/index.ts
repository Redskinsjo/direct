import sha256 from "crypto-js/sha256";
import base64 from "crypto-js/enc-base64";
import uid2 from "uid2";

import User from "../models/user";
import Admin from "../models/admin";

const resolvers = {
  Query: {
    travelers: async (parent: any, args: any, context: any, info: any) => {
      if (context.user) {
        const users = await User.find();
        const travelers = users.filter((u: any) => u.profile === "traveler");
        return travelers;
      }
      return null;
    },
    hoteliers: async (parent: any, args: any, context: any, info: any) => {
      if (context.user) {
        const users = await User.find();
        const hoteliers = users.filter((t: any) => t.profile === "hotelier");
        return hoteliers;
      }
      return null;
    },
    users: async (parent: any, args: any, context: any, info: any) => {
      if (context.user) {
        const users = await User.find();
        const travelers = users.filter((u: any) => u.profile === "traveler");
        const hoteliers = users.filter((t: any) => t.profile === "hotelier");
        return { travelers, hoteliers };
      }
      return null;
    },
    signinAdmin: async (parent: any, args: any, context: any) => {
      if (context.user) {
        return { error: false, message: "", data: context.user };
      }

      const admin = await Admin.findOne({ nickname: args.nickname });

      if (admin) {
        if (
          sha256(args.password + admin.salt).toString(base64) === admin.hash
        ) {
          return { error: false, message: "", data: admin };
        } else {
          return { error: true, message: "Unauthorized" };
        }
      } else {
        const admin = await Admin.findOne({ token: args.token });
        if (admin) return { error: false, message: "", data: admin };
      }

      return { error: true, message: "Unidentified" };
    },
  },
  Mutation: {
    createAdmin: async (
      parent: any,
      args: { nickname: string; password: string },
      context: any
    ) => {
      if (context.token === process.env.SUPER_ADMIN_TOKEN) {
        const salt = uid2(16);
        const token = uid2(16);
        const hash = sha256(args.password + salt).toString(base64);
        const newAdmin = new Admin({
          nickname: args.nickname,
          salt,
          token,
          hash,
        });
        await newAdmin.save();
        return newAdmin;
      }
      return new Error("No authorized");
    },
    createUser: async (parent: any, args: any) => {
      const user = await User.findOne({ email: args.data.email });
      if (!user) {
        const newUser = new User({
          ...args.data,
          fullname: args.data.firstname + " " + args.data.lastname,
        });
        const userCreated = await newUser.save();
        return userCreated;
      }
      throw new Error("User already exists");
    },
  },
};

export default resolvers;
