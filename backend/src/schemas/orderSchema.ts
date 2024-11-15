import { gql } from 'graphql-tag';

export const orderTypeDefs = gql`
  type Order {
    id: ID!
    orderId: String!
    date: String!
    customerDocument: Int!
    productIds: [String!]!
    quantity: Int!
    totalPrice: Float!
  }

  type Query {
    getOrders: [Order]
  }

  type Mutation {
    createOrder(
      orderId: String!,
      customerDocument: Int!,
      productIds: [String!]!,
      quantity: Int!,
      totalPrice: Float!
    ): Order
  }
`;