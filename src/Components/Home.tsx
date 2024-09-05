import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // if you're using navigation features
import { Navigation } from 'swiper/modules';
import './Home.css';




export default function Home() {
  return (
    <Box width="100%" maxWidth="1200px" margin="0 auto" height="auto" marginTop="4em">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        style={{ width: '100%', maxWidth: '100vw', height: 'auto', color: 'white' }}
      >
        <SwiperSlide>
          <img 
            src="src/assets/rags.png" 
            alt="Slide 1" 
            style={{ 
              width: '100%', 
              maxWidth: '100%', 
              height: 'auto', 
              objectFit: 'contain' 
            }} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="src/assets/shirts.png" 
            alt="Slide 2" 
            style={{ 
              width: '100%', 
              maxWidth: '100%', 
              height: 'auto', 
              objectFit: 'contain' 
            }} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="src/assets/rapsnacks.png" 
            alt="Slide 2" 
            style={{ 
              width: '100%', 
              maxWidth: '100%', 
              height: 'auto', 
              objectFit: 'contain' 
            }} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="src/assets/prerico.png" 
            alt="Slide 4" 
            style={{ 
              width: '100%', 
              maxWidth: '100%', 
              height: 'auto', 
              objectFit: 'contain' 
            }} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="src/assets/edog.png" 
            alt="Slide 5" 
            style={{ 
              width: '100%', 
              maxWidth: '100%', 
              height: 'auto', 
              objectFit: 'contain' 
            }} 
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}



// export default function Home() {
//     return (
//       <div style={{ display: 'flex', marginTop: '-4em', height: '100vh' }}>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="100%" height="auto" style={{ maxWidth: '100%', maxHeight: '80vh' }}>
//           <image href="src/assets/rags.png" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
//         </svg>
//       </div>
//     );
//   }
  