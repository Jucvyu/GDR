import express from "express";
import Expense from "../models/Expense.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();


// 🔥 CREAR GASTO
router.post("/", verifyToken, async (req, res) => {
    try {
        const { date, category, desc, amount } = req.body;

        const expense = await Expense.create({
            date,
            category,
            desc,
            amount,
            user: req.user.id // 🔥 relación con usuario
        });

        res.status(201).json(expense);

    } catch (error) {
        res.status(500).json({ msg: "Error al crear gasto" });
    }
});


// 🔥 OBTENER TODOS LOS GASTOS DEL USUARIO
router.get("/", verifyToken, async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.id })
            .sort({ createdAt: -1 });

        res.json(expenses);

    } catch (error) {
        res.status(500).json({ msg: "Error al obtener gastos" });
    }
});


// 🔥 OBTENER UN GASTO POR ID
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const expense = await Expense.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!expense) {
            return res.status(404).json({ msg: "Gasto no encontrado" });
        }

        res.json(expense);

    } catch (error) {
        res.status(500).json({ msg: "Error al obtener gasto" });
    }
});


// 🔥 ACTUALIZAR GASTO
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const { date, category, desc, amount } = req.body;

        const updated = await Expense.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            { date, category, desc, amount },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ msg: "Gasto no encontrado" });
        }

        res.json(updated);

    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar gasto" });
    }
});


// 🔥 ELIMINAR GASTO
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const deleted = await Expense.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id
        });

        if (!deleted) {
            return res.status(404).json({ msg: "Gasto no encontrado" });
        }

        res.json({ msg: "Gasto eliminado" });

    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar gasto" });
    }
});


export default router;