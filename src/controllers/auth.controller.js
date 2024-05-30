import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { email, password, username, rol, name } = req.body;
  try {
    const PasswordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      username,
      rol,
      email,
      password: PasswordHash,
    });
    const user = await newUser.save();

    res.json({
      id: user._id,
      name: user.name,
      rol: user.rol,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  const { password, username } = req.body;
  try {
    const userFound = await User.findOne({ username });
    if (!userFound)
      return res.status(400).json({ message: "No se encontro el usuario" });
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Contraseña incorrecta" });

    res.status(200).json({
      id: userFound._id,
      name: userFound.name,
      rol: userFound.rol,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    console.log(error);
  }
};
