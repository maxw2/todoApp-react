import React from 'react';
import './App.css';
import { ThemeProvider } from './state/ThemeContext'
import Index from './component/Index/Index'

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Index />
      </ThemeProvider>
    </div>
  );
}

export default App;
