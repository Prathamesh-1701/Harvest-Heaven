import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  ChakraProvider,
} from '@chakra-ui/react';

const bgStyle = {
  // bgGradient='linear(to-r, green.200, pink.500)'
  // backgroundColor: '#61554D',
  backdropFilter: 'blur(0.01px)',
  backgroundImage: `url(https://img.freepik.com/free-photo/brown-soil-background-gardening_53876-133209.jpg?w=1060&t=st=1696231750~exp=1696232350~hmac=3aed6304a09c1a38c427688b05324b197990260aab1ae256397952796cede031)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};


const CropRecommendationForm = () => {
  const [formData, setFormData] = useState({
    Nitrogen: '',
    Phosporus: '',
    Potassium: '',
    Temperature: '',
    Humidity: '',
    Ph: '',
    Rainfall: '',
  });
  console.log(formData)
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/predict/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.result) {
        setResult(data.result);
        console.log(data.result)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ChakraProvider>
    <Box className="container my-3 mt-3"  padding={'3%'} >
        

      <Heading className="text-success" style={bgStyle} bgClip='text' >Crop Recommendation System <span role="img" aria-label="seedling">🌱</span></Heading>

      <form action="/predict/" method="POST" onSubmit={handleSubmit}>
  <div className="row">
    <div className="col-md-4">
      <Text as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' htmlFor="Nitrogen" >Nitrogen:</Text>
      <Input
        border='1px solid #350D0D'
        type="number"
        id="Nitrogen"
        name="Nitrogen"
        placeholder="Enter Nitrogen"
        className="form-control"
        required
        step="0"
        value={formData.Nitrogen}
        onChange={handleChange}
      />
    </div>
    <div className="col-md-4">
      <Text as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' htmlFor="Phosporus">Phosphorus:</Text>
      <Input
        border='1px solid #350D0D'
        type="number"
        id="Phosporus"
        name="Phosporus"
        placeholder="Enter Phosphorus"
        className="form-control"
        required
        step="0"
        value={formData.Phosporus}
        onChange={handleChange}
      />
    </div>
    <div className="col-md-4">
      <Text as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' htmlFor="Potassium">Potassium:</Text>
      <Input
        type="number"
        id="Potassium"
        name="Potassium"
        border='1px solid #350D0D'
        placeholder="Enter Potassium"
        className="form-control"
        required
        step="0"
        value={formData.Potassium}
        onChange={handleChange}
      />
    </div>
  </div>

  <div className="row mt-4">
    <div className="col-md-4">
      <Text as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' htmlFor="Temperature">Temperature:</Text>
      <Input
        type="number"
        step="0.01"
        border='1px solid #350D0D'
        id="Temperature"
        name="Temperature"
        placeholder="Enter Temperature in °C"
        className="form-control"
        required
        value={formData.Temperature}
        onChange={handleChange}
      />
    </div>
    <div className="col-md-4">
      <Text as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' htmlFor="Humidity">Humidity: </Text>
      <Input
        type="number"
        step="0.01"
        id="Humidity"
        name="Humidity"
        border='1px solid #350D0D'
        placeholder="Enter Humidity in %"
        className="form-control"
        required
        value={formData.Humidity}
        onChange={handleChange}
      />
    </div>
    <div className="col-md-4">
      <Text as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' htmlFor="Ph">pH:</Text>
      <Input
        type="number"
        step="0.01"
        id="Ph"
        name="Ph"
        border='1px solid #350D0D'
        placeholder="Enter pH value"
        className="form-control"
        required
        value={formData.Ph}
        onChange={handleChange}
      />
    </div>
  </div>

  <div className="row mt-4">
    <div className="col-md-4">
      <Text as='b' bgClip='text' bgGradient='linear(to-l, #086010, #1BBA9D,#52AE22 )' htmlFor="Rainfall">Rainfall:</Text>
      <Input
        type="number"
        step="0.01"
        id="Rainfall"
        border='1px solid #350D0D'
        name="Rainfall"
        placeholder="Enter Rainfall in mm"
        className="form-control"
        required
        value={formData.Rainfall}
        onChange={handleChange}
      />
    </div>
  </div>

  <div className="row mt-4">
    <div className="col-md-12 text-center">
      <Button type="submit" bgGradient='linear(to-r, #086010, #1BBA9D,#52AE22 )' mt={2} border={'1px solid white'} className="btn btn-primary btn-lg"
        
        color='white'
            _hover={{
              border: '1px solid #52AE22',
              background: 'white',
              // bgGradient:'linear(to-r, #086010, #1BBA9D,#52AE22 )',
              color: '#52AE22'
              // color:'white'
            }}
            >
        Get Recommendation
      </Button>
    </div>
  </div>
</form>

      {result && (
        <Box className="card bg-dark" style={{ width: '20rem', 
        border:'1px solid #52AE22',
        padding:'20px',
        marginBottom: '20px', color: 'black',
         marginTop: '20px', color: 'black' }}
         
         >
          <div className="card-body" >
            <Text fontSize='2xl'className="card-title">Recommendation :</Text>
            <Text as='mark' fontSize='2xl' className="card-text">{result}</Text>
          </div>
        </Box>
      )}
    </Box>
    </ChakraProvider>

  );
};

export default CropRecommendationForm;

