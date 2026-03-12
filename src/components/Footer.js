import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 2,
        background: '#051845',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
          {/* Brand */}
          {/* <Grid size={{ xs: 12, md: "auto" }}>
            <Grid container alignItems="center" spacing={1} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <Grid>
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #E63946, #FF6B6B)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      color: '#fff',
                      fontSize: '0.9rem',
                    }}
                  >
                    K
                  </Box>
                </motion.div>
              </Grid>
              <Grid>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                  Kotak Life Insurance
                </Typography>
              </Grid>
            </Grid>
          </Grid> */}

          {/* Copyright */}
          <Grid size={{ xs: 12, md: "auto" }}>
            <Grid container alignItems="center" justifyContent="center" spacing={0.5}>
              <Grid>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
                  © {new Date().getFullYear()} Kotak Life
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Back to top */}
          <Grid size={{ xs: 12, md: "auto" }} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                sx={{
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  '&:hover': {
                    background: 'rgba(230,57,70,0.25)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
