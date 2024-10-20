import React, { useRef, useEffect } from 'react';
import {  pier, pierov, loriwilsonn, loriwilsons, hilton, sixteenth } from '../assets/cams.tsx';
import { SimpleGrid, Box, Badge } from '@chakra-ui/react';
import Hls from 'hls.js';
import './CamCards.css';

const VideoCard: React.FC<{ src: string; title: string }> = ({ src, title }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = src;
    }
  }, [src]);

  return (
    <Box width="100%" position="relative" >
      <Badge margin= '2' fontSize='1em' variant='outline' colorScheme='teal'>{title}</Badge>
      <video
        ref={videoRef}
        controls
        width="100%"
        height="100%"
        style={{ objectFit: 'cover', display: 'block' }}
      />
    </Box>
  );
};

export default function NorthCamCard() {
  return (
    <SimpleGrid spacing={25} templateColumns="repeat(auto-fill)">
      <VideoCard src={pier} title="Pier" />
      <VideoCard src={pierov} title="Pier OV" />
      <VideoCard src={loriwilsonn} title="Lori Wilson N" />
      <VideoCard src={loriwilsons} title="Lori Wilson S" />
      <VideoCard src={hilton} title="Hilton" />
      <VideoCard src={sixteenth} title="16th Street" />
    </SimpleGrid>
  );
}
