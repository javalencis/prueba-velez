import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      productId
      productName
      description
      price
      imageUrl
    }
  }
`;

export const GET_ORDERS = gql`
  query GetORders {
    getOrders {
      orderId
      date
      customerDocument
      productIds
      quantity
      totalPrice
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation CreateOrder(
    $orderId: String!
    $customerDocument: Int!
    $productIds: [String!]!
    $quantity: Int!
    $totalPrice: Float!
  ) {
    createOrder(
      orderId: $orderId
      customerDocument: $customerDocument
      productIds: $productIds
      quantity: $quantity
      totalPrice: $totalPrice
    ) {
      id
      orderId
      customerDocument
      productIds
      quantity
      totalPrice
    }
  }
`;
