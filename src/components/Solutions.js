import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ShieldIcon from '@mui/icons-material/Shield';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SecurityIcon from '@mui/icons-material/Security';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ElderlyIcon from '@mui/icons-material/Elderly';
import SchoolIcon from '@mui/icons-material/School';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const solutions = [
  { icon: <ShieldIcon />, title: 'Term Plans', desc: 'Pure life cover at affordable premiums for financial protection.', gradient: 'linear-gradient(135deg, #E63946, #FF6B6B)' },
  { icon: <FamilyRestroomIcon />, title: 'MWPA', desc: "Married Women's Property Act plans for secured family benefits.", gradient: 'linear-gradient(135deg, #D4A843, #F0D78C)' },
  { icon: <SecurityIcon />, title: 'Life Security', desc: 'Comprehensive life security plans for complete peace of mind.', gradient: 'linear-gradient(135deg, #0A2463, #1E3A7B)' },
  { icon: <ReceiptIcon />, title: 'Taxation Planning', desc: 'Smart tax-saving solutions with life insurance benefits.', gradient: 'linear-gradient(135deg, #4CAF50, #81C784)' },
  { icon: <ElderlyIcon />, title: 'Retirement Planning', desc: 'Secure your golden years with our retirement solutions.', gradient: 'linear-gradient(135deg, #FF9800, #FFB74D)' },
  { icon: <SchoolIcon />, title: 'Child Education', desc: "Fund your child's dreams with education-focused plans.", gradient: 'linear-gradient(135deg, #2196F3, #64B5F6)' },
  { icon: <AllInclusiveIcon />, title: 'Guaranteed / Whole Life Plans', desc: 'Lifelong coverage with guaranteed returns and benefits.', gradient: 'linear-gradient(135deg, #9C27B0, #CE93D8)' },
];

const Solutions = () => {
  return (
    <Box
      id="solutions"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle dot background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(10,36,99,0.025) 1px, transparent 0)',
          backgroundSize: '28px 28px',
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
                    Product Suite
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h2" sx={{ textAlign: 'center', color: '#0A2463' }}>
                    Our Bouquet of Solutions
                  </Typography>
                </Grid>
                <Grid>
                  <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #E63946, #D4A843)', borderRadius: 2 }} />
                </Grid>
                <Grid>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: '#666', maxWidth: 480 }}>
                    Comprehensive insurance solutions tailored to every life stage and financial goal.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* Solutions Grid */}
        <Grid container spacing={3} justifyContent="center">
          {solutions.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{ height: '100%' }}
              >
                <motion.div
                  whileHover={{ y: -14, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{ height: '100%' }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      border: '1px solid rgba(0,0,0,0.06)',
                      borderRadius: 4,
                      height: '100%',
                      minHeight: 220,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                        '& .solution-icon': { transform: 'rotateY(180deg) scale(1.1)' },
                        '& .solution-ring': { opacity: 1, transform: 'scale(1)' },
                      },
                    }}
                  >
                    <Grid container direction="column" alignItems="center" spacing={2}>
                      <Grid>
                        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                          {/* Pulsing ring */}
                          <Box
                            className="solution-ring"
                            sx={{
                              position: 'absolute',
                              inset: -8,
                              borderRadius: '50%',
                              border: '2px dashed',
                              borderColor: 'inherit',
                              opacity: 0,
                              transform: 'scale(0.8)',
                              transition: 'all 0.4s ease',
                              animation: 'pulse-ring 2s ease-in-out infinite',
                              '@keyframes pulse-ring': {
                                '0%, 100%': { opacity: 0.3 },
                                '50%': { opacity: 0.6 },
                              },
                            }}
                          />
                          <Box
                            className="solution-icon"
                            sx={{
                              width: 72,
                              height: 72,
                              borderRadius: '50%',
                              background: item.gradient,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff',
                              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                              transition: 'transform 0.6s ease',
                              '& svg': { fontSize: 32 },
                            }}
                          >
                            {item.icon}
                          </Box>
                        </Box>
                      </Grid>
                      <Grid>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A2E', fontSize: '0.95rem' }}>
                          {item.title}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography variant="body2" sx={{ color: '#888', fontSize: '0.8rem', lineHeight: 1.6 }}>
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

export default Solutions;
