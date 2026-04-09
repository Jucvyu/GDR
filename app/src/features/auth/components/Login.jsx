import React from 'react';

import { useLogin } from "../hooks/useLogin";
import { login } from "../services/auth.services";
import { Link, useNavigate } from 'react-router-dom';

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

export const Login = () => {
    const {
        form,
        errors,
        isFormValid,
        showPassword,
        setShowPassword,
        handleChange
    } = useLogin();

    const navigate = useNavigate();

    // 🔥 LOGIN REAL
    const handleLogin = async () => {
        if (!isFormValid) return;

        try {
            const res = await login(form);

            // guardar token
            localStorage.setItem("token", res.data.token);

            // redirigir
            navigate("/dashboard");

        } catch (err) {
            console.log(err.response?.data?.msg || "Error en login");
            alert(err.response?.data?.msg || "Error en login");
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
                                Bienvenido
                            </Typography>
                            <Typography sx={{ color: '#ccc', mt: 2 }}>
                                Controla tus finanzas como un profesional
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
                                Iniciar sesión
                            </Typography>

                            <Box display="flex" flexDirection="column" gap={2}>

                                {/* EMAIL */}
                                <TextField
                                    label="Correo"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    error={Boolean(errors.email)}
                                    placeholder='Ingrese un correo...'
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

                                <Link to="/signup" style={linkStyles}>
                                    ¿No tienes cuenta?
                                </Link>

                                {/* PASSWORD */}
                                <TextField
                                    label="Contraseña"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={form.password}
                                    placeholder='Ingrese una contraseña...'
                                    onChange={handleChange}
                                    error={Boolean(errors.password)}
                                    helperText={errors.password}
                                    fullWidth
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

                                <Link to="/password-remember" style={linkStyles}>
                                    ¿Olvidaste tu contraseña?
                                </Link>

                                {/* BOTÓN */}
                                <Button
                                    variant="contained"
                                    fullWidth
                                    disabled={!isFormValid}
                                    onClick={handleLogin}
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
                                    Iniciar sesión
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

const linkStyles = {
    color: '#1AD11A',
    fontSize: '0.9rem',
    textDecoration: 'none'
};