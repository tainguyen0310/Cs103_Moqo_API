import { users } from "./models/User";

export const resolvers = {
  Query: {
    users: () => users,
    user: (args: Number) => users.find(user => user.id == args)
  },
};
