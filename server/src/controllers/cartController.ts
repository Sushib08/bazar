import { Request, Response } from "express";
import Cart from "../models/Cart";
import User from "../models/User";

export const getCart = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;

  try {
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    res.status(200).json(cart || { items: [] });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération du panier." });
  }
};

export const addToCart = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [{ productId, quantity }] });
    } else {
      const existingItem = cart.items.find(
        (item) => item.productId.toString() === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de l'ajout au panier." });
  }
};

export const updateQuantity = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = (req as any).user.id;
  const { productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      res.status(404).json({ message: "Panier non trouvé." });
      return;
    }

    const item = cart.items.find((i) => i.productId.toString() === productId);
    if (!item) {
      res.status(404).json({ message: "Produit introuvable." });
      return;
    }

    item.quantity = quantity;
    await cart.save();

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la mise à jour." });
  }
};

export const removeFromCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = (req as any).user.id;
  const { productId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      res.status(404).json({ message: "Panier non trouvé." });
      return;
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();
    res.status(200).json(cart); // ✅ pas de return ici
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la suppression." });
  }
};

export const clearCart = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;

  try {
    await Cart.findOneAndDelete({ userId });
    res.status(200).json({ message: "Panier vidé avec succès." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du panier." });
  }
};

export const clearUserCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = (req as any).user.id;
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: "Utilisateur non trouvé." });
      return;
    }

    user.cart = [];
    await user.save();

    res.status(200).json({ message: "Panier vidé." });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err });
  }
};
