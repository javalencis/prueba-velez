import axios from 'axios';

const VTEX_API_URL = 'https://qacuerosvelez.vtexcommercestable.com.br/api/catalog_system/pub/products/search/';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(VTEX_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products from VTEX API:', error);
    return [];
  }
};
