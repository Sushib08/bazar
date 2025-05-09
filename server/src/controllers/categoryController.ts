import { Request, Response } from "express";
import Category from "../models/Category";

export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await Category.find().sort({ title: 1 });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

export const getCategoryBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;
  try {
    const category = await Category.findOne({ slug });
    if (!category) {
      return res.status(404).json({ message: "Catégorie non trouvée" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};
