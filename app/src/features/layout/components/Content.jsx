import React from 'react'

import Preview from '/img/preview.jpg'

import { Link } from 'react-router-dom'

import { ApiRyCAxios } from '../services/ApiRyC_axios'

import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    Container,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';
import {
    AttachMoney,
    BarChart,
    Security,
    CheckCircle,
    ArrowForward
} from '@mui/icons-material';

import GitHubIcon from '@mui/icons-material/GitHub';

export const Content = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    py: { xs: 6, md: 12 },
                    textAlign: { xs: 'center', md: 'left' }
                }}
            >
                <Container maxWidth="lg">
                    <Grid container alignItems="center" spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                                }}
                            >
                                Controla tus <span style={{ color: '#00CC00' }}>gastos</span> diarios
                            </Typography>

                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 4,
                                    color: '#CCCCCC',
                                    fontWeight: 300
                                }}
                            >
                                La forma más fácil de llevar un registro de tus gastos personales.
                                Organiza, analiza y ahorra dinero desde hoy.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<GitHubIcon />}
                                    href='https://github.com/Jucvyu/GDReact'
                                    target="_blank"
                                    sx={{
                                        color: '#FFFFFF',
                                        borderColor: '#333333',
                                        textTransform: 'none',
                                        px: 4,
                                        py: 1.5,
                                        fontWeight: 600,
                                        '&:hover': {
                                            borderColor: '#00CC00',
                                            backgroundColor: 'rgba(0, 204, 0, 0.1)'
                                        }
                                    }}
                                >
                                    Ver Repositorio
                                </Button>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    backgroundColor: '#001100',
                                    border: '1px solid #003300',
                                    borderRadius: 2,
                                    minHeight: '300px',
                                    p: '4px',
                                    display: 'flex'
                                }}
                            >
                                <Box
                                    component="img"
                                    src={Preview}
                                    alt="Preview"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: 1
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Features Section */}
            <Box
                id="features"
                sx={{
                    backgroundColor: '#050505',
                    color: '#FFFFFF',
                    py: 8
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        textAlign="center"
                        sx={{
                            mb: 6,
                            fontWeight: 600,
                            color: '#00CC00'
                        }}
                    >
                        Características Principales
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card
                                sx={{
                                    backgroundColor: '#0A0A0A',
                                    border: '1px solid #111111',
                                    height: '100%',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        borderColor: '#00CC00'
                                    }
                                }}
                            >
                                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                                    <AttachMoney
                                        sx={{
                                            fontSize: 60,
                                            color: '#00CC00',
                                            mb: 2
                                        }}
                                    />
                                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: '#4DDB4D' }}>
                                        Registro Rápido
                                    </Typography>
                                    <Typography sx={{ color: '#CCCCCC', fontSize: '1.1rem' }}>
                                        Agrega gastos en segundos con nuestra interfaz intuitiva y categorías predefinidas.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card
                                sx={{
                                    backgroundColor: '#0A0A0A',
                                    border: '1px solid #111111',
                                    height: '100%',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        borderColor: '#00CC00'
                                    }
                                }}
                            >
                                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                                    <BarChart
                                        sx={{
                                            fontSize: 60,
                                            color: '#00CC00',
                                            mb: 2
                                        }}
                                    />
                                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: '#4DDB4D' }}>
                                        Análisis Detallado
                                    </Typography>
                                    <Typography sx={{ color: '#CCCCCC', fontSize: '1.1rem' }}>
                                        Visualiza tus patrones de gasto con gráficos interactivos y reportes mensuales.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Card
                                sx={{
                                    backgroundColor: '#0A0A0A',
                                    border: '1px solid #111111',
                                    height: '100%',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        borderColor: '#00CC00'
                                    }
                                }}
                            >
                                <CardContent sx={{ textAlign: 'center', py: 4, color: '#4DDB4D' }}>
                                    <Security
                                        sx={{
                                            fontSize: 60,
                                            color: '#00CC00',
                                            mb: 2
                                        }}
                                    />
                                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                        Seguridad Total
                                    </Typography>
                                    <Typography sx={{ color: '#CCCCCC', fontSize: '1.1rem' }}>
                                        Tus datos financieros están protegidos con encriptación de última generación.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* How it Works */}
            <Box
                sx={{
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    py: 8
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        textAlign="center"
                        sx={{
                            mb: 6,
                            fontWeight: 600
                        }}
                    >
                        Cómo Funciona
                    </Typography>

                    <Paper
                        sx={{
                            backgroundColor: '#0A0A0A',
                            border: '1px solid #111111',
                            p: 4
                        }}
                    >
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircle sx={{ color: '#00CC00' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Registra tu primer gasto"
                                    secondary="Agrega tus gastos diarios en segundos con categorías predefinidas"
                                    primaryTypographyProps={{
                                        sx: {
                                            fontWeight: 600,
                                            fontSize: '1.8rem',
                                            color: '#FFFFFF'
                                        }
                                    }}
                                    secondaryTypographyProps={{
                                        sx: {
                                            color: '#CCCCCC'
                                        }
                                    }}
                                />
                            </ListItem>

                            <Divider sx={{ backgroundColor: '#333333', my: 2 }} />

                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircle sx={{ color: '#00CC00' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Analiza tus hábitos"
                                    secondary="Visualiza estadísticas detalladas de tus gastos mensuales"
                                    primaryTypographyProps={{
                                        sx: {
                                            fontWeight: 600,
                                            fontSize: '1.8rem',
                                            color: '#FFFFFF'
                                        }
                                    }}
                                    secondaryTypographyProps={{
                                        sx: {
                                            color: '#CCCCCC'
                                        }
                                    }}
                                />
                            </ListItem>

                            <Divider sx={{ backgroundColor: '#333333', my: 2 }} />

                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircle sx={{ color: '#00CC00' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Ahorra dinero"
                                    secondary="Identifica áreas donde puedes reducir gastos innecesarios"
                                    primaryTypographyProps={{
                                        sx: {
                                            fontWeight: 600,
                                            fontSize: '1.8rem',
                                            color: '#FFFFFF'
                                        }
                                    }}
                                    secondaryTypographyProps={{
                                        sx: {
                                            color: '#CCCCCC'
                                        }
                                    }}
                                />
                            </ListItem>
                        </List>
                    </Paper>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box
                sx={{
                    backgroundColor: '#001100',
                    color: '#FFFFFF',
                    py: 10,
                    textAlign: 'center'
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 3,
                            fontWeight: 700
                        }}
                    >
                        ¿Listo para tomar control de tus finanzas?
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            mb: 5,
                            color: '#CCCCCC',
                            fontWeight: 300
                        }}
                    >
                        Únete a miles de usuarios que ya están ahorrando dinero con nuestra app
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForward />}
                        component={Link}
                        to='/login'
                        sx={{
                            backgroundColor: '#00CC00',
                            color: '#000000',
                            fontWeight: 600,
                            px: 6,
                            py: 2,
                            fontSize: '1.2rem',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#00B000',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 25px rgba(0, 204, 0, 0.4)'
                            }
                        }}
                    >
                        Comenzar Ahora - Gratis
                    </Button>
                </Container>
            </Box>
            <ApiRyCAxios />
        </>
    )
}
