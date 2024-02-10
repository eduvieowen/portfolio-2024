import React, { createContext, useState } from "react";

import { About, Footer, Header, Skills, Testimonials, Works } from "./container";
import { Navbar } from "./components";

import './App.scss';

export const ThemeContext = createContext(null);

const App = () => {

  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  
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
      </div>
    </ThemeContext.Provider>
  );
}

export default App;