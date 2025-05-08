import { Request, Response } from "express";
import Category from "../models/Category";

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};

export const seedCategories = async (_req: Request, res: Response) => {
  try {
    await Category.deleteMany();

    const initialCategories = [
      {
        title: "Fruits & Légumes",
        imageSrc: "./images/products/legumes.webp",
        imageAlt: "Fruits et légumes",
      },
      {
        title: "Crèmerie",
        imageSrc: "./images/products/fromage.webp",
        imageAlt: "Fromages et laitages",
      },
      {
        title: "Charcuterie",
        imageSrc: "./images/products/charcuterie.webp",
        imageAlt: "Produits de charcuterie",
      },
      {
        title: "Boissons",
        imageSrc: "./images/products/boisson.webp",
        imageAlt: "Boissons fraîches",
      },
      {
        title: "Épicerie",
        imageSrc: "./images/products/epicerie.webp",
        imageAlt: "Épicerie fine",
      },
    ];

    await Category.insertMany(initialCategories);
    res.status(201).json({ message: "Categories seeded successfully" });
  } catch (err) {
    res.status(500).json({ message: "Seeding failed", error: err });
  }
};
