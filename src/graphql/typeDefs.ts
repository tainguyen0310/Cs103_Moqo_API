export const typeDefs = `
  type User {
    id: ID!
    username: String
    password: String
  }

  # ROOT TYPE
  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(id: ID!, username: String, password: String): User
  }
`;
