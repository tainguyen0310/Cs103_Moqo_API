import { user } from "./queries";
import { createUser } from "./mutations";

export const resolvers = {
  Query: {
    user,
  },
  Mutation: {
    createUser,
  }
};
