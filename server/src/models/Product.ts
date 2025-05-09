import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    imageSrc: { type: String, required: true },
    imageAlt: { type: String },
    category: { type: String, required: true },
    slug: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Product", ProductSchema);
