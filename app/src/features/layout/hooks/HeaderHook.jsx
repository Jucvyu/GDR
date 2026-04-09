import React from 'react';
import { Link } from 'react-router-dom';

// MUI components
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Button
} from '@mui/material';

// MUI icons
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AnalyticsIcon from '@mui/icons-material/Analytics';

export const HeaderHookMobile = () => {
    const token = localStorage.getItem("token");

    const menuItems = [
        { text: 'Home', path: '/', icon: <HomeIcon /> },
        { text: 'Iniciar Sesión', path: '/login', icon: <AccountBoxIcon /> },
        { text: 'Registrarse', path: '/signup', icon: <AccountBoxIcon /> },
        { text: 'Dashboard', path: '/dashboard', icon: <AnalyticsIcon /> }
    ]
    return (
        <List>
            {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                    <ListItemButton
                        component={Link}
                        to={item.path}
                        sx={{
                            color: '#4DDB4D',
                            py: 1.5
                        }}
                    >
                        {item.icon}
                        <ListItemText
                            sx={{ ml: 2 }}
                            primary={item.text}
                            primaryTypographyProps={{
                                fontSize: '1rem'
                            }}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export const HeaderHookPC = () => {
    const menuItems = [
        { text: 'Home', path: '/', icon: <HomeIcon /> },
        { text: 'Iniciar Sesión', path: '/login', icon: <AccountBoxIcon /> },
        { text: 'Dashboard', path: '/dashboard', icon: <AnalyticsIcon /> }
    ]
    return (
        <Box sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 3,
            alignItems: 'center'
        }}>
            {menuItems.map((item) => (
                <Button
                    key={item.text}
                    component={Link}
                    to={item.path}
                    startIcon={item.icon}
                    sx={{
                        color: '#4DDB4D',
                        textTransform: 'none',
                        fontWeight: 400,
                        fontSize: '1rem',
                        padding: '6px 8px',
                        minWidth: 'auto',
                        '&:hover': {
                            backgroundColor: 'rgba(4, 255, 0, 0.1)',
                            transform: 'translateY(-1px)'
                        }
                    }}
                >
                    {item.text}
                </Button>
            ))}
        </Box>
    )
}