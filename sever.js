import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Crop Recommendation</h1>
      <div>
        <label>Soil Type: </label>
        <input type="text" value={soilType} onChange={(e) => setSoilType(e.target.value)} />
      </div>
      <div>
        <label>City: </label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div>
        <label>Month: </label>
        <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} />
      </div>
      <div>
        <label>Year: </label>
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <div>
        <label>Weather: </label>
        <input type="text" value={weather} onChange={(e) => setWeather(e.target.value)} />
      </div>
      <button onClick={handleRecommendationRequest}>Get Crop Recommendation</button>
      {recommendation && (
        <div>
          <h2>Recommendation:</h2>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default Forecast;
