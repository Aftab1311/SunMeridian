import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  // Handle finishing the loading animation
  const finishLoading = () => {
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <SplashScreen finishLoading={finishLoading} key="splash" />
        ) : (
          <motion.div
            className="flex flex-col min-h-screen font-['Tagesschrift']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main className="flex-grow">
              <Outlet />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
