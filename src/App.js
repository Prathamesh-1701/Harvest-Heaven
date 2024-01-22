import './App.css';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';


import Home from './Components/Homepage/Home';
import Slidebar from './Components/Sidebar/Sidebar.jsx'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Forcast from './Components/Forecast/Forecast'
import Diseases from './Components/Diseases/Diseases';
import Shop from './Components/Shop/Shop'
import Footer from './Components/Footer/Footer'

import {  Box, ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <>
    <ChakraProvider >
    <BrowserRouter>


   <Box   marginTop={{ base: '8.5%', sm: '18.5%', md: '8%' }}
          padding={{ base: '2%', sm: '4%', md: '6%' }} >

    <Slidebar/>
    {/* <Slidebar/> */}
    <Routes>

    {/* <Route exact path="/" element={<Slidebar/>} /> */}
    <Route  exact path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Forecast" element={<Forcast/>} />
        <Route path="/diseases" element={<Diseases/>} />
        <Route path="/shop" element={<Shop/>} />
    </Routes>
    <Footer/>


    </Box>
    </BrowserRouter>
    </ChakraProvider>
    </>
  
    
   
  );
}

export default App;
