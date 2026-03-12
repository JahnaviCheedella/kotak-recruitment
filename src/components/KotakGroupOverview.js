import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PercentIcon from '@mui/icons-material/Percent';

const metrics = [
  { icon: <AccountBalanceIcon />, label: 'Net Worth*', value: '₹ 1,57,395', unit: 'Crores', desc: 'Consolidated Capital and Reserve & Surplus as on Mar\'25', color: '#E63946' },
  { icon: <TrendingUpIcon />, label: 'Customer Assets*', value: '₹ 5,37,860', unit: 'Crores', desc: 'Advances incl. IBPC & BRDS and Credit Substitutes', color: '#D4A843' },
  { icon: <PieChartIcon />, label: 'Capital Adequacy Ratio (CAR)*', value: '23.3', unit: '%', desc: 'As per Basel-III including PAT', color: '#2196F3' },
  { icon: <ShowChartIcon />, label: 'Market Capitalization*', value: '₹ 4.19', unit: 'Lakh Crores', desc: 'Consolidated mkt cap as on 13-May-25', color: '#4CAF50' },
  { icon: <MonetizationOnIcon />, label: 'Profit After Tax (PAT)*', value: '₹ 22,126', unit: 'Crores', desc: 'For the financial year', color: '#FF9800' },
  { icon: <PercentIcon />, label: 'ROE (Annualized)', value: '12.90', unit: '%', desc: 'Return on Equity', color: '#9C27B0' },
];

const AnimatedCounter = ({ value, inView }) => {
  const [display, setDisplay] = useState(value);
  const numericPart = value.replace(/[^0-9.,]/g, '');
  const prefix = value.replace(numericPart, '');
  
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(numericPart.replace(/,/g, ''));
    if (isNaN(num)) { setDisplay(value); return; }
    const duration = 1500;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;
      if (num >= 1000) {
        setDisplay(`${prefix}${Math.floor(current).toLocaleString('en-IN')}`);
      } else {
        setDisplay(`${prefix}${current.toFixed(2)}`);
      }
      if (progress >= 1) { clearInterval(timer); setDisplay(value); }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value, numericPart, prefix]);

  return <>{display}</>;
};

const KotakGroupOverview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Box
      id="kotak-group"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 50%, #F8F9FA 100%)',
        position: 'relative',
      }}
    >
      {/* Top accent line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #E63946, #D4A843, #0A2463)',
        }}
      />

      <Container maxWidth="lg">
        {/* Section header */}
        <Grid container justifyContent="center" sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 8, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid>
                  <Typography
                    variant="overline"
                    sx={{ color: '#E63946', fontWeight: 700, letterSpacing: 3, display: 'block', textAlign: 'center' }}
                  >
                    Why Choose
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="h2" sx={{ textAlign: 'center', color: '#0A2463' }}>
                    Kotak Mahindra Group
                  </Typography>
                </Grid>
                <Grid>
                  <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #E63946, #D4A843)', borderRadius: 2, mx: 'auto' }} />
                </Grid>
                <Grid>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: '#666', mt: 1 }}>
                    A legacy of trust, strength, and financial excellence powering India's growth story.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* Metrics Grid */}
        <Grid container spacing={3}>
          {metrics.map((metric, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    height: '100%',
                    border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 4,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.02)',
                      boxShadow: `0 25px 50px ${metric.color}20`,
                      borderColor: `${metric.color}40`,
                      '& .metric-icon': { transform: 'scale(1.15) rotate(10deg)' },
                      '& .metric-bg': { opacity: 0.08 },
                    },
                  }}
                >
                  {/* Hover background glow */}
                  <Box
                    className="metric-bg"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `radial-gradient(circle at top right, ${metric.color}, transparent 70%)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    }}
                  />

                  {/* Top color bar */}
                  <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 4, background: metric.color, opacity: 0.7 }} />

                  <Grid container direction="column" spacing={1.5} sx={{ position: 'relative' }}>
                    <Grid>
                      <Box
                        className="metric-icon"
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          background: `${metric.color}12`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: metric.color,
                          transition: 'transform 0.4s ease',
                          '& svg': { fontSize: 28 },
                        }}
                      >
                        {metric.icon}
                      </Box>
                    </Grid>
                    <Grid>
                      <Grid container alignItems="baseline" spacing={0.5}>
                        <Grid>
                          <Typography
                            variant="h3"
                            sx={{ color: metric.color, fontWeight: 800, fontSize: { xs: '1.5rem', md: '1.8rem' } }}
                          >
                            <AnimatedCounter value={metric.value} inView={inView} />
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography sx={{ color: metric.color, fontWeight: 600, fontSize: '1rem', opacity: 0.7 }}>
                            {metric.unit}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1A1A2E' }}>
                        {metric.label}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="body2" sx={{ color: '#888', fontSize: '0.83rem' }}>
                        {metric.desc}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Source text */}
        <Grid container justifyContent="center" sx={{ mt: 4 }}>
          <Grid>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Typography variant="caption" sx={{ color: '#999', fontSize: '0.75rem' }}>
                Source: Investor Presentation Q4FY25. *As on Mar'25 / 13-May-25.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default KotakGroupOverview;
