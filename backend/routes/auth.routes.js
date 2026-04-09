// routes/auth.routes.js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const { email, password, name } = req.body;

        //  validar campos
        if (!email || !password || !name) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios" });
        }

        const normalizedEmail = email.toLowerCase();

        //  verificar si existe
        const exist = await User.findOne({ email: normalizedEmail });
        if (exist) {
            return res.status(400).json({ msg: "Usuario ya existe" });
        }

        //  hash contraseña
        const hashed = await bcrypt.hash(password, 10);

        //  crear usuario
        const user = await User.create({
            email: normalizedEmail,
            password: hashed,
            name
        });

        //  respuesta
        res.status(201).json({
            msg: "Usuario creado",
            user: {
                id: user._id,
                email: user.email,
                name: user.name
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error del servidor" });
    }
});
// LOGIN
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Usuario no existe" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ msg: "Contraseña incorrecta" });

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "30m" }
    );

    res.json({ token });
});

router.get("/me", verifyToken, async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
});

export default router;