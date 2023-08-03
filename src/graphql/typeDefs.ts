export const typeDefs = `#graphql
  type User {
    id: ID!
    username: String
    email: String
    password: String
  }

  input UserInput {
      name: String!
      email: String!
      password: String!
    }
  # ROOT TYPE
  type Query {
    user(id: ID!): User
  }

  type Mutation {
    createUser(user: UserInput): User
  }
`;
