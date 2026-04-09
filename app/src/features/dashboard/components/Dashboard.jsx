import React from "react";

import { useDashboard } from "../hooks/useDashboard";
import { useUser } from "../hooks/useUser";

import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Modal,
    TextField,
    IconButton
} from "@mui/material";

import Grid from "@mui/material/Grid";
import { Edit, Delete } from "@mui/icons-material";

export default function Dashboard() {
    const {
        expenses,
        open,
        handleOpen,
        handleClose,
        handleChange,
        handleAmountChange,
        handleSave,
        handleDelete,
        editing,
        form,
        isFormValid,
        formatCOP,
        gastoDia,
        gastoMes,
        gastoTotal,
        logout
    } = useDashboard();

    const { user, loading } = useUser();

    return (
        <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#000", color: "#fff" }}>

            {/* MAIN */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                {/* HEADER */}
                <AppBar
                    position="static"
                    elevation={0}
                    sx={{
                        bgcolor: "#000",
                        borderBottom: "1px solid #303030",
                        mb: 3
                    }}
                >
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Typography variant="h5" sx={{ color: "#1AD11A", fontWeight: 600, fontSize: '2rem' }}>
                            Dashboard
                        </Typography>

                        <Button
                            variant="contained"
                            onClick={() => handleOpen()}
                            sx={{
                                bgcolor: "#1AD11A",
                                color: "#000",
                                fontWeight: 600,
                                textTransform: "none",
                                "&:hover": {
                                    bgcolor: "#00CC00",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 4px 15px rgba(26,209,26,0.4)"
                                }
                            }}
                        >
                            + Nuevo gasto
                        </Button>
                    </Toolbar>
                </AppBar>

                {/* CARDS */}
                <Grid container spacing={3} mb={3}>
                    {[
                        { title: "Gasto del día", value: formatCOP(gastoDia) },
                        { title: "Gasto del mes", value: formatCOP(gastoMes) },
                        { title: "Gasto total", value: formatCOP(gastoTotal) }
                    ].map((item) => (          // 👈 quita el parámetro i
                        <Grid key={item.title} size={{ xs: 12, md: 4 }}>    
                            <Card
                                sx={{
                                    bgcolor: "#0A0A0A",
                                    border: "1px solid #111",
                                    borderRadius: 3,
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        borderColor: "#1AD11A",
                                        boxShadow: "0 10px 30px rgba(0,255,0,0.1)"
                                    }
                                }}
                            >
                                <CardContent>
                                    <Typography sx={{ color: "#888" }}>
                                        {item.title}
                                    </Typography>

                                    <Typography variant="h4" fontWeight="bold" sx={{ color: "#1AD11A" }}>
                                        {item.value}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Card
                            sx={{
                                bgcolor: "#0A0A0A",
                                border: "1px solid #111",
                                borderRadius: 3,
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    borderColor: "#1AD11A",
                                    boxShadow: "0 10px 30px rgba(0,255,0,0.1)"
                                }
                            }}
                        >
                            <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box>
                                    <Typography variant="h3" sx={{ color: "#00ff00", textAlign: "center", fontWeight: 600 }}>
                                        Bienvenido{user ? `, ${user.name}` : ""}
                                    </Typography>
                                    {user && (
                                        <Typography sx={{ color: "#888", mt: 0.5 }}>
                                            {user.email}
                                        </Typography>
                                    )}
                                </Box>

                                <Button
                                    variant="outlined"
                                    onClick={logout}
                                    sx={{
                                        color: "#09ff00",
                                        borderColor: "#09ff00",
                                        fontWeight: 600,
                                        textTransform: "none",
                                        "&:hover": {
                                            bgcolor: "#00CC00",
                                            transform: "translateY(-2px)",
                                            boxShadow: "0 4px 15px rgba(26,209,26,0.4)",
                                            color: "#000"
                                        }
                                    }}
                                >
                                    Cerrar Sesión
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* TABLE */}
                <Card sx={{ bgcolor: "#0A0A0A", border: "1px solid #111", borderRadius: 3 }}>
                    <CardContent>
                        <Typography variant="h6" mb={2} sx={{ color: "#1AD11A" }}>
                            Últimos gastos
                        </Typography>

                        <TableContainer component={Paper} sx={{ bgcolor: "#0A0A0A" }}>
                            <Table>

                                <TableHead>
                                    <TableRow>
                                        {["Fecha", "Categoría", "Descripción", "Monto", "Acciones"].map((h) => (
                                            <TableCell key={h} sx={{ color: "#1AD11A", fontWeight: 600, fontSize: '1.2rem' }}>
                                                {h}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {expenses.map((row) => (
                                        <TableRow key={row._id} sx={{ "&:hover": { bgcolor: "#001a00" } }}>

                                            <TableCell sx={{ color: "#ccc", fontSize: '1rem' }}>{row.date}</TableCell>

                                            <TableCell>
                                                <Chip
                                                    label={row.category}
                                                    size="medium"
                                                    sx={{ bgcolor: "#002200", color: "#1AD11A" }}
                                                />
                                            </TableCell>

                                            <TableCell sx={{ color: "#ccc", fontSize: '1rem' }}>{row.desc}</TableCell>

                                            <TableCell sx={{ color: "#1AD11A", fontWeight: 600, fontSize: '1rem' }}>
                                                {formatCOP(row.amount)}
                                            </TableCell>

                                            <TableCell>
                                                <IconButton onClick={() => handleOpen(row)}>
                                                    <Edit sx={{ color: "#1AD11A" }} />
                                                </IconButton>

                                                <IconButton onClick={() => handleDelete(row.id)}>
                                                    <Delete sx={{ color: "#cc0000" }} />
                                                </IconButton>
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>

                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>

                {/* MODAL */}
                <Modal open={open} onClose={handleClose}>
                    <Box
                        sx={{
                            bgcolor: "#0A0A0A",
                            p: 4,
                            borderRadius: 2,
                            width: 400,
                            mx: "auto",
                            mt: "10%",
                            border: "1px solid #111"

                        }}
                    >
                        <Typography sx={{ color: "#1AD11A", mb: 2, textAlign: "center", fontSize: "1.5rem" }}>
                            {editing ? "Editar gasto" : "Nuevo gasto"}
                        </Typography>

                        <Box display="flex" flexDirection="column" gap={2}>
                            <TextField
                                name="date"
                                label="Fecha"
                                type="date"
                                value={form.date}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    input: { color: "#fff" },

                                    label: { color: "#888" },

                                    "& label.Mui-focused": {
                                        color: "#1AD11A"
                                    },

                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: 2,
                                        backgroundColor: "#050505",

                                        "& fieldset": {
                                            borderColor: "#222"
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#1AD11A"
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#1AD11A",
                                            boxShadow: "0 0 10px rgba(26,209,26,0.2)"
                                        }
                                    }
                                }}
                            />
                            <TextField name="category" label="Categoría" value={form.category} onChange={handleChange} fullWidth sx={{
                                input: { color: "#fff" }, // texto escrito
                                label: { color: "#888" }, // label normal
                                "& label.Mui-focused": {
                                    color: "#1AD11A" // label cuando está activo
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#333" // borde normal
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#1AD11A"
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#1AD11A"
                                    }
                                }
                            }} />
                            <TextField name="desc" label="Descripción" value={form.desc} onChange={handleChange} fullWidth sx={{
                                input: { color: "#fff" }, // texto escrito
                                label: { color: "#888" }, // label normal
                                "& label.Mui-focused": {
                                    color: "#1AD11A" // label cuando está activo
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#333" // borde normal
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#1AD11A"
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#1AD11A"
                                    }
                                }
                            }} />
                            <TextField
                                label="Monto"
                                value={formatCOP(form.amount)}
                                onChange={handleAmountChange}
                                fullWidth
                                placeholder="$ 0"
                                sx={{
                                    input: { color: "#fff" },

                                    label: { color: "#888" },
                                    "& label.Mui-focused": {
                                        color: "#1AD11A"
                                    },

                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#333"
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#1AD11A"
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#1AD11A"
                                        }
                                    }
                                }}
                            />

                            <Button
                                variant="contained"
                                onClick={handleSave}
                                disabled={!isFormValid}
                                sx={{
                                    bgcolor: "#1AD11A", // verde opaco
                                    color: "#000",
                                    textTransform: "none",

                                    '&.Mui-disabled': {
                                        bgcolor: '#003300',
                                        color: '#666',
                                        opacity: 1
                                    },

                                    "&:hover": isFormValid
                                        ? {
                                            bgcolor: "#00CC00",
                                            transform: "translateY(-2px)",
                                            boxShadow: "0 4px 15px rgba(26,209,26,0.4)"
                                        }
                                        : {}
                                }}
                            >
                                Guardar
                            </Button>
                        </Box>
                    </Box>
                </Modal>

            </Box>
        </Box>
    );
}