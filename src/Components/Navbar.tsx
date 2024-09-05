import { Tab, Tabs, TabList, TabPanels, TabPanel, Heading } from '@chakra-ui/react';
import CamCards from './CamCards.tsx'
import { useNavigate } from 'react-router-dom';




export default function Navbar() {

const navigate = useNavigate()


return (
<>
<Tabs size='lg' align='end' colorScheme='teal'>
  <TabList mb='1em' justifyContent="space-between" display="flex" alignItems="center">
    <Heading size='lg' color='teal'>Harbour Boyz</Heading>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

    <Tab _selected={{ color: 'white', bg: 'teal.500' }} color="teal" onClick={() => navigate('/')}>Home</Tab>
    <Tab _selected={{ color: 'white', bg: 'teal.500' }} color="teal" onClick={() => navigate('/shhh')}>Cams</Tab>
    </div>

  </TabList>
 </Tabs>
</>
)
}