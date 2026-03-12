import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KotakGroupOverview from './components/KotakGroupOverview';
import WhyTrustKotakLife from './components/WhyTrustKotakLife';
import WhyAdvisor from './components/WhyAdvisor';
import WhoCanBeAdvisor from './components/WhoCanBeAdvisor';
import Benefits from './components/Benefits';
import Solutions from './components/Solutions';
import LeadershipQuote from './components/LeadershipQuote';
import DreamAndMDRT from './components/DreamAndMDRT';
import DocumentsNeeded from './components/DocumentsNeeded';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Hero />
        <KotakGroupOverview />
        <WhyTrustKotakLife />
        <WhyAdvisor />
        <WhoCanBeAdvisor />
        <Benefits />
        <Solutions />
        <LeadershipQuote />
        <DreamAndMDRT />
        <DocumentsNeeded />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
