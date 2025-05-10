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

export const searchProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const q = req.query.q as string;
    if (!q || q.length < 2) {
      res.status(400).json({ message: "Query too short." });
      return;
    }

    const products = await Product.find({
      title: { $regex: q, $options: "i" },
    }).limit(10);

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
