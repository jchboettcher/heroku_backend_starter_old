const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    addUser(input: AddUser!): User!
  }

  type Query {
    allUsers: [User!]!
    userByName(name: String!): User!
  }

  type User {
    id: ID!
    displayName: String!
    score: Int!
    createdAt: String!
    updatedAt: String!
  }

  input AddUser {
    displayName: String!
  }
`