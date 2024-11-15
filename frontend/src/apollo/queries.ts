import { gql } from '@apollo/client';

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
