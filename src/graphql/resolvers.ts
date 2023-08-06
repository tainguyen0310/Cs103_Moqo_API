import { user } from "./queries";
import { createUser,deleteUser,updateUser, login } from "./mutations";


export const resolvers = {
  Query: {
    user,
  },
  Mutation: {
    createUser,
    deleteUser,
    updateUser,
    login,
  }
};
