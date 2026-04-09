import { useState, useEffect } from "react";

export const useLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

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
                : validatePassword(value)
        }));
    };

    // VALIDAR FORM
    useEffect(() => {
        const emailError = validateEmail(form.email);
        const passwordError = validatePassword(form.password);

        setIsFormValid(!emailError && !passwordError);
    }, [form]);

    return {
        form,
        errors,
        isFormValid,
        showPassword,
        setShowPassword,
        handleChange
    };
};