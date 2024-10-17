import { Tab, Tabs, TabList, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';





export default function Navbar() {

const navigate = useNavigate()


return (
<>
<Tabs size='lg' align='end' colorScheme='teal'>
  <TabList mb='1em' justifyContent="space-between" display="flex" alignItems="center">
    <Heading size='lg' color='teal'>HBZ</Heading>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

    <Tab _selected={{ color: 'white', bg: 'teal.500' }} color="teal" onClick={() => navigate('/')}>Home</Tab>
    <Tab _selected={{ color: 'white', bg: 'teal.500' }} color="teal" onClick={() => navigate('/north')}>North</Tab>
    <Tab _selected={{ color: 'white', bg: 'teal.500' }} color="teal" onClick={() => navigate('/shhh')}>Central</Tab>
    <Tab _selected={{ color: 'white', bg: 'teal.500' }} color="teal" onClick={() => navigate('/south')}>South</Tab>
    </div>

  </TabList>
 </Tabs>
</>
)
}