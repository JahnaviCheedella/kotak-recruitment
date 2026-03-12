import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import WidgetsIcon from '@mui/icons-material/Widgets';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion, AnimatePresence } from 'framer-motion';
import kotakLogo from "../assets/kotak-logo.png";

const navItems = [
  { label: 'Home', href: '#hero', icon: <HomeIcon /> },
  { label: 'About Kotak', href: '#kotak-group', icon: <InfoIcon /> },
  { label: 'Why Advisor', href: '#why-advisor', icon: <WorkIcon /> },
  { label: 'Benefits', href: '#benefits', icon: <StarIcon /> },
  { label: 'Solutions', href: '#solutions', icon: <WidgetsIcon /> },
  { label: 'MDRT', href: '#mdrt', icon: <EmojiEventsIcon /> },
  { label: 'Contact', href: '#contact', icon: <ContactMailIcon /> },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Track active section
      const sections = navItems.map(item => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 8 : 0}
        sx={{
          background: 'rgba(10, 37, 99, 0.35)',
          backdropFilter: 'blur(20px)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Toolbar sx={{ py: 1, maxWidth: 1400, mx: 'auto', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', }}>
            {/* Logo */}
            <Box
              component="img"
              src={kotakLogo}
              alt="Kotak Logo"
              sx={{
                height: { xs: 32, md: 40 },
                objectFit: 'contain',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                background: 'rgba(255, 255, 255, 0.9)',
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />

            {/* Nav Items + WhatsApp */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0, md: 1 }, flexShrink: 0 }}>
              {isMobile ? (
                <>
                  {/* WhatsApp in middle on mobile */}
                  <Box
                    component="a"
                    href="https://wa.me/919948438426?text=Hi"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.8,
                      textDecoration: 'none',
                      color: '#25D366',
                      background: 'rgba(37, 211, 102, 0.12)',
                      px: 1.5,
                      py: 0.6,
                      borderRadius: 5,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(37, 211, 102, 0.25)',
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <WhatsAppIcon
                      sx={{
                        // fontSize: { xs: 16, md: 20 }
                        fontSize: 20
                      }} />
                    <Typography
                      sx={{
                        // fontSize: { xs: '0.65rem', md: '0.78rem' },
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#fff',
                        letterSpacing: '0.5px',
                        // display: { xs: 'none', sm: 'block' },
                      }}
                    >
                      9948438426
                    </Typography>
                  </Box>
                  <IconButton onClick={() => setMobileOpen(true)} sx={{ color: '#fff' }}>
                    <MenuIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <Grid container spacing={0} alignItems="center" justifyContent="flex-end" sx={{ flexWrap: 'nowrap' }}>
                    {navItems.map((item) => (
                      <Grid key={item.label}>
                        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                          <Box
                            onClick={() => handleNavClick(item.href)}
                            sx={{
                              px: 1.4,
                              py: 1,
                              color: activeSection === item.href ? '#FF6B6B' : '#fff',
                              cursor: 'pointer',
                              borderRadius: 2,
                              fontSize: '0.82rem',
                              fontWeight: activeSection === item.href ? 700 : 500,
                              whiteSpace: 'nowrap',
                              transition: 'all 0.3s ease',
                              position: 'relative',
                              '&:hover': {
                                background: 'rgba(255,255,255,0.12)',
                              },
                              '&::after': activeSection === item.href ? {
                                content: '""',
                                position: 'absolute',
                                bottom: 2,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 20,
                                height: 3,
                                borderRadius: 2,
                                background: 'linear-gradient(90deg, #E63946, #FF6B6B)',
                              } : {},
                            }}
                          >
                            {item.label}
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                  {/* WhatsApp at end on desktop */}
                  <Box
                    component="a"
                    href="https://wa.me/919948438426?text=Hi"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.8,
                      textDecoration: 'none',
                      color: '#25D366',
                      background: 'rgba(37, 211, 102, 0.12)',
                      px: 1.5,
                      py: 0.6,
                      borderRadius: 5,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        background: 'rgba(37, 211, 102, 0.25)',
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: 22 }} />
                    <Typography
                      sx={{
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: '#fff',
                        letterSpacing: '0.5px',
                      }}
                    >
                      9948438426
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            background: 'linear-gradient(180deg, #0A2463, #051845)',
            color: '#fff',
          },
        }}
      >
        <Grid container direction="column" sx={{ height: '100%' }}>
          <Grid sx={{ p: 0.5, textAlign: 'right' }}>
            <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid size="grow">
            <AnimatePresence>
              <List>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                  >
                    <ListItem
                      button
                      onClick={() => handleNavClick(item.href)}
                      sx={{
                        py: 2,
                        px: 3,
                        borderLeft: activeSection === item.href
                          ? '3px solid #E63946'
                          : '3px solid transparent',
                        background: activeSection === item.href
                          ? 'rgba(230,57,70,0.1)'
                          : 'transparent',
                        '&:hover': { background: 'rgba(255,255,255,0.08)' },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <ListItemIcon sx={{ color: activeSection === item.href ? '#FF6B6B' : 'rgba(255,255,255,0.6)', minWidth: 40 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: activeSection === item.href ? 700 : 500,
                          fontSize: '1.05rem',
                          color: activeSection === item.href ? '#FF6B6B' : '#fff',
                        }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>

            </AnimatePresence>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default Navbar;
