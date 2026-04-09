import React, { useState, useEffect } from 'react';

export const useSignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
        name: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        name: ""
    });

    const [isFormValid, setIsFormValid] = useState(false);

    // VALIDACIONES
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) return "El correo es obligatorio";
        if (!regex.test(email)) return "Formato inválido";
        return "";
    };

    const validatePassword = (password) => {
        if (!password) return "La contraseña es obligatoria";

        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasLength = password.length >= 8;

        if (!hasLower || !hasUpper || !hasNumber || !hasLength) {
            return "Mínimo 8 caracteres, mayúscula, minúscula y número";
        }

        return "";
    };

    const validateName = (name) => {
        if (!name) return "El nombre es obligatorio";
        return "";
    }

    // HANDLE CHANGE
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));

        setErrors(prev => {
            let error = "";

            if (name === "email") {
                error = validateEmail(value);
            } else if (name === "password") {
                error = validatePassword(value);
            } else if (name === "name") {
                error = validateName(value);
            }

            return {
                ...prev,
                [name]: error
            };
        });
    };

    // VALIDAR FORM COMPLETO
    useEffect(() => {
        const emailError = validateEmail(form.email);
        const passwordError = validatePassword(form.password);
        const nameError = validateName(form.name);

        setIsFormValid(!emailError && !passwordError && !nameError);
    }, [form]);

    // SUBMIT
    const handleSubmit = () => {
        if (!isFormValid) return;

        alert("Registro exitoso, inicia sesión para continuar con los mismos datos");

        window.location.href = "/login";
    };
    return {
        form,
        errors,
        isFormValid,
        showPassword,
        setShowPassword,
        handleChange,
        handleSubmit
    }
}
