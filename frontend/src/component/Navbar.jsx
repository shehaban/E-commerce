import { Container, Flex, Text, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode } from '../components/ui/color-mode';
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";



const navbar = () => {
  
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <Container maxW={"1140px"} px={4} bg="use" >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
         <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bg="cyan.400"
          bgClip="text"
          display="inline-block" // Add this to ensure the Text component is displayed
        >
          <Link to={"/"} >Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to ={"/create"}>
            <Button>
              <CiSquarePlus text-xl />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
          </Button>
          
        </HStack>
          
      </Flex>
    </Container>
  )
}

export default navbar