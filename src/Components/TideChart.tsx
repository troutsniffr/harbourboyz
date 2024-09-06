import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import 'chartjs-adapter-date-fns';
import { fetchTideDataForToday, fetchSunriseSunset } from '../assets/apis';

Chart.register(...registerables, annotationPlugin);

const TideChart: React.FC = () => {
  const [tideTimes, setTideTimes] = useState<Date[]>([]);
  const [tideHeights, setTideHeights] = useState<number[]>([]);
  const [sunrise, setSunrise] = useState<Date | null>(null);
  const [sunset, setSunset] = useState<Date | null>(null);
  const currentTime = new Date();

  // Get the start and end of the current day (midnight to midnight)
  const getStartOfDay = () => new Date(currentTime.setHours(0, 0, 0, 0));
  const getEndOfDay = () => new Date(currentTime.setHours(23, 59, 59, 999));

  useEffect(() => {
    const getData = async () => {
      // Fetch Tide Data
      const tideData = await fetchTideDataForToday();
      if (tideData && tideData.length > 0) {
        // Filter for the current day only
        const todayTideData = tideData.filter((item: any) => {
          const tideTime = new Date(item.t);
          return tideTime >= getStartOfDay() && tideTime <= getEndOfDay();
        });

        console.log('Filtered Tide Data:', todayTideData);
        setTideTimes(todayTideData.map((item: any) => new Date(item.t)));
        setTideHeights(todayTideData.map((item: any) => parseFloat(item.v)));
      }

      // Fetch Sunrise and Sunset
      const sunTimes = await fetchSunriseSunset();
      console.log('Processed Sunrise/Sunset:', sunTimes);
      setSunrise(sunTimes.sunrise);
      setSunset(sunTimes.sunset);
    };

    getData();

    // Set a timeout to reload the chart at midnight (to update to the next day)
    const now = new Date();
    const millisUntilMidnight = new Date(now.setHours(24, 0, 0, 0)).getTime() - now.getTime();
    const midnightTimeout = setTimeout(() => {
      getData();
    }, millisUntilMidnight);

    return () => clearTimeout(midnightTimeout); // Clean up the timeout
  }, []);

  if (tideTimes.length === 0 || sunrise === null || sunset === null) {
    return <div>Loading chart data...</div>;
  }

  const data = {
    labels: tideTimes,
    datasets: [
      {
        label: 'Tide Height (ft)',
        data: tideHeights,
        fill: false,
        borderColor: 'teal',
        tension: 0.5,
      },
    ],
  };

  const options: any = {
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: 'hour',
          stepSize: 6,
          tooltipFormat: 'MMM d, h:mm a',
        },
        ticks: {
          source: 'auto',
          autoSkip: true,
          maxRotation: 0,
        },
      },
      y: {
        min: 0,  // Minimum value for the Y-axis
        max: 5,  // Set this to a smaller value if your chart doesn't need to go as high
        beginAtZero: true,
        suggestedMax: 4,
      },
    },
    plugins: {
        annotation: {
          annotations: {
            currentTimeLine: {
              type: 'line' as const,
              borderColor: 'white',
              borderWidth: 2,
              label: {
                display: true,
                content: new Date(currentTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Display the current time
                position: 'start',  // Position the label at the top
              },
              value: currentTime,
              scaleID: 'x',
            },
            sunriseLine: {
              type: 'line' as const,
              borderColor: 'teal',
              borderWidth: 2,
              label: {
                display: true,
                content: 'Sunrise',
                position: 'end',  // Position the label at the bottom
              },
              value: sunrise,
              scaleID: 'x',
            },
            sunsetLine: {
              type: 'line' as const,
              borderColor: 'teal',
              borderWidth: 2,
              label: {
                display: true,
                content: 'Sunset',
                position: 'end',  // Position the label at the bottom
              },
              value: sunset,
              scaleID: 'x',
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TideChart;
