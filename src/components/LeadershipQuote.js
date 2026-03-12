import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const LeadershipQuote = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0A2463 0%, #1E3A7B 50%, #0A2463 100%)',
      }}
    >
      {/* Background image overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/leadership.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10,36,99,0.92), rgba(5,24,69,0.95))',
        }}
      />

      {/* Animated sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
          style={{
            position: 'absolute',
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: '#D4A843',
            top: `${15 + (i * 10) % 70}%`,
            left: `${8 + (i * 13) % 84}%`,
          }}
        />
      ))}

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Grid container direction="column" alignItems="center" spacing={3}>
            <Grid>
              <motion.div
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, repeatDelay: 4 }}
              >
                <FormatQuoteIcon
                  sx={{
                    fontSize: 60,
                    color: 'rgba(212,168,67,0.4)',
                    transform: 'rotate(180deg)',
                  }}
                />
              </motion.div>
            </Grid>
            <Grid>
              <Typography
                variant="h3"
                sx={{
                  color: '#fff',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  textAlign: 'center',
                  fontSize: { xs: '1.3rem', md: '1.8rem' },
                }}
              >
                "If your actions inspire others to dream more, learn more, do more and become more, you are a{' '}
                <Box
                  component="span"
                  sx={{
                    color: '#D4A843',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      width: '100%',
                      height: 3,
                      background: 'linear-gradient(90deg, #D4A843, transparent)',
                      borderRadius: 2,
                    },
                  }}
                >
                  LEADER
                </Box>
                ."
              </Typography>
            </Grid>
            <Grid>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Box
                  sx={{
                    height: 3,
                    background: 'linear-gradient(90deg, #E63946, #D4A843)',
                    borderRadius: 2,
                  }}
                />
              </motion.div>
            </Grid>
            <Grid>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                  — John Quincy Adams
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LeadershipQuote;
