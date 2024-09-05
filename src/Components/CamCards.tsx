import React, { useRef, useEffect } from 'react';
import { hightower, pelican, inlet, sixteenth } from '../assets/cams.tsx';
import { Heading, Text, SimpleGrid, Card, CardBody, CardHeader, CardFooter, Badge, Box, AspectRatio } from '@chakra-ui/react';
import ReactHlsPlayer from 'react-hls-player';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './CamCards.css'


const VideoCard = ({ src, title }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      preload: 'auto',
      // width: 840,
      width: 'auto',
      // height: 464,
      height: 'auto',
      sources: [{ src, type: 'application/x-mpegURL' }],
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [src]);

  return (
    <Card bgGradient="linear(to-t, blue.300, blue.500)">
      <CardHeader>
        <Heading size='md'>{title}</Heading>
      </CardHeader>
      <CardBody>
        <video ref={videoRef} className="video-js vjs-default-skin" />
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>
  );
};

export default function CamCards() {
  return (
    // <SimpleGrid spacing={4} templateColumns="repeat(auto-fill)">
    <SimpleGrid spacing={4} templateColumns="repeat(auto-fill)">
      <Box>
      <Badge borderRadius='full' px='10' colorScheme='teal'>
      Hightower
      </Badge>
      <ReactHlsPlayer
          src={hightower}
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
        />
      </Box>
      <Box>
      <Badge borderRadius='full' px='10' colorScheme='teal'>
      Pelican
      </Badge>
      <ReactHlsPlayer
          src={pelican}
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
        />
      </Box>
      <Box>
      <Badge borderRadius='full' px='10' colorScheme='teal'>
      Inlet
      </Badge>
      <ReactHlsPlayer
          src={inlet}
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
        />
      </Box>
      <Box>
      <Badge borderRadius='full' px='10' colorScheme='teal'>
      16th Street
      </Badge>
      <ReactHlsPlayer
          src={sixteenth}
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
        />
      </Box>
      {/* <Box width="100%" position="relative" pb="56.25%" maxW="100vw" maxH="56.25vw">
        <VideoCard src={pelican} title="Pelican" />
      </Box>
      <Box width="100%" position="relative" pb="56.25%" maxW="100vw" maxH="56.25vw">
        <VideoCard src={inlet} title="Inlet" />
      </Box>
      <Box width="100%" position="relative" pb="56.25%" maxW="100vw" maxH="56.25vw">
        <VideoCard src={sixteenth} title="16th Street" />
      </Box> */}
    </SimpleGrid>
  );
}
