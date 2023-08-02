import { users } from "./models/User";

export const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args) => users.find((user) => user.id === args.id)
  },
  Mutation: {
    createUser: (parent, args) => args
  }
};
