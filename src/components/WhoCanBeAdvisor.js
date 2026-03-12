import React from 'react';
import { Box, Typography, Container, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import ElderlyIcon from '@mui/icons-material/Elderly';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import StorefrontIcon from '@mui/icons-material/Storefront';

const advisorTypes = [
  { icon: <HomeIcon />, title: 'Homemakers', color: '#E63946' },
  { icon: <ElderlyIcon />, title: 'Retired Professionals', color: '#D4A843' },
  { icon: <BusinessCenterIcon />, title: 'Businessmen', color: '#0A2463' },
  { icon: <AccountBalanceIcon />, title: 'CAs, Doctors & Financial Professionals', color: '#4CAF50' },
  { icon: <SchoolIcon />, title: 'Teachers & Students', color: '#2196F3' },
  { icon: <CodeIcon />, title: 'Software Professionals & HRs', color: '#9C27B0' },
  { icon: <StorefrontIcon />, title: 'Sales Professionals', color: '#FF9800' },
];

const WhoCanBeAdvisor = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Column - Text & Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Grid container direction="column" spacing={2}>
                <Grid>
                  <Typography variant="overline" sx={{ color: '#E63946', fontWeight: 700, letterSpacing: 3 }}>
                    Open to Everyone
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h2" sx={{ color: '#0A2463' }}>
                    Who Can Be an Advisor?
                  </Typography>
                </Grid>
                <Grid>
                  <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #E63946, #D4A843)', borderRadius: 2 }} />
                </Grid>
                <Grid>
                  <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8 }}>
                    Kotak Life welcomes individuals from all walks of life. Whether you're a homemaker,
                    a retired professional, a business owner, or a student — there's a place for you
                    in our advisor family.
                  </Typography>
                </Grid>
                <Grid sx={{ mt: 2 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Box
                      component="img"
                      src="/images/diverse-team.png"
                      alt="Diverse professionals"
                      sx={{
                        width: '100%',
                        maxWidth: 380,
                        borderRadius: 4,
                        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                        '&:hover': {
                          transform: 'scale(1.03) rotate(-1deg)',
                          boxShadow: '0 30px 80px rgba(0,0,0,0.2)',
                        },
                      }}
                    />
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Column - Cards */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2}>
              {advisorTypes.map((type, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <Paper
                        elevation={2}
                        sx={{
                          p: 2.5,
                          border: '1px solid rgba(0,0,0,0.06)',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: `0 12px 30px ${type.color}15`,
                            borderColor: `${type.color}40`,
                          },
                        }}
                      >
                        <Grid container spacing={2} alignItems="center">
                          <Grid>
                            <motion.div
                              whileHover={{ rotate: 15 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            >
                              <Avatar
                                sx={{
                                  width: 48,
                                  height: 48,
                                  background: `${type.color}15`,
                                  color: type.color,
                                  transition: 'all 0.3s ease',
                                }}
                              >
                                {type.icon}
                              </Avatar>
                            </motion.div>
                          </Grid>
                          <Grid size="grow">
                            <Typography variant="body1" sx={{ fontWeight: 600, color: '#1A1A2E' }}>
                              {type.title}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </motion.div>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoCanBeAdvisor;
