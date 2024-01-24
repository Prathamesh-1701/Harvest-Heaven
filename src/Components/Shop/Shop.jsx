import React from 'react';
import { Box, Text, Image, Button, Grid, GridItem } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Fertilizer A',
    price: 200.99,
    image: 'https://m.media-amazon.com/images/I/51TnqZlvgRL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 2,
    name: 'Fertilizer B',
    price: 250.99,
    image: 'https://tiimg.tistatic.com/fp/1/007/791/iffco-calcium-nitrate-fertilizer-pack-of-1-kg-for-agriculture-use--088.jpg',
  },
  {
    id: 1,
    name: 'Fertilizer A',
    price: 200.99,
    image: 'https://m.media-amazon.com/images/I/51TnqZlvgRL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 2,
    name: 'Fertilizer B',
    price: 250.99,
    image: 'https://tiimg.tistatic.com/fp/1/007/791/iffco-calcium-nitrate-fertilizer-pack-of-1-kg-for-agriculture-use--088.jpg',
  },
  {
    id: 1,
    name: 'Fertilizer A',
    price: 200.99,
    image: 'https://m.media-amazon.com/images/I/51TnqZlvgRL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 2,
    name: 'Fertilizer B',
    price: 250.99,
    image: 'https://tiimg.tistatic.com/fp/1/007/791/iffco-calcium-nitrate-fertilizer-pack-of-1-kg-for-agriculture-use--088.jpg',
  },
  {
    id: 1,
    name: 'Fertilizer A',
    price: 200.99,
    image: 'https://m.media-amazon.com/images/I/51TnqZlvgRL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 2,
    name: 'Fertilizer B',
    price: 250.99,
    image: 'https://tiimg.tistatic.com/fp/1/007/791/iffco-calcium-nitrate-fertilizer-pack-of-1-kg-for-agriculture-use--088.jpg',
  },
  {
    id: 1,
    name: 'Fertilizer A',
    price: 200.99,
    image: 'https://m.media-amazon.com/images/I/51TnqZlvgRL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 2,
    name: 'Fertilizer B',
    price: 250.99,
    image: 'https://tiimg.tistatic.com/fp/1/007/791/iffco-calcium-nitrate-fertilizer-pack-of-1-kg-for-agriculture-use--088.jpg',
  },
  // Add more products as needed
];
const ShoppingPage = ({ addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <Box p={4}>
      <Text fontSize="3xl" mb={4}>
        Medical Fertilizers and Medicines for Crops
      </Text>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {products.map((product) => (
          <GridItem key={product.id}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image height={['150px', '200px']} src={product.image} alt={product.name} />
              <Box p="6">
                <Text fontWeight="bold" fontSize="xl" mb={2}>
                  {product.name}
                </Text>
                <Text>Rs {product.price.toFixed(2)}</Text>
                <Button
                  colorScheme="green"
                  mt={4}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ShoppingPage;