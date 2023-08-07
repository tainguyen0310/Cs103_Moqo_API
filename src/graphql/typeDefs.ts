export const typeDefs = `#graphql
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  input UpdateUserInput {
    name: String
    email: String
    password: String
  }

  input DeleteUserInput {
    email: String!
  }

  input LoginUserInput {
    email: String!
    password: String!
  }

  input QueryUserInput {
    email: String!
  }

  # ROOT TYPE
  type Query {
    user(user: QueryUserInput): User
  }

  type Mutation {
    createUser(user: UserInput): User
    deleteUser(user: DeleteUserInput): User
    updateUser(user: UpdateUserInput): User
    login(user:LoginUserInput): User
  }
`;
