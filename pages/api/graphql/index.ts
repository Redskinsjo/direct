// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer, AuthenticationError } from 'apollo-server-micro';
import mongoose from 'mongoose';

import typeDefs from '../schema';
import resolvers from '../resolvers';
import Admin from '../models/admin';

type Data = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  notes: string;
  profile: string;
};

const getUser = async (token: string) => {
  let user;
  if (token) {
    user = await Admin.findOne({ token });
  }
  // if (!user) throw new AuthenticationError("you must be logged in");
  return user;
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let token;

    if (req.headers.authorization) {
      token =
        req.headers.authorization.split(' ')[1] ||
        req.headers.authorization.split(' ')[0];
    }

    let user;
    if (token) {
      user = await getUser(token);
    }

    return { user, token };
  },
});
const startServer = apolloServer.start();

export const config = { api: { bodyParser: false } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await mongoose.connect(`${process.env.MONGODB_URI}`);

  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
