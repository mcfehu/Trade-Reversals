import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Edge from './pages/Edge';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Stats from './pages/Stats';
import Stories from './pages/Stories';
import Privacy from './pages/Privacy';
import Dashboard from './pages/Dashboard';
import Ebook from './pages/Ebook';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edge" element={<Edge />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id/*" element={<BlogPost />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ebook" element={<Ebook />} />
        </Routes>
        <CookieConsent />
      </Router>
    </AuthProvider>
  );
}