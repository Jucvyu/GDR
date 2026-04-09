import React, { useState, useEffect } from 'react';

export const usePasswordRemember = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const [isFormValid, setIsFormValid] = useState(false);

    // VALIDACIONES
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) return "El correo es obligatorio";
        if (!regex.test(email)) return "Formato inválido";
        return "";
    };

    // HANDLE CHANGE
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));

        setErrors(prev => ({
            ...prev,
            [name]: name === "email"
                ? validateEmail(value)
                : validateEmail(value)
        }));
    };

    // VALIDAR FORM COMPLETO
    useEffect(() => {
        const emailError = validateEmail(form.email);

        setIsFormValid(!emailError);
    }, [form]);

    // SUBMIT
    const handleSubmit = () => {
        if (!isFormValid) return;

        alert("Se ha enviado un correo con tu contraseña");
    };

    return {
        form,
        errors,
        isFormValid,
        handleChange,
        handleSubmit
    }
}
