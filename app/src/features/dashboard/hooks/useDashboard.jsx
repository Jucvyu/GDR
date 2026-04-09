import React, { useState, useEffect } from "react";

import { getExpenses, createExpense, updateExpense, deleteExpense } from "../services/expense.service";

export const useDashboard = () => {
    const isFutureDate = (date) => {
        const selected = new Date(date);
        const today = new Date();

        // 🔥 quitamos horas para comparar solo fecha
        today.setHours(0, 0, 0, 0);

        return selected > today;
    };

    const handleAmountChange = (e) => {
        const raw = e.target.value.replace(/\D/g, ""); // elimina todo excepto números

        setForm(prev => ({
            ...prev,
            amount: raw
        }));
    };

    // formatea el monto en COP
    const formatCOP = (value) => {
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0
        }).format(value);
    };

    // obtiene la fecha actual en formato YYYY-MM-DD (requerido por input type="date")
    const getToday = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    // estado principal: lista de gastos
    const [expenses, setExpenses] = useState([]);

    // controla apertura del modal
    const [open, setOpen] = useState(false);

    // guarda el id del gasto que se está editando (null = creando)
    const [editing, setEditing] = useState(null);

    // estado del formulario
    const [form, setForm] = useState({
        date: getToday(),
        category: "",
        desc: "",
        amount: ""
    });

    // 🔥 CARGAR GASTOS
    const loadExpenses = async () => {
        try {
            const res = await getExpenses();
            setExpenses(res.data);
        } catch (err) {
            console.log("Error cargando gastos");
        }
    };
    useEffect(() => {
        loadExpenses();
    }, []);

    const today = getToday();
    const currentMonth = today.slice(0, 7); // "YYYY-MM"

    const gastoDia = expenses
        .filter(e => e.date === today)
        .reduce((sum, e) => sum + e.amount, 0);

    const gastoMes = expenses
        .filter(e => e.date.startsWith(currentMonth))
        .reduce((sum, e) => sum + e.amount, 0);

    const gastoTotal = expenses.reduce((sum, e) => sum + e.amount, 0);

    const isFormValid =
        form.date &&
        form.category.trim() &&
        form.desc.trim() &&
        form.amount;

    // abre el modal
    // si recibe un gasto → modo edición
    // si no → modo creación
    const handleOpen = (expense = null) => {
        if (expense) {
            setEditing(expense._id);

            // 🔥 limpiar objeto
            setForm({
                date: expense.date,
                category: expense.category,
                desc: expense.desc,
                amount: expense.amount
            });
        } else {
            setForm({
                date: getToday(),
                category: "",
                desc: "",
                amount: ""
            });
        }

        setOpen(true);
    };

    // cierra el modal
    const handleClose = () => setOpen(false);

    // maneja cambios en los inputs (dinámico por name)
    const handleChange = (e) => {
        const { name, value } = e.target;
        // actualiza solo el campo modificado
        setForm(prev => ({ ...prev, [name]: value }));
    };

    // guarda el gasto (crear o editar)
    const handleSave = async () => {

        if (!isFormValid) return;

        if (isFutureDate(form.date)) {
            handleClose();
            alert("La fecha no puede ser futura, por favor, revisa la fecha");
            return;
        }

        try {
            const payload = {
                ...form,
                amount: Number(form.amount)
            };

            if (editing) {
                await updateExpense(editing, payload);
            } else {
                await createExpense(payload);
            }

            await loadExpenses(); // 🔥 refrescar
            handleClose();

        } catch (err) {
            console.log("Error guardando gasto");
        }
    };

    // elimina un gasto por id
    const handleDelete = async (id) => {

        try {
            await deleteExpense(id);
            await loadExpenses(); // 🔥 refrescar

        } catch (err) {
            console.log("Error eliminando gasto");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login"; // redirige a login
        alert("Sesión cerrada");
    };

    return {
        expenses,
        open,
        handleOpen,
        handleClose,
        handleChange,
        handleAmountChange,
        handleSave,
        handleDelete,
        editing,
        form,
        isFormValid,
        formatCOP,
        getToday,
        currentMonth,
        gastoDia,
        gastoMes,
        gastoTotal,
        logout
    }
}
