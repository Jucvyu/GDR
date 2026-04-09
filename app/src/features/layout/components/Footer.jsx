import React from 'react';
import {
    Box,
    Typography,
    Link,
    IconButton
} from '@mui/material';

import Grid from '@mui/material/Grid';

import {
    Facebook,
    Instagram,
    Twitter
} from '@mui/icons-material';

export const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: '#000',
                color: '#ccc',
                borderTop: '1px solid #111',
                mt: 6
            }}
        >
            <Box sx={{ px: 3, py: 5 }}>
                <Grid container spacing={4}>

                    {/* MARCA */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h5" sx={{ color: '#1AD11A', fontWeight: 700, fontSize: '2rem' }}>
                            Gastos Diarios
                        </Typography>

                        <Typography sx={{ mt: 2}}>
                            Controla tus gastos de forma simple, rápida y segura.
                        </Typography>
                    </Grid>

                    {/* LINKS */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography sx={{ mb: 2, fontWeight: 600, color: '#fff', fontSize: '1.5rem' }}>
                            Enlaces
                        </Typography>

                        <Box display="flex" flexDirection="column" gap={1}>
                            <Link to="/" underline="none" sx={{ color: '#ccc', '&:hover': { color: '#1AD11A' }, fontSize: '1.2rem' }}>
                                Inicio
                            </Link>
                            <Link href="#" underline="none" sx={{ color: '#ccc', '&:hover': { color: '#1AD11A' }, fontSize: '1.2rem' }}>
                                Características
                            </Link>
                            <Link href="/login" underline="none" sx={{ color: '#ccc', '&:hover': { color: '#1AD11A' }, fontSize: '1.2rem' }}>
                                Login
                            </Link>
                        </Box>
                    </Grid>

                    {/* REDES */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography sx={{ mb: 2, fontWeight: 600, color: '#fff', fontSize: '1.5rem'  }}>
                            Síguenos
                        </Typography>

                        <Box>   
                            <IconButton sx={{ color: '#ccc', '&:hover': { color: '#1AD11A' }}}>
                                <Facebook />
                            </IconButton>

                            <IconButton sx={{ color: '#ccc', '&:hover': { color: '#1AD11A' } }}>
                                <Instagram />
                            </IconButton>

                            <IconButton sx={{ color: '#ccc', '&:hover': { color: '#1AD11A' } }}>
                                <Twitter />
                            </IconButton>
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            {/* COPYRIGHT */}
            <Box
                sx={{
                    borderTop: '1px solid #111',
                    textAlign: 'center',
                    py: 2,
                    fontSize: '0.9rem',
                    color: '#666'
                }}
            >
                © {new Date().getFullYear()} Juan Andrés Isaza Loaiza. Todos los derechos reservados.
            </Box>
        </Box>
    );
};