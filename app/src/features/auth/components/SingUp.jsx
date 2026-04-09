import React from 'react';
import { useSignUp } from "../hooks/useSignUp";
import { register } from "../services/auth.services";
import { useNavigate } from "react-router-dom";

import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    InputAdornment,
    IconButton
} from '@mui/material';

import Grid from '@mui/material/Grid';

import {
    Email,
    Lock,
    Visibility,
    VisibilityOff
} from '@mui/icons-material';

import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const SingUp = () => {
    const {
        form,
        errors,
        isFormValid,
        showPassword,
        setShowPassword,
        handleChange
    } = useSignUp();

    const navigate = useNavigate();

    // 🔥 REGISTER REAL
    const handleRegister = async () => {
        if (!isFormValid) return;

        try {
            const res = await register(form);

            console.log(res.data);

            alert("Usuario creado correctamente");

            navigate("/login");

        } catch (err) {
            console.log(err.response?.data?.msg);
            alert(err.response?.data?.msg || "Error al registrar");
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#000' }}>
            <Grid container sx={{ minHeight: '100vh' }}>

                {/* IZQUIERDA */}
                <Grid size={{ xs: 12, md: 7 }}>
                    <Box
                        sx={{
                            height: '100%',
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: '#001100',
                            borderRight: '1px solid #003300'
                        }}
                    >
                        <Box textAlign="center">
                            <Typography variant="h3" sx={{ color: '#1AD11A', fontWeight: 700 }}>
                                Empieza hoy
                            </Typography>
                            <Typography sx={{ color: '#ccc', mt: 2 }}>
                                Gestiona tus gastos fácilmente
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* DERECHA */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            px: 3,
                            bgcolor: '#000'
                        }}
                    >
                        <Paper
                            sx={{
                                p: 4,
                                width: '100%',
                                maxWidth: 400,
                                bgcolor: '#0A0A0A',
                                border: '1px solid #111',
                                borderRadius: 2
                            }}
                        >
                            <Typography variant="h4" sx={{ mb: 3, color: '#1AD11A', fontWeight: 600 }}>
                                Registrarse
                            </Typography>

                            <Box display="flex" flexDirection="column" gap={2}>

                                {/* NOMBRE */}
                                <TextField
                                    label="Nombre"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    error={Boolean(errors.name)}
                                    helperText={errors.name}
                                    placeholder='Ingresa un nombre o apodo...'
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountBoxIcon sx={{ color: '#1AD11A' }} />
                                            </InputAdornment>
                                        )
                                    }}
                                    sx={inputStyles}
                                />

                                {/* EMAIL */}
                                <TextField
                                    label="Correo"
                                    name="email"
                                    placeholder='Ingresa tu correo...'
                                    value={form.email}
                                    onChange={handleChange}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email sx={{ color: '#1AD11A' }} />
                                            </InputAdornment>
                                        )
                                    }}
                                    sx={inputStyles}
                                />

                                {/* PASSWORD */}
                                <TextField
                                    label="Contraseña"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={form.password}
                                    onChange={handleChange}
                                    error={Boolean(errors.password)}
                                    helperText={errors.password}
                                    fullWidth
                                    placeholder='Ingresa una contraseña...'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock sx={{ color: '#1AD11A' }} />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(prev => !prev)}>
                                                    {showPassword
                                                        ? <VisibilityOff sx={{ color: '#aaa' }} />
                                                        : <Visibility sx={{ color: '#aaa' }} />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    sx={inputStyles}
                                />

                                {/* BOTÓN */}
                                <Button
                                    variant="contained"
                                    fullWidth
                                    disabled={!isFormValid}
                                    onClick={handleRegister}
                                    sx={{
                                        mt: 2,
                                        bgcolor: '#1AD11A',
                                        color: '#000',
                                        fontWeight: 600,
                                        py: 1.5,
                                        textTransform: 'none',
                                        '&:hover': {
                                            bgcolor: '#00CC00'
                                        },
                                        '&.Mui-disabled': {
                                            bgcolor: '#003300',
                                            color: '#666',
                                            opacity: 1
                                        }
                                    }}
                                >
                                    Registrarse
                                </Button>

                            </Box>
                        </Paper>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

// 🎨 estilos reutilizables
const inputStyles = {
    input: { color: '#fff' },
    label: { color: '#aaa' },
    '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: '#333' },
        '&:hover fieldset': { borderColor: '#1AD11A' },
        '&.Mui-focused fieldset': { borderColor: '#1AD11A' }
    }
};