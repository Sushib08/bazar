import { Request, Response } from "express";
import Product from "../models/Product";

export const getProductsByCategory = async (req: Request, res: Response) => {
  const categorySlug = req.params.categorySlug;

  try {
    const products = await Product.find({ slug: categorySlug });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};
