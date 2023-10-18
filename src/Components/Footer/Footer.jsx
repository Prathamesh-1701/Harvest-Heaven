import React from 'react';
import { Box, Flex, Heading, Text, Link, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const bgStyle = {
  backdropFilter: 'blur(0.01px)',
  backgroundImage: `url(https://img.freepik.com/free-photo/brown-soil-background-gardening_53876-133209.jpg?w=1060&t=st=1696231750~exp=1696232350~hmac=3aed6304a09c1a38c427688b05324b197990260aab1ae256397952796cede031)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Footer = () => {
  return (
    <Box as="footer" color={'#ffff'} py={10} style={bgStyle}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-around"
        align={{ base: 'center', md: 'inherit' }}
      >
        <Box mb={{ base: 6, md: 0 }}>
          <Heading
            fontSize="xl"
            _hover={{
              bgGradient: 'linear(to-l, #086010, #1BBA9D,#52AE22 )',
              bgClip: 'text',
            }}
          >
            Contact Us
          </Heading>
          <Text _hover={{ bgGradient: 'linear(to-l, #086010, #1BBA9D,#52AE22 )', bgClip: 'text' }}>
            Email: info@example.com
          </Text>
          <Text _hover={{ bgGradient: 'linear(to-l, #086010, #1BBA9D,#52AE22 )', bgClip: 'text' }}>
            Phone: +123-456-7890
          </Text>
        </Box>

        <Box mb={{ base: 6, md: 0 }}>
          <Heading fontSize="xl">Follow Us</Heading>
          <Flex>
            <IconButton
              bgGradient="linear(to-l, #086010, #1BBA9D,#52AE22 )"
              as={Link}
              href="#"
              target="_blank"
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              mr={2}
              _hover={{ bgGradient: 'linear(to-l, #086010, #1BBA9D,#52AE22 )' }}
            />
            <IconButton
              as={Link}
              bgGradient="linear(to-l, #086010, #1BBA9D,#52AE22 )"
              href="#"
              target="_blank"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              mr={2}
              _hover={{ bgGradient: 'linear(to-l, #086010, #1BBA9D,#52AE22 )' }}
            />
            <IconButton
              as={Link}
              bgGradient="linear(to-l, #086010, #1BBA9D,#52AE22 )"
              href="#"
              target="_blank"
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              _hover={{ bgGradient: 'linear(to-l, #086010, #1BBA9D,#52AE22 )' }}
            />
          </Flex>
        </Box>

        <Box mb={{ base: 6, md: 0 }}>
          <Heading fontSize="xl">Quick Links</Heading>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">Services</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
        </Box>
      </Flex>

      <Box mt={6} textAlign="center">
        <Text>&copy; 2023 Your Agriculture Website. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;