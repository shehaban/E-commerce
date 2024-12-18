import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import Homepage from './pages/Homepage'
import Navbar from './component/Navbar.jsx'
import { useColorModeValue } from './components/ui/color-mode.jsx'
function App() {

  return (
      <Box minH={'100vh'} bg = {useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Homepage />} />
          <Route path = "/create" element = {<CreatePage />} />
        </Routes>
      </Box>
  );
}

export default App
