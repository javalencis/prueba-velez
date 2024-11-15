import { gql } from 'graphql-tag';

export const productTypeDefs = gql`
  type Product {
    productId: String
    productName: String
    description: String
    link: String
    imageUrl: String
    price: Float
  }

  type Query {
    getProducts: [Product]
  }
`;
