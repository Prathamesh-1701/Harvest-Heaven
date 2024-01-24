// CartPage.jsx

import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Box p={4}>
    <Text fontSize="3xl" mb={4}>
      Shopping Cart
    </Text>
    {cartItems.length === 0 ? (
      <>
        <Text>Your cart is empty</Text>
        {/* Render the button only when the cart is not empty */}
        <Link to="/shop">
        <Button colorScheme="teal" mt={4}>
          Buy Now
        </Button>
        </Link>
      </>
    ) : (
        <>
          {cartItems.map((item) => (
            <Box key={item.id} mb={4}>
              <Text fontWeight="bold">{item.name}</Text>
              <Text>Rs {item.price.toFixed(2)}</Text>
              <Button
                colorScheme="red"
                mt={2}
                onClick={() => removeFromCart(item)}
              >
                Remove from Cart
              </Button>
            </Box>
          ))}
          <Text fontWeight="bold" fontSize="xl" mt={4}>
            Total: Rs {calculateTotal().toFixed(2)}
          </Text>
          <Box >
          <Link to="/Checkout">
            <Button colorScheme="teal" mt={4} margin={'10px'}>
              Proceed to Checkout
            </Button>
          </Link>
          <Link to="/Shop">
            <Button colorScheme="teal" mt={4} margin={'10px'}>
              Buy more
            </Button>
          </Link>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartPage;
