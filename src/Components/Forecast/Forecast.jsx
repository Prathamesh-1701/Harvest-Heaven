// import React, { useState } from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Container,
//   Input,
//   Button,
//   Text,
//   FormControl,
//   FormLabel,
//   Select,
// } from '@chakra-ui/react';

// function Forecast() {
//   const [soilType, setSoilType] = useState('');
//   const [city, setCity] = useState('');
//   const [month, setMonth] = useState('');
//   const [year, setYear] = useState('');
//   const [weather, setWeather] = useState('');
//   const [recommendations, setRecommendations] = useState('');

//   const handleSubmit = async () => {
//     // Make a POST request to your backend to get crop recommendations based on the input
//     const response = await fetch('http://localhost:1000', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ soilType, city, month, year, weather }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       setRecommendations(data.message);
//     } else {
//       // Handle errors if necessary
//     }
//   };

//   return (
//     <ChakraProvider>
//       <Container maxW="md" centerContent>
//         <Box p="4">
//           <Text fontSize="2xl" fontWeight="bold">
//             Crop Recommendations
//           </Text>
//           <FormControl>
//             <FormLabel>Soil Type</FormLabel>
//             <Select
//               placeholder="Select soil type"
//               value={soilType}
//               onChange={(e) => setSoilType(e.target.value)}
//             >
//               <option value="White Soil">White Soil</option>
//               <option value="Alluvial Soil">Alluvial Soil</option>
//               {/* Add more soil types */}
//             </Select>

//             <FormLabel>City</FormLabel>
//             <Select
//               placeholder="Select city"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//             >
//               <option value="Solapur">Solapur</option>
//               <option value="Sangli">Sangli</option>
//               {/* Add more cities */}
//             </Select>

//             <FormLabel>Month</FormLabel>
//             <Select
//               placeholder="Select Month"
//               value={month}
//               onChange={(e) => setMonth(e.target.value)}
//             >
//               <option value="Jan">Jan</option>
//               <option value="Feb">Feb</option>
//               {/* Add more months */}
//             </Select>

//             <FormLabel>Year</FormLabel>
//             <Select
//               placeholder="Select year"
//               value={year}
//               onChange={(e) => setYear(e.target.value)}
//             >
//               <option value="2024">2024</option>
//               <option value="2030">2030</option>
//               {/* Add more years */}
//             </Select>

//             <FormLabel>Weather</FormLabel>
//             <Select
//               placeholder="Select Weather"
//               value={weather}
//               onChange={(e) => setWeather(e.target.value)}
//             >
//               <option value="Summer">Summer</option>
//               <option value="Winter">Winter</option>
//               {/* Add more weather options */}
//             </Select>
//           </FormControl>
//           <Button mt="4" colorScheme="teal" onClick={handleSubmit}>
//             Get Recommendations
//           </Button>
//           {recommendations && (
//             <Box mt="4">
//               <Text fontWeight="bold">Crop Recommendations:</Text>
//               <Text>{recommendations}</Text>
//             </Box>
//           )}
//         </Box>
//       </Container>
//     </ChakraProvider>
//   );
// }

// export default Forecast;




// ------------------------------------------------------------------------    


import React, { useState } from 'react';
import axios from 'axios';
import { Box, Heading, Input, Button, Text, Center, VStack, FormControl, FormLabel } from '@chakra-ui/react';

const Forecast = () => {
  const [soilType, setSoilType] = useState('');
  const [city, setCity] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [weather, setWeather] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleRecommendationRequest = async () => {
    try {
      const response = await axios.post('/api/crop-recommendation', {
        soilType,
        city,
        month,
        year,
        weather,
      });

      if (response.status === 200) {
        setRecommendation(response.data.message);
      } else {
        setRecommendation('Error in recommendation.');
      }
    } catch (error) {
      setRecommendation('Error in recommendation.');
    }
  };

  return (
    <Center>
      <VStack spacing={4}>
        <Heading as="h1">Crop Recommendation</Heading>
        <FormControl>
          <FormLabel>Soil Type</FormLabel>
          <Input type="text" value={soilType} onChange={(e) => setSoilType(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Month</FormLabel>
          <Input type="text" value={month} onChange={(e) => setMonth(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Year</FormLabel>
          <Input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Weather</FormLabel>
          <Input type="text" value={weather} onChange={(e) => setWeather(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" onClick={handleRecommendationRequest}>
          Get Crop Recommendation
        </Button>
        {recommendation && (
          <Box>
            <Heading as="h2" size="md">
              Recommendation:
            </Heading>
            <Text>{recommendation}</Text>
          </Box>
        )}
      </VStack>
    </Center>
  );
};

export default Forecast;

