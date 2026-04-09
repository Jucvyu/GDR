import React, { useState, useEffect } from 'react';
import axios from "axios"

import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Input
} from '@mui/material';

import Grid from '@mui/material/Grid';

export const ApiRyCAxios = () => {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("")

    useEffect(() => {
        setLoading(true);
        const source = axios.CancelToken.source()

        axios
            .get("https://rickandmortyapi.com/api/character/", { params: { page, name: query }, cancelToken: source.token })
            .then(({ data }) => {
                setCharacters(data.results || []);
                setInfo(data.info || {});
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                if (axios.isCancel(err)) {
                    return;
                }
                if (err.response?.status === 404) {
                    setCharacters([]);
                    setInfo({});
                    return
                }
                console.log(err)
            });
        return () => {
            source.cancel();
        }
    }, [page, query]);

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#000', color: '#fff', p: 3 }}>

            {/* TÍTULO */}
            <Typography
                variant="h3"
                sx={{
                    mb: 4,
                    color: '#1AD11A',
                    fontWeight: 700,
                    textAlign: 'center'
                }}
            >
                Rick & Morty API
            </Typography>

            {/* PAGINACIÓN */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    mb: 4
                }}
            >
                <Button
                    variant="outlined"
                    onClick={() => setPage(prev => prev - 1)}
                    disabled={!info.prev}
                    sx={{
                        color: '#1AD11A',
                        borderColor: '#1AD11A',
                        '&:hover': {
                            borderColor: '#00CC00',
                            bgcolor: 'rgba(0,204,0,0.1)'
                        },
                        '&.Mui-disabled': {
                            borderColor: '#003300',
                            color: '#335533'
                        }
                    }}
                >
                    Anterior
                </Button>

                <Typography sx={{ color: '#ccc' }}>
                    Página {page}
                </Typography>

                <Button
                    variant="contained"
                    onClick={() => setPage(prev => prev + 1)}
                    disabled={!info.next}
                    sx={{
                        bgcolor: '#1AD11A',
                        color: '#000',
                        fontWeight: 600,
                        '&:hover': {
                            bgcolor: '#00CC00'
                        },
                        '&.Mui-disabled': {
                            bgcolor: '#002200',
                            color: '#335533'
                        }
                    }}
                >
                    Siguiente
                </Button>
                <input type="text" value={query} placeholder='Buscar Personaje' onChange={(e) => { setQuery(e.target.value.trim()), setPage(1) }} />
            </Box>

            {/* LOADING */}
            {loading ? (
                <Typography textAlign="center" sx={{ color: '#888' }}>
                    Cargando personajes...
                </Typography>
            ) : (
                <Grid container spacing={3}>

                    {characters.map(char => (
                        <Grid key={char.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>

                            <Card
                                sx={{
                                    bgcolor: '#0A0A0A',
                                    border: '1px solid #111',
                                    transition: '0.3s',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        borderColor: '#1AD11A'
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={char.image}
                                    alt={char.name}
                                    sx={{
                                        height: 250,
                                        objectFit: 'cover'
                                    }}
                                />

                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#1AD11A',
                                            fontWeight: 600,
                                            mb: 1
                                        }}
                                    >
                                        {char.name}
                                    </Typography>

                                    <Typography sx={{ color: '#ccc', mb: 1 }}>
                                        {char.species}
                                    </Typography>

                                    {/* ESTADO */}
                                    <Chip
                                        label={char.status}
                                        size="small"
                                        sx={{
                                            bgcolor:
                                                char.status === 'Alive'
                                                    ? '#1AD11A'
                                                    : char.status === 'Dead'
                                                        ? '#CC0000'
                                                        : '#666',
                                            color: '#000',
                                            fontWeight: 600
                                        }}
                                    />
                                </CardContent>
                            </Card>

                        </Grid>
                    ))}

                </Grid>
            )}
        </Box>
    );
};