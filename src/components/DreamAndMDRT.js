import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SecurityIcon from '@mui/icons-material/Security';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const dreams = [
  { icon: <MonetizationOnIcon />, text: 'Earn Big Money', color: '#D4A843' },
  { icon: <EmojiEventsIcon />, text: 'Achieve Rewards & Recognition', color: '#E63946' },
  { icon: <FlightTakeoffIcon />, text: 'Travel to International Destinations', color: '#2196F3' },
  { icon: <SecurityIcon />, text: 'Lead a Contented & Secured Life', color: '#4CAF50' },
  { icon: <CardGiftcardIcon />, text: 'Earn Monthly Gifts through Contests', color: '#FF9800' },
];

const mdrtData = [
  { status: 'MDRT', premium: 'Rs. 45,30,400', commission: 'Rs. 11,32,600', color: '#2196F3', gradient: 'linear-gradient(135deg, #2196F3, #64B5F6)' },
  { status: 'COT', premium: 'Rs. 1,35,91,200', commission: 'Rs. 33,97,800', color: '#D4A843', gradient: 'linear-gradient(135deg, #D4A843, #F0D78C)' },
  { status: 'TOT', premium: 'Rs. 2,71,82,400', commission: 'Rs. 67,95,600', color: '#E63946', gradient: 'linear-gradient(135deg, #E63946, #FF6B6B)' },
];

const DreamAndMDRT = () => {
  return (
    <Box
      id="mdrt"
      sx={{
        py: { xs: 2, md: 7 },
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background dot pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(10,36,99,0.02) 1px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Dream Section */}
        <Grid container justifyContent="center" sx={{ mb: 5 }}>
          <Grid size={{ xs: 12, md: 8, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid>
                  <Typography variant="overline" sx={{ color: '#E63946', fontWeight: 700, letterSpacing: 3 }}>
                    Your Dreams, Our Mission
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h2" sx={{ textAlign: 'center', color: '#0A2463' }}>
                    If Your Dream Is To...
                  </Typography>
                </Grid>
                <Grid>
                  <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #E63946, #D4A843)', borderRadius: 2 }} />
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* Dream Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {dreams.map((dream, index) => (
            <Grid size={{ xs: 12, sm: 6 }} md={index === 4 ? 12 : 6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ x: 12, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      border: '1px solid rgba(0,0,0,0.06)',
                      borderRadius: 3,
                      maxWidth: index === 4 ? 520 : 'none',
                      mx: index === 4 ? 'auto' : 0,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 12px 30px ${dream.color}15`,
                        borderColor: `${dream.color}40`,
                      },
                    }}
                  >
                    <Grid container spacing={2} alignItems="center">
                      <Grid>
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 4, delay: index * 0.3, repeat: Infinity, repeatDelay: 6 }}
                        >
                          <Box
                            sx={{
                              width: 52,
                              height: 52,
                              borderRadius: '50%',
                              background: `${dream.color}12`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: dream.color,
                              '& svg': { fontSize: 26 },
                            }}
                          >
                            {dream.icon}
                          </Box>
                        </motion.div>
                      </Grid>
                      <Grid size="grow">
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1A1A2E', fontSize: '1rem' }}>
                          {dream.text}
                        </Typography>
                      </Grid>
                      <Grid>
                        <ArrowForwardIcon sx={{ color: dream.color, opacity: 0.5, fontSize: 20 }} />
                      </Grid>
                    </Grid>
                  </Paper>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* APC Channel Banner */}
        <Grid container justifyContent="center" sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 10 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #0A2463, #1E3A7B)',
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Shimmer overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
                    animation: 'banner-shimmer 4s linear infinite',
                    '@keyframes banner-shimmer': {
                      '0%': { transform: 'translateX(-100%)' },
                      '100%': { transform: 'translateX(100%)' },
                    },
                  }}
                />
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500, position: 'relative' }}>
                  Kotak Life – Agency Partner Channel is the destination to fulfill all your{' '}
                  <Box component="span" sx={{ color: '#D4A843', fontWeight: 700 }}>
                    Dreams and Aspirations
                  </Box>.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* MDRT Section Header */}
        <Grid container justifyContent="center" sx={{ mb: 5 }}>
          <Grid size={{ xs: 12, md: 8, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid>
                  <Typography variant="overline" sx={{ color: '#D4A843', fontWeight: 700, letterSpacing: 3 }}>
                    Achievement Milestones
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h2" sx={{ textAlign: 'center', color: '#0A2463' }}>
                    MDRT Criteria 2024
                  </Typography>
                </Grid>
                <Grid>
                  <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #D4A843, #E63946)', borderRadius: 2 }} />
                </Grid>
                <Grid>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: '#666', maxWidth: 480 }}>
                    Million Dollar Round Table — the premier association of financial professionals worldwide.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* MDRT Cards */}
        <Grid container spacing={4} justifyContent="center">
          {mdrtData.map((item, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      textAlign: 'center',
                      border: '2px solid rgba(0,0,0,0.06)',
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 30px 60px ${item.color}20`,
                        borderColor: `${item.color}40`,
                      },
                    }}
                  >
                    {/* Top banner */}
                    <Box sx={{ background: item.gradient, py: 3, px: 2, position: 'relative' }}>
                      <Chip
                        label={item.status}
                        sx={{
                          background: 'rgba(255,255,255,0.25)',
                          color: '#fff',
                          fontWeight: 800,
                          fontSize: '1.1rem',
                          px: 2,
                          height: 36,
                        }}
                      />
                    </Box>
                    {/* Content */}
                    <Box sx={{ p: 4 }}>
                      <Grid container direction="column" spacing={2}>
                        <Grid>
                          <Typography variant="overline" sx={{ color: '#888', fontWeight: 600, letterSpacing: 2 }}>
                            Premium
                          </Typography>
                          <Typography variant="h4" sx={{ color: '#1A1A2E', fontWeight: 800, fontSize: { xs: '1.2rem', md: '1.4rem' } }}>
                            {item.premium}
                          </Typography>
                        </Grid>
                        <Grid>
                          <Box sx={{ width: 40, height: 2, background: item.color, mx: 'auto', borderRadius: 1 }} />
                        </Grid>
                        <Grid>
                          <Typography variant="overline" sx={{ color: '#888', fontWeight: 600, letterSpacing: 2 }}>
                            Commission
                          </Typography>
                          <Typography variant="h4" sx={{ color: item.color, fontWeight: 800, fontSize: { xs: '1.2rem', md: '1.4rem' } }}>
                            {item.commission}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DreamAndMDRT;
