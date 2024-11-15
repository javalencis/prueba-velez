import Order from '../models/order'

export const orderResolvers = {
  Query: {
    getOrders: async () => {
      try {
        return await Order.find();
      } catch (error) {
        console.error('Error fetching orders:', error);
        return [];
      }
    },
  },

  Mutation: {
    createOrder: async (_: any, args: any) => {
      const { orderId, customerDocument, productIds, quantity, totalPrice } = args;
      try {
        const newOrder = new Order({
          orderId,
          customerDocument,
          productIds,
          quantity,
          totalPrice,
        });
        await newOrder.save();
        return newOrder;
      } catch (error) {
        console.error('Error creating order:', error);
        throw new Error('Failed to create order');
      }
    },
  },
};
