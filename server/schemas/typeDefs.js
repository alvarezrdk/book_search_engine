const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: String
  }

  type Book {
    _id:ID!
    bookId: String
    authors: [Author]
    description: String
    title: String
    image: String
    link: String
  }

  type Author {
    _id: ID!
    authorsList: [String]
  }

  type Auth {
    token: String
    user: User
  }
  
  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }
  type Query {
    allusers: [User]
    me(username: String!): User 
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email:String!, password: String!): User
    saveBook(savedBook:BookInput): User
    removeBook(bookId:String!): User
  }
    
`;

module.exports = typeDefs;