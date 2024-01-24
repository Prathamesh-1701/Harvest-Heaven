// Checkout.jsx

import React from 'react';
import { Box, Text, ChakraProvider, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <ChakraProvider>
      <Box>
      <Text>
      Thanks for shopping!!
      </Text>
      
      </Box>
      <Box>
      <Link to="/shop" >
        <Button>
                Shop again
        </Button>
      </Link>
      <Link to="/" >
        <Button>
                Home
        </Button>
      </Link>


      </Box>


    </ChakraProvider>

  );
}

export default Checkout;
