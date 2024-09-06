// components/BuoyData.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Text, Stat, StatNumber, Spinner, Icon } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';


const BuoyData: React.FC = () => {
  const [swellHeight, setSwellHeight] = useState<string | null>(null);
  const [swellPeriod, setSwellPeriod] = useState<string | null>(null);
  const [swellDirection, setSwellDirection] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBuoyData = async () => {
      try {
        // Fetch wave data from Open-Meteo Marine Weather API
        const response = await axios.get(
          'https://marine-api.open-meteo.com/v1/marine?latitude=28.400&longitude=-80.533&hourly=wave_height,wave_period,wave_direction'
        );
        const data = response.data;

        if (data && data.hourly && data.hourly.wave_height.length > 0) {
          const latestIndex = data.hourly.time.length - 1;
          setSwellHeight((parseFloat(data.hourly.wave_height[latestIndex]) * 3.28084).toFixed(2)); // Convert to feet
          setSwellPeriod(data.hourly.wave_period[latestIndex]);
          setSwellDirection(data.hourly.wave_direction[latestIndex]);
        } else {
          setError('No buoy data available at this time.');
        }
      } catch (err) {
        console.error('Error fetching buoy data:', err);
        setError('Error fetching buoy data');
      }
    };

    fetchBuoyData();
  }, []);

  if (error) {
    return (
      <Box textAlign="center" mt={6}>
        <Text color="red.500" fontSize="lg">{error}</Text>
      </Box>
    );
  }

  if (!swellHeight || !swellPeriod || !swellDirection) {
    return (
      <Box textAlign="center" mt={6}>
        <Spinner size="xl" />
        <Text mt={4}>Loading buoy data...</Text>
      </Box>
    );
  }

  return (

      <Stat mt={4}>
        <Box display="flex" justifyContent="center" alignItems="center" color='teal'>
          <Icon
            as={ArrowUpIcon}
            w={8}
            h={8}
            transform={`rotate(${(Number(swellDirection) + 180) % 360}deg)`}            
            mr={2}
          />
          <StatNumber>{swellDirection} ° {swellHeight}' @ {swellPeriod}</StatNumber>
        </Box>
      </Stat>
  );
};

export default BuoyData;
