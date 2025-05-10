import mongoose, { Schema, Document, Types } from "mongoose";

export interface CartItem {
  productId: Types.ObjectId;
  quantity: number;
}

export interface CartDocument extends Document {
  userId: Types.ObjectId;
  items: CartItem[];
}

const cartItemSchema = new Schema<CartItem>(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const cartSchema = new Schema<CartDocument>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  items: [cartItemSchema],
});

const Cart = mongoose.model<CartDocument>("Cart", cartSchema);

export default Cart;
