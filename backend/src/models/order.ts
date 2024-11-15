import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
  orderId: string;
  date: Date;
  customerDocument: string;
  productIds: string[];
  quantity: number;
  totalPrice: number;
}

const orderSchema = new Schema<IOrder>({
  orderId: { type: String, required: true },
  date: { type: Date, default: Date.now },
  customerDocument: { type: String, required: true },
  productIds: { type: [String], required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

const Order = mongoose.model<IOrder>('Order', orderSchema);
export default Order;
