import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import { Content } from './features/layout/components/Content'
import { Header } from './features/layout/components/Header'
import { Footer } from './features/layout/components/Footer'

import { Login } from './features/auth/components/Login'
import { SingUp } from './features/auth/components/SingUp'
import { PasswordRemember } from './features/auth/components/PasswordRemember'

import Dashboard from './features/dashboard/components/Dashboard'
import { PrivateRoute } from './features/auth/services/PrivateRoutes'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
    palette: {
        background: {
            default: '#000000',
        },
    },
});

export const AppRoutes = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <HashRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SingUp />} />
                    <Route path="/password-remember" element={<PasswordRemember />} />

                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                </Routes>

                <Footer />
            </HashRouter>
        </ThemeProvider>
    )
}