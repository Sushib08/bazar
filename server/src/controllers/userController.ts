import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";

export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findById((req as any).user.id).select("-password");
    if (!user) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err });
  }
};

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.findById((req as any).user.id);
    if (!user) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }

    const { firstName, lastName, email, currentPassword, newPassword } =
      req.body;

    if (currentPassword && newPassword) {
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Mot de passe actuel incorrect" });
        return;
      }

      user.password = await bcrypt.hash(newPassword, 10);
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;

    await user.save();
    res.json({ message: "Profil mis à jour avec succès." });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err });
  }
};
