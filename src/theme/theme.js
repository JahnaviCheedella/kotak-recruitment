import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0A2463',
            light: '#1E3A7B',
            dark: '#051845',
        },
        secondary: {
            main: '#E63946',
            light: '#FF6B6B',
            dark: '#C1121F',
        },
        background: {
            default: '#F8F9FA',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#1A1A2E',
            secondary: '#4A4E69',
        },
        gold: {
            main: '#D4A843',
            light: '#F0D78C',
            dark: '#B8860B',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 800,
            fontSize: '3.5rem',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            '@media (max-width:900px)': {
                fontSize: '2.2rem',
            },
        },
        h2: {
            fontWeight: 700,
            fontSize: '2.8rem',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            '@media (max-width:900px)': {
                fontSize: '1.9rem',
            },
        },
        h3: {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.3,
            '@media (max-width:900px)': {
                fontSize: '1.5rem',
            },
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.4,
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.25rem',
        },
        h6: {
            fontWeight: 500,
            fontSize: '1.1rem',
        },
        body1: {
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: '#4A4E69',
        },
        body2: {
            fontSize: '0.95rem',
            lineHeight: 1.6,
        },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 30,
                    textTransform: 'none',
                    fontWeight: 600,
                    padding: '12px 32px',
                    fontSize: '1rem',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    fontWeight: 500,
                },
            },
        },
    },
});

export default theme;
