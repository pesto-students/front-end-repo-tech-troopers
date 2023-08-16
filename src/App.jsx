import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedRoutes from './components/commons/AnimatedRoutes';
import ScrollToTop from './components/commons/ScrollToTop';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
