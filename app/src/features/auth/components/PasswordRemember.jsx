import React from 'react';

import { usePasswordRemember } from "../hooks/usePasswordRemember";

import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    InputAdornment,
} from '@mui/material';

import Grid from '@mui/material/Grid';

import {
    Email
} from '@mui/icons-material';

export const PasswordRemember = () => {
    const {
        form,
        errors,
        isFormValid,
        handleChange,
        handleSubmit
    } = usePasswordRemember();

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
                                Recordar Contraseña
                            </Typography>
                            <Typography sx={{ color: '#ccc', mt: 2 }}>
                                Aquí podrás recuperar tu contrasena mediante tu correo
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
                                Recuperar Contraseña
                            </Typography>

                            <Box display="flex" flexDirection="column" gap={2}>

                                {/* EMAIL */}
                                <TextField
                                    label="Correo"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                    placeholder='Ingresa un correo'
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email sx={{ color: '#1AD11A' }} />
                                            </InputAdornment>
                                        )
                                    }}
                                    sx={{
                                        input: { color: '#fff' },
                                        label: { color: '#aaa' },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#333' },
                                            '&:hover fieldset': { borderColor: '#1AD11A' },
                                            '&.Mui-focused fieldset': { borderColor: '#1AD11A' }
                                        }
                                    }}
                                />


                                {/* BOTÓN */}
                                <Button
                                    variant="contained"
                                    fullWidth
                                    disabled={!isFormValid}
                                    onClick={handleSubmit}
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
                                    Recuperar Contraseña
                                </Button>

                            </Box>
                        </Paper>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}