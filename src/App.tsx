import React, { useEffect } from 'react';
import logo from './logo.svg';
import AppRoutes from './Routes/AppRoutes';
import { Box } from '@mui/material';
import RandomDots from './Component/RandomDots';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        offset: 100,
      });
  }, []);
  return (
    <Box className='App'>
      <AppRoutes />
    </Box>
  );
}

export default App;
