import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  ChakraProvider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdAccountBox } from 'react-icons/md';
import { FaDisease, FaShoppingCart } from 'react-icons/fa';
import {
  FiHome,
  FiTrendingUp,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';

const LinkItems = [
  { name: 'Home', icon: FiHome, link: '/' },
  { name: 'Forcast', icon: FiTrendingUp, link: '/forecast' },
  { name: 'Shop', icon: FaShoppingCart, link: '/shop' },
  { name: 'Diseases', icon: FaDisease, link: '/diseases' },
  { name: 'About', icon: FiSettings, link: '/about' },
  { name: 'Contact', icon: MdAccountBox, link: '/contact' },
];

const bgStyle = {
  backdropFilter: 'blur(0.01px)',
  backgroundImage: `url(https://plus.unsplash.com/premium_photo-1678344165196-261064eb31e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const bgStyle1 = {
  backdropFilter: 'blur(0.01px)',
  backgroundImage: `url(https://img.freepik.com/free-photo/brown-soil-background-gardening_53876-133209.jpg?w=1060&t=st=1696231750~exp=1696232350~hmac=3aed6304a09c1a38c427688b05324b197990260aab1ae256397952796cede031)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const SidebarContent = ({ onClose }) => {
  return (
    <Box
      style={bgStyle}
      pos="fixed"
      zIndex="1"
      fontFamily="monospace"
      textDecoration="none"
      h="full"
      bgGradient="linear(to-r, #61554D, #3F312D)"
      w={{ base: '80%', md: '300px' }}
      overflowY="auto"
    >
      <Flex h="200px" alignItems="center" mx="16" justifyContent="space-between">
        <Box display={'flex'} flexDirection={'row'} width={'full'}>
          <Text
            bgGradient="linear(to-t, #B2B4B4, #FFFFFF, #FFFFFF)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
          >
            Empowering Sustainable Agriculture Website
          </Text>
          <Box bg={'white'} height={'2%'} marginTop={'89%'} borderRadius={'8%'}>
            <CloseButton display={{ base: 'flex', md: 'flex' }} onClick={onClose} />
          </Box>
        </Box>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, link }) => {
  return (
    <Link to={link}>
      <Box
        color="white"
        _hover={{ bgGradient: 'linear(to-r, #086010, #52AE22)', color: 'white' }}
        textDecoration="none"
      >
        <Flex align="center" p="4" mx="4" borderRadius="lg" role="group" cursor="pointer">
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{ color: 'white' }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </Link>
  );
};

const MobileNav = ({ onOpen }) => {
  return (
    <ChakraProvider>
      <Box margin={'2.5%'} height="100%" width="full" color="white" overflow="hidden" zIndex={10}>
        <Flex
          style={bgStyle1}
          bgGradient="linear(to-t, #61554D, #3F312D)"
          width="full"
          justifyContent="space-between"
        >
          <Box display="flex">
            <IconButton
              bg="white"
              margin="3vh"
              variant="outline"
              onClick={onOpen}
              aria-label="open menu"
              icon={<FiMenu />}
            />
          </Box>

          <Box ml="auto" mr="auto">
            <Text
              bgGradient="linear(to-b, #B2B4B4, #FFFFFF, #52AE22)"
              bgClip="text"
              fontSize="5xl"
              fontWeight="extrabold"
              fontStyle="oblique"
              fontFamily="monospace"
              justifyContent={'center'}
              alignItems={'center'}
            >
              Harvest Heaven
            </Text>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display="flex">
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent bg={'transparent'} boxShadow={'none'}>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 0 }} width={{ base: '0%', md: 'auto' }} />
    </Box>
  );
};

export default Sidebar;
