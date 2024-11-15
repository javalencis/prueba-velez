import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../apollo/queries';
import '../styles/ProductsList.css'
import Carousel from './Carousel';
export const ProductsList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className='ProductsList'>
      <Carousel products={data.getProducts}/>
    </section>
  );
};


