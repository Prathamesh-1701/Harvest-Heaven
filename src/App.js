import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';

import Home from './Components/Homepage/Home';
import Slidebar from './Components/Sidebar/Sidebar.jsx';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Predict from './Components/Forecast/Forecast';
import Diseases from './Components/Diseases/Diseases';
// import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import Checkout from './Components/Shop/Checkout'
import ShoppingPage from './Components/Shop/Shop';  // Import ShoppingPage
import CartPage from './Components/Shop/Cart';  // Import CartPage

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Box
          backgroundColor={'#FFF8E1'}
            // marginTop={{ base: '6.5%', sm: '16.5%', md: '6%' }}
            // padding={{ base: '1%', sm: '2%', md: '4%' }}
          >
            <Slidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
              <Route path="/predict" element={<Predict />} />
              <Route path="/diseases" element={<Diseases />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shop" element={<ShoppingPage addToCart={addToCart} />}/>
              <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
              />
            </Routes>
            <Footer />
          </Box>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
