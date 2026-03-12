import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import BadgeIcon from '@mui/icons-material/Badge';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PercentIcon from '@mui/icons-material/Percent';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';

const benefits = [
  { icon: <BadgeIcon />, title: 'Special Advisor Code', desc: 'Get associated with Kotak Life Insurance with a unique special code.', num: '01', color: '#E63946' },
  { icon: <WorkspacePremiumIcon />, title: 'Financial Expertise Certification', desc: 'Earn a professional certification validating your financial expertise.', num: '02', color: '#D4A843' },
  { icon: <MenuBookIcon />, title: 'Financial Sector Knowledge', desc: 'Gain deep knowledge and understanding of the financial sector.', num: '03', color: '#0A2463' },
  { icon: <PercentIcon />, title: 'Up to 35% Remuneration', desc: 'Attractive remuneration of up to 35% on insurance products sold.', num: '04', color: '#4CAF50' },
  { icon: <SchoolIcon />, title: 'Training & Development', desc: 'Comprehensive training programs to enhance your skills and grow.', num: '05', color: '#2196F3' },
  { icon: <PublicIcon />, title: 'International Conventions', desc: 'Annual International Convention & prestigious MDRT Recognition.', num: '06', color: '#FF9800' },
  { icon: <HandshakeIcon />, title: 'Top Brand Association', desc: "Associate with one of India's most trusted financial brands.", num: '07', color: '#9C27B0' },
];

const Benefits = () => {
  return (
    <Box
      id="benefits"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0A2463 0%, #051845 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated decorative circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          border: '2px solid rgba(212,168,67,0.1)',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          border: '2px solid rgba(230,57,70,0.1)',
        }}
      />
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, 15 * Math.sin(i * 2), 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
          style={{
            position: 'absolute',
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: i % 2 === 0 ? 'rgba(212,168,67,0.4)' : 'rgba(230,57,70,0.4)',
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Grid container justifyContent="center" sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 8, lg: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid>
                  <Typography variant="overline" sx={{ color: '#FF6B6B', fontWeight: 700, letterSpacing: 3 }}>
                    Benefits
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h2" sx={{ textAlign: 'center', color: '#fff' }}>
                    Benefits of Becoming a Kotak Life Advisor
                  </Typography>
                </Grid>
                <Grid>
                  <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #E63946, #D4A843)', borderRadius: 2 }} />
                </Grid>
                <Grid>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', maxWidth: 500 }}>
                    Unlock a world of opportunities, rewards, and professional growth.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* Benefits Cards */}
        <Grid container spacing={3}>
          {benefits.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3.5,
                      background: 'rgba(255,255,255,0.04)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.08)',
                        boxShadow: `0 20px 40px rgba(0,0,0,0.25)`,
                        borderColor: `${item.color}50`,
                        '& .benefit-num': { color: item.color, transform: 'scale(1.1)' },
                      },
                    }}
                  >
                    <Grid container spacing={2.5} alignItems="flex-start">
                      <Grid>
                        <Typography
                          className="benefit-num"
                          sx={{
                            fontWeight: 900,
                            fontSize: '2.8rem',
                            color: 'rgba(255,255,255,0.06)',
                            lineHeight: 1,
                            transition: 'all 0.4s ease',
                          }}
                        >
                          {item.num}
                        </Typography>
                      </Grid>
                      <Grid size="grow">
                        <Grid container direction="column" spacing={1}>
                          <Grid>
                            <Grid container spacing={1.5} alignItems="center">
                              <Grid>
                                <motion.div
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.6 }}
                                >
                                  <Box sx={{ color: item.color, '& svg': { fontSize: 24 } }}>
                                    {item.icon}
                                  </Box>
                                </motion.div>
                              </Grid>
                              <Grid size="grow">
                                <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem' }}>
                                  {item.title}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                              {item.desc}
                            </Typography>
                          </Grid>
                        </Grid>
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

export default Benefits;
