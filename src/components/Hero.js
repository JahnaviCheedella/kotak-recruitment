import React from 'react';
import { Box, Typography, Container, Button, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';

const floatingStats = [
    { icon: <RocketLaunchIcon />, label: '35%', sub: 'Remuneration', color: '#E63946' },
    { icon: <TrendingUpIcon />, label: 'AAA', sub: 'Credit Rating', color: '#D4A843' },
    { icon: <GroupsIcon />, label: '17K+', sub: 'Employees', color: '#4CAF50' },
];

const Hero = () => {
    return (
        <Box
            id="hero"
            sx={{
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0A2463 0%, #1E3A7B 40%, #0A2463 70%, #051845 100%)',
            }}
        >
            {/* Animated background orbs */}
            <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x: [0, 40 * Math.sin(i), -30 * Math.cos(i), 0],
                            y: [0, -30 * Math.cos(i), 40 * Math.sin(i), 0],
                            scale: [1, 1.15, 0.85, 1],
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            duration: 6 + i * 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        style={{
                            position: 'absolute',
                            width: 150 + i * 70,
                            height: 150 + i * 70,
                            borderRadius: '50%',
                            background: i % 3 === 0
                                ? 'radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%)'
                                : i % 3 === 1
                                    ? 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)'
                                    : 'radial-gradient(circle, rgba(33,150,243,0.06) 0%, transparent 70%)',
                            top: `${(i * 13) % 90}%`,
                            left: `${(i * 17 + 5) % 85}%`,
                        }}
                    />
                ))}
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" sx={{ mt: 10}}>
                    {/* Left content */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Grid container direction="column" spacing={2}>
                            <Grid>
                                <motion.div
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            background: 'linear-gradient(135deg, #FFFFFF 0%, #C0C0C0 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',

                                        }}
                                    >
                                        Exciting Opportunities to
                                    </Typography>
                                </motion.div>
                            </Grid>

                            <Grid>
                                <motion.div
                                    initial={{ opacity: 0, x: -60, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            display: 'inline-block',
                                            background: 'linear-gradient(135deg, #E63946 0%, #FF6B6B 50%, #E63946 100%)',
                                            backgroundSize: '200% 200%',
                                            animation: 'shimmer 3s ease-in-out infinite',
                                            '@keyframes shimmer': {
                                                '0%': { backgroundPosition: '0% 50%' },
                                                '50%': { backgroundPosition: '100% 50%' },
                                                '100%': { backgroundPosition: '0% 50%' },
                                            },
                                            color: '#fff',
                                            px: 3,
                                            py: 0.5,
                                            borderRadius: 2,
                                            fontWeight: 900,
                                            boxShadow: '0 4px 30px rgba(230,57,70,0.4)',
                                        }}
                                    >
                                        Grow with Kotak Life
                                    </Typography>
                                </motion.div>
                            </Grid>

                            <Grid>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'rgba(255,255,255,0.75)',
                                            maxWidth: 520,
                                            fontSize: { xs: '1rem', md: '1.15rem' },
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        Join Kotak as a Financial Advisor, where your career is more than just a job — it's a journey of growth, recognition, and financial success!
                                    </Typography>
                                </motion.div>
                            </Grid>

                            <Grid>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
                                >
                                    <Grid container spacing={2}>
                                        <Grid>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                                sx={{
                                                    background: 'linear-gradient(135deg, #E63946, #FF6B6B)',
                                                    boxShadow: '0 8px 25px rgba(230,57,70,0.35)',
                                                    '&:hover': {
                                                        background: 'linear-gradient(135deg, #C1121F, #E63946)',
                                                        transform: 'translateY(-4px) scale(1.02)',
                                                        boxShadow: '0 14px 40px rgba(230,57,70,0.5)',
                                                    },
                                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                            >
                                                Join as Advisor
                                            </Button>
                                        </Grid>
                                        <Grid>
                                            <Button
                                                variant="outlined"
                                                size="large"
                                                onClick={() => document.querySelector('#kotak-group')?.scrollIntoView({ behavior: 'smooth' })}
                                                sx={{
                                                    color: '#fff',
                                                    borderColor: 'rgba(255,255,255,0.4)',
                                                    '&:hover': {
                                                        borderColor: '#fff',
                                                        background: 'rgba(255,255,255,0.1)',
                                                        transform: 'translateY(-4px)',
                                                    },
                                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                            >
                                                Learn More
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </motion.div>
                            </Grid>

                            {/* Floating stat chips */}
                            <Grid>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
                                >
                                    <Grid container spacing={2} sx={{ mt: 1 }}>
                                        {floatingStats.map((stat, i) => (
                                            <Grid size={{ xs: 4 }} key={i}>
                                                <motion.div
                                                    animate={{ y: [0, -6, 0] }}
                                                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                                                >
                                                    <Box
                                                        sx={{
                                                            p: 1.5,
                                                            borderRadius: 3,
                                                            background: 'rgba(255,255,255,0.06)',
                                                            backdropFilter: 'blur(12px)',
                                                            border: '1px solid rgba(255,255,255,0.1)',
                                                            textAlign: 'center',
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                background: 'rgba(255,255,255,0.12)',
                                                                transform: 'scale(1.05)',
                                                            },
                                                        }}
                                                    >
                                                        <Box sx={{ color: stat.color, '& svg': { fontSize: 20 }, mb: 0.5 }}>{stat.icon}</Box>
                                                        <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem' }}>
                                                            {stat.label}
                                                        </Typography>
                                                        <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>
                                                            {stat.sub}
                                                        </Typography>
                                                    </Box>
                                                </motion.div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Right image */}
                    <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    style={{
                                        position: 'absolute',
                                        width: '120%',
                                        height: '120%',
                                        top: '-10%',
                                        left: '-10%',
                                        borderRadius: '50%',
                                        border: '2px dashed rgba(212,168,67,0.15)',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        width: '110%',
                                        height: '110%',
                                        top: '-5%',
                                        left: '-5%',
                                        background: 'radial-gradient(circle, rgba(230,57,70,0.18) 0%, transparent 60%)',
                                        borderRadius: '50%',
                                    }}
                                />
                                <Box
                                    component="img"
                                    src="/images/team.png"
                                    alt="Kotak Life Team"
                                    sx={{
                                        width: '100%',
                                        maxWidth: 450,
                                        borderRadius: 4,
                                        position: 'relative',
                                        filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.4))',
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
