import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderHookMobile, HeaderHookPC } from '../hooks/HeaderHook'

// MUI
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Drawer
} from '@mui/material'

// Icons
import MenuIcon from '@mui/icons-material/Menu'

export const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: '#000000',
                    boxShadow: 'none',
                    borderBottom: '1px solid #333333'
                }}
            >
                <Toolbar sx={{ minHeight: '64px' }}>

                    {/* Botón menú móvil */}
                    <IconButton
                        color="inherit"
                        edge="end"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            mr: 2,
                            color: '#4DDB4D'
                        }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Logo */}
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: '#00CC00',
                            fontWeight: 800,
                            fontSize: '2rem',
                            letterSpacing: '1.5px'
                        }}
                    >
                        GD
                    </Typography>

                    {/* Links Desktop */}
                    <HeaderHookPC />

                </Toolbar>
            </AppBar>

            {/* Drawer Mobile */}
            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: '#000000',
                        color: '#ffffff',
                        width: '280px'
                    }
                }}
            >
                <Box sx={{ pt: 2 }} onClick={() => setOpen(false)}>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            display: 'block',
                            textAlign: 'center',
                            textDecoration: 'none',
                            color: '#00CC00',
                            fontWeight: 800,
                            mb: 3,
                            fontSize: '2rem'
                        }}
                    >
                        GD
                    </Typography>
                    <HeaderHookMobile />
                </Box>
            </Drawer>

            {/* Espacio para que el contenido no quede debajo del AppBar */}
            <Toolbar />
        </>
    )
}
