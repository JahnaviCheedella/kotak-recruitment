import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const documents = [
  { icon: <PhotoCameraIcon />, title: 'Passport Size Photo', color: '#E63946' },
  { icon: <CreditCardIcon />, title: 'PAN Card', color: '#D4A843' },
  { icon: <HomeIcon />, title: 'Address Proof', sub: 'Aadhar Card / Driving License', color: '#0A2463' },
  { icon: <SchoolIcon />, title: 'Education Proof', sub: 'Highest Qualification Certificate', color: '#4CAF50' },
  { icon: <AccountBalanceIcon />, title: 'Bank Details', sub: 'Cancelled Cheque or First Page of Bank Statement', color: '#2196F3' },
  { icon: <PaymentsIcon />, title: 'License Fee', sub: 'Rs. 1,250 (IRDA mandated)', color: '#FF9800' },
];

const DocumentsNeeded = () => {
  return (
    <Box
      sx={{
        py: 2,
        background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
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
                    Get Started
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h2" sx={{ textAlign: 'center', color: '#0A2463' }}>
                    Documents Needed
                  </Typography>
                </Grid>
                <Grid>
                  <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #E63946, #D4A843)', borderRadius: 2 }} />
                </Grid>
                <Grid>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: '#666', maxWidth: 450 }}>
                    Simple documentation to kickstart your journey as a Kotak Life Advisor.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* Document Cards */}
        <Grid container spacing={3} justifyContent="center">
          {documents.map((doc, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      border: '2px solid rgba(0,0,0,0.04)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 20px 40px ${doc.color}12`,
                        borderColor: `${doc.color}40`,
                        '& .doc-check': { opacity: 1, transform: 'scale(1)' },
                      },
                    }}
                  >
                    <Grid container spacing={2} alignItems="center">
                      <Grid>
                        <Box
                          sx={{
                            width: 52,
                            height: 52,
                            borderRadius: 3,
                            background: `${doc.color}12`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: doc.color,
                            '& svg': { fontSize: 24 },
                          }}
                        >
                          {doc.icon}
                        </Box>
                      </Grid>
                      <Grid size="grow">
                        <Grid container direction="column" spacing={0.3}>
                          <Grid>
                            <Typography variant="body1" sx={{ fontWeight: 700, color: '#1A1A2E' }}>
                              {doc.title}
                            </Typography>
                          </Grid>
                          {doc.sub && (
                            <Grid>
                              <Typography variant="caption" sx={{ color: '#888' }}>
                                {doc.sub}
                              </Typography>
                            </Grid>
                          )}
                        </Grid>
                      </Grid>
                      <Grid>
                        <CheckCircleOutlineIcon
                          className="doc-check"
                          sx={{
                            color: doc.color,
                            opacity: 0,
                            transform: 'scale(0.5)',
                            transition: 'all 0.3s ease',
                            fontSize: 22,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Banner */}
        <Grid container justifyContent="center" sx={{ mt: 6 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Paper
                  sx={{
                    p: { xs: 3, md: 4 },
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #E63946, #FF6B6B)',
                    borderRadius: 4,
                    boxShadow: '0 15px 40px rgba(230,57,70,0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Shimmer */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      animation: 'cta-shimmer 3s linear infinite',
                      '@keyframes cta-shimmer': {
                        '0%': { transform: 'translateX(-100%)' },
                        '100%': { transform: 'translateX(100%)' },
                      },
                    }}
                  />
                  <Grid container direction="column" alignItems="center" spacing={2} sx={{ position: 'relative' }}>
                    <Grid>
                      <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '1.3rem', md: '1.6rem' } }}>
                        🎯 Join Kotak Life as an Advisor Today!
                      </Typography>
                    </Grid>
                    <Grid>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        sx={{
                          background: '#fff',
                          color: '#E63946',
                          fontWeight: 700,
                          px: 5,
                          '&:hover': {
                            background: 'rgba(255,255,255,0.9)',
                            transform: 'translateY(-3px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Contact Us Now
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DocumentsNeeded;
