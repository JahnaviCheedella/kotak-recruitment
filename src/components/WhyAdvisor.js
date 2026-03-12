import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const reasons = [
  { icon: <AllInclusiveIcon />, title: 'Unlimited Renewal Commission', desc: 'Earn continuous income through renewal commissions on every policy sold.', gradient: 'linear-gradient(135deg, #E63946, #FF6B6B)' },
  { icon: <AccessTimeIcon />, title: 'Absolute Freedom', desc: 'No fixed timings — work at your own pace and manage your schedule.', gradient: 'linear-gradient(135deg, #0A2463, #1E3A7B)' },
  { icon: <FavoriteBorderIcon />, title: 'Help People', desc: "Make a meaningful impact by securing families' financial futures.", gradient: 'linear-gradient(135deg, #D4A843, #F0D78C)' },
  { icon: <FamilyRestroomIcon />, title: 'Create a Legacy', desc: 'Build a lasting legacy for future generations through financial planning.', gradient: 'linear-gradient(135deg, #4CAF50, #81C784)' },
  { icon: <AttachMoneyIcon />, title: 'Profitable Career', desc: 'Spend your time fruitfully and profitably with high earning potential.', gradient: 'linear-gradient(135deg, #FF9800, #FFB74D)' },
  { icon: <EmojiObjectsIcon />, title: 'Pursue Your Passion', desc: 'Combine your passion with your profession for a fulfilling career.', gradient: 'linear-gradient(135deg, #9C27B0, #CE93D8)' },
];

const WhyAdvisor = () => {
  return (
    <Box
      id="why-advisor"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(10,36,99,0.03) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Section Header */}
        <Grid container justifyContent="center" sx={{ mb: 6 }}>
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
                    Career Freedom
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h2" sx={{ textAlign: 'center', color: '#0A2463' }}>
                    Why Kotak Life Advisor?
                  </Typography>
                </Grid>
                <Grid>
                  <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #E63946, #D4A843)', borderRadius: 2 }} />
                </Grid>
                <Grid>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: '#666', maxWidth: 500 }}>
                    Discover the freedom, flexibility, and financial rewards of becoming a Kotak Life Advisor.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* Reason Cards */}
        <Grid container spacing={3}>
          {reasons.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      height: '100%',
                      border: '1px solid rgba(0,0,0,0.06)',
                      borderRadius: 4,
                      transition: 'box-shadow 0.4s ease',
                      '&:hover': {
                        boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                        '& .icon-box': { transform: 'scale(1.15) rotate(5deg)' },
                      },
                    }}
                  >
                    <Grid container direction="column" spacing={2}>
                      <Grid>
                        <Box
                          className="icon-box"
                          sx={{
                            width: 64,
                            height: 64,
                            borderRadius: 3,
                            background: item.gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            transition: 'transform 0.4s ease',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                            '& svg': { fontSize: 30 },
                          }}
                        >
                          {item.icon}
                        </Box>
                      </Grid>
                      <Grid>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#1A1A2E' }}>
                          {item.title}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                          {item.desc}
                        </Typography>
                      </Grid>
                    </Grid>
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

export default WhyAdvisor;
