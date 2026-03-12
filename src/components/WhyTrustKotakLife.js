import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import ShieldIcon from '@mui/icons-material/Shield';
import StarIcon from '@mui/icons-material/Star';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BadgeIcon from '@mui/icons-material/Badge';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SecurityIcon from '@mui/icons-material/Security';

const trustMetrics = [
  { icon: <AccountBalanceWalletIcon />, label: 'Net Worth*', value: '₹ 6,403 Crores', sub: 'Consolidated capital & reserve', highlight: true },
  { icon: <VerifiedIcon />, label: 'Asset Under Management*', value: '₹ 91,807 Crores', sub: '', highlight: true },
  { icon: <SecurityIcon />, label: 'Sum Assured in-force', value: '₹ 15,69,450 Crores', sub: '', highlight: false },
  { icon: <GroupsIcon />, label: 'Lives Covered (Individual)', value: '25,10,278', sub: '', highlight: false },
  { icon: <GroupsIcon />, label: 'Lives Covered (Group)', value: '4,34,94,119', sub: '', highlight: false },
  { icon: <ShieldIcon />, label: 'Solvency Ratio', value: '2.45 times*', sub: 'IRDA mandated 1.5 times', highlight: true },
];

const highlights = [
  { icon: <StarIcon />, label: 'Credit Rating', value: 'AAA/Stable', sub: 'by CRISIL', color: '#D4A843' },
  { icon: <StorefrontIcon />, label: 'Branches (incl. HO)', value: '323', sub: '', color: '#2196F3' },
  { icon: <BadgeIcon />, label: 'Employees', value: '17,428+', sub: '', color: '#4CAF50' },
  { icon: <LocationOnIcon />, label: 'Locations', value: '153', sub: '', color: '#E63946' },
];

const WhyTrustKotakLife = () => {
  return (
    <Box
      id="trust-kotak"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0A2463 0%, #1E3A7B 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230,57,70,0.08) 0%, transparent 70%)',
        }}
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          bottom: '-5%',
          left: '-5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          border: '1px dashed rgba(212,168,67,0.15)',
        }}
      />

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
                  <Typography variant="overline" sx={{ color: '#FF6B6B', fontWeight: 700, letterSpacing: 3 }}>
                    Why Trust
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h2" sx={{ textAlign: 'center', color: '#fff' }}>
                    Kotak Life Insurance
                  </Typography>
                </Grid>
                <Grid>
                  <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #E63946, #D4A843)', borderRadius: 2 }} />
                </Grid>
                <Grid>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.65)', maxWidth: 500 }}>
                    Industry-leading metrics showcasing our strength, reliability, and commitment to policyholders.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* Key Highlight Cards */}
        <Grid container spacing={3} sx={{ mb: 5 }}>
          {highlights.map((item, index) => (
            <Grid size={{ xs: 6, sm: 3 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                style={{ height: '100%' }}
              >
                <motion.div whileHover={{ y: -8, scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }} style={{ height: '100%' }}>
                  <Paper
                    sx={{
                      p: 3,
                      height: '100%',
                      textAlign: 'center',
                      background: 'rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.1)',
                        boxShadow: `0 20px 40px ${item.color}20`,
                        borderColor: `${item.color}40`,
                      },
                    }}
                  >
                    <Grid container direction="column" alignItems="center" spacing={1}>
                      <Grid>
                        <motion.div
                          animate={{ rotateY: [0, 360] }}
                          transition={{ duration: 4, delay: index * 0.5, repeat: Infinity, repeatDelay: 8 }}
                        >
                          <Box sx={{ color: item.color, '& svg': { fontSize: 32 } }}>
                            {item.icon}
                          </Box>
                        </motion.div>
                      </Grid>
                      <Grid>
                        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.4rem' } }}>
                          {item.value}
                        </Typography>
                        {item.sub && (
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>
                            {item.sub}
                          </Typography>
                        )}
                      </Grid>
                      <Grid>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>
                          {item.label}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Trust Metrics Grid */}
        <Grid container spacing={3}>
          {trustMetrics.map((metric, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{ height: '100%' }}
              >
                <motion.div whileHover={{ x: 10 }} transition={{ type: 'spring', stiffness: 400 }} style={{ height: '100%' }}>
                  <Paper
                    sx={{
                      p: 3,
                      height: '100%',
                      background: metric.highlight ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.12)',
                        borderColor: 'rgba(212,168,67,0.3)',
                      },
                    }}
                  >
                    <Grid container spacing={2} alignItems="flex-start">
                      <Grid>
                        <Box sx={{ color: '#D4A843', '& svg': { fontSize: 24 }, mt: 0.5 }}>
                          {metric.icon}
                        </Box>
                      </Grid>
                      <Grid size="grow">
                        <Grid container direction="column" spacing={0.3}>
                          <Grid>
                            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, fontSize: '1.15rem' }}>
                              {metric.value}
                            </Typography>
                          </Grid>
                          <Grid>
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                              {metric.label}
                            </Typography>
                          </Grid>
                          {metric.sub && (
                            <Grid>
                              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                                {metric.sub}
                              </Typography>
                            </Grid>
                          )}
                        </Grid>
                      </Grid>
                      {metric.highlight && (
                        <Grid>
                          <Chip
                            label="★"
                            size="small"
                            sx={{ background: 'rgba(212,168,67,0.2)', color: '#D4A843', minWidth: 28 }}
                          />
                        </Grid>
                      )}
                    </Grid>
                  </Paper>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Disclaimer */}
        <Grid container justifyContent="center" sx={{ mt: 4 }}>
          <Grid>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
              *As on Mar'24. #Rating for Kotak Life Bank loan facility.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyTrustKotakLife;
