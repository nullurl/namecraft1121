import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import NameGenerator from './components/NameGenerator';
import NameGuide from './components/NameGuide';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Support from './components/Support';
import LearnMore from './app/learn-more/page';
import ChineseNameGenerator from './app/[locale]/learn-more/chinese/page';
import EnglishNameGenerator from './app/[locale]/learn-more/english/page';
import JapaneseNameGenerator from './app/[locale]/learn-more/japanese/page';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <NameGenerator />
              <NameGuide />
              <HowItWorks />
              <Pricing />
            </main>
          } />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/support" element={<Support />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/learn-more/chinese" element={<ChineseNameGenerator />} />
          <Route path="/learn-more/english" element={<EnglishNameGenerator />} />
          <Route path="/learn-more/japanese" element={<JapaneseNameGenerator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}