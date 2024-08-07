import React, { createContext, useState, useEffect } from "react";

import { About, Footer, Header, Skills, Testimonials, Works, Anniversary } from "./container";
import { Navbar, HamsterLoader } from "./components";

import './App.scss';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <HamsterLoader />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="app">
        <Navbar />
        <Header />
        <About />
        <Works />
        <Skills />
        <Testimonials />
        <Footer />
        {/* <Anniversary/> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;