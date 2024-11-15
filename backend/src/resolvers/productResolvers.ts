import { fetchProducts } from '../vtexAPI';

export const resolvers = {
  Query: {
    getProducts: async () => {
      const products = await fetchProducts();
      return products.map((product: any) => ({
        productId: product.productId,
        productName: product.productName,
        description: product.description,
        link: product.link,
        imageUrl: product.items[0]?.images[0]?.imageUrl,
        price: product.items[0]?.sellers[0]?.commertialOffer?.Price
      }));
    }
  }
};
