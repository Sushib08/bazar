import { Schema, model } from "mongoose";

const CategorySchema = new Schema(
  {
    title: { type: String, required: true },
    imageSrc: { type: String, required: false },
    imageAlt: { type: String, required: false },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default model("Category", CategorySchema);
