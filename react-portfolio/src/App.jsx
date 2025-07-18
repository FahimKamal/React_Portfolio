import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';

function App() {
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
    // Apply dark theme to body only on the home page for the cover layout
    if (theme === 'dark' && location.pathname === '/') {
      document.body.classList.add('text-white', 'bg-dark');
    } else {
      document.body.classList.remove('text-white', 'bg-dark');
    }
  }, [theme, location.pathname]);

  return (
    <div className={location.pathname === '/' ? "d-flex h-100 flex-column" : ""}>
      <Header currentTheme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home currentTheme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/contact" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
